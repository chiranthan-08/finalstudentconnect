import React, { Suspense } from 'react';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityContext';
import { AccessibilityShell } from '@/components/accessibility/AccessibilityShell';

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccessibilityProvider>
      <Suspense fallback={<div className="p-8 text-center text-sm text-slate-400">Loading StudentConnect Accessibility Hub...</div>}>
        <AccessibilityShell>{children}</AccessibilityShell>
      </Suspense>
    </AccessibilityProvider>
  );
}
