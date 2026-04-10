'use client';

const checks = [250, 300, 350, 400, 450];
const covers = [200, 250, 300, 350, 400, 450];

function cellColor(revenue: number) {
  if (revenue < 2_000_000)  return 'bg-red-100 text-red-800';
  if (revenue < 3_500_000)  return 'bg-yellow-100 text-yellow-800';
  if (revenue < 5_000_000)  return 'bg-green-100 text-green-800';
  if (revenue <= 6_000_000) return 'bg-emerald-200 text-emerald-900 font-bold';
  return 'bg-emerald-300 text-emerald-900 font-bold';
}

function format(revenue: number) {
  return `₱${(revenue / 1_000_000).toFixed(1)}M`;
}

export default function SensitivityMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-3 text-left text-text-muted font-medium border-b-2 border-border">
              Avg Check \ Covers/Day
            </th>
            {covers.map((c) => (
              <th
                key={c}
                className="py-2 px-3 text-center text-text-muted font-medium border-b-2 border-border"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {checks.map((check) => (
            <tr key={check} className="border-b border-border/50">
              <td className="py-2 px-3 font-semibold text-text-primary">₱{check}</td>
              {covers.map((cover) => {
                const revenue = check * cover * 30;
                const isTarget = revenue >= 5_000_000 && revenue <= 6_000_000;
                return (
                  <td
                    key={cover}
                    className={`py-2 px-3 text-center rounded ${cellColor(revenue)} ${
                      isTarget ? 'ring-2 ring-emerald-500 ring-offset-1' : ''
                    }`}
                  >
                    {format(revenue)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-wrap gap-4 mt-3 text-xs text-text-muted">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-100 inline-block" />{'<'}₱2M</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-yellow-100 inline-block" />₱2M–₱3.5M</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-green-100 inline-block" />₱3.5M–₱5M</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-200 inline-block" />₱5M–₱6M · Target Zone</span>
      </div>
    </div>
  );
}
