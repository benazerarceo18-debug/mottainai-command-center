'use client';

import { PIPELINE_SITES } from '@/lib/data';

const STAGES = ['Identified', 'Evaluated', 'Negotiating', 'Signed', 'Build-out', 'Open'] as const;

const STAGE_COLORS: Record<string, { dot: string; badge: string }> = {
  identified: { dot: 'bg-gray-400', badge: 'bg-gray-100 text-gray-600' },
  evaluated: { dot: 'bg-blue-500', badge: 'bg-blue-50 text-blue-700' },
  negotiating: { dot: 'bg-yellow-500', badge: 'bg-yellow-50 text-yellow-700' },
  signed: { dot: 'bg-green-500', badge: 'bg-green-50 text-green-700' },
  'build-out': { dot: 'bg-purple-500', badge: 'bg-purple-50 text-purple-700' },
  open: { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700' },
};

function stageIndex(stage: string) {
  return STAGES.findIndex((s) => s.toLowerCase() === stage.toLowerCase());
}

export default function PipelineTracker() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2
        className="text-xl font-bold text-text-primary mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Site Pipeline
      </h2>

      {/* Stage bar */}
      <div className="relative flex items-center justify-between mb-8 px-2">
        {/* Connector line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2 mx-6" />

        {STAGES.map((stage, i) => {
          const key = stage.toLowerCase();
          const count = PIPELINE_SITES.filter(
            (s) => s.stage.toLowerCase() === key
          ).length;
          const hasActive = count > 0;
          return (
            <div key={stage} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  hasActive
                    ? `${STAGE_COLORS[key]?.dot ?? 'bg-gray-400'} border-white shadow`
                    : 'bg-bg border-border'
                }`}
              />
              <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
                {stage}
              </span>
              {hasActive && (
                <span className="text-[10px] font-bold text-text-primary">{count}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Sites table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 text-text-muted font-medium">Site</th>
              <th className="text-left py-2 px-3 text-text-muted font-medium">Location</th>
              <th className="text-left py-2 px-3 text-text-muted font-medium">Landlord</th>
              <th className="text-left py-2 px-3 text-text-muted font-medium">Stage</th>
              <th className="text-left py-2 px-3 text-text-muted font-medium">Score</th>
              <th className="text-left py-2 px-3 text-text-muted font-medium">Size</th>
            </tr>
          </thead>
          <tbody>
            {PIPELINE_SITES.map((site) => {
              const colors = STAGE_COLORS[site.stage.toLowerCase()] ?? STAGE_COLORS.identified;
              return (
                <tr
                  key={site.id}
                  className="border-b border-border/50 hover:bg-bg transition-colors"
                >
                  <td className="py-3 px-3 font-medium text-text-primary">{site.name}</td>
                  <td className="py-3 px-3 text-text-secondary">{site.location}</td>
                  <td className="py-3 px-3 text-text-secondary">{site.landlord}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${colors.badge}`}
                    >
                      {site.stage}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-medium text-text-primary">
                    {site.score !== null ? `${site.score}/10` : '\u2014'}
                  </td>
                  <td className="py-3 px-3 text-text-secondary">{site.sqm} sqm</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
