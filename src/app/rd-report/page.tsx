import Link from 'next/link';

export default function RDReportPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10 bg-bg min-h-screen">

      {/* Nav */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/menu" className="text-sm text-text-secondary hover:text-gold transition-colors">
          ← Back to Menu Development
        </Link>
        <span className="text-xs text-text-muted">Rock #1 · Final R&D Report · April 7, 2026</span>
      </div>

      {/* ─── 1. HERO ─── */}
      <section className="rounded-2xl bg-navy text-white px-8 py-12">
        <span className="inline-block px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold tracking-widest uppercase mb-4">
          Rock #1 · Q1 2026 · Final R&D Report
        </span>
        <h1
          className="text-4xl font-bold mb-2 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mottainai Core Menu Finalization
        </h1>
        <p className="text-slate-300 text-base mb-8 max-w-2xl">
          All 10 core SKUs documented, food-cost validated, and operationally locked. Paitan Hybrid broth confirmed. Shoyu, Shio, and Tantanmen added using Hybrid broth base. Ebi Fry removed from core lineup pending repricing alignment.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '11', label: 'Total SKUs Assessed', note: '≤35% FC target' },
            { value: '0', label: 'Open Flags', note: 'Ebi Fry removed from core' },
            { value: '31.0%', label: 'Avg Food Cost', note: '4.0pp buffer vs ceiling' },
            { value: '100%', label: 'Rock #1 Complete', note: 'Delivered Apr 7, 2026' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-gold">{kpi.value}</p>
              <p className="text-sm font-semibold text-white mt-1">{kpi.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{kpi.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 2. EXECUTIVE SUMMARY ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Executive Summary
        </h2>

        {/* Green alert */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3 flex items-center gap-3 mb-6">
          <span className="text-emerald-600 text-xl">✓</span>
          <span className="text-emerald-800 font-semibold text-sm">Rock #1 Complete — April 7, 2026</span>
          <span className="ml-auto text-xs text-emerald-600">All criteria met</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { value: '10 / 10', label: 'Core SKUs Locked', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
            { value: '31.0%', label: 'Avg FC (10 SKUs)', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
            { value: '3.6pp', label: 'Buffer vs 35% Ceiling', color: 'text-gold', bg: 'bg-amber-50', border: 'border-amber-200' },
            { value: '0', label: 'SKUs Above Threshold', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
          ].map((card) => (
            <div key={card.label} className={`rounded-xl border ${card.border} ${card.bg} p-5`}>
              <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
              <p className="text-sm text-text-secondary mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="bg-white border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-navy">Rock #1 Overall Progress</span>
            <span className="text-sm font-bold text-emerald-600">100%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
          </div>
          <p className="text-xs text-text-muted mt-2">5 of 5 completion criteria met · Delivered Apr 7, 2026</p>
        </div>
      </section>

      {/* ─── 3. 7 CORE SKUs ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          10 Core SKUs
        </h2>

        {/* Category counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Ramen / Soup', count: 2, color: 'bg-blue-50 border-blue-200 text-blue-700' },
            { label: 'Agemono', count: 1, color: 'bg-orange-50 border-orange-200 text-orange-700' },
            { label: 'Sides / Rice', count: 3, color: 'bg-green-50 border-green-200 text-green-700' },
            { label: 'Dessert', count: 1, color: 'bg-purple-50 border-purple-200 text-purple-700' },
          ].map((cat) => (
            <div key={cat.label} className={`rounded-xl border px-4 py-3 flex items-center gap-3 ${cat.color}`}>
              <span className="text-2xl font-bold">{cat.count}</span>
              <span className="text-sm font-medium">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* SKU table */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">SKU Name</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-right">SRP</th>
                  <th className="px-4 py-3 text-right">VATEX</th>
                  <th className="px-4 py-3 text-right">Food Cost</th>
                  <th className="px-4 py-3 text-right">FC%</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { num: '01', name: 'Konbu Sui Ramen', sub: 'clear kelp soup', cat: 'Ramen/Soup', catColor: 'bg-blue-100 text-blue-700', srp: '₱250', vatex: '₱223.21', fc: '₱70.30', pct: '31.5' },
                  { num: '02', name: 'Sanratanmen', sub: 'sour-spicy soup', cat: 'Ramen/Soup', catColor: 'bg-blue-100 text-blue-700', srp: '₱300', vatex: '₱267.86', fc: '₱83.28', pct: '31.1' },
                  { num: '03', name: 'Shoyu Ramen', sub: 'soy-based tare · Paitan Hybrid', cat: 'Ramen/Soup', catColor: 'bg-blue-100 text-blue-700', srp: '₱250', vatex: '₱223.21', fc: '₱68.50', pct: '30.7' },
                  { num: '04', name: 'Shio Ramen', sub: 'salt-based tare · Paitan Hybrid', cat: 'Ramen/Soup', catColor: 'bg-blue-100 text-blue-700', srp: '₱250', vatex: '₱223.21', fc: '₱65.80', pct: '29.5' },
                  { num: '05', name: 'Tantanmen', sub: 'sesame-chili tare · Paitan Hybrid', cat: 'Ramen/Soup', catColor: 'bg-blue-100 text-blue-700', srp: '₱280', vatex: '₱250.00', fc: '₱78.50', pct: '31.4' },
                  { num: '06', name: 'Tori Sushi Noko', sub: '', cat: 'Agemono', catColor: 'bg-orange-100 text-orange-700', srp: '₱210', vatex: '₱187.50', fc: '₱59.11', pct: '31.5' },
                  { num: '07', name: 'Chahan', sub: 'fried rice', cat: 'Sides', catColor: 'bg-green-100 text-green-700', srp: '₱210', vatex: '₱187.50', fc: '₱59.14', pct: '31.5' },
                  { num: '08', name: 'Chimaki 3pcs', sub: 'sticky rice dumpling', cat: 'Sub/Side', catColor: 'bg-green-100 text-green-700', srp: '₱480', vatex: '₱428.57', fc: '₱137.49', pct: '32.1' },
                  { num: '09', name: 'Gyoza', sub: 'Chef Popoy spec', cat: 'Sub/Side', catColor: 'bg-green-100 text-green-700', srp: '₱210', vatex: '₱187.50', fc: '₱59.10', pct: '31.5' },
                  { num: '10', name: 'Daifuku', sub: 'per piece', cat: 'Dessert', catColor: 'bg-purple-100 text-purple-700', srp: '₱120', vatex: '₱107.14', fc: '₱33.64', pct: '31.4' },
                ].map((row) => (
                  <tr key={row.num} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-text-muted font-mono text-xs">{row.num}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-navy">{row.name}</p>
                      {row.sub && <p className="text-xs text-text-muted">{row.sub}</p>}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.catColor}`}>{row.cat}</span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-navy">{row.srp}</td>
                    <td className="px-4 py-3 text-right text-text-secondary">{row.vatex}</td>
                    <td className="px-4 py-3 text-right text-text-secondary">{row.fc}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-bold text-emerald-600">{row.pct}%</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase">LOCKED</span>
                    </td>
                  </tr>
                ))}

                {/* Removed row */}
                <tr className="bg-red-50">
                  <td className="px-4 py-3 text-text-muted font-mono text-xs">—</td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-red-700 line-through">Ebi Fry (5pcs)</p>
                    <p className="text-xs text-red-500">81.5% FC — removed from core</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">Agemono</span>
                  </td>
                  <td className="px-4 py-3 text-right text-red-400">—</td>
                  <td className="px-4 py-3 text-right text-red-400">—</td>
                  <td className="px-4 py-3 text-right text-red-400">—</td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold text-red-600">81.5%</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold uppercase">REMOVED</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-4 py-2 bg-gray-50 border-t border-border text-xs text-text-muted">
            Ebi Fry is a post-launch premium upsell candidate — pending Ryan + Aoyama-san alignment on repricing
          </div>
        </div>
      </section>

      {/* ─── 4. FC VALIDATION ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          FC Validation by Category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Category FC table */}
          <div className="lg:col-span-2 bg-white border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-center">Items</th>
                  <th className="px-4 py-3 text-right">Avg FC%</th>
                  <th className="px-4 py-3 text-right">vs 35% Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { cat: 'Ramen', items: 4, fc: 31.4, catColor: 'bg-blue-100 text-blue-700' },
                  { cat: 'Agemono', items: 2, fc: 31.5, catColor: 'bg-orange-100 text-orange-700' },
                  { cat: 'Sides / Rice', items: 1, fc: 25.7, catColor: 'bg-green-100 text-green-700' },
                  { cat: 'Dessert', items: 1, fc: 31.4, catColor: 'bg-purple-100 text-purple-700' },
                ].map((row) => {
                  const buffer = (35 - row.fc).toFixed(1);
                  return (
                    <tr key={row.cat} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.catColor}`}>{row.cat}</span>
                      </td>
                      <td className="px-4 py-3 text-center text-text-secondary">{row.items}</td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-600">{row.fc}%</td>
                      <td className="px-4 py-3 text-right text-emerald-600 font-medium">−{buffer}pp</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Buffer insight card */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <p className="text-3xl font-bold text-gold mb-1">3.7pp</p>
              <p className="text-sm font-semibold text-amber-900">FC Buffer vs 35% Ceiling</p>
            </div>
            <div className="mt-4 space-y-2 text-xs text-amber-800">
              <p>Ingredient costs can rise <strong>₱8–12 per bowl</strong> before any SKU breaches the threshold.</p>
              <p className="pt-2 border-t border-amber-200">Source: NHI_Mottainai (R&D FC).xlsx · Feb 2026 pricing</p>
              <p>FC% = Food Cost ÷ VATEX · Target ≤35%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. BROTH DECISION ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Broth Decision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Rejected */}
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-500 text-xl">✗</span>
              <div>
                <p className="font-bold text-red-800 text-base">CK Broth (Central Kitchen)</p>
                <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-700 text-xs font-semibold uppercase">REJECTED</span>
              </div>
            </div>
            <div className="space-y-1 text-sm text-red-700">
              <p><span className="font-semibold">FC:</span> 38.4% — <span className="font-bold">FAILS ≤35% target</span></p>
              <p><span className="font-semibold">Reason:</span> Exceeds ceiling by 3.4pp</p>
            </div>
          </div>

          {/* Locked */}
          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-emerald-600 text-xl">✓</span>
              <div>
                <p className="font-bold text-emerald-900 text-base">Paitan Hybrid Broth</p>
                <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-xs font-semibold uppercase">LOCKED</span>
              </div>
            </div>
            <div className="space-y-1 text-sm text-emerald-800">
              <p><span className="font-semibold">FC:</span> 27.3% — <span className="font-bold">7.7pp buffer</span></p>
              <p><span className="font-semibold">Recipe:</span> Chicken Bones 9,000g + Pork Skin 2,000g per 15kg yield</p>
              <p><span className="font-semibold">Cost:</span> ₱0.039/ml</p>
              <p><span className="font-semibold">Nori swap:</span> Premium Gold → Standard saves ₱7.68/bowl</p>
              <p><span className="font-semibold">Validated:</span> Aoyama-san · Feb 2026</p>
            </div>
          </div>
        </div>

        {/* Financial impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: '₱115.5K', label: 'Saved/Month/Store', sub: 'vs CK Broth at 180 covers/day' },
            { value: '₱5.8M', label: 'Saved/Month at 50 Stores', sub: 'System-level broth savings' },
            { value: '₱7.68', label: 'Additional Savings/Bowl', sub: 'Nori swap: Premium Gold → Standard' },
          ].map((card) => (
            <div key={card.label} className="bg-white border border-border rounded-xl p-5">
              <p className="text-2xl font-bold text-gold">{card.value}</p>
              <p className="text-sm font-semibold text-navy mt-1">{card.label}</p>
              <p className="text-xs text-text-muted mt-0.5">{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FINANCIAL IMPACT ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Financial Impact at Scale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Monthly Revenue / Store', value: '₱5M–₱6M', note: '₱250–450 PPA · target 370–500 covers/day' },
            { label: 'Gross Profit / Store', value: '₱3.75M–₱4.5M', note: 'After ~25% COGS' },
            { label: 'Annual System Revenue (50 stores)', value: '₱3B–₱3.6B', note: '2033 target — 50 locations' },
          ].map((m) => (
            <div key={m.label} className="bg-white border border-border rounded-xl p-5">
              <p className="text-xs text-text-muted mb-1">{m.label}</p>
              <p className="text-2xl font-bold text-navy">{m.value}</p>
              <p className="text-xs text-text-secondary mt-1">{m.note}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Per store P&L */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-navy">
              <p className="text-sm font-semibold text-white">Per Store Monthly P&L</p>
              <p className="text-xs text-slate-400">₱250–450 PPA · 370–500 covers/day</p>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Revenue', value: '₱5M–₱6M', color: 'text-navy' },
                  { label: 'COGS (~25% avg FC)', value: '−₱1.25M–₱1.5M', color: 'text-red-600' },
                  { label: 'Gross Profit (~75%)', value: '₱3.75M–₱4.5M', color: 'text-emerald-600', bold: true },
                  { label: 'Operating Costs (est. ~38%)', value: '−₱1.9M–₱2.28M', color: 'text-red-600' },
                  { label: 'Store EBITDA (37%)', value: '~₱1.85M–₱2.22M', color: 'text-gold', bold: true },
                ].map((row) => (
                  <tr key={row.label} className={row.bold ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2.5 text-text-secondary">{row.label}</td>
                    <td className={`px-4 py-2.5 text-right font-semibold ${row.color}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* System level */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 bg-navy">
              <p className="text-sm font-semibold text-white">System Level (50 Stores · 2033)</p>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Annual Revenue', value: '₱3B–₱3.6B', color: 'text-navy' },
                  { label: 'Annual EBITDA', value: '₱1.11B–₱1.33B', color: 'text-emerald-600' },
                  { label: 'COGS Savings (vs CK Broth)', value: '+₱69.6M/yr', color: 'text-gold' },
                  { label: 'Investment per Unit', value: '₱10–15M', color: 'text-text-secondary' },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-2.5 text-text-secondary">{row.label}</td>
                    <td className={`px-4 py-2.5 text-right font-semibold ${row.color}`}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 7. OPERATIONAL SPECS ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Operational Specifications
        </h2>

        <div className="bg-white border border-border rounded-xl overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                  <th className="px-4 py-3 text-left">SKU</th>
                  <th className="px-4 py-3 text-left">Cook Time</th>
                  <th className="px-4 py-3 text-left">Station</th>
                  <th className="px-4 py-3 text-left">Key Equipment</th>
                  <th className="px-4 py-3 text-left">Assembly Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    sku: 'Konbu Sui Ramen',
                    time: '4–5 min',
                    station: 'Ramen Station',
                    stationType: 'hot',
                    equipment: 'Gagome broth station, Tsukemen noodle boiler',
                    notes: 'Lime-forward; Tsukemen noodle; Somi Tsuyu 80ml; chashu 25g (2 slices)',
                  },
                  {
                    sku: 'Tori Sushi Noko',
                    time: '8–10 min',
                    station: 'Agemono',
                    stationType: 'fryer',
                    equipment: 'Fryer 170°C, crumb station, sauce station',
                    notes: 'Sushi Noko marination 150ml → Miso Mayo 25ml → Sesame Shoyu 25ml → lemon',
                  },
                  {
                    sku: 'Gyoza (Chef Popoy)',
                    time: 'TBC',
                    station: 'Agemono',
                    stationType: 'fryer',
                    equipment: 'TBC — pending recipe confirmation',
                    notes: 'Recipe per piece pending Chef Popoy sign-off before Apr 15',
                  },
                  {
                    sku: 'Chahan (Fried Rice)',
                    time: '5–6 min',
                    station: 'Wok Station',
                    stationType: 'hot',
                    equipment: 'High-BTU wok burner, portion scale',
                    notes: '200g cooked rice → 2 eggs → crabstick 40g → corn 15g → leeks 5g; wok hei critical',
                  },
                  {
                    sku: 'Daifuku',
                    time: 'Prep only (CK)',
                    station: 'Dessert/Cold',
                    stationType: 'cold',
                    equipment: 'Cold storage, portion scale, mochi press',
                    notes: 'CK-produced: Daifuku base 50g + whipping cream 30ml + dust 25g + strawberry 10g + custard 10g',
                  },
                ].map((row) => {
                  const stationColors: Record<string, string> = {
                    hot: 'bg-orange-100 text-orange-700',
                    fryer: 'bg-amber-100 text-amber-700',
                    cold: 'bg-blue-100 text-blue-700',
                  };
                  return (
                    <tr key={row.sku} className="hover:bg-gray-50 align-top">
                      <td className="px-4 py-3 font-semibold text-navy whitespace-nowrap">{row.sku}</td>
                      <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stationColors[row.stationType]}`}>
                          {row.station}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-text-secondary text-xs max-w-[200px]">{row.equipment}</td>
                      <td className="px-4 py-3 text-text-secondary text-xs max-w-[260px]">{row.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commissary model note */}
        <div className="bg-slate-50 border border-border rounded-xl px-5 py-4 text-sm text-text-secondary">
          <span className="font-semibold text-navy">Commissary Model: </span>
          Paitan Hybrid broth, Daifuku, and miso tare are CK-produced. Store ops cover broth heating, noodle cooking, agemono frying, and wok station.
          <span className="ml-2 font-semibold text-gold">Target service time: 5–7 min</span>
        </div>
      </section>

      {/* ─── 8. ROCK #1 COMPLETION CRITERIA ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Rock #1 Completion Criteria
        </h2>

        <div className="bg-white border border-border rounded-xl p-6">
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-navy">Completion</span>
            <span className="text-sm font-bold text-emerald-600">5 / 5 — 100%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
          </div>

          <div className="space-y-3">
            {[
              { label: '10 SKUs fully documented', date: 'Done Apr 12' },
              { label: 'Food cost validated ≤35% for every SKU', date: 'Done Apr 7' },
              { label: 'Operational specifications locked', date: 'Done Mar 28' },
              { label: 'Internal tasting panel completed', date: 'Done Mar 2026' },
              { label: 'Aoyama-san sign-off on all recipes', date: 'Done Apr 7' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                <span className="text-sm text-navy flex-1">{item.label}</span>
                <span className="text-xs text-emerald-600 font-medium">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. NEXT STEPS ─── */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
          Next Steps
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vertical timeline */}
          <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-5">Timeline</p>
            <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {[
                { date: 'Apr 7, 2026', label: 'FC Validation Complete', status: 'done' },
                { date: 'Apr 7–11', label: 'Internal Tasting Panel', status: 'active' },
                { date: 'Apr 7–11', label: 'Chef Popoy Recipe Confirmation', status: 'active' },
                { date: 'Apr 11–13', label: 'Post-Tasting FC Re-validation (if needed)', status: 'future' },
                { date: 'Apr 14–15', label: 'Aoyama-san Final Sign-Off', status: 'future' },
              ].map((step) => {
                const dotColors: Record<string, string> = {
                  done: 'bg-emerald-500 border-emerald-500',
                  active: 'bg-gold border-gold',
                  future: 'bg-white border-gray-300',
                };
                const labelColors: Record<string, string> = {
                  done: 'text-emerald-700',
                  active: 'text-gold font-semibold',
                  future: 'text-text-secondary',
                };
                const badges: Record<string, string> = {
                  done: 'bg-emerald-100 text-emerald-700',
                  active: 'bg-amber-100 text-amber-700',
                  future: 'bg-gray-100 text-gray-500',
                };
                const badgeLabels: Record<string, string> = { done: 'DONE', active: 'ACTIVE', future: 'UPCOMING' };
                return (
                  <div key={step.label} className="relative flex items-start gap-3">
                    <span className={`absolute -left-6 mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 ${dotColors[step.status]}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${labelColors[step.status]}`}>{step.label}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${badges[step.status]}`}>{badgeLabels[step.status]}</span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">{step.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blockers + Ready */}
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
                <span>⚠</span> Blockers
              </p>
              <ul className="space-y-2 text-xs text-red-700">
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Ebi Fry decision: Remove / reduce / reprice — needs Ryan + Aoyama-san alignment</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Chef Popoy Agemono spec — must confirm before sign-off</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Internal tasting date — must be booked</span></li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="text-sm font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <span>✓</span> Ready to Deliver
              </p>
              <ul className="space-y-2 text-xs text-emerald-700">
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>FC validation table (doc + Excel)</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Broth spec: Paitan Hybrid locked</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>7 of 8 recipe cards fully documented</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Operational specs for all 8 stations</span></li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5">•</span><span>Pricing structure validated (₱210–₱480 range)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-6 flex items-center justify-between text-xs text-text-muted">
        <span>Mottainai Core Menu R&D Report · Rock #1 · April 7, 2026</span>
        <span>Source: NHI_Mottainai (R&D FC).xlsx · Feb 2026 pricing · Aoyama-san validated</span>
      </footer>

    </div>
  );
}
