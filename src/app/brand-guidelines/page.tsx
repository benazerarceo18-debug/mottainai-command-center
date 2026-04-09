'use client';

import Link from 'next/link';
import { useEffect, useRef, type ReactNode } from 'react';

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

function RevealSection({ children, className = '', slideLeft = false }: { children: ReactNode; className?: string; slideLeft?: boolean }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: slideLeft ? 'translateX(-32px) scale(0.97)' : 'translateY(32px) scale(0.97)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </div>
  );
}

function ColorSwatch({ name, hex, usage, bordered = false }: { name: string; hex: string; usage: string; bordered?: boolean }) {
  const ref = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
      style={{
        opacity: 0,
        transform: 'translateY(20px) scale(0.95)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div
        className={`h-32 ${bordered ? 'border-2 border-gray-200' : ''}`}
        style={{ backgroundColor: hex }}
      />
      <div className="bg-white p-4">
        <p className="text-sm font-semibold text-[#1C1917]">{name}</p>
        <p className="text-xs text-gray-500 font-mono mt-0.5">{hex}</p>
        <p className="text-xs text-gray-400 mt-1">{usage}</p>
      </div>
    </div>
  );
}

const TONE_DO = [
  'Warm and welcoming without being fake',
  'Direct — say what you mean',
  'Confident without arrogance',
  'Value-forward (quality for the price)',
  'Inclusive language (everyone\'s ramen)',
];

const TONE_DONT = [
  'Chef ego ("exclusive", "artisanal", "limited")',
  'Discount language ("promo", "budget", "cheap")',
  'Cold corporate tone',
  'Compare to or compete with Mendokoro / Yushoken',
  'Use "affordable" as a standalone descriptor',
  'Intimidating ramen speak (no one should feel wrong for how they order)',
];

const NON_NEGOTIABLES = [
  'Single unified concept (no tiers)',
  'Price band ₱250-450',
  '"By the makers of Yushoken" always',
  'No promo, no discount',
  'Inline dining format only',
  'Sustainability = operational, never branded',
];

export default function BrandGuidelinesPage() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer-text {
          background: linear-gradient(135deg, #CA8A04, #F59E0B, #FBBF24, #CA8A04);
          background-size: 200% 200%;
          animation: shimmer 4s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

        {/* Section 1: Cover */}
        <section className="h-screen bg-[#0f0f1a] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #CA8A04, transparent 60%), radial-gradient(circle at 70% 50%, #1a1a2e, transparent 60%)' }}
          />
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <div className="text-4xl text-[#CA8A04] mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              勿
            </div>
            <div className="w-24 h-px bg-[#CA8A04]/40 mb-8" />
            <h1
              className="shimmer-text text-8xl md:text-[120px] font-bold tracking-widest leading-none"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              MOTTAINAI
            </h1>
            <div className="w-24 h-px bg-[#CA8A04]/40 my-8" />
            <p className="text-white/60 text-xl tracking-[0.3em] uppercase">Brand Guidelines</p>
            <p className="text-white/30 text-sm mt-3">Nippon Hasha Inc. — 2026</p>
          </div>
          <div className="absolute bottom-6 left-6 text-white/20 text-xs tracking-wider">
            V1.0 — April 2026
          </div>
          <div className="absolute bottom-8 right-8">
            <Link href="/brand" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              ← Back to Brand
            </Link>
          </div>
        </section>

        {/* Section 2: Brand Essence */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-6">
                01 — BRAND ESSENCE
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold text-[#1C1917] mb-16"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                Flavor Without<br />the Fuss.
              </h2>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  num: '01',
                  title: 'Value with Integrity',
                  body: '₱250-450. 80–90% of the premium ramen experience at 50% of the cost. Never cheap — always honest.',
                },
                {
                  num: '02',
                  title: 'Made For Me',
                  body: 'Kaiten-inspired customization. Build your bowl, choose your combos. Japanese fast casual designed around you.',
                },
                {
                  num: '03',
                  title: 'Zero Friction',
                  body: 'Touchscreen ordering, semi-automation, simplified flow. The mottainai mindset: nothing wasted — not your time, not your money.',
                },
              ].map((pillar) => (
                <RevealSection key={pillar.num}>
                  <div>
                    <p className="text-3xl font-bold text-[#CA8A04]/30 mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      {pillar.num}
                    </p>
                    <h3 className="text-lg font-bold text-[#1C1917] mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.body}</p>
                  </div>
                </RevealSection>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-[#CA8A04] via-[#CA8A04]/30 to-transparent" />
          </div>
        </section>

        {/* Section 3: Identity System */}
        <section className="py-24" style={{ backgroundColor: '#F5F4F2' }}>
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-12">
                02 — IDENTITY SYSTEM
              </p>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <RevealSection slideLeft>
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full bg-[#1a1a2e] flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-[#CA8A04] text-8xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      勿
                    </span>
                  </div>
                  <p className="text-[#1a1a2e] text-2xl font-bold tracking-[0.3em]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    MOTTAINAI
                  </p>
                  <p className="text-[#CA8A04]/80 text-xs tracking-wide mt-2">By the makers of Yushoken</p>

                  <div className="flex gap-3 mt-8">
                    {[
                      { bg: '#1a1a2e', label: 'Full Color' },
                      { bg: '#1a1a2e', label: 'Navy' },
                      { bg: '#CA8A04', label: 'Gold' },
                      { bg: '#0f0f1a', border: true, label: 'Reversed' },
                    ].map((v) => (
                      <div key={v.label} className="flex flex-col items-center gap-1">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${v.border ? 'border-2 border-[#1a1a2e]' : ''}`}
                          style={{ backgroundColor: v.bg }}
                        >
                          <span style={{ color: v.label === 'Gold' ? '#fff' : '#CA8A04', fontFamily: "'Noto Serif JP', serif", fontSize: '16px' }}>勿</span>
                        </div>
                        <span className="text-[10px] text-gray-400">{v.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>

              <RevealSection>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-2">Clear Space</p>
                    <p className="text-sm text-gray-600">Minimum clear space = height of 勿 character on all sides</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-2">Endorsed Model</p>
                    <p className="text-sm text-gray-600">Always appears with NHI or Yushoken attribution</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-2">Usage Variants</p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>Full color (navy + gold)</li>
                      <li>Single color navy</li>
                      <li>Single color gold</li>
                      <li>Reversed (white on navy)</li>
                    </ul>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* Section 4: Color Palette */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-12">
                03 — COLOR PALETTE
              </p>
            </RevealSection>

            <div className="mb-8 p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">Color Palette Note</p>
              <p className="text-sm text-amber-900">Brand colors TBD — final palette to be defined with brand designer. Per brief: energetic accents (2–3 bold colors) on clean neutrals. Current: NHI corporate palette (navy + gold) as placeholder.</p>
            </div>

            <div className="mb-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">Primary</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ColorSwatch name="Mottainai Navy" hex="#1a1a2e" usage="Primary bg, navigation, headers" />
                <ColorSwatch name="Mottainai Gold" hex="#CA8A04" usage="CTAs, accents, highlights" />
                <ColorSwatch name="Deep Amber" hex="#F59E0B" usage="Hover states, energy, warmth" />
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">Supporting</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ColorSwatch name="Warm Cream" hex="#FAFAF9" usage="Page bg, cards, backgrounds" bordered />
                <ColorSwatch name="Stone" hex="#44403C" usage="Body text, secondary elements" />
                <ColorSwatch name="White" hex="#FFFFFF" usage="Cards, surfaces, reversed text" bordered />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Typography */}
        <section className="py-24" style={{ backgroundColor: '#F5F4F2' }}>
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-12">
                04 — TYPOGRAPHY
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <RevealSection slideLeft>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-4">Noto Serif JP — Primary</p>
                  <p className="text-6xl font-bold text-[#1C1917] mb-6 leading-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    あいうえお<br />ABCDEFG
                  </p>
                  <div className="space-y-2 mb-4">
                    {[['400', 'Regular'], ['500', 'Medium'], ['600', 'SemiBold'], ['700', 'Bold']].map(([w, l]) => (
                      <p key={w} className="text-sm text-gray-500" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: w }}>
                        {w} {l} — The quick brown fox
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-3">
                    Headings h1–h4, brand statements, hero text, slide titles
                  </p>
                </div>
              </RevealSection>

              <RevealSection>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-4">Noto Sans JP — Secondary</p>
                  <p className="text-2xl text-[#1C1917] mb-6 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    Mottainai serves authentic Japanese ramen
                  </p>
                  <div className="space-y-2 mb-4">
                    {[['300', 'Light'], ['400', 'Regular'], ['500', 'Medium'], ['700', 'Bold']].map(([w, l]) => (
                      <p key={w} className="text-sm text-gray-500" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: w }}>
                        {w} {l} — The quick brown fox
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-3">
                    Body copy, UI labels, captions, data, navigation
                  </p>
                </div>
              </RevealSection>
            </div>

            <RevealSection>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="text-xs text-[#CA8A04] font-semibold uppercase tracking-wider mb-8">Type Hierarchy</p>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-3">h1</span>
                    <span className="text-5xl font-bold text-[#1C1917]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      Flavor Without the Fuss.
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-3">h2</span>
                    <span className="text-3xl font-semibold text-[#1C1917]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      50 Stores by 2033
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-3">h3</span>
                    <span className="text-xl font-medium text-[#1C1917]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      Unit Economics
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-3">body</span>
                    <span className="text-base text-gray-600" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      Mottainai is NHI&apos;s Japanese fast casual concept — accessible decadence at ₱250–450. Built for diners who want premium flavor without the premium friction.
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-3">label</span>
                    <span className="text-xs tracking-[0.3em] uppercase font-medium text-[#CA8A04]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      BRAND ESSENCE
                    </span>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Section 6: Voice & Tone */}
        <section className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-6">
                05 — VOICE &amp; TONE
              </p>
              <h2
                className="text-5xl font-bold text-[#1C1917] mb-16"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                Friendly. Honest. Grounded.
              </h2>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <RevealSection slideLeft>
                <div className="rounded-2xl border border-green-100 bg-green-50/50 p-8 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs text-green-700 font-bold uppercase tracking-wider">DO</p>
                  </div>
                  <ul className="space-y-3">
                    {TONE_DO.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                        <span className="text-sm text-green-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>

              <RevealSection>
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-xs text-red-700 font-bold uppercase tracking-wider">DON'T</p>
                  </div>
                  <ul className="space-y-3">
                    {TONE_DONT.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                        <span className="text-sm text-red-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            </div>

            <RevealSection>
              <div className="space-y-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-6">Tone Examples</p>
                {[
                  {
                    wrong: 'Experience the exclusive art of ramen.',
                    right: 'Real ramen, real price.',
                  },
                  {
                    wrong: 'Affordable Japanese dining!',
                    right: 'Yushoken quality at ₱250.',
                  },
                  {
                    wrong: 'We are committed to providing...',
                    right: 'Every bowl is made to order.',
                  },
                ].map((ex, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex items-center gap-3">
                      <span className="text-red-400 text-xs font-bold shrink-0">✕</span>
                      <p className="text-sm text-gray-400 line-through">{ex.wrong}</p>
                    </div>
                    <div className="rounded-xl bg-[#CA8A04]/5 border border-[#CA8A04]/20 p-4 flex items-center gap-3">
                      <span className="text-[#CA8A04] text-xs font-bold shrink-0">✓</span>
                      <p className="text-sm text-[#1C1917] font-medium">{ex.right}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Section 7: Applications */}
        <section className="bg-[#0f0f1a] py-24">
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-[#CA8A04] tracking-[0.3em] uppercase font-medium mb-12">
                06 — APPLICATIONS
              </p>
            </RevealSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: 'Store Signage',
                  content: (
                    <div className="bg-[#1a1a2e] border border-[#CA8A04]/30 rounded-lg px-6 py-4 text-center">
                      <p className="text-[#CA8A04] font-bold tracking-[0.3em]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                        MOTTAINAI
                      </p>
                      <p className="text-white/40 text-[10px] tracking-wide mt-1">By the makers of Yushoken</p>
                    </div>
                  ),
                },
                {
                  label: 'Packaging',
                  content: (
                    <div className="w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-[#CA8A04]/40 flex items-center justify-center">
                      <span className="text-[#CA8A04] text-3xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>勿</span>
                    </div>
                  ),
                },
                {
                  label: 'Digital Menu',
                  content: (
                    <div className="w-24 border border-white/20 rounded-xl overflow-hidden">
                      <div className="bg-[#1a1a2e] px-2 py-1 text-center">
                        <p className="text-[#CA8A04] text-[8px] tracking-widest">MOTTAINAI</p>
                      </div>
                      <div className="bg-white/5 p-2 space-y-1.5">
                        {['Tonkotsu', 'Shoyu', 'Shio'].map((r) => (
                          <div key={r} className="flex justify-between">
                            <span className="text-white/60 text-[8px]">{r}</span>
                            <span className="text-[#CA8A04] text-[8px]">₱250</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  label: 'Uniform / Apron',
                  content: (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#CA8A04]/30 flex items-center justify-center">
                        <span className="text-[#CA8A04] text-xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>勿</span>
                      </div>
                      <div className="w-16 h-20 rounded-sm bg-[#1a1a2e] border border-white/10 flex items-center justify-center">
                        <span className="text-[#CA8A04]/60 text-[8px] tracking-widest" style={{ fontFamily: "'Noto Serif JP', serif" }}>MTN</span>
                      </div>
                    </div>
                  ),
                },
              ].map((app) => (
                <RevealSection key={app.label}>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 h-48 flex flex-col items-center justify-center gap-4">
                    {app.content}
                    <p className="text-white/40 text-xs tracking-wider">{app.label}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Non-Negotiables */}
        <section className="bg-[#CA8A04] py-16">
          <div className="max-w-5xl mx-auto px-8">
            <RevealSection>
              <p className="text-xs text-white/60 tracking-[0.3em] uppercase font-medium mb-4">
                07 — NON-NEGOTIABLES
              </p>
              <h2
                className="text-4xl font-bold text-[#1a1a2e] mb-12"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                These rules are permanent.
              </h2>
            </RevealSection>
            <RevealSection>
              <div className="flex flex-wrap gap-3">
                {NON_NEGOTIABLES.map((rule) => (
                  <span
                    key={rule}
                    className="bg-white text-[#1a1a2e] text-sm font-semibold px-5 py-3 rounded-full shadow-sm"
                  >
                    {rule}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Section 9: Footer */}
        <section className="bg-[#1a1a2e] py-16">
          <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm">
                MOTTAINAI — Brand Guidelines V1.0 — April 2026
              </p>
              <p className="text-white/30 text-xs mt-1">Nippon Hasha Inc. — Confidential</p>
            </div>
            <Link
              href="/brand"
              className="text-[#CA8A04] text-sm hover:text-[#F59E0B] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Command Center
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
