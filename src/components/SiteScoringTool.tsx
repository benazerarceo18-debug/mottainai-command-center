'use client';

import { useState } from 'react';

const DIMENSIONS = [
  { key: 'demographics', label: 'Demographics', weight: 0.3, weightLabel: '30%' },
  { key: 'competition', label: 'Competition', weight: 0.25, weightLabel: '25%' },
  { key: 'site', label: 'Site Quality', weight: 0.25, weightLabel: '25%' },
  { key: 'traffic', label: 'Traffic & Access', weight: 0.2, weightLabel: '20%' },
] as const;

type ScoreKey = (typeof DIMENSIONS)[number]['key'];

const SM_MOA_DEFAULTS: Record<ScoreKey, number> = {
  demographics: 9,
  competition: 8,
  site: 9,
  traffic: 10,
};

export default function SiteScoringTool() {
  const [scores, setScores] = useState<Record<ScoreKey, number>>(SM_MOA_DEFAULTS);

  const weightedScore = DIMENSIONS.reduce(
    (sum, d) => sum + scores[d.key] * d.weight,
    0
  );

  const verdict =
    weightedScore >= 7.5
      ? 'STRONG GO'
      : weightedScore >= 5.0
        ? 'MAYBE'
        : 'NO-GO';

  const verdictStyle =
    verdict === 'STRONG GO'
      ? 'bg-green-50 text-green-700 border-green-200'
      : verdict === 'MAYBE'
        ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
        : 'bg-red-50 text-red-700 border-red-200';

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2
        className="text-xl font-bold text-text-primary mb-1"
             >
        Site Scoring Tool
      </h2>
      <p className="text-sm text-text-secondary mb-6">
        Score a prospective site across 4 weighted dimensions (1-10 each).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {DIMENSIONS.map((dim) => (
          <div key={dim.key}>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-text-primary">
                {dim.label}{' '}
                <span className="text-text-muted font-normal">({dim.weightLabel})</span>
              </label>
              <span className="text-lg font-bold text-text-primary tabular-nums w-8 text-right">
                {scores[dim.key]}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={scores[dim.key]}
              onChange={(e) =>
                setScores((prev) => ({
                  ...prev,
                  [dim.key]: Number(e.target.value),
                }))
              }
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-gold"
            />
            <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-bg">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider">Weighted Score</p>
          <p
            className="text-3xl font-bold text-text-primary"
                     >
            {weightedScore.toFixed(1)}
          </p>
        </div>
        <span className={`px-4 py-2 rounded-lg text-sm font-bold border ${verdictStyle}`}>
          {verdict}
        </span>
        <p className="text-xs text-text-muted ml-auto hidden sm:block">
          STRONG GO {'\u2265'}7.5 | MAYBE 5.0-7.4 | NO-GO {'<'}5.0
        </p>
      </div>
    </div>
  );
}
