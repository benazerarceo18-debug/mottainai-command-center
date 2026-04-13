import Image from 'next/image';
import Link from 'next/link';
import PipelineTracker from '@/components/PipelineTracker';
import SiteScoringTool from '@/components/SiteScoringTool';
import PlaybookAccordion from '@/components/PlaybookAccordion';

const PIPELINE_METRICS = [
  { value: '10+', label: 'Sites Target', color: 'bg-[#111827] text-white' },
  { value: '4',   label: 'Site Visits',  color: 'bg-emerald-600 text-white' },
  { value: '1',   label: 'Lesson Form',  color: 'bg-amber-500 text-white' },
  { value: '5',   label: 'Prospects',    color: 'bg-blue-600 text-white' },
];

const EVALUATED_SITES = [
  {
    name: 'SM Mega Mall',
    location: 'Mandaluyong City',
    siteClass: 'Premium — Class A',
    notes: 'Evaluated: Inline mall units across multiple levels. High foot traffic corridor identified. Strong profile.',
  },
  {
    name: 'SM North EDSA',
    location: 'Quezon City',
    siteClass: 'Premium — Class A',
    notes: 'Key North Metro anchor. Assessed GFA availability and proximity to new anchor dining corridor.',
  },
  {
    name: 'SM Fairview',
    location: 'Quezon City',
    siteClass: 'Suburban — High Traffic',
    notes: 'North QC catchment area. Strong alignment with Mottainai target mass-market profile.',
  },
  {
    name: 'Robinsons Ermita',
    location: 'Manila',
    siteClass: 'Mid-Tier — Urban Core',
    notes: 'Urban-core viability. Evaluated for accessibility and inline unit positioning.',
  },
];

const LANDLORD_CARDS = [
  { name: 'SM Prime', share: '70%', stores: '40 stores', color: 'bg-navy text-white' },
  { name: 'Ayala Land', share: '16%', stores: '8 stores', color: 'bg-gold/10 text-gold' },
  { name: 'Robinsons', share: '10%', stores: '5 stores', color: 'bg-gray-100 text-gray-700' },
];

export default function ExpansionPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1
            className="text-2xl font-bold text-text-primary"
                     >
            Expansion Playbook
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Rock #2 — Complete | 50-Store Roadmap by 2033
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/sites"
            className="bg-white text-navy border border-border px-4 py-2 rounded-lg text-sm font-medium hover:border-gold transition-colors"
          >
            2 Tested Locations →
          </Link>
          <Link
            href="/expansion-deck"
            className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-light transition-colors"
          >
            Board Presentation Mode →
          </Link>
        </div>
      </div>

      {/* Pipeline Metrics */}
      <section>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Pipeline Metrics</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {PIPELINE_METRICS.map((m) => (
            <div key={m.label} className={`rounded-xl p-5 flex flex-col items-center justify-center text-center ${m.color}`}>
              <span className="text-3xl font-bold">{m.value}</span>
              <span className="text-xs font-medium mt-1 opacity-80 uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluated Sites */}
      <section>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Evaluated Locations</p>
        <p className="text-xs text-text-muted mb-4">All sites evaluated specifically as candidate locations for the Mottainai Project Store</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {EVALUATED_SITES.map((site) => (
            <div key={site.name} className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-text-primary">{site.name}</p>
                  <p className="text-xs text-text-muted">{site.location}</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 shrink-0 ml-2">{site.siteClass}</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{site.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline Tracker */}
      <section>
        <PipelineTracker />
      </section>

      {/* Playbook Appendices */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          Playbook Appendices
        </h2>
        <PlaybookAccordion />
      </section>

      {/* Site Scoring Tool */}
      <section>
        <SiteScoringTool />
      </section>

      {/* Store Design */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          Store Design — W-Shaped Ramen Counter
        </h2>
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <Image
            src="/images/mottainai-counter-layout.jpg"
            alt="Technical Diagram: Mottainai W-Shaped Ramen Counter Layout — dual counter pods with 1.2m robot/staff clearance channels, White Corian with Ash Wood surfaces, automated assembly theater, conveyor terminus, 4-6 diner seats per pod"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border">
            {[
              { label: 'Counter Material', value: 'White Corian / Ash Wood' },
              { label: 'Eating Surface', value: '600mm Deep Corian' },
              { label: 'Robot Clearance', value: '1.2m per channel' },
              { label: 'Seating per Pod', value: '4–6 diners' },
            ].map((spec) => (
              <div key={spec.label}>
                <p className="text-xs text-text-muted uppercase tracking-wider">{spec.label}</p>
                <p className="text-sm font-semibold text-text-primary mt-0.5">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SM MOA Case Study */}
      <section className="bg-navy rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
            Case Study
          </span>
          <h2
            className="text-xl font-bold"
                     >
            SM Mall of Asia — Pilot Site
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-2xl font-bold text-gold">9.0/10</p>
            <p className="text-white/50 text-xs mt-0.5">Site Score — STRONG GO</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">65 sqm</p>
            <p className="text-white/50 text-xs mt-0.5">SM Prime, Pasay City</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">35% NOI</p>
            <p className="text-white/50 text-xs mt-0.5">8-10 month payback</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{'\u20B1'}10–15M</p>
            <p className="text-white/50 text-xs mt-0.5">Capex | Lease negotiation phase</p>
          </div>
        </div>
      </section>

      {/* Landlord Portfolio Strategy */}
      <section>
        <h2
          className="text-xl font-bold text-text-primary mb-4"
                 >
          Landlord Portfolio Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LANDLORD_CARDS.map((l) => (
            <div
              key={l.name}
              className={`rounded-xl p-6 border border-border ${l.color}`}
            >
              <p className="text-sm font-medium opacity-70">{l.name}</p>
              <p
                className="text-3xl font-bold mt-2"
                             >
                {l.share}
              </p>
              <p className="text-sm mt-1 opacity-70">{l.stores}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
