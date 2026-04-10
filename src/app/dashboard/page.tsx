import Link from 'next/link';
import { PIPELINE_SITES, MILESTONES, MENU_ITEMS } from '@/lib/data';

const QUICK_LINKS = [
  { href: '/brand',      title: 'Brand Identity',     emoji: '🎯', color: 'from-violet-500/20 to-violet-500/5',  border: 'border-violet-200',  desc: 'Positioning & visual direction' },
  { href: '/menu',       title: 'Core Menu',           emoji: '🍜', color: 'from-orange-500/20 to-orange-500/5',  border: 'border-orange-200',  desc: '7 SKUs — all locked' },
  { href: '/expansion',  title: 'Expansion Playbook',  emoji: '📍', color: 'from-blue-500/20 to-blue-500/5',     border: 'border-blue-200',    desc: 'Site pipeline & scoring' },
  { href: '/financials', title: 'Financial Model',     emoji: '📊', color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-200', desc: '5-year · 3 scenarios' },
  { href: '/roadmap',    title: 'Roadmap',             emoji: '🗺️', color: 'from-amber-500/20 to-amber-500/5',   border: 'border-amber-200',   desc: 'Q4 2025 → Q4 2027' },
  { href: '/board-deck', title: 'Board Deck',          emoji: '🎬', color: 'from-rose-500/20 to-rose-500/5',     border: 'border-rose-200',    desc: 'Board-ready slides' },
];

const HIGHLIGHTS = [
  { date: 'Apr 7',  label: 'Rock #1 Complete',          detail: '7 SKUs locked · FC 24.6% avg',     color: 'bg-emerald-500', pill: 'bg-emerald-50 text-emerald-700' },
  { date: 'Mar 31', label: 'Strategy Pivot Finalized',  detail: 'Single unified concept confirmed',  color: 'bg-blue-500',    pill: 'bg-blue-50 text-blue-700' },
  { date: 'Mar 15', label: 'SM MOA Site — 9.0/10',      detail: 'Strong GO · demographics pass',     color: 'bg-amber-500',   pill: 'bg-amber-50 text-amber-700' },
  { date: 'Mar 1',  label: 'Unit Economics Approved',   detail: '37% EBITDA · ₱580M Y5 revenue',    color: 'bg-violet-500',  pill: 'bg-violet-50 text-violet-700' },
];

const STAGE_META: Record<string, { label: string; color: string; bg: string }> = {
  'mock-awarded': { label: 'Mock Awarded', color: 'text-orange-700', bg: 'bg-orange-100' },
  awarded:        { label: 'Awarded',      color: 'text-emerald-700', bg: 'bg-emerald-100' },
  identified:     { label: 'Identified',   color: 'text-gray-600',   bg: 'bg-gray-100' },
  evaluated:      { label: 'Evaluated',    color: 'text-blue-700',   bg: 'bg-blue-100' },
  negotiating:    { label: 'Negotiating',  color: 'text-yellow-700', bg: 'bg-yellow-100' },
};

export default function Dashboard() {
  const completedCount = MILESTONES.filter(m => m.status === 'completed').length;
  const progressPct = Math.round((completedCount / MILESTONES.length) * 100);
  const avgFC = MENU_ITEMS.reduce((s, m) => s + m.fcPercent, 0) / MENU_ITEMS.length;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">

      {/* ── HERO HEADER ── */}
      <div className="relative rounded-2xl overflow-hidden bg-[#111827] p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="absolute inset-0 bg-[url('/images/ramen-hero.png')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">In Development · 2026</span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mottainai
          </h1>
          <p className="text-white/50 text-sm mt-1 tracking-wider">Command Center · Nippon Hasha Inc.</p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-4">
          {[
            { value: '7/7', label: 'SKUs Locked', color: 'text-emerald-400' },
            { value: `${avgFC.toFixed(1)}%`, label: 'Avg Food Cost', color: 'text-amber-400' },
            { value: String(PIPELINE_SITES.length), label: 'Pipeline Sites', color: 'text-blue-400' },
            { value: 'Q3–Q4', label: 'Pilot Launch', color: 'text-violet-400' },
          ].map(s => (
            <div key={s.label} className="text-center min-w-[72px]">
              <div className={`text-2xl font-bold ${s.color}`} style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ROCKS PROGRESS ── */}
      <section>
        <h2 className="text-base font-bold text-gray-800 mb-3 uppercase tracking-wider text-xs">EOS Rocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Rock 1 */}
          <div className="bg-white rounded-xl border border-emerald-200 p-5 flex items-center gap-4">
            <div className="relative w-14 h-14 shrink-0">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="22" fill="none" stroke="#d1fae5" strokeWidth="6" />
                <circle cx="28" cy="28" r="22" fill="none" stroke="#10b981" strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 22}`} strokeDashoffset="0" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-emerald-600">100%</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-800">Rock #1 — Menu Dev</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">COMPLETE</span>
              </div>
              <p className="text-xs text-gray-500">7/7 SKUs locked · FC ≤35% · Aoyama sign-off</p>
              <div className="mt-2 h-1.5 rounded-full bg-emerald-100">
                <div className="h-full rounded-full bg-emerald-500 w-full" />
              </div>
            </div>
          </div>

          {/* Rock 2 */}
          <div className="bg-white rounded-xl border border-amber-200 p-5 flex items-center gap-4">
            <div className="relative w-14 h-14 shrink-0">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="22" fill="none" stroke="#fef3c7" strokeWidth="6" />
                <circle cx="28" cy="28" r="22" fill="none" stroke="#f59e0b" strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 22}`}
                  strokeDashoffset={`${2 * Math.PI * 22 * (1 - 0.65)}`}
                  strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-amber-600">65%</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-800">Rock #2 — Expansion</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">ON TRACK</span>
              </div>
              <p className="text-xs text-gray-500">Playbook V1 · SM MOA lease in progress</p>
              <div className="mt-2 h-1.5 rounded-full bg-amber-100">
                <div className="h-full rounded-full bg-amber-400 w-[65%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PIPELINE SITES ── */}
      <section>
        <h2 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">Site Pipeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PIPELINE_SITES.map((site) => {
            const meta = STAGE_META[site.stage] ?? STAGE_META.identified;
            return (
              <div key={site.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide mb-3 ${meta.bg} ${meta.color}`}>
                  {meta.label}
                </div>
                <div className="text-sm font-bold text-gray-800 leading-tight">{site.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{site.location}</div>
                {site.sqm && <div className="text-xs text-gray-500 mt-2">{site.sqm} sqm</div>}
                {site.score && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex-1 h-1 rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${(site.score / 10) * 100}%` }} />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-600">{site.score}/10</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MILESTONE PROGRESS + HIGHLIGHTS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Milestone tracker */}
        <section>
          <h2 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">Milestones</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">{completedCount} of {MILESTONES.length} complete</span>
              <span className="text-xs font-semibold text-gray-700">{progressPct}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 mb-4">
              <div className="h-full rounded-full bg-[#F97316] transition-all" style={{ width: `${progressPct}%` }} />
            </div>
            {MILESTONES.slice(0, 5).map((m) => (
              <div key={m.id} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${
                  m.status === 'completed' ? 'bg-emerald-500' :
                  m.status === 'on-track'  ? 'bg-amber-400' : 'bg-gray-300'
                }`} />
                <span className={`text-sm flex-1 ${m.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {m.title}
                </span>
                <span className="text-[10px] text-gray-400 shrink-0">{m.endDate?.slice(0, 7)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BD Highlights */}
        <section>
          <h2 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">BD Highlights</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex items-start gap-3">
                <div className={`w-1.5 rounded-full shrink-0 self-stretch ${h.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{h.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${h.pill}`}>{h.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── QUICK LINKS ── */}
      <section>
        <h2 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group rounded-xl border ${link.border} bg-gradient-to-b ${link.color} p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow`}
            >
              <span className="text-2xl">{link.emoji}</span>
              <span className="text-xs font-semibold text-gray-800 group-hover:text-[#F97316] transition-colors leading-tight">{link.title}</span>
              <span className="text-[10px] text-gray-400 leading-tight hidden sm:block">{link.desc}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
