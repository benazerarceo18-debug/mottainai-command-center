'use client';

const QUARTERS = [
  { label: 'Q4 2025', start: new Date('2025-10-01'), end: new Date('2025-12-31') },
  { label: 'Q1 2026', start: new Date('2026-01-01'), end: new Date('2026-03-31') },
  { label: 'Q2 2026', start: new Date('2026-04-01'), end: new Date('2026-06-30') },
  { label: 'Q3 2026', start: new Date('2026-07-01'), end: new Date('2026-09-30') },
  { label: 'Q4 2026', start: new Date('2026-10-01'), end: new Date('2026-12-31') },
  { label: 'Q1 2027', start: new Date('2027-01-01'), end: new Date('2027-03-31') },
  { label: 'Q2 2027', start: new Date('2027-04-01'), end: new Date('2027-06-30') },
  { label: 'Q3 2027', start: new Date('2027-07-01'), end: new Date('2027-09-30') },
  { label: 'Q4 2027', start: new Date('2027-10-01'), end: new Date('2027-12-31') },
];

const TIMELINE_START = new Date('2025-10-01');
const TIMELINE_END = new Date('2027-12-31');
const TOTAL_DAYS = (TIMELINE_END.getTime() - TIMELINE_START.getTime()) / (1000 * 60 * 60 * 24);
const TODAY = new Date('2026-04-10');

type Status = 'complete' | 'on-track' | 'at-risk' | 'upcoming';

interface Milestone {
  name: string;
  start: Date;
  end: Date;
  status: Status;
}

const MILESTONES: Milestone[] = [
  { name: 'Menu Development',        start: new Date('2026-01-01'), end: new Date('2026-04-30'), status: 'complete'  },
  { name: 'Expansion Playbook V1',   start: new Date('2026-02-01'), end: new Date('2026-06-30'), status: 'on-track'  },
  { name: 'SM MOA Lease Negotiation',start: new Date('2026-04-01'), end: new Date('2026-07-31'), status: 'on-track'  },
  { name: 'Consumer Testing',        start: new Date('2026-07-01'), end: new Date('2026-12-31'), status: 'upcoming'  },
  { name: 'Pilot Store Build-out',   start: new Date('2027-01-01'), end: new Date('2027-06-30'), status: 'upcoming'  },
  { name: 'Pilot Launch',            start: new Date('2027-07-01'), end: new Date('2027-12-31'), status: 'upcoming'  },
];

const STATUS_COLORS: Record<Status, { bar: string; label: string; badge: string }> = {
  complete:   { bar: 'bg-success',         label: 'Complete', badge: 'bg-success/10 text-success'   },
  'on-track': { bar: 'bg-gold',            label: 'On Track', badge: 'bg-gold/10 text-gold'         },
  'at-risk':  { bar: 'bg-warning',         label: 'At Risk',  badge: 'bg-warning/10 text-warning'   },
  upcoming:   { bar: 'bg-text-muted/40',   label: 'Upcoming', badge: 'bg-border text-text-muted'    },
};

function dayOffset(date: Date) {
  return ((date.getTime() - TIMELINE_START.getTime()) / (1000 * 60 * 60 * 24) / TOTAL_DAYS) * 100;
}

function dayWidth(start: Date, end: Date) {
  return ((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) / TOTAL_DAYS) * 100;
}

export default function GanttTimeline() {
  const todayOffset = dayOffset(TODAY);

  return (
    <div className="bg-card rounded-xl border border-border p-6 overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Quarter headers */}
        <div className="flex border-b border-border pb-2 mb-4">
          <div className="w-52 shrink-0" />
          <div className="flex-1 flex">
            {QUARTERS.map((q) => {
              const width = dayWidth(q.start, q.end);
              return (
                <div
                  key={q.label}
                  className="text-xs font-medium text-text-muted text-center border-l border-border/50 first:border-l-0"
                  style={{ width: `${width}%` }}
                >
                  {q.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone rows */}
        <div className="space-y-3">
          {MILESTONES.map((m) => {
            const colors = STATUS_COLORS[m.status];
            const left = dayOffset(m.start);
            const width = dayWidth(m.start, m.end);

            return (
              <div key={m.name} className="flex items-center">
                <div className="w-52 shrink-0 pr-4 flex items-center justify-between">
                  <span className="text-sm text-text-primary font-medium truncate">{m.name}</span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0 ${colors.badge}`}>
                    {colors.label}
                  </span>
                </div>
                <div className="flex-1 relative h-8 bg-bg rounded">
                  {QUARTERS.map((q, i) =>
                    i > 0 ? (
                      <div
                        key={q.label}
                        className="absolute top-0 bottom-0 w-px bg-border/40"
                        style={{ left: `${dayOffset(q.start)}%` }}
                      />
                    ) : null,
                  )}
                  <div
                    className={`absolute top-1 bottom-1 rounded-md ${colors.bar} transition-all`}
                    style={{ left: `${left}%`, width: `${width}%` }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-danger z-10"
                    style={{ left: `${todayOffset}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Today label */}
        <div className="flex mt-2">
          <div className="w-52 shrink-0" />
          <div className="flex-1 relative">
            <div
              className="absolute text-[10px] text-danger font-medium -translate-x-1/2"
              style={{ left: `${todayOffset}%` }}
            >
              Today (Apr 10)
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-6 pt-4 border-t border-border/50">
          {Object.entries(STATUS_COLORS).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-sm ${val.bar}`} />
              <span className="text-xs text-text-muted">{val.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 ml-2">
            <div className="w-4 h-0 border-t-2 border-dashed border-danger" />
            <span className="text-xs text-text-muted">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
