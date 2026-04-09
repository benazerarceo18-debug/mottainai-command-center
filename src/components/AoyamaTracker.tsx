'use client';

interface Phase {
  id: number;
  title: string;
  period: string;
  status: 'complete' | 'in-progress' | 'upcoming';
}

const phases: Phase[] = [
  { id: 1, title: 'Recipe Foundation', period: 'Jan–Feb 2026', status: 'complete' },
  { id: 2, title: 'Optimization & Testing', period: 'Mar–Apr 2026', status: 'complete' },
  { id: 3, title: 'Commissary Scale-up', period: 'May–Jul 2026', status: 'in-progress' },
  { id: 4, title: 'Training & Handover', period: 'Aug–Sep 2026', status: 'upcoming' },
];

const statusConfig = {
  complete: { bg: 'bg-emerald-500', text: 'text-white', label: 'COMPLETE' },
  'in-progress': { bg: 'bg-[#c9a227]', text: 'text-white', label: 'IN PROGRESS' },
  upcoming: { bg: 'bg-gray-300', text: 'text-gray-600', label: 'UPCOMING' },
};

export default function AoyamaTracker() {
  return (
    <div>
      {/* Horizontal timeline */}
      <div className="flex items-stretch gap-2">
        {phases.map((phase) => {
          const cfg = statusConfig[phase.status];
          return (
            <div
              key={phase.id}
              className={`flex-1 rounded-lg p-4 ${cfg.bg} ${cfg.text} min-h-[120px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-xs font-semibold opacity-80 mb-1">
                  Phase {phase.id}
                </div>
                <div className="text-sm font-bold leading-tight">
                  {phase.title}
                </div>
                <div className="text-xs mt-1 opacity-80">{phase.period}</div>
              </div>
              <div className="mt-3">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${
                    phase.status === 'complete'
                      ? 'bg-white/20'
                      : phase.status === 'in-progress'
                        ? 'bg-white/20'
                        : 'bg-gray-400/30'
                  }`}
                >
                  {cfg.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Target + note */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <p className="text-gray-500 italic">
          Aoyama-san = External Consultant (not employee)
        </p>
        <p className="text-gray-700 font-medium">
          Target completion:{' '}
          <span className="font-bold text-[#1a1a2e]">Sep 30, 2026</span>
        </p>
      </div>
    </div>
  );
}
