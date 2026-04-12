'use client';

type RACIValue = 'R' | 'A' | 'C' | 'I' | '';

interface RACIRow {
  deliverable: string;
  values: Record<string, RACIValue>;
}

const ROLES = ['Benz', 'Aoyama-san', 'Ryan (CEO)', 'Abbey (Marketing)', 'Jeremi (Projects)', 'HR'];

const ROWS: RACIRow[] = [
  {
    deliverable: 'Menu Lock',
    values: { Benz: 'A', 'Aoyama-san': 'R', 'Ryan (CEO)': 'I', 'Abbey (Marketing)': 'I', 'Jeremi (Projects)': 'C', HR: '' },
  },
  {
    deliverable: 'Site Evaluation',
    values: { Benz: 'R', 'Aoyama-san': 'C', 'Ryan (CEO)': 'A', 'Abbey (Marketing)': 'I', 'Jeremi (Projects)': 'C', HR: '' },
  },
  {
    deliverable: 'Lease Negotiation',
    values: { Benz: 'C', 'Aoyama-san': 'I', 'Ryan (CEO)': 'R', 'Abbey (Marketing)': 'I', 'Jeremi (Projects)': 'I', HR: '' },
  },
  {
    deliverable: 'Store Design',
    values: { Benz: 'R', 'Aoyama-san': 'C', 'Ryan (CEO)': 'A', 'Abbey (Marketing)': 'C', 'Jeremi (Projects)': 'I', HR: '' },
  },
  {
    deliverable: 'Operations Setup',
    values: { Benz: 'R', 'Aoyama-san': 'C', 'Ryan (CEO)': 'A', 'Abbey (Marketing)': 'I', 'Jeremi (Projects)': 'R', HR: 'C' },
  },
  {
    deliverable: 'Marketing Launch',
    values: { Benz: 'A', 'Aoyama-san': 'I', 'Ryan (CEO)': 'I', 'Abbey (Marketing)': 'R', 'Jeremi (Projects)': 'C', HR: 'I' },
  },
  {
    deliverable: 'Hiring & Training',
    values: { Benz: 'C', 'Aoyama-san': 'C', 'Ryan (CEO)': 'A', 'Abbey (Marketing)': 'I', 'Jeremi (Projects)': 'I', HR: 'R' },
  },
];

const CELL_STYLES: Record<RACIValue, string> = {
  R: 'bg-gold/15 text-gold font-bold',
  A: 'bg-navy text-white font-bold',
  C: 'bg-info/10 text-info font-medium',
  I: 'bg-border/60 text-text-muted font-medium',
  '': '',
};

export default function RACIMatrix() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-3 px-3 text-text-muted font-medium">Deliverable</th>
            {ROLES.map((role) => (
              <th key={role} className="text-center py-3 px-2 text-text-muted font-medium whitespace-nowrap">
                {role}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.deliverable} className="border-b border-border/50 hover:bg-bg transition-colors">
              <td className="py-3 px-3 font-medium text-text-primary">{row.deliverable}</td>
              {ROLES.map((role) => {
                const val = row.values[role] || '';
                return (
                  <td key={role} className="py-3 px-2 text-center">
                    {val && (
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs ${CELL_STYLES[val]}`}>
                        {val}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gold/15 text-gold text-xs font-bold">R</span>
          <span className="text-xs text-text-muted">Responsible</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-navy text-white text-xs font-bold">A</span>
          <span className="text-xs text-text-muted">Accountable</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-info/10 text-info text-xs font-medium">C</span>
          <span className="text-xs text-text-muted">Consulted</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-border/60 text-text-muted text-xs font-medium">I</span>
          <span className="text-xs text-text-muted">Informed</span>
        </div>
      </div>
    </div>
  );
}
