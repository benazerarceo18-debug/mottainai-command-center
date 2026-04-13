'use client';

import { PIPELINE_SITES } from '@/lib/data';

const STAGES = ['Identified', 'Evaluated', 'Negotiating', 'Signed', 'Build-out', 'Open'] as const;

const STAGE_STYLE: Record<string, { bg: string; ring: string; glow: string; badge: string; icon: string }> = {
  identified:    { bg: 'bg-gray-400',    ring: 'ring-gray-200',    glow: '',                              badge: 'bg-gray-100 text-gray-600 border-gray-200',       icon: '📍' },
  evaluated:     { bg: 'bg-blue-500',    ring: 'ring-blue-200',    glow: 'shadow-[0_0_12px_rgba(59,130,246,0.4)]',  badge: 'bg-blue-50 text-blue-700 border-blue-200',        icon: '🔍' },
  'mock-awarded':{ bg: 'bg-orange-400',  ring: 'ring-orange-200',  glow: 'shadow-[0_0_12px_rgba(251,146,60,0.4)]', badge: 'bg-orange-50 text-orange-700 border-orange-200',   icon: '📋' },
  negotiating:   { bg: 'bg-amber-500',   ring: 'ring-amber-200',   glow: 'shadow-[0_0_12px_rgba(245,158,11,0.4)]', badge: 'bg-amber-50 text-amber-700 border-amber-200',     icon: '🤝' },
  signed:        { bg: 'bg-emerald-500', ring: 'ring-emerald-200', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '✅' },
  'build-out':   { bg: 'bg-violet-500',  ring: 'ring-violet-200',  glow: 'shadow-[0_0_12px_rgba(139,92,246,0.4)]', badge: 'bg-violet-50 text-violet-700 border-violet-200',   icon: '🏗️' },
  open:          { bg: 'bg-green-600',   ring: 'ring-green-200',   glow: 'shadow-[0_0_12px_rgba(22,163,74,0.4)]',  badge: 'bg-green-50 text-green-700 border-green-200',     icon: '🎉' },
};

function getStageStyle(stage: string) {
  return STAGE_STYLE[stage.toLowerCase()] ?? STAGE_STYLE.identified;
}

export default function PipelineTracker() {
  const stageCounts = STAGES.map((stage) => ({
    stage,
    count: PIPELINE_SITES.filter((s) => {
      const sk = s.stage.toLowerCase();
      const stk = stage.toLowerCase();
      if (stk === 'evaluated') return sk === 'evaluated' || sk === 'mock-awarded';
      return sk === stk;
    }).length,
  }));

  const furthestActive = stageCounts.reduce((max, s, i) => (s.count > 0 ? i : max), 0);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-text-primary">
          Site Pipeline
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gold">{PIPELINE_SITES.length}</span>
          <span className="text-xs text-text-muted uppercase tracking-wider">Total Sites</span>
        </div>
      </div>

      {/* Pipeline visualization */}
      <div className="px-6 pb-6">
        <div className="relative flex items-start justify-between pt-2 pb-4">
          {/* Progress bar background */}
          <div className="absolute left-6 right-6 top-[22px] h-1 bg-gray-100 rounded-full" />
          {/* Progress bar fill */}
          <div
            className="absolute left-6 top-[22px] h-1 rounded-full bg-gradient-to-r from-gray-400 via-blue-500 to-blue-400 transition-all duration-700"
            style={{ width: `${((furthestActive) / (STAGES.length - 1)) * (100 - 8)}%` }}
          />

          {STAGES.map((stage, i) => {
            const sk = stage.toLowerCase();
            const count = stageCounts[i].count;
            const hasActive = count > 0;
            const isPast = i < furthestActive;
            const isCurrent = i === furthestActive && hasActive;
            const style = STAGE_STYLE[sk] ?? STAGE_STYLE.identified;

            return (
              <div key={stage} className="relative z-10 flex flex-col items-center" style={{ minWidth: 80 }}>
                {/* Node */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm
                  transition-all duration-300
                  ${hasActive
                    ? `${style.bg} text-white ring-4 ${style.ring} ${isCurrent ? style.glow : ''}`
                    : 'bg-white border-2 border-gray-200 text-gray-300'
                  }
                `}>
                  {hasActive ? (
                    <span className="text-base">{style.icon}</span>
                  ) : (
                    <span className="text-xs font-bold">{i + 1}</span>
                  )}
                </div>

                {/* Label */}
                <span className={`mt-2 text-xs font-semibold tracking-wide ${
                  hasActive ? 'text-text-primary' : 'text-text-muted'
                }`}>
                  {stage}
                </span>

                {/* Count badge */}
                {hasActive && (
                  <span className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${style.badge}`}>
                    {count} {count === 1 ? 'site' : 'sites'}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sites cards */}
      <div className="border-t border-border bg-gray-50/50 px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PIPELINE_SITES.map((site) => {
            const style = getStageStyle(site.stage);
            const stageLabel = site.stage === 'mock-awarded' ? 'Mock Awarded' : site.stage.charAt(0).toUpperCase() + site.stage.slice(1);
            return (
              <div key={site.id} className="bg-white rounded-lg border border-border p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm text-navy">{site.name}</p>
                    <p className="text-xs text-text-muted">{site.location}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${style.badge}`}>
                    {stageLabel}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-xs font-bold text-text-primary">{site.score !== null ? `${site.score}` : '—'}</p>
                    <p className="text-[9px] text-text-muted uppercase">Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-text-primary">{site.sqm ? `${site.sqm}` : '—'}</p>
                    <p className="text-[9px] text-text-muted uppercase">sqm</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-text-primary">{site.siteClass}</p>
                    <p className="text-[9px] text-text-muted uppercase">Class</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    {site.visited && <span className="text-emerald-500 text-xs" title="Visited">✓ Visit</span>}
                    {site.formDone && <span className="text-emerald-500 text-xs" title="Form done">✓ Form</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
