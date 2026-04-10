import RevenueChart from '@/components/charts/RevenueChart';
import StoreGrowthChart from '@/components/charts/StoreGrowthChart';
import SensitivityMatrix from '@/components/charts/SensitivityMatrix';

const unitEconomics = [
  { label: 'Covers/Day', value: '240' },
  { label: 'Avg Check', value: '₱250–450' },
  { label: 'Monthly Revenue', value: '₱2.016M' },
  { label: 'Food Cost %', value: '25%' },
  { label: 'Store EBITDA', value: '37% (₱746K/mo)' },
  { label: 'Capex', value: '₱10–15M' },
];

const scenarios = [
  {
    name: 'Conservative',
    color: 'text-slate-500',
    stores: [2, 4, 7, 10, 14],
    revenue: ['₱48M', '₱97M', '₱168M', '₱240M', '₱336M'],
    y5Ebitda: '₱124M',
    roic: '58%',
    payback: '12 mo',
  },
  {
    name: 'Base',
    color: 'text-[#FB923C]',
    stores: [3, 6, 12, 18, 24],
    revenue: ['₱72M', '₱145M', '₱290M', '₱435M', '₱580M'],
    y5Ebitda: '₱215M',
    roic: '82%',
    payback: '9 mo',
  },
  {
    name: 'Aggressive',
    color: 'text-[#111827]',
    stores: [4, 9, 18, 26, 35],
    revenue: ['₱97M', '₱218M', '₱435M', '₱629M', '₱847M'],
    y5Ebitda: '₱313M',
    roic: '105%',
    payback: '7 mo',
  },
];

export default function FinancialsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1
          className="text-3xl font-bold text-text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Financial Projections
        </h1>
        <p className="text-text-secondary mt-1">
          3-Scenario 5-Year Model | Base: 82% ROIC
        </p>
      </div>

      {/* Unit Economics */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Unit Economics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {unitEconomics.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl border border-border p-5 text-center"
            >
              <p
                className="text-xl font-bold text-text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.value}
              </p>
              <p className="text-xs text-text-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Projections */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Revenue Projections
        </h2>
        <div className="bg-white rounded-xl border border-border p-6">
          <RevenueChart />
        </div>
      </section>

      {/* Store Growth */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Store Growth
        </h2>
        <div className="bg-white rounded-xl border border-border p-6">
          <StoreGrowthChart />
        </div>
      </section>

      {/* 3-Scenario P&L Table */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          3-Scenario P&L Table
        </h2>
        <div className="bg-white rounded-xl border border-border p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 px-3 text-text-muted font-medium">Scenario</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y1 Stores</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y1 Revenue</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y2 Stores</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y2 Revenue</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y3 Stores</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y3 Revenue</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y4 Stores</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y4 Revenue</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y5 Stores</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y5 Revenue</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Y5 EBITDA</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">ROIC</th>
                <th className="text-center py-2 px-3 text-text-muted font-medium">Payback</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s) => (
                <tr
                  key={s.name}
                  className={`border-b border-border/50 ${
                    s.name === 'Base' ? 'bg-[#FB923C]/5' : ''
                  }`}
                >
                  <td className={`py-3 px-3 font-semibold ${s.color}`}>{s.name}</td>
                  {s.stores.map((store, i) => (
                    <td key={`s${i}`} className="py-3 px-3 text-center text-text-primary">
                      {store}
                    </td>
                  ))}
                  {s.revenue.map((rev, i) => (
                    <td key={`r${i}`} className="py-3 px-3 text-center text-text-secondary">
                      {rev}
                    </td>
                  ))}
                  <td className="py-3 px-3 text-center font-medium text-green-600">
                    {s.y5Ebitda}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-[#FB923C]">{s.roic}</td>
                  <td className="py-3 px-3 text-center text-text-muted">{s.payback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sensitivity Matrix */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sensitivity Matrix
        </h2>
        <div className="bg-white rounded-xl border border-border p-6">
          <SensitivityMatrix />
        </div>
      </section>

      {/* Investment Requirements */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Investment Requirements
        </h2>
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  Initial Investment
                </p>
                <p
                  className="text-2xl font-bold text-text-primary mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ₱30–45M
                </p>
                <p className="text-sm text-text-secondary mt-0.5">First 3 stores</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  Per-Store Capex
                </p>
                <p
                  className="text-2xl font-bold text-text-primary mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ₱10–15M
                </p>
                <p className="text-sm text-text-secondary mt-0.5">
                  Inline dining format
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  Cash Flow Breakeven
                </p>
                <p
                  className="text-2xl font-bold text-text-primary mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Q1 2030
                </p>
                <p className="text-sm text-text-secondary mt-0.5">Base scenario</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  Payback Period
                </p>
                <p
                  className="text-2xl font-bold text-text-primary mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  8–10 months
                </p>
                <p className="text-sm text-text-secondary mt-0.5">Per store</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
