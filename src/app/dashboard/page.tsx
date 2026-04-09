import Link from 'next/link';
import KPICard from '@/components/KPICard';
import BDHighlights from '@/components/BDHighlights';
import { BRAND, PIPELINE_SITES, MILESTONES } from '@/lib/data';
import type { KPICardData, BDHighlight } from '@/lib/types';

const kpis: KPICardData[] = [
  {
    label: 'Rock #1 — Menu Dev',
    value: 'Complete',
    status: 'success',
    description: '7/7 SKUs locked, FC ≤35%',
  },
  {
    label: 'Rock #2 — Expansion',
    value: 'On Track',
    status: 'warning',
    description: 'Playbook V1 in progress',
  },
  {
    label: 'Pipeline Sites',
    value: String(PIPELINE_SITES.length),
    status: 'info',
    description: '1 evaluated, 2 identified',
  },
  {
    label: 'Target FC%',
    value: '≤35%',
    status: 'success',
    description: '₱70/bowl avg cost',
  },
];

const highlights: BDHighlight[] = [
  { id: '1', date: '2026-04-07', title: 'Rock #1 Complete — Core Menu Locked', content: 'All 7 core SKUs finalized with food cost validated at ≤35%. Aoyama-san signed off on broth specifications.', category: 'milestone' },
  { id: '2', date: '2026-03-31', title: 'Strategy Pivot Finalized', content: 'Board approved single unified concept. 3-tier format permanently dropped. Simplifies scaling and franchising.', category: 'brand' },
  { id: '3', date: '2026-03-15', title: 'SM MOA Site Validated', content: 'Site scoring 9.0/10 — STRONG GO. Demographics, traffic, and competition all exceed thresholds.', category: 'expansion' },
  { id: '4', date: '2026-03-01', title: 'Unit Economics Model Approved', content: 'Base scenario: 24 stores by Y5, ₱580M revenue, 37% EBITDA margin. Board sign-off secured.', category: 'financial' },
  { id: '5', date: '2026-02-15', title: 'Aoyama Phase 1 Complete', content: 'Foundation recipes for Shoyu, Shio, and Miso broths delivered. Noodle specs locked.', category: 'deal' },
];

const quickLinks = [
  { href: '/brand', title: 'Brand Identity', description: 'Positioning, personas, and competitive frame', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { href: '/menu', title: 'Core Menu', description: '7 SKUs with food cost analysis', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { href: '/expansion', title: 'Expansion Playbook', description: 'Pipeline sites and site scoring', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { href: '/financials', title: 'Financial Model', description: '5-year scenarios and unit economics', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { href: '/roadmap', title: 'Roadmap', description: 'Milestones and Aoyama phases', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
  { href: '/board-deck', title: 'Board Deck', description: 'Presentation-ready slides for BoD', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
];

export default function Dashboard() {
  const completedMilestones = MILESTONES.filter((m) => m.status === 'completed').length;
  const totalMilestones = MILESTONES.length;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
          Dashboard
        </h1>
        <p className="text-text-secondary mt-1">Mottainai brand development at a glance</p>
      </div>

      {/* KPI Cards — 2x2 desktop, 1 col mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* BD Highlights */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          BD Highlights
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-border p-6">
          <BDHighlights highlights={highlights} />
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-xl border border-border p-5 transition-shadow hover:shadow-md group"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-muted flex items-center justify-center shrink-0 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-gold transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
