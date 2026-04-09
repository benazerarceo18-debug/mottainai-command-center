import Link from 'next/link';

const playfairStyle = { fontFamily: "'Playfair Display', 'Noto Serif JP', serif" };

export default function SitesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 style={playfairStyle} className="text-2xl font-bold text-[#111827]">Tested Locations</h1>
          <p className="text-sm text-gray-500 mt-1">SMDC Site Pipeline — 2 Award Notices Signed</p>
        </div>
        <Link href="/expansion" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">
          ← Expansion Playbook
        </Link>
      </div>

      {/* Status Bar */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '2', label: 'Award Notices Signed' },
          { value: 'Feb–May 2026', label: 'Lease Start Window' },
          { value: 'SMDC', label: 'Primary Landlord' },
        ].map((tile) => (
          <div key={tile.label} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div className="text-2xl font-bold text-[#111827]" style={playfairStyle}>{tile.value}</div>
            <div className="text-xs text-gray-500 mt-1">{tile.label}</div>
          </div>
        ))}
      </div>

      {/* ───────────────────────────────────────
          SITE 1: SMDC Ice Tower
      ─────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">

        {/* Site header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 style={playfairStyle} className="text-xl font-bold text-[#111827]">SMDC Ice Tower</h2>
              <span className="bg-[#111827] text-[#F97316] text-xs font-semibold px-3 py-1 rounded-full tracking-wide">NHI ENTRY POINT</span>
            </div>
            <p className="text-sm text-gray-500">SM MOA Complex, Pasay City</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Award Notice Signed ✓</span>
        </div>

        {/* Site Overview */}
        <div>
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Site Overview</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Address', 'SMDC Ice Tower, Sunrise Drive corner EDSA Extension, MOA Complex, Pasay City'],
                  ['Trade Name', 'Ramen Yushoken'],
                  ['Landlord', 'SM Development Corporation (SMDC)'],
                  ['Floor Area', '221.74 sqm'],
                  ['Lease Term', 'May 15, 2026 – April 30, 2029 (3 years)'],
                  ['Status', 'Award Notice Signed — Feb 13, 2026'],
                ].map(([field, value], i) => (
                  <tr key={field} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 font-medium text-gray-600 w-48">{field}</td>
                    <td className="py-2 px-4 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Field Evaluation Scores */}
        <div>
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Field Evaluation Scores</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#111827] text-white">
                  <th className="py-2 px-4 text-left font-medium">Assessment Area</th>
                  <th className="py-2 px-4 text-left font-medium w-24">Score</th>
                  <th className="py-2 px-4 text-left font-medium">Key Findings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Visibility & Signage', '7.8/10', 'Corner slot beside Grand Lobby; pylon signage; 7 columns partially obstruct; lighted from 6PM'],
                  ['Accessibility & Parking', '8.1/10', 'Dedicated pedestrian sidewalks; jeepney/bus on EDSA Extension; rider driveway access; paid 3rd-party parking'],
                  ['Interior Space', '8.0/10', '221.74 sqm; 5.98m ceiling (above 2.8m min); 7 structural columns (moderate impact); 2.0m entrance'],
                  ['Utilities', '6.5/10', '60A power (100A+ needed — tenant upgrade panel); MAYNILAD 1-inch PPR; LPG provided; no internet yet'],
                  ['Neighborhood', '8.0/10', 'Office workers + residents; safety 8/10; cleanliness 8/10; SM Office + Shell Residences anchors'],
                  ['Lease Viability', '7.5/10', 'Min rent ₱221,740/mo; 3+2 years; 45-day fit-out; annual escalation 5–7%'],
                ].map(([area, score, findings], i) => (
                  <tr key={area} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 text-gray-700">{area}</td>
                    <td className="py-2 px-4 font-semibold text-[#111827]">{score}</td>
                    <td className="py-2 px-4 text-gray-600 text-xs">{findings}</td>
                  </tr>
                ))}
                <tr className="bg-[#111827] text-white font-bold">
                  <td className="py-2 px-4">TOTAL</td>
                  <td className="py-2 px-4">45.9/60</td>
                  <td className="py-2 px-4">
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">GO WITH CONDITIONS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lease Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Lease Terms</h3>
            <div className="space-y-1.5 text-sm">
              {[
                ['Basic Rent', '₱800/sqm Y1 → ₱880/sqm Y2 → ₱970/sqm Y3'],
                ['Minimum Rent', '₱1,000/sqm Y1 → ₱1,100/sqm Y2 → ₱1,210/sqm Y3'],
                ['Percentage Rent', '5% of Gross Sales'],
                ['Monthly Rent (Y1)', '₱221,740 excl. VAT'],
                ['Security Deposit', '₱1,330,440 (6 months)'],
                ['Advance Rent', '₱221,740 (1 month)'],
                ['Construction Bond', '₱100,000'],
                ['CAM', '₱155/sqm/month'],
                ['Fit-Out Period', '45 calendar days rent-free'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-1 border-b border-gray-100">
                  <span className="text-gray-500">{k}</span>
                  <span className="text-gray-800 font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Occupancy Cost Test</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Rent</span>
                <span className="font-medium">₱221,740/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Target Revenue (Yushoken)</span>
                <span className="font-medium">₱2,000,000–₱2,500,000</span>
              </div>
              <div className="text-xs text-gray-400">160–200 covers/day × ₱480 × 26 days</div>
              <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                <span className="text-gray-500">Occupancy Ratio</span>
                <span className="font-bold text-[#111827]">8.9%–11.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Threshold</span>
                <span className="text-xs text-gray-400">{'<'}12%</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded px-3 py-2 flex items-center justify-between mt-1">
                <span className="text-green-800 font-semibold text-xs">ACCEPTABLE</span>
                <span className="text-green-600 text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Role */}
        <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg p-4">
          <div className="text-xs font-semibold text-[#F97316] uppercase tracking-wider mb-1">Strategic Role</div>
          <p className="text-sm text-gray-700">
            SMDC Ice Tower is NHI&apos;s entry point into the SMDC/SM Prime ecosystem. Yushoken&apos;s performance here directly supports Mottainai placement negotiations at SM Megamall, SM Fairview, and SM Bacoor.
          </p>
        </div>
      </div>

      {/* ───────────────────────────────────────
          SITE 2: SMDC Light Mall
      ─────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">

        {/* Site header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 style={playfairStyle} className="text-xl font-bold text-[#111827]">SMDC Light Mall</h2>
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">ACTIVE NEGOTIATION</span>
            </div>
            <p className="text-sm text-gray-500">EDSA corner Madison St., Mandaluyong City</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Award Notice Signed ✓</span>
        </div>

        {/* Site Overview */}
        <div>
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Site Overview</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Address', 'SM Light Residence, EDSA corner Madison St., Brgy. Highway Hills, Mandaluyong City'],
                  ['GPS', '14.574334, 121.049241'],
                  ['Landlord', 'SM Development Corporation (SMDC)'],
                  ['Floor Area (Yushoken)', '229.46 sqm (Units 119b, 120)'],
                  ['Floor Area (Eval)', '246 sqm (Mottainai evaluation space)'],
                  ['Lease Term', 'May 1, 2026 – April 30, 2029 (3 years)'],
                  ['Renewal', '2 years; 8% up depending on status'],
                  ['MRT Access', 'Connected to MRT Boni Station'],
                ].map(([field, value], i) => (
                  <tr key={field} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 font-medium text-gray-600 w-48">{field}</td>
                    <td className="py-2 px-4 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Site Assessment */}
        <div>
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Site Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                label: 'Visibility',
                detail: 'Corner EDSA + Madison, 50m+ sightline, well-lit after dark',
                status: 'strong' as const,
              },
              {
                label: 'Accessibility',
                detail: 'MRT Boni direct connection, pedestrian walkway, 124 parking slots, PWD accessible',
                status: 'strong' as const,
              },
              {
                label: 'Foot Traffic',
                detail: '27,000 weekend / 23,000 weekday',
                status: 'strong' as const,
              },
              {
                label: 'Utilities',
                detail: '2×100A 400V panel, Gas Farm, STP connected, good water pressure',
                status: 'strong' as const,
              },
              {
                label: 'Renovation Risk',
                detail: 'Renovation starting March 31, 2026 — construction period overlap',
                status: 'flag' as const,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-lg border p-3 flex items-start gap-3 ${
                  item.status === 'strong'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <span className="text-lg mt-0.5">{item.status === 'strong' ? '✓' : '⚠️'}</span>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wide ${item.status === 'strong' ? 'text-green-800' : 'text-amber-800'}`}>
                    {item.status === 'strong' ? 'STRONG' : 'FLAG'} — {item.label}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lease Terms + Occupancy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Lease Terms (Units 119b/120)</h3>
            <div className="space-y-1.5 text-sm">
              {[
                ['Basic Rent', '₱950/sqm Y1 → ₱1,045/sqm Y2 → ₱1,150/sqm Y3'],
                ['Minimum Rent', '₱1,150/sqm Y1 → ₱1,265/sqm Y2 → ₱1,395/sqm Y3'],
                ['Percentage Rent', '5% of Gross Sales'],
                ['Monthly Rent (Min, Y1)', '₱263,879 excl. VAT'],
                ['Security Deposit', '₱1,583,274'],
                ['Advance Rent', '₱263,879'],
                ['Construction Bond', '₱100,000'],
                ['CAM', '₱155/sqm/month'],
                ['Fit-Out', '90 days rent-free'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-1 border-b border-gray-100">
                  <span className="text-gray-500">{k}</span>
                  <span className="text-gray-800 font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Occupancy Cost Test</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Rent</span>
                  <span className="font-medium">₱263,879/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Revenue threshold ({'<'}12%)</span>
                  <span className="font-medium">≥ ₱2,198,992/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Yushoken target</span>
                  <span className="font-medium">₱2,496,000</span>
                </div>
                <div className="text-xs text-gray-400">200 covers × ₱480 × 26 days</div>
                <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                  <span className="text-gray-500">Occupancy Ratio</span>
                  <span className="font-bold text-[#111827]">10.6%</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded px-3 py-2 flex items-center justify-between mt-1">
                  <span className="text-green-800 font-semibold text-xs">ACCEPTABLE</span>
                  <span className="text-green-600 text-sm">✓</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Competitor Check</h3>
              <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
                <div className="font-medium text-gray-700">Kenshin Japanese Restaurant</div>
                <div className="text-xs text-gray-500">Izakaya · ₱200–800 · {'>'}100m away</div>
                <div className="text-xs text-green-700 font-medium mt-1">Not within 200m disqualifier zone ✓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Catchment Data */}
        <div>
          <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-3">Catchment Data</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: '104,199', label: 'Residents within 800m' },
              { value: '18', label: 'Adjacent condo towers' },
              { value: '4,180', label: 'Light 1 units (99% occ.)' },
              { value: '4,190', label: 'Light 2 units (target 2027)' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-[#111827]">{item.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Adjacent towers include: GA Towers, Pioneer Woodlands, DMCI Flair, Axis Residences, and others.
            Anchor tenants: Savemore, Ace Hardware, Watsons, BDO.
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────
          Comparison Table
      ─────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 style={playfairStyle} className="text-lg font-bold text-[#111827] mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#111827] text-white">
                <th className="py-2 px-4 text-left font-medium">Metric</th>
                <th className="py-2 px-4 text-left font-medium">SMDC Ice Tower</th>
                <th className="py-2 px-4 text-left font-medium">SMDC Light Mall</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Trade Name', 'Ramen Yushoken', 'Ramen Yushoken'],
                ['Location', 'Pasay (MOA Complex)', 'Mandaluyong (EDSA-Madison)'],
                ['Floor Area', '221.74 sqm', '229.46 sqm'],
                ['Min Rent Y1', '₱1,000/sqm', '₱1,150/sqm'],
                ['Monthly Rent Y1', '₱221,740', '₱263,879'],
                ['CAM', '₱155/sqm/mo', '₱155/sqm/mo'],
                ['Fit-Out', '45 days', '90 days'],
                ['MRT Access', 'No (bus/jeep)', 'Yes (MRT Boni)'],
                ['Lease Term', 'May 2026 – Apr 2029', 'May 2026 – Apr 2029'],
                ['Status', 'Award Notice Signed ✓', 'Award Notice Signed ✓'],
              ].map(([metric, ice, light], i) => (
                <tr key={metric} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4 font-medium text-gray-600">{metric}</td>
                  <td className="py-2 px-4 text-gray-800">{ice}</td>
                  <td className="py-2 px-4 text-gray-800">{light}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ───────────────────────────────────────
          Strategic Implications
      ─────────────────────────────────────── */}
      <div className="bg-[#111827] rounded-xl p-6">
        <h2 style={playfairStyle} className="text-lg font-bold text-white mb-4">Strategic Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-2">Mottainai Pathway</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              These two Yushoken locations build NHI&apos;s track record as a reliable, high-performing SMDC/SM Prime tenant.
              Each successful store opens doors for Mottainai placement negotiations in adjacent properties within the SM Prime network.
            </p>
          </div>
          <div>
            <div className="text-[#F97316] text-xs font-semibold uppercase tracking-wider mb-2">Next Site Targets</div>
            <div className="space-y-2">
              {[
                { name: 'SM Megamall', location: 'Mandaluyong' },
                { name: 'SM Fairview', location: 'Quezon City' },
                { name: 'SM Bacoor', location: 'Cavite' },
              ].map((site) => (
                <div key={site.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">{site.name}</span>
                  <span className="text-gray-400 text-xs">{site.location}</span>
                </div>
              ))}
              <p className="text-gray-500 text-xs mt-2">
                Leverage Ice Tower + Light Mall performance data to negotiate entry.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
