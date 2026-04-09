'use client';

import type { KPICardData } from '@/lib/types';

const statusDotColors: Record<KPICardData['status'], string> = {
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
};

export default function KPICard({ label, value, status, description }: KPICardData) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-2 mt-2">
        <span
          className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: statusDotColors[status] }}
        />
        <span className="text-2xl font-bold text-text-primary">{value}</span>
      </div>
      <p className="text-sm text-text-muted mt-2">{description}</p>
    </div>
  );
}
