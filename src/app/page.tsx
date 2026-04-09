'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV_CARDS = [
  {
    href: '/brand',
    title: 'Brand Identity',
    desc: 'Positioning, personas, and competitive frame',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    href: '/menu',
    title: 'Core Menu',
    desc: '7 SKUs with food cost analysis',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
  },
  {
    href: '/expansion',
    title: 'Expansion Playbook',
    desc: 'Pipeline sites and site scoring',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
  },
  {
    href: '/financials',
    title: 'Financial Model',
    desc: '5-year scenarios and unit economics',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    href: '/roadmap',
    title: 'Execution Roadmap',
    desc: 'Milestones and Aoyama phases',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
  },
  {
    href: '/board-deck',
    title: 'Board Deck',
    desc: 'Presentation-ready slides for BoD',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    ),
  },
];

const PROGRESS_CARDS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Core Menu',
    sub: '7 SKUs Locked',
    pct: 100,
    badge: 'COMPLETE',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expansion Playbook',
    sub: 'SM MOA: 9.0/10',
    pct: 65,
    badge: 'ON TRACK',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Pilot Store',
    sub: 'SM Mall of Asia',
    pct: 20,
    badge: 'IN PROGRESS',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
];

export default function LandingPage() {
  const scrollRevealRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-14px) translateX(8px); }
          66% { transform: translateY(8px) translateX(-6px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.06); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes particle-drift {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        @keyframes brush-fade {
          0%, 100% { opacity: 0; transform: scale(0.95) rotate(-2deg); }
          40%, 60% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .gold-text {
          background: linear-gradient(135deg, #F97316, #F59E0B, #FBBF24, #F97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .progress-bar-fill {
          width: 0%;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-bar-fill.is-visible {
          width: var(--target-width);
        }
      `}</style>

      <div
        style={{ position: 'fixed', inset: 0, zIndex: 200, overflowY: 'auto', backgroundColor: '#0a0a0f' }}
        className="font-sans text-white"
      >

        {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
          style={{ backgroundColor: '#0a0a0f' }}
        >
          {/* Background orbs */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 480, height: 480,
              top: -80, left: -80,
              background: 'radial-gradient(circle, rgba(120,53,15,0.35) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'pulse-glow 6s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 360, height: 360,
              top: 120, right: 40,
              background: 'radial-gradient(circle, rgba(88,28,135,0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'pulse-glow 8s ease-in-out infinite 2s',
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 280, height: 280,
              bottom: 80,
              left: '35%',
              background: 'radial-gradient(circle, rgba(120,53,15,0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'pulse-glow 7s ease-in-out infinite 4s',
            }}
          />

          {/* Ink brush strokes */}
          {[
            { top: '12%', left: '8%', w: 220, h: 60, rotate: '-18deg', delay: '0s', dur: '9s' },
            { top: '30%', right: '6%', w: 180, h: 45, rotate: '12deg', delay: '2s', dur: '11s' },
            { top: '65%', left: '15%', w: 140, h: 35, rotate: '-8deg', delay: '4s', dur: '13s' },
            { top: '75%', right: '18%', w: 200, h: 50, rotate: '20deg', delay: '1s', dur: '10s' },
            { top: '50%', left: '45%', w: 100, h: 28, rotate: '-5deg', delay: '3s', dur: '12s' },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top: b.top,
                left: 'left' in b ? b.left : undefined,
                right: 'right' in b ? b.right : undefined,
                width: b.w,
                height: b.h,
                borderRadius: '50% 40% 60% 30% / 40% 50% 30% 60%',
                background: `radial-gradient(ellipse at 30% 50%, rgba(202,138,4,0.18) 0%, rgba(245,158,11,0.08) 50%, transparent 80%)`,
                transform: `rotate(${b.rotate})`,
                animation: `brush-fade ${b.dur} ease-in-out infinite ${b.delay}`,
              }}
            />
          ))}

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => {
            const sizes = [2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 2];
            const lefts = [8, 15, 23, 31, 40, 47, 55, 62, 70, 78, 85, 12, 28, 44, 58, 72, 88, 20, 50, 65];
            const tops = [85, 75, 90, 80, 88, 70, 82, 92, 76, 84, 68, 95, 72, 87, 78, 93, 65, 89, 74, 81];
            const dur = [8, 10, 7, 12, 9, 11, 8, 13, 10, 9, 7, 11, 8, 10, 12, 9, 7, 11, 8, 10];
            const del = [0, 1.5, 3, 0.5, 2, 4, 1, 2.5, 3.5, 0.8, 1.2, 4.5, 2.8, 0.3, 3.8, 1.8, 5, 2.2, 0.7, 3.2];
            return (
              <div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: sizes[i],
                  height: sizes[i],
                  left: `${lefts[i]}%`,
                  top: `${tops[i]}%`,
                  background: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#F59E0B' : 'rgba(255,255,255,0.4)',
                  animation: `particle-drift ${dur[i]}s ease-in-out infinite ${del[i]}s`,
                }}
              />
            );
          })}

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto" style={{ animation: 'fadeInUp 0.9s ease both' }}>
            {/* Confidential pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs tracking-widest font-medium mb-10"
              style={{ borderColor: 'rgba(202,138,4,0.5)', color: '#F97316', backgroundColor: 'rgba(202,138,4,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
              CONFIDENTIAL — BOARD PORTAL
            </div>

            {/* Main heading */}
            <h1
              className="gold-text leading-none tracking-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                fontWeight: 900,
              }}
            >
              Mottainai
            </h1>
            <h2
              className="text-white font-light tracking-widest mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                letterSpacing: '0.25em',
              }}
            >
              Command Center
            </h2>

            {/* Subtitle */}
            <p
              className="text-sm tracking-widest font-light mb-12"
              style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.18em' }}
            >
              Nippon Hasha Inc.&nbsp;&nbsp;·&nbsp;&nbsp;Brand Development Portal&nbsp;&nbsp;·&nbsp;&nbsp;Confidential 2026
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: '#F97316', color: '#0a0a0f' }}
              >
                <span className="relative z-10">Enter Dashboard</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/board-deck"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
                style={{
                  border: '1px solid rgba(202,138,4,0.4)',
                  color: 'rgba(255,255,255,0.85)',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(202,138,4,0.8)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(202,138,4,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(202,138,4,0.4)';
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.04)';
                }}
              >
                View Board Deck
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ animation: 'fadeInUp 1.2s ease 0.5s both' }}
          >
            <span className="text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em' }}>SCROLL</span>
            <div style={{ animation: 'bounce-y 1.5s ease-in-out infinite' }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="rgba(202,138,4,0.6)" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: STATS BAR ────────────────────────────────────────── */}
        <section className="py-16 px-6" style={{ backgroundColor: '#0d0d14' }}>
          <div
            className="scroll-reveal max-w-5xl mx-auto rounded-2xl p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '50', label: 'Target Stores', sub: 'by 2033' },
                { value: '₱900M', label: 'Revenue Goal', sub: 'Year 5' },
                { value: '37%', label: 'Store EBITDA', sub: 'Base scenario' },
                { value: '9.0/10', label: 'SM MOA Score', sub: 'Strong GO' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                      background: 'linear-gradient(135deg, #F97316, #F59E0B)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-white/80">{stat.label}</span>
                  <span className="text-xs text-white/40">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: PROGRESS CARDS ───────────────────────────────────── */}
        <section className="py-16 px-6" style={{ backgroundColor: '#0a0a0f' }}>
          <div className="max-w-5xl mx-auto">
            <div className="scroll-reveal text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Development Progress
              </h2>
              <p className="text-sm tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>
                AS OF APRIL 2026
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROGRESS_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className="scroll-reveal rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(202,138,4,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(202,138,4,0.15)', border: '1px solid rgba(202,138,4,0.25)' }}
                    >
                      {card.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wider ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>{card.sub}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>Progress</span>
                      <span style={{ color: '#F97316' }}>{card.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div
                        ref={el => { progressBarsRef.current[i] = el; }}
                        className="progress-bar-fill h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #F97316, #F59E0B)',
                          ['--target-width' as string]: `${card.pct}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: NAVIGATION GRID ──────────────────────────────────── */}
        <section className="py-16 px-6" style={{ backgroundColor: '#0d0d14' }}>
          <div className="max-w-5xl mx-auto">
            <div className="scroll-reveal text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore the Portal
              </h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Full access to every section of the Mottainai development stack
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NAV_CARDS.map((card, i) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="scroll-reveal group block rounded-xl p-6 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transitionDelay: `${i * 0.07}s`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(202,138,4,0.35)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(202,138,4,0.15)', border: '1px solid rgba(202,138,4,0.2)' }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F97316">
                        {card.icon}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors duration-200">
                          {card.title}
                        </h3>
                        <svg
                          className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-0.5 shrink-0"
                          fill="none" viewBox="0 0 24 24" stroke="rgba(202,138,4,0.8)" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{card.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: FOOTER ───────────────────────────────────────────── */}
        <footer
          className="py-10 px-6 text-center"
          style={{ backgroundColor: '#080810', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
            NIPPON HASHA INC. &copy; 2026 &mdash; ALL RIGHTS RESERVED &mdash; CONFIDENTIAL
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
            nipponhasha.dev
          </p>
        </footer>

      </div>
    </>
  );
}
