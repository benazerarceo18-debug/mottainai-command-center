import ImageGallery from '@/components/ImageGallery';

const PERSONAS = [
  {
    name: 'Value Seekers',
    age: '25-35',
    description: 'Mall-goers with a ₱150-250 budget seeking quality ramen without the premium price tag.',
  },
  {
    name: 'Japanese Food Enthusiasts',
    age: '20-40',
    description: 'Seeking authentic Japanese quality and flavor. Drawn by the Yushoken pedigree.',
  },
  {
    name: 'Quick-Service Upgraders',
    age: '25-40',
    description: 'Working professionals who want something better than fast food without the wait or price of full-service.',
  },
];

const COMPETITORS = [
  { brand: 'Mottainai', segment: 'Value Ramen', price: '₱150-250', format: 'Fast Casual', differentiator: 'Yushoken DNA at accessible price' },
  { brand: 'Yoshinoya', segment: 'QSR Japanese', price: '₱120-200', format: 'QSR Counter', differentiator: 'Speed, low price' },
  { brand: 'Pepper Lunch', segment: 'Casual Japanese', price: '₱250-400', format: 'DIY Hot Plate', differentiator: 'Interactive cooking' },
  { brand: 'Tokyo Tokyo', segment: 'QSR Japanese', price: '₱100-180', format: 'QSR', differentiator: 'Filipino-adapted Japanese' },
  { brand: 'Ramen Nagi', segment: 'Premium Ramen', price: '₱350-500', format: 'Full Service', differentiator: 'Customization, premium' },
];

const NON_NEGOTIABLES = [
  'Single unified concept (no tiers)',
  'Price band ₱150-250',
  'Friendly, inclusive tone (no chef ego)',
  'Endorsed brand model ("By the makers of Yushoken")',
  'Sustainability = operational only, not branded',
  'No delivery platform exclusivity',
  'Delivery = 30-40% of revenue',
];

const TONE_DO = ['Friendly', 'Welcoming', 'Inclusive', 'Value-forward', 'Quality-assured'];
const TONE_DONT = ['Elitist', 'Exclusive', 'Chef-ego', 'Premium-only messaging'];

export default function BrandPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Section 1: Brand Positioning */}
      <section className="bg-white rounded-xl shadow-sm border border-border p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Brand Identity</h1>
          <p className="text-text-secondary mt-3 max-w-3xl">
            Mottainai is NHI&apos;s standalone value-segment Japanese ramen concept, delivering
            authentic ramen crafted with Yushoken&apos;s expertise at an accessible price point of
            ₱150-250.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg bg-bg p-4">
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">Brand Architecture</p>
            <p className="text-sm text-text-primary font-semibold">&ldquo;By the makers of Yushoken&rdquo; &mdash; endorsed model</p>
          </div>
          <div className="rounded-lg bg-bg p-4">
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">Tagline</p>
            <p className="text-sm text-text-primary font-semibold">Zero Waste. Full Flavor.</p>
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
            Not competitors: Mendokoro Ramenba, Yushoken (sister brands, premium segment ₱350-500)
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
