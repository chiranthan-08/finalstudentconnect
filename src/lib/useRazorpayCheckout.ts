'use client';

import { useState, useCallback } from 'react';

export interface CheckoutOptions {
  plan: string;
  planName: string;
  amountINR: number;
  itemType?: 'subscription' | 'course' | 'mentor_session';
  itemId?: string;
  user?: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
  } | null;
  onSuccess?: (paymentResult: any) => void;
  onError?: (error: any) => void;
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as any).Razorpay) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function useRazorpayCheckout() {
  const [loading, setLoading] = useState(false);
  const [simulatedModal, setSimulatedModal] = useState<{
    isOpen: boolean;
    orderData: any;
    options: CheckoutOptions;
  } | null>(null);

  const initiatePayment = useCallback(async (options: CheckoutOptions) => {
    setLoading(true);

    try {
      // 1. Create order on backend
      const res = await fetch('/api/payments/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: options.plan,
          planName: options.planName,
          amountINR: options.amountINR,
          itemType: options.itemType,
          itemId: options.itemId,
          guestUser: options.user,
        }),
      });

      const orderData = await res.json();
      if (!orderData.success) {
        throw new Error(orderData.message || 'Failed to initialize Razorpay order');
      }

      // If Razorpay keys are not yet configured or isSandbox mode is active
      const hasLiveScript = await loadRazorpayScript();
      const hasValidKey = orderData.keyId && !orderData.keyId.includes('placeholder');

      if (!hasValidKey || !hasLiveScript) {
        // Open interactive developer simulated checkout
        setSimulatedModal({
          isOpen: true,
          orderData,
          options,
        });
        setLoading(false);
        return;
      }

      // 2. Launch official Razorpay standard checkout
      const razorpayOptions = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Student Connect Karnataka',
        description: `${options.planName} • Karnataka Engineering Ecosystem`,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&q=80',
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch('/api/payments/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: options.user?.id,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              options.onSuccess?.(verifyData);
            } else {
              options.onError?.(new Error(verifyData.message || 'Signature verification failed'));
            }
          } catch (err: any) {
            options.onError?.(err);
          }
        },
        prefill: {
          name: options.user?.name || 'Engineering Student',
          email: options.user?.email || 'student@rvce.edu.in',
          contact: options.user?.phone || '9876543210',
        },
        notes: {
          platform: 'StudentConnect_Karnataka',
          plan: options.plan,
        },
        theme: {
          color: '#059669', // Emerald brand theme
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzpInstance = new (window as any).Razorpay(razorpayOptions);
      rzpInstance.on('payment.failed', function (response: any) {
        options.onError?.(new Error(response.error?.description || 'Payment failed'));
      });
      rzpInstance.open();
    } catch (err: any) {
      console.error('[Razorpay Initiation Error]:', err);
      options.onError?.(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSimulatedSuccess = async () => {
    if (!simulatedModal) return;
    setLoading(true);
    try {
      const mockPaymentId = `pay_sim_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      const verifyRes = await fetch('/api/payments/razorpay/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: simulatedModal.orderData.orderId,
          razorpay_payment_id: mockPaymentId,
          razorpay_signature: 'simulated_valid_signature',
          userId: simulatedModal.options.user?.id,
        }),
      });

      const verifyData = await verifyRes.json();
      if (verifyData.success) {
        simulatedModal.options.onSuccess?.(verifyData);
      } else {
        simulatedModal.options.onError?.(new Error(verifyData.message));
      }
    } catch (err: any) {
      simulatedModal.options.onError?.(err);
    } finally {
      setLoading(false);
      setSimulatedModal(null);
    }
  };

  const closeSimulatedModal = () => {
    setSimulatedModal(null);
    setLoading(false);
  };

  return {
    initiatePayment,
    loading,
    simulatedModal,
    handleSimulatedSuccess,
    closeSimulatedModal,
  };
}
