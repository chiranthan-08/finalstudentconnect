'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, X, Lock, CreditCard, Smartphone, Info } from 'lucide-react';

interface RazorpaySimulatorModalProps {
  isOpen: boolean;
  orderData: any;
  options: any;
  onClose: () => void;
  onSuccess: () => void;
  loading: boolean;
}

export function RazorpaySimulatorModal({
  isOpen,
  orderData,
  options,
  onClose,
  onSuccess,
  loading,
}: RazorpaySimulatorModalProps) {
  if (!isOpen || !orderData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100">
        
        {/* Razorpay Brand Header */}
        <div className="bg-[#0c2340] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#002f6c] border border-blue-400/30 flex items-center justify-center font-black text-sm text-cyan-300">
              ₹
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm tracking-tight text-white">Razorpay Checkout</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  Test Sandbox
                </span>
              </div>
              <span className="text-[11px] text-slate-300 block">Student Connect Karnataka</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Order Details Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 px-5 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Payable Amount</span>
            <span className="font-extrabold text-base text-emerald-600 dark:text-emerald-400">
              ₹{orderData.amountINR || (orderData.amount / 100)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Order Reference</span>
            <span className="font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
              {orderData.orderId}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Razorpay Gateway Ready</span>
              <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
                Connect your live or test credentials in <code className="bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded text-[10px]">.env.local</code> (or provide them in chat) to launch official Razorpay standard popup with live UPI, GPay, and Cards.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              Simulate Instant Test Payment:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={onSuccess}
                disabled={loading}
                className="p-3 rounded-xl border border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all font-bold flex flex-col items-center gap-1 text-center"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>UPI (GPay / PhonePe)</span>
                <span className="text-[9px] text-emerald-500 font-normal">Simulate Success</span>
              </button>

              <button
                type="button"
                onClick={onSuccess}
                disabled={loading}
                className="p-3 rounded-xl border border-blue-500/50 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all font-bold flex flex-col items-center gap-1 text-center"
              >
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>Debit / Credit Card</span>
                <span className="text-[9px] text-blue-500 font-normal">Simulate Success</span>
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>256-Bit SSL Encrypted Escrow</span>
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>PCI-DSS Compliant</span>
            </span>
          </div>
        </div>

        {/* Footer Button */}
        <div className="bg-slate-50 dark:bg-slate-950 px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSuccess}
            disabled={loading}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all flex items-center gap-1.5"
          >
            {loading ? (
              <span>Verifying Signature...</span>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Confirm Payment (₹{orderData.amountINR || (orderData.amount / 100)})</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
