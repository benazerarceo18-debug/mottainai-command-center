'use client';

interface RockData {
  number: number;
  title: string;
  status: string;
  statusColor: string;
  borderColor: string;
  barColor: string;
  owner: string;
  target: string;
  progress: number;
  milestones: string[];
}

const ROCKS: RockData[] = [
  {
    number: 1,
    title: 'Mottainai Core Menu',
    status: 'COMPLETE',
    statusColor: 'bg-success/10 text-success',
    borderColor: 'border-success/30',
    barColor: 'bg-success',
    owner: 'Benz + Aoyama-san',
    target: 'Apr 2026',
    progress: 100,
    milestones: [
      '10 SKUs locked',
      'FC validated at ≤35%',
      'Recipe documentation complete',
    ],
  },
  {
    number: 2,
    title: 'Expansion Playbook V1',
    status: 'COMPLETE',
    statusColor: 'bg-success/10 text-success',
    borderColor: 'border-success/30',
    barColor: 'bg-success',
    owner: 'Benz + BDSP Team',
    target: 'Apr 2026',
    progress: 100,
    milestones: [
      'All 8 appendices finalized',
      'SM MOA scored 9.0/10',
      'Board-ready document',
    ],
  },
];

export default function RockCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ROCKS.map((rock) => (
        <div
          key={rock.number}
          className={`bg-card rounded-xl border-2 ${rock.borderColor} shadow-sm p-6`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Rock #{rock.number} — {rock.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${rock.statusColor}`}>
              {rock.status}
            </span>
          </div>

          {/* Meta */}
          <div className="flex gap-6 mb-4 text-sm">
            <div>
              <span className="text-text-muted">Owner:</span>{' '}
              <span className="text-text-primary font-medium">{rock.owner}</span>
            </div>
            <div>
              <span className="text-text-muted">Target:</span>{' '}
              <span className="text-text-primary font-medium">{rock.target}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-text-muted">Progress</span>
              <span className="text-xs font-semibold text-text-primary">{rock.progress}%</span>
            </div>
            <div className="h-2.5 bg-border rounded-full overflow-hidden">
              <div
                className={`h-full ${rock.barColor} rounded-full transition-all`}
                style={{ width: `${rock.progress}%` }}
              />
            </div>
          </div>

          {/* Key milestones */}
          <div>
            <span className="text-xs font-medium text-text-muted uppercase tracking-wide">Key Milestones</span>
            <ul className="mt-2 space-y-1.5">
              {rock.milestones.map((ms) => (
                <li key={ms} className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {ms}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
