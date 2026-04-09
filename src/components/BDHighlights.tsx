'use client';

import type { BDHighlight } from '@/lib/types';

const categoryColors: Record<BDHighlight['category'], string> = {
  deal: '#3b82f6',
  brand: '#8b5cf6',
  expansion: '#22c55e',
  financial: '#c9a227',
  milestone: '#1a1a2e',
};

const categoryLabels: Record<BDHighlight['category'], string> = {
  deal: 'Deal',
  brand: 'Brand',
  expansion: 'Expansion',
  financial: 'Financial',
  milestone: 'Milestone',
};

export default function BDHighlights({ highlights }: { highlights: BDHighlight[] }) {
  const visible = highlights.slice(0, 5);

  return (
    <div className="relative pl-6">
      {/* Gold connecting line */}
      <div
        className="absolute left-[7px] top-2 bottom-2 w-0.5"
        style={{ backgroundColor: '#c9a227' }}
      />

      <div className="space-y-6">
        {visible.map((item) => {
          const color = categoryColors[item.category];
          return (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div
                className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: color }}
              />

              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-text-muted">{item.date}</span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  {categoryLabels[item.category]}
                </span>
              </div>
              <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
              <p className="text-sm text-text-muted mt-1">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
