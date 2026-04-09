'use client';

const checks = [240, 260, 280, 300, 320];
const covers = [180, 210, 240, 270, 300];
const BASE_CHECK = 280;
const BASE_COVERS = 240;

function cellColor(revenue: number) {
  if (revenue < 1_500_000) return 'bg-red-100 text-red-800';
  if (revenue <= 2_000_000) return 'bg-yellow-100 text-yellow-800';
  return 'bg-green-100 text-green-800';
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
                const isBase = check === BASE_CHECK && cover === BASE_COVERS;
                return (
                  <td
                    key={cover}
                    className={`py-2 px-3 text-center font-medium rounded ${cellColor(revenue)} ${
                      isBase ? 'ring-2 ring-[#c9a227] ring-offset-1' : ''
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
      <p className="text-xs text-text-muted mt-2">
        Base case highlighted: ₱280 × 240 covers × 30 days = ₱2.016M/mo
      </p>
    </div>
  );
}
