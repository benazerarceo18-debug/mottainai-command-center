'use client';

import { useState, useEffect, useCallback } from 'react';

const TOTAL_SLIDES = 10;

/* ─── Slide Header (shared) ─── */
function SlideHeader({ slideNum }: { slideNum: number }) {
  return (
    <div className="w-full">
      <div className="bg-[#1a1a2e] text-white px-8 py-4 flex items-center justify-between">
        <span className="text-sm tracking-widest uppercase opacity-80">
          Mottainai&ensp;|&ensp;Nippon Hasha Inc.
        </span>
        <span className="text-xs opacity-50">Slide {slideNum} / {TOTAL_SLIDES}</span>
      </div>
      <div className="h-1 bg-[#c9a227]" />
    </div>
  );
}

/* ─── KPI Card ─── */
function KpiCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
      <div className="text-3xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Playfair Display, serif' }}>
        {value}
      </div>
      <div className="text-sm text-gray-500 mt-2">{label}</div>
    </div>
  );
}

/* ─── Slide 1: Executive Summary ─── */
function Slide1() {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={1} />
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-8 bg-white">
        <h1 className="text-5xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Mottainai — Investment Thesis
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl text-center mb-12">
          Authentic Japanese ramen at accessible prices, powered by Yushoken&apos;s 10+ years of expertise
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl mb-12">
          <KpiCard value="50" label="Stores by 2033" />
          <KpiCard value="₱900M" label="Revenue Target" />
          <KpiCard value="37%" label="Store EBITDA" />
          <KpiCard value="82%" label="Base ROIC" />
        </div>
        <div className="bg-[#1a1a2e] text-white px-8 py-4 rounded-lg text-center">
          <p className="text-lg font-semibold">Seeking ₱30–45M initial investment for first 3 stores</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: Market Opportunity ─── */
function Slide2() {
  const competitors = [
    { name: 'Tokyo Tokyo', segment: 'QSR Japanese', price: '₱120–200', position: 'Filipino-adapted Japanese, rice-heavy' },
    { name: 'Marugame Udon', segment: 'Fast Casual Japanese', price: '₱180–280', position: 'Udon specialist, high throughput' },
    { name: 'Ramen Kuroda', segment: 'Casual Ramen', price: '₱250–380', position: 'Value ramen, growing chain' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={2} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Philippine QSR Japanese Segment
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-[#c9a227]">₱45B</div>
            <div className="text-sm text-gray-500 mt-1">Japanese food segment</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-[#c9a227]">12% YoY</div>
            <div className="text-sm text-gray-500 mt-1">Market growth</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-[#c9a227]">White Space</div>
            <div className="text-sm text-gray-500 mt-1">No value-segment authentic ramen player</div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">Competitive Landscape</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="px-4 py-3 text-left">Brand</th>
                <th className="px-4 py-3 text-left">Segment</th>
                <th className="px-4 py-3 text-left">Price Range</th>
                <th className="px-4 py-3 text-left">Positioning</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-gray-600">{c.segment}</td>
                  <td className="px-4 py-3 text-gray-600">{c.price}</td>
                  <td className="px-4 py-3 text-gray-600">{c.position}</td>
                </tr>
              ))}
              <tr className="bg-[#c9a227]/10 font-semibold">
                <td className="px-4 py-3 text-[#1a1a2e]">Mottainai</td>
                <td className="px-4 py-3 text-[#1a1a2e]">QSR Ramen</td>
                <td className="px-4 py-3 text-[#1a1a2e]">₱250–450</td>
                <td className="px-4 py-3 text-[#1a1a2e]">Authentic value ramen — only player</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Brand & Product ─── */
function Slide3() {
  const skus = [
    'Tonkotsu Classic',
    'Shoyu Ramen',
    'Miso Ramen',
    'Spicy Tan Tan',
    'Tsukemen',
    'Karaage Don',
    'Gyoza Set',
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={3} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Brand Identity &amp; Menu
        </h2>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Positioning</h3>
              <p className="text-gray-600">&ldquo;By the makers of Yushoken&rdquo; endorsed model — leverages premium credibility at accessible price points</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">7 Core SKUs</h3>
              <ul className="space-y-2">
                {skus.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#c9a227] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a2e] text-white rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Price Range</div>
              <div className="text-3xl font-bold">₱250–450</div>
            </div>
            <div className="bg-[#1a1a2e] text-white rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Avg Food Cost</div>
              <div className="text-3xl font-bold">24.6%</div>
              <div className="text-sm opacity-70 mt-1">Target ≤35%</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-green-700 mb-2">Rock #1 Status</div>
              <div className="text-2xl font-bold text-green-700">COMPLETE ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: Unit Economics ─── */
function Slide4() {
  const costStructure = [
    { item: 'Food Cost', pct: '25%', color: 'bg-red-400' },
    { item: 'Labor', pct: '15%', color: 'bg-blue-400' },
    { item: 'Rent', pct: '12%', color: 'bg-purple-400' },
    { item: 'Others', pct: '11%', color: 'bg-gray-400' },
    { item: 'EBITDA', pct: '37%', color: 'bg-[#c9a227]' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={4} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Per-Store Economics
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#1a1a2e]">240</div>
            <div className="text-sm text-gray-500">Covers/Day</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#1a1a2e]">₱280</div>
            <div className="text-sm text-gray-500">Avg Check</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#1a1a2e]">₱2.016M</div>
            <div className="text-sm text-gray-500">Monthly Revenue</div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">Cost Structure</h3>
        <div className="space-y-3 mb-8">
          {costStructure.map((c) => (
            <div key={c.item} className="flex items-center gap-4">
              <span className="w-20 text-sm text-gray-600 shrink-0">{c.item}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                <div
                  className={`h-full ${c.color} rounded-full flex items-center justify-end pr-3`}
                  style={{ width: c.pct }}
                >
                  <span className="text-xs font-bold text-white">{c.pct}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
          <p className="text-sm text-[#1a1a2e]">
            <span className="font-semibold">SM MOA Benchmark:</span> 35% NOI, 8–10 month payback
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Growth Strategy ─── */
function Slide5() {
  const rollout = [
    { year: 'Y1', stores: 3, cumulative: 3 },
    { year: 'Y2', stores: 3, cumulative: 6 },
    { year: 'Y3', stores: 6, cumulative: 12 },
    { year: 'Y4', stores: 6, cumulative: 18 },
    { year: 'Y5', stores: 6, cumulative: 24 },
  ];

  const landlordMix = [
    { name: 'SM Prime', pct: '70%' },
    { name: 'Ayala', pct: '16%' },
    { name: 'Robinsons', pct: '10%' },
    { name: 'Others', pct: '4%' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={5} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          50-Store Roadmap
        </h2>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">Store Rollout (Base)</h3>
            <div className="flex items-end gap-3 h-48 mb-6">
              {rollout.map((r) => (
                <div key={r.year} className="flex-1 flex flex-col items-center">
                  <span className="text-xs font-bold text-[#1a1a2e] mb-1">{r.cumulative}</span>
                  <div
                    className="w-full bg-[#1a1a2e] rounded-t"
                    style={{ height: `${(r.cumulative / 24) * 100}%` }}
                  />
                  <span className="text-xs text-gray-500 mt-2">{r.year}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Geographic:</span> Metro Manila first, Cebu/Davao Y3+
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Format:</span> 60–80 sqm fast casual inline dining
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">Landlord Mix</h3>
            <div className="space-y-4">
              {landlordMix.map((l) => (
                <div key={l.name} className="flex items-center gap-4">
                  <span className="w-24 text-sm text-gray-700 font-medium">{l.name}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="h-full bg-[#1a1a2e] rounded-full flex items-center justify-end pr-2"
                      style={{ width: l.pct }}
                    >
                      <span className="text-xs font-bold text-white">{l.pct}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 6: Financial Projections ─── */
function Slide6() {
  const scenarios = [
    { name: 'Conservative', y5Stores: 14, y5Revenue: '₱336M', y5Ebitda: '₱124M', roic: '58%', highlight: false },
    { name: 'Base', y5Stores: 24, y5Revenue: '₱580M', y5Ebitda: '₱215M', roic: '82%', highlight: true },
    { name: 'Aggressive', y5Stores: 36, y5Revenue: '₱870M', y5Ebitda: '₱322M', roic: '110%', highlight: false },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={6} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          5-Year Financial Outlook
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="px-6 py-3 text-left">Scenario</th>
                <th className="px-6 py-3 text-right">Y5 Stores</th>
                <th className="px-6 py-3 text-right">Y5 Revenue</th>
                <th className="px-6 py-3 text-right">Y5 EBITDA</th>
                <th className="px-6 py-3 text-right">ROIC</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((s) => (
                <tr
                  key={s.name}
                  className={s.highlight ? 'bg-[#c9a227]/10 font-semibold' : 'bg-white'}
                >
                  <td className="px-6 py-4">{s.name}</td>
                  <td className="px-6 py-4 text-right">{s.y5Stores}</td>
                  <td className="px-6 py-4 text-right">{s.y5Revenue}</td>
                  <td className="px-6 py-4 text-right">{s.y5Ebitda}</td>
                  <td className="px-6 py-4 text-right">{s.roic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#1a1a2e]">24</div>
            <div className="text-sm text-gray-500">Base Stores Y5</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#c9a227]">₱215M</div>
            <div className="text-sm text-gray-500">Base EBITDA Y5</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-[#1a1a2e]">Q1 2030</div>
            <div className="text-sm text-gray-500">CF Breakeven</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: Execution Roadmap ─── */
function Slide7() {
  const milestones = [
    { period: 'Q4 2025', item: 'Concept finalization', status: 'done' },
    { period: 'Q1–Q2 2026', item: 'Menu development', status: 'done' },
    { period: 'Q1–Q2 2026', item: 'Expansion playbook', status: 'progress' },
    { period: 'Q3 2026', item: 'SM MOA lease, build-out begins', status: 'upcoming' },
    { period: 'Q4 2026', item: 'Soft launch', status: 'upcoming' },
    { period: 'Q1 2027', item: 'Grand opening + scale', status: 'upcoming' },
  ];

  const statusColors: Record<string, string> = {
    done: 'bg-green-500',
    progress: 'bg-[#c9a227]',
    upcoming: 'bg-gray-300',
  };

  const statusLabels: Record<string, string> = {
    done: 'DONE',
    progress: 'IN PROGRESS',
    upcoming: 'UPCOMING',
  };

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={7} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Launch Timeline
        </h2>
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6 relative">
                  <div className={`w-3 h-3 rounded-full ${statusColors[m.status]} mt-1.5 shrink-0 relative z-10 ring-4 ring-white`} />
                  <div className="flex-1 flex items-center justify-between bg-gray-50 rounded-lg px-6 py-4 border border-gray-200">
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{m.period}</span>
                      <p className="text-base text-[#1a1a2e] font-medium mt-0.5">{m.item}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${statusColors[m.status]}`}>
                      {statusLabels[m.status]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 8: Risk Assessment ─── */
function Slide8() {
  const risks = [
    { risk: 'Cannibalization of Yushoken', severity: 'Medium', mitigation: 'Different segment (₱250–450 vs ₱500–700), separate locations' },
    { risk: 'Food cost volatility', severity: 'High', mitigation: 'Centralized commissary, supplier contracts, menu flexibility' },
    { risk: 'Expansion execution', severity: 'Medium', mitigation: 'Standardized playbook, SM partnership, proven format' },
    { risk: 'Brand dilution', severity: 'Low', mitigation: 'Endorsed model (not co-branded), separate identity' },
    { risk: 'Key person (Aoyama)', severity: 'High', mitigation: 'Recipe documentation, training program, handover by Sep 2026' },
  ];

  const severityColor: Record<string, string> = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700',
  };

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={8} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Key Risks &amp; Mitigations
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a2e] text-white">
                <th className="px-4 py-3 text-left w-8">#</th>
                <th className="px-4 py-3 text-left">Risk</th>
                <th className="px-4 py-3 text-center">Severity</th>
                <th className="px-4 py-3 text-left">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-4 text-gray-400 font-mono">{i + 1}</td>
                  <td className="px-4 py-4 font-medium text-[#1a1a2e]">{r.risk}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${severityColor[r.severity]}`}>
                      {r.severity}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{r.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 9: Capital Requirements ─── */
function Slide9() {
  const useFunds = [
    { label: 'Build-out', pct: 60, color: 'bg-[#1a1a2e]' },
    { label: 'Working Capital', pct: 20, color: 'bg-[#c9a227]' },
    { label: 'Marketing', pct: 10, color: 'bg-blue-400' },
    { label: 'Contingency', pct: 10, color: 'bg-gray-400' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={9} />
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Investment Ask
        </h2>
        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="space-y-6">
            <div className="bg-[#1a1a2e] text-white rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Total Ask</div>
              <div className="text-4xl font-bold">₱30–45M</div>
              <div className="text-sm opacity-70 mt-1">First 3 stores</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-lg font-bold text-[#1a1a2e]">₱10–15M</div>
                <div className="text-xs text-gray-500">Per store (inline dining)</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-lg font-bold text-[#1a1a2e]">₱8M</div>
                <div className="text-xs text-gray-500">Per store (standalone)</div>
              </div>
            </div>
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
              <div className="text-sm font-semibold text-[#1a1a2e] mb-1">Expected Returns</div>
              <p className="text-sm text-gray-700">82% ROIC &middot; 9-month payback per store</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4">Use of Funds</h3>
            {/* Stacked bar */}
            <div className="flex rounded-lg overflow-hidden h-10 mb-6">
              {useFunds.map((u) => (
                <div
                  key={u.label}
                  className={`${u.color} flex items-center justify-center`}
                  style={{ width: `${u.pct}%` }}
                >
                  <span className="text-xs font-bold text-white">{u.pct}%</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {useFunds.map((u) => (
                <div key={u.label} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${u.color} shrink-0`} />
                  <span className="text-sm text-gray-700">{u.label}</span>
                  <span className="text-sm font-semibold text-[#1a1a2e] ml-auto">{u.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 10: Appendices ─── */
function Slide10() {
  const links = [
    'Full Expansion Playbook',
    'Financial Model',
    'Site Scoring Matrix',
    'Menu Development Report',
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={10} />
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-8 bg-white">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Supporting Materials
        </h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl w-full mb-10">
          {links.map((l) => (
            <div key={l} className="bg-gray-50 rounded-lg px-6 py-4 border border-gray-200 flex items-center gap-3">
              <svg className="w-5 h-5 text-[#c9a227] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-[#1a1a2e] font-medium">{l}</span>
            </div>
          ))}
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Benz Arceo&ensp;&middot;&ensp;benz.arceo@nipponhasha.com</p>
          <p className="text-xs text-gray-400">Confidential — Nippon Hasha Inc. 2026</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slides Array ─── */
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

const slideTitles = [
  'Executive Summary',
  'Market Opportunity',
  'Brand & Product',
  'Unit Economics',
  'Growth Strategy',
  'Financial Projections',
  'Execution Roadmap',
  'Risk Assessment',
  'Capital Requirements',
  'Appendices',
];

/* ─── Main Page Component ─── */
export default function BoardDeckPage() {
  const [current, setCurrent] = useState(0);
  const [overview, setOverview] = useState(false);

  const goTo = useCallback((n: number) => {
    setCurrent(Math.max(0, Math.min(n, TOTAL_SLIDES - 1)));
    setOverview(false);
  }, []);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
      else if (e.key === 'Escape') { e.preventDefault(); setOverview((o) => !o); }
      else if (e.key >= '1' && e.key <= '9') { goTo(parseInt(e.key) - 1); }
      else if (e.key === '0') { goTo(9); }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, goTo]);

  const SlideComponent = slides[current];

  if (overview) {
    return (
      <div className="fixed inset-0 z-50 bg-[#1a1a2e] p-8 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Slide Overview
          </h2>
          <button
            onClick={() => setOverview(false)}
            className="text-white/60 hover:text-white text-sm"
          >
            Press ESC to close
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {slides.map((S, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`aspect-video bg-white rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                i === current ? 'border-[#c9a227] ring-2 ring-[#c9a227]/50' : 'border-transparent'
              }`}
            >
              <div className="w-full h-full transform scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
                <S />
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 mt-2">
          {slideTitles.map((t, i) => (
            <div key={i} className="text-center text-xs text-white/50">
              {i + 1}. {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .slide-nav { display: none !important; }
          .slide-container { page-break-after: always; height: 100vh; }
          .slide-container:last-child { page-break-after: avoid; }
        }
      `}</style>

      <div className="fixed inset-0 z-50 bg-white">
        {/* Slide */}
        <div className="slide-container h-screen w-screen">
          <SlideComponent />
        </div>

        {/* Navigation arrows */}
        <div className="slide-nav">
          {current > 0 && (
            <button
              onClick={prev}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {current < TOTAL_SLIDES - 1 && (
            <button
              onClick={next}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Bottom bar */}
        <div className="slide-nav fixed bottom-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-sm px-6 py-2 flex items-center justify-between">
          <button
            onClick={() => setOverview(true)}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Overview (ESC)
          </button>
          <span className="text-xs text-gray-500 font-mono">
            {current + 1} / {TOTAL_SLIDES}
          </span>
          <span className="text-xs text-gray-400">
            Arrow keys to navigate &middot; 1-0 direct
          </span>
        </div>
      </div>
    </>
  );
}
