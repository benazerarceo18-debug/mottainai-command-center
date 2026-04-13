import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';

const PERSONAS = [
  {
    name: 'Value Seekers',
    age: '25-35',
    description: 'Mall-goers with a ₱250-450 budget seeking premium Japanese fast casual without the full-service price.',
  },
  {
    name: 'Japanese Food Enthusiasts',
    age: '20-40',
    description: 'Seeking authentic Japanese quality and flavor. Drawn by craft-level ramen at accessible prices.',
  },
  {
    name: 'Quick-Service Upgraders',
    age: '25-40',
    description: 'Working professionals who want something better than fast food without the wait or price of full-service.',
  },
];

const COMPETITORS = [
  { brand: 'Mottainai', segment: 'Value Fast Casual', price: '₱250-450', format: 'Fast Casual Inline', differentiator: 'Automation-driven service, "Uniqlo of Ramen"' },
  { brand: 'Tokyo Tokyo', segment: 'QSR Japanese', price: '₱120-200', format: 'QSR Counter', differentiator: 'Filipino-adapted Japanese, rice bowls' },
  { brand: 'Marugame Udon', segment: 'Fast Casual Japanese', price: '₱180-280', format: 'Cafeteria-style', differentiator: 'Udon specialist, self-serve' },
  { brand: 'Ramen Kuroda', segment: 'Casual Ramen', price: '₱250-380', format: 'Casual dining', differentiator: 'Value ramen chain' },
  { brand: 'Yoshinoya', segment: 'QSR Japanese', price: '₱120-200', format: 'QSR Counter', differentiator: 'Gyudon-focused, no ramen' },
];

const NON_NEGOTIABLES = [
  'Single unified concept (no tiers)',
  'Price band ₱250-450',
  'Friendly, inclusive tone (no chef ego)',
  'Independent brand — standalone identity',
  'Sustainability = operational only, not branded',
  'No delivery platform exclusivity',
  'Delivery = 30-40% of revenue',
];

const TONE_DO = ['Friendly', 'Welcoming', 'Inclusive', 'Value-forward', 'Quality-assured'];
const TONE_DONT = ['Elitist', 'Exclusive', 'Chef-ego', 'Premium-only messaging'];

export default function BrandPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-end">
        <Link
          href="/brand-guidelines"
          className="border border-[#F97316] text-[#F97316] px-4 py-2 rounded-lg text-sm hover:bg-[#F97316]/10 transition-colors flex items-center gap-2"
        >
          Brand Guidelines
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
      {/* Section 0: Uniqlo of Ramen */}
      <section className="bg-gradient-to-br from-[#111827] to-[#1a2744] rounded-xl shadow-sm border border-[#F97316]/20 p-6 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#F97316]/20 text-[#F97316] text-xs font-bold tracking-wider uppercase">Strategic Frame</span>
        </div>
        <h2 className="text-2xl font-bold text-white">
          The Uniqlo of Ramen
        </h2>
        <p className="text-white/60 text-sm max-w-2xl">
          Mass market, but embodying critical values. An experience designed for everyone, without being designed down for anyone. Broad appeal without dilution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
          {[
            { value: 'Customer Focus', desc: 'Every decision starts with the guest experience' },
            { value: 'Continuous Innovation / Kaizen', desc: 'Relentless improvement across operations and product' },
            { value: 'Quality', desc: 'Craft-level standards at mass-market scale' },
          ].map((v) => (
            <div key={v.value} className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-sm font-semibold text-[#F97316]">{v.value}</p>
              <p className="text-xs text-white/40 mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-white/10">
          <p className="text-xs text-white/30 uppercase tracking-wider">Target Launch</p>
          <p className="text-sm font-bold text-white">Q3 2027 (July) · SM Mall of Asia</p>
        </div>
      </section>

      {/* Section 1: Brand Positioning */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Brand Identity</h1>
          <p className="text-text-secondary mt-3 max-w-3xl">
            Mottainai is a mass-market fast-casual Japanese ramen concept — accessible decadence at ₱250–450.
            80–90% of the premium ramen experience at 50% of the cost. Built for diners who want
            premium flavor without the premium friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg bg-bg p-4">
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">Brand Architecture</p>
            <p className="text-sm text-text-primary font-semibold">Independent brand</p>
          </div>
          <div className="rounded-lg bg-bg p-4">
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">Tagline</p>
            <p className="text-sm text-text-primary font-semibold">Flavor Without the Fuss.</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-text-primary mb-3">Target Personas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PERSONAS.map((p) => (
              <div key={p.name} className="rounded-xl border border-border p-5">
                <div className="w-10 h-10 rounded-lg bg-gold-muted flex items-center justify-center text-gold font-bold text-sm mb-3">
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{p.name}</h3>
                <p className="text-xs text-text-muted mt-1">Age: {p.age}</p>
                <p className="text-sm text-text-secondary mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Visual Concept Gallery */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6">
        <h2 className="text-xl font-bold text-text-primary mb-4">Visual Concept Gallery</h2>
        <ImageGallery />
      </section>

      {/* Section 3: Competitive Positioning */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6">
        <h2 className="text-xl font-bold text-text-primary mb-4">Competitive Positioning</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-text-primary">Brand</th>
                <th className="py-3 pr-4 font-semibold text-text-primary">Segment</th>
                <th className="py-3 pr-4 font-semibold text-text-primary">Price Range</th>
                <th className="py-3 pr-4 font-semibold text-text-primary">Format</th>
                <th className="py-3 font-semibold text-text-primary">Differentiator</th>
              </tr>
            </thead>
            <tbody>
              {COMPETITORS.map((c) => (
                <tr
                  key={c.brand}
                  className={`border-b border-border/50 ${c.brand === 'Mottainai' ? 'bg-gold-muted font-medium' : ''}`}
                >
                  <td className="py-3 pr-4 text-text-primary">{c.brand}</td>
                  <td className="py-3 pr-4 text-text-secondary">{c.segment}</td>
                  <td className="py-3 pr-4 text-text-secondary">{c.price}</td>
                  <td className="py-3 pr-4 text-text-secondary">{c.format}</td>
                  <td className="py-3 text-text-secondary">{c.differentiator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-danger/5 border border-danger/10">
          <p className="text-xs text-danger font-medium">
            Not competitors: Mendokoro Ramenba, Yushoken (premium segment ₱350-500 — different market)
          </p>
        </div>
      </section>

      {/* Section 4: Brand Non-Negotiables */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6">
        <h2 className="text-xl font-bold text-text-primary mb-4">Brand Non-Negotiables</h2>
        <div className="space-y-3">
          {NON_NEGOTIABLES.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-text-primary">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Tone & Voice Guidelines */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6">
        <h2 className="text-xl font-bold text-text-primary mb-4">Tone &amp; Voice Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-success/20 bg-success/5 p-5">
            <p className="text-xs text-success font-semibold uppercase tracking-wider mb-3">Do</p>
            <div className="flex flex-wrap gap-2">
              {TONE_DO.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-danger/20 bg-danger/5 p-5">
            <p className="text-xs text-danger font-semibold uppercase tracking-wider mb-3">Don&apos;t</p>
            <div className="flex flex-wrap gap-2">
              {TONE_DONT.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-danger/10 text-danger text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
