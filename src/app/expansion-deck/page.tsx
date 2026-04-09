'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const TOTAL_SLIDES = 8;

function SlideHeader({ slideNum, title }: { slideNum: number; title: string }) {
  return (
    <div className="w-full">
      <div className="bg-[#1a1a2e] text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/expansion" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to Expansion
          </Link>
          <span className="text-sm tracking-widest uppercase opacity-80">
            Mottainai&ensp;|&ensp;Expansion Playbook V1
          </span>
        </div>
        <span className="text-xs opacity-50">Slide {slideNum} / {TOTAL_SLIDES}</span>
      </div>
      <div className="h-1 bg-[#c9a227]" />
    </div>
  );
}

/* ─── Slide 1: Title ─── */
function Slide1() {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={1} title="Title" />
      <div className="flex-1 flex flex-col items-center justify-center bg-[#0a0a0f] relative overflow-hidden px-12">
        {/* Gold gradient orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(201,162,39,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl">
          <div className="h-px w-24 bg-[#c9a227] mx-auto mb-8" />
          <h1
            className="text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
          >
            Expansion Playbook V1
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Mottainai 50-Store Roadmap&ensp;|&ensp;Nippon Hasha Inc.
          </p>
          <div className="h-px w-32 bg-[#c9a227] mx-auto mb-8" />
          <div className="flex items-center justify-center gap-8 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Rock #2 — On Track
            </span>
            <span>April 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: Executive Summary ─── */
function Slide2() {
  const points = [
    {
      num: '01',
      text: 'Philippine QSR Japanese segment: ₱45B, growing 12% YoY',
    },
    {
      num: '02',
      text: 'No value-segment authentic ramen player — white space identified',
    },
    {
      num: '03',
      text: 'Mottainai targets ₱150–250 price point — underserved income tier',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={2} title="The Opportunity" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-8"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          The Opportunity
        </h2>
        <div className="flex-1 grid grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {points.map((p) => (
              <div key={p.num} className="flex gap-5 items-start">
                <span className="text-[#c9a227] text-2xl font-bold leading-none mt-1">{p.num}</span>
                <p className="text-white/80 text-lg leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Goal</p>
              <p className="text-white text-base leading-relaxed">
                50 stores by 2033 — Metro Manila first, then Visayas / Mindanao
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-center">
                <p className="text-[#c9a227] text-3xl font-bold mb-1">₱900M</p>
                <p className="text-white/50 text-xs">Target Revenue</p>
              </div>
              <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 text-center">
                <p className="text-[#c9a227] text-3xl font-bold mb-1">₱207M</p>
                <p className="text-white/50 text-xs">Target NOI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Site Evaluation Framework ─── */
function Slide3() {
  const criteria = [
    {
      name: 'Demographics',
      weight: '30%',
      desc: 'Income levels, population density, household type',
      color: 'border-blue-400',
      text: 'text-blue-400',
    },
    {
      name: 'Competition',
      weight: '25%',
      desc: 'Saturation, gap analysis, direct competitor count',
      color: 'border-purple-400',
      text: 'text-purple-400',
    },
    {
      name: 'Site Quality',
      weight: '25%',
      desc: 'Visibility, footfall, accessibility, anchor tenants',
      color: 'border-[#c9a227]',
      text: 'text-[#c9a227]',
    },
    {
      name: 'Traffic & Access',
      weight: '20%',
      desc: 'Pedestrian flow, transport links, parking',
      color: 'border-green-400',
      text: 'text-green-400',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={3} title="How We Score Sites" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-8"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          How We Score Sites
        </h2>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {criteria.map((c) => (
            <div
              key={c.name}
              className={`bg-[#1a1a2e] border-l-4 ${c.color} rounded-r-xl p-6 flex items-start justify-between gap-4`}
            >
              <div>
                <p className="text-white font-semibold text-lg mb-1">{c.name}</p>
                <p className="text-white/60 text-sm">{c.desc}</p>
              </div>
              <span className={`${c.text} text-2xl font-bold shrink-0`}>{c.weight}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-white/70">≥7.5 — STRONG GO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="text-white/70">5.0–7.4 — MAYBE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="text-white/70">{'<5.0'} — NO-GO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: SM MOA Case Study ─── */
function Slide4() {
  const rows = [
    { criterion: 'Demographics', score: '9.5', weight: '30%', weighted: '2.85' },
    { criterion: 'Competition', score: '8.0', weight: '25%', weighted: '2.00' },
    { criterion: 'Site Quality', score: '9.0', weight: '25%', weighted: '2.25' },
    { criterion: 'Traffic & Access', score: '10.0', weight: '20%', weighted: '2.00' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={4} title="SM Mall of Asia" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          Proof of Concept — SM Mall of Asia
        </h2>
        <div className="flex-1 grid grid-cols-2 gap-10 items-start">
          <div>
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr className="bg-[#1a1a2e]">
                  <th className="text-left text-white/60 px-4 py-3 font-medium border border-white/10">Criterion</th>
                  <th className="text-center text-white/60 px-4 py-3 font-medium border border-white/10">Score</th>
                  <th className="text-center text-white/60 px-4 py-3 font-medium border border-white/10">Weight</th>
                  <th className="text-center text-white/60 px-4 py-3 font-medium border border-white/10">Weighted</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.criterion} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="px-4 py-3 border border-white/10 text-white/80">{r.criterion}</td>
                    <td className="px-4 py-3 border border-white/10 text-center text-white">{r.score}</td>
                    <td className="px-4 py-3 border border-white/10 text-center text-white/60">{r.weight}</td>
                    <td className="px-4 py-3 border border-white/10 text-center text-[#c9a227]">{r.weighted}</td>
                  </tr>
                ))}
                <tr className="bg-[#1a1a2e] font-bold">
                  <td className="px-4 py-3 border border-white/10 text-white">TOTAL</td>
                  <td className="px-4 py-3 border border-white/10" />
                  <td className="px-4 py-3 border border-white/10" />
                  <td className="px-4 py-3 border border-white/10 text-center text-[#c9a227] text-base">9.10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-5">
            <div className="text-center">
              <p
                className="text-8xl font-bold text-[#c9a227]"
                style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
              >
                9.0
              </p>
              <p className="text-white/70 text-sm mt-1">Score — STRONG GO</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4">
                <p className="text-white/50 text-xs mb-1">Location</p>
                <p className="text-white text-sm">65 sqm inline dining, SM Prime, Pasay City</p>
              </div>
              <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4">
                <p className="text-white/50 text-xs mb-1">Capex</p>
                <p className="text-[#c9a227] font-bold">₱3.5M</p>
              </div>
              <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4">
                <p className="text-white/50 text-xs mb-1">NOI</p>
                <p className="text-white font-bold">35%</p>
              </div>
              <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4">
                <p className="text-white/50 text-xs mb-1">Payback</p>
                <p className="text-white font-bold">8–10 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Site Pipeline ─── */
function Slide5() {
  const sites = [
    { name: 'SM Mall of Asia', location: 'Pasay City', landlord: 'SM Prime', stage: 'Evaluated', score: '9.0/10', stageColor: 'bg-green-500/20 text-green-400' },
    { name: 'SM North EDSA', location: 'Quezon City', landlord: 'SM Prime', stage: 'Identified', score: 'TBD', stageColor: 'bg-yellow-500/20 text-yellow-400' },
    { name: 'Ayala Malls Manila Bay', location: 'Parañaque', landlord: 'Ayala Land', stage: 'Identified', score: 'TBD', stageColor: 'bg-yellow-500/20 text-yellow-400' },
  ];

  const stages = ['Identified', 'Evaluated', 'Negotiating', 'LOI Signed', 'Lease Signed', 'Build-Out'];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={5} title="Active Pipeline" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          Active Pipeline
        </h2>
        <table className="w-full text-sm mb-8" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="bg-[#1a1a2e]">
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Site</th>
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Location</th>
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Landlord</th>
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Stage</th>
              <th className="text-center text-white/60 px-5 py-3 font-medium border border-white/10">Score</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((s, i) => (
              <tr key={s.name} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                <td className="px-5 py-4 border border-white/10 text-white font-medium">{s.name}</td>
                <td className="px-5 py-4 border border-white/10 text-white/70">{s.location}</td>
                <td className="px-5 py-4 border border-white/10 text-white/70">{s.landlord}</td>
                <td className="px-5 py-4 border border-white/10">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${s.stageColor}`}>{s.stage}</span>
                </td>
                <td className="px-5 py-4 border border-white/10 text-center text-[#c9a227] font-bold">{s.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Stage Pipeline</p>
          <div className="flex items-center gap-0">
            {stages.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`flex-1 px-3 py-2 text-xs text-center font-medium ${
                    i < 2 ? 'bg-[#c9a227]/20 text-[#c9a227]' : 'bg-[#1a1a2e] text-white/40'
                  }`}
                  style={{
                    clipPath: i < stages.length - 1 ? 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)' : 'none',
                  }}
                >
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/50 text-sm mt-4">Target: 3 signed sites by Q3 2026</p>
      </div>
    </div>
  );
}

/* ─── Slide 6: Landlord Strategy ─── */
function Slide6() {
  const landlords = [
    {
      name: 'SM Prime',
      share: '70%',
      stores: '40 stores',
      note: 'Master agreement preferred',
      color: 'border-[#c9a227]',
      text: 'text-[#c9a227]',
    },
    {
      name: 'Ayala Land',
      share: '16%',
      stores: '8 stores',
      note: 'Premium location access',
      color: 'border-blue-400',
      text: 'text-blue-400',
    },
    {
      name: 'Robinsons',
      share: '10%',
      stores: '5 stores',
      note: 'Metro Manila coverage',
      color: 'border-purple-400',
      text: 'text-purple-400',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={6} title="Multi-Landlord Portfolio" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-8"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          Multi-Landlord Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {landlords.map((l) => (
            <div
              key={l.name}
              className={`bg-[#1a1a2e] border-t-4 ${l.color} rounded-b-xl p-8 text-center`}
            >
              <p className="text-white/60 text-sm mb-2">{l.name}</p>
              <p
                className={`text-5xl font-bold ${l.text} mb-2`}
                style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
              >
                {l.share}
              </p>
              <p className="text-white font-medium mb-1">{l.stores}</p>
              <p className="text-white/50 text-xs">{l.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Geographic Sequencing</p>
            <p className="text-white text-sm">Metro Manila first → Cebu / Davao Y3 → International Y5+</p>
          </div>
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Risk Mitigation</p>
            <p className="text-white text-sm">No single landlord dependency across 50-store portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: Lease Parameters ─── */
function Slide7() {
  const params = [
    { param: 'Store size', target: '60–80 sqm', walkaway: '<50 sqm' },
    { param: 'Monthly rent', target: '₱180–250/sqm', walkaway: '>₱300/sqm' },
    { param: 'Occupancy cost', target: '≤12% of revenue', walkaway: '>15%' },
    { param: 'Lease term', target: '5+5 years', walkaway: '<3 years' },
    { param: 'Fit-out allowance', target: '₱500K–1M', walkaway: 'None' },
    { param: 'Opening exclusivity', target: '6 months', walkaway: 'Not negotiable' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={7} title="Lease Negotiation Framework" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          Lease Negotiation Framework
        </h2>
        <table className="w-full text-sm mb-6" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="bg-[#1a1a2e]">
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Parameter</th>
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Target</th>
              <th className="text-left text-white/60 px-5 py-3 font-medium border border-white/10">Walk-Away</th>
            </tr>
          </thead>
          <tbody>
            {params.map((p, i) => (
              <tr key={p.param} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                <td className="px-5 py-3 border border-white/10 text-white/80 font-medium">{p.param}</td>
                <td className="px-5 py-3 border border-white/10 text-green-400">{p.target}</td>
                <td className="px-5 py-3 border border-white/10 text-red-400">{p.walkaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4 text-sm text-white/60">
          Note: SM Prime preferred partner — inline dining format for Phase 1 sites
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 8: Rollout Timeline ─── */
function Slide8() {
  const years = [
    { label: 'Y1 (2026)', count: 3, max: 50 },
    { label: 'Y2 (2027)', count: 6, max: 50 },
    { label: 'Y3 (2028)', count: 12, max: 50 },
    { label: 'Y4 (2029)', count: 18, max: 50 },
    { label: 'Y5 (2030)', count: 24, max: 50 },
    { label: 'Y10 (2033)', count: 50, max: 50 },
  ];

  const milestones = [
    { date: 'Q3 2026', event: 'SM MOA signed' },
    { date: 'Q4 2026', event: 'Build-out begins + Soft launch (1 store)' },
    { date: 'Q2 2027', event: '3 stores operating' },
    { date: 'Q1 2030', event: 'Cash flow breakeven (base)' },
    { date: '2033', event: '50-store target' },
  ];

  return (
    <div className="flex flex-col h-full">
      <SlideHeader slideNum={8} title="50-Store Roadmap" />
      <div className="flex-1 flex flex-col px-12 py-8 bg-[#0a0a0f] text-white">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        >
          50-Store Roadmap
        </h2>
        <div className="flex-1 grid grid-cols-2 gap-10">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Store Count — Base Scenario</p>
            <div className="space-y-3">
              {years.map((y) => (
                <div key={y.label} className="flex items-center gap-4">
                  <span className="text-white/60 text-sm w-24 shrink-0">{y.label}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-full bg-[#1a1a2e] rounded-full flex items-center px-2"
                      style={{ width: `${(y.count / y.max) * 100}%`, minWidth: '2rem' }}
                    >
                      <span className="text-[#c9a227] text-xs font-bold">{y.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Key Milestones</p>
            <div className="space-y-3 mb-6">
              {milestones.map((m) => (
                <div key={m.date} className="flex gap-4 items-start">
                  <span className="text-[#c9a227] text-xs font-bold w-20 shrink-0 mt-0.5">{m.date}</span>
                  <span className="text-white/70 text-sm">{m.event}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#1a1a2e] border border-white/10 rounded-lg p-4 text-sm text-white/60 mb-3">
              Full financial model available in Financial Projections
            </div>
            <Link
              href="/expansion"
              className="text-[#c9a227] text-sm hover:text-white transition-colors"
            >
              Back to Expansion Playbook →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

/* ─── Overview Thumbnail ─── */
function SlideThumbnail({
  index,
  current,
  onClick,
}: {
  index: number;
  current: number;
  onClick: () => void;
}) {
  const labels = [
    'Title',
    'The Opportunity',
    'Site Framework',
    'SM MOA Case Study',
    'Active Pipeline',
    'Landlord Strategy',
    'Lease Parameters',
    '50-Store Roadmap',
  ];
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border-2 p-4 text-left transition-all ${
        index === current
          ? 'border-[#c9a227] bg-[#1a1a2e]'
          : 'border-white/10 bg-[#111118] hover:border-white/30'
      }`}
    >
      <div className="text-[#c9a227] text-xs font-bold mb-1">0{index + 1}</div>
      <div className="text-white text-sm font-medium">{labels[index]}</div>
    </button>
  );
}

/* ─── Main Component ─── */
export default function ExpansionDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOverview, setIsOverview] = useState(false);

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (isOverview) {
        if (e.key === 'Escape') setIsOverview(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
      else if (e.key === 'Escape') setIsOverview(true);
      else if (e.key >= '1' && e.key <= '8') setCurrentSlide(Number(e.key) - 1);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, isOverview]);

  const SlideComponent = SLIDES[currentSlide];

  if (isOverview) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0f] flex flex-col">
        <div className="bg-[#1a1a2e] px-8 py-4 flex items-center justify-between">
          <span className="text-white text-sm tracking-widest uppercase opacity-80">
            Expansion Playbook — Overview
          </span>
          <button
            onClick={() => setIsOverview(false)}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            ESC to close
          </button>
        </div>
        <div className="h-1 bg-[#c9a227]" />
        <div className="flex-1 overflow-auto p-10">
          <div className="grid grid-cols-4 gap-5 max-w-5xl mx-auto">
            {SLIDES.map((_, i) => (
              <SlideThumbnail
                key={i}
                index={i}
                current={currentSlide}
                onClick={() => {
                  setCurrentSlide(i);
                  setIsOverview(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] flex flex-col select-none">
      {/* Slide content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <SlideComponent />
      </div>

      {/* Bottom bar: overview + slide counter */}
      <div className="bg-[#1a1a2e] border-t border-white/10 px-8 py-2 flex items-center justify-between text-xs text-white/40">
        <button
          onClick={() => setIsOverview(true)}
          className="hover:text-white/70 transition-colors"
        >
          ESC — Overview
        </button>
        <span>
          {currentSlide + 1} / {TOTAL_SLIDES}
        </span>
      </div>

      {/* Left chevron */}
      {currentSlide > 0 && (
        <button
          onClick={goPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
      )}

      {/* Right chevron */}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          onClick={goNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      )}
    </div>
  );
}
