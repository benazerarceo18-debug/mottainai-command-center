'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const FOOD_ITEMS = [
  { emoji: '🍜', label: 'Konbu Sui' },
  { emoji: '🌶️', label: 'Sanratanmen' },
  { emoji: '🍣', label: 'Tori Sushi' },
  { emoji: '🍳', label: 'Chahan' },
  { emoji: '🥟', label: 'Chimaki' },
  { emoji: '🥡', label: 'Gyoza' },
  { emoji: '🍡', label: 'Daifuku' },
  { emoji: '🍤', label: 'Ebi Fry' },
];

class SteamParticle {
  x = 0; y = 0; size = 0; speedY = 0; speedX = 0;
  opacity = 0; life = 0; maxLife = 0; wobbleSpeed = 0;
  wobbleAmp = 0; startX = 0; growth = 0; currentOpacity = 0;
  canvasH: number;

  constructor(canvasH: number) {
    this.canvasH = canvasH;
    this.reset();
  }

  reset() {
    this.x = 180 + Math.random() * 60;
    this.y = this.canvasH - 20;
    this.size = Math.random() * 20 + 10;
    this.speedY = -(Math.random() * 0.8 + 0.3);
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.15 + 0.05;
    this.life = 0;
    this.maxLife = Math.random() * 200 + 150;
    this.wobbleSpeed = Math.random() * 0.02 + 0.01;
    this.wobbleAmp = Math.random() * 30 + 10;
    this.startX = this.x;
    this.growth = Math.random() * 0.08 + 0.03;
  }

  update() {
    this.life++;
    this.y += this.speedY;
    this.x = this.startX + Math.sin(this.life * this.wobbleSpeed) * this.wobbleAmp;
    this.size += this.growth;
    const progress = this.life / this.maxLife;
    this.currentOpacity = progress < 0.2
      ? this.opacity * (progress / 0.2)
      : this.opacity * (1 - (progress - 0.2) / 0.8);
    if (this.life >= this.maxLife) this.reset();
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, `rgba(180, 190, 210, ${this.currentOpacity})`);
    gradient.addColorStop(1, `rgba(180, 190, 210, 0)`);
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const orbitItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const orbitAngleRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Steam particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 350;

    const particles: SteamParticle[] = [];
    for (let i = 0; i < 25; i++) {
      const p = new SteamParticle(canvas.height);
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(ctx); });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Orbit animation
  useEffect(() => {
    const orbitRadius = 260;
    const centerX = 280; // half of 560
    const centerY = 280;

    let raf: number;
    const animate = (timestamp: number) => {
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      orbitAngleRef.current += delta * 0.00012;

      orbitItemsRef.current.forEach((el, i) => {
        if (!el) return;
        const angleOffset = (i / FOOD_ITEMS.length) * Math.PI * 2;
        const angle = orbitAngleRef.current + angleOffset;

        const rx = orbitRadius;
        const ry = orbitRadius * 0.38;
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * ry;

        const depth = (Math.sin(angle) + 1) / 2;
        const scale = 0.65 + depth * 0.45;
        const opacity = 0.45 + depth * 0.55;
        const zIndex = Math.round(depth * 10);

        el.style.left = (centerX + x - 32) + 'px';
        el.style.top = (centerY + y - 32) + 'px';
        el.style.transform = `scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(zIndex);
        el.style.filter = depth < 0.25 ? 'blur(1.5px) brightness(0.6)' : 'none';
      });

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;

    const layers = sceneRef.current?.querySelectorAll<HTMLElement>('[data-depth]');
    layers?.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || '0.02');
      const moveX = cx * depth * 100;
      const moveY = cy * depth * 60;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }, []);

  // Ambient floating particles
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 8 + 6;
      const size = Math.random() * 3 + 1;
      particle.style.left = startX + 'px';
      particle.style.bottom = '-10px';
      particle.style.opacity = String(Math.random() * 0.4 + 0.1);
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.background = 'rgba(123, 143, 199, 0.3)';
      particle.style.transition = `all ${duration}s linear`;
      scene.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.transform = `translateY(-${window.innerHeight + 50}px) translateX(${(Math.random() - 0.5) * 200}px)`;
        particle.style.opacity = '0';
      });

      setTimeout(() => particle.remove(), duration * 1000);
    };

    const interval = setInterval(createParticle, 600);
    for (let i = 0; i < 8; i++) setTimeout(createParticle, i * 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes containerReveal {
          0% { opacity: 0; transform: translateY(80px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes floatBowl {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-12px) rotate(0.3deg); }
          75% { transform: translateY(6px) rotate(-0.3deg); }
        }
        @keyframes steamFadeIn { to { opacity: 1; } }
        @keyframes tagReveal {
          0% { opacity: 0; letter-spacing: 0.8em; }
          100% { opacity: 1; letter-spacing: 0.3em; }
        }
        @keyframes bottomReveal {
          0% { opacity: 0; transform: translateX(-50%) translateY(30px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes cornerIn { to { opacity: 1; } }
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.5); opacity: 1; }
        }
        @keyframes scrollHint { to { opacity: 0.3; } }
      `}</style>

      <div
        ref={sceneRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          fontFamily: "'Space Grotesk', sans-serif",
          background: '#0a0e1a',
        }}
      >
        {/* Atmospheric background glow */}
        <div style={{
          position: 'absolute',
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 78, 138, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'glowPulse 4s ease-in-out infinite',
          zIndex: 0,
        }} />

        {/* Corner accents */}
        {(['tl', 'tr', 'bl', 'br'] as const).map(pos => (
          <div key={pos} style={{
            position: 'absolute',
            width: 60, height: 60,
            border: '1px solid rgba(123, 143, 199, 0.15)',
            zIndex: 0,
            opacity: 0,
            animation: 'cornerIn 1s ease 2.2s forwards',
            ...(pos === 'tl' ? { top: '4vh', left: '4vw', borderRight: 'none', borderBottom: 'none' } :
              pos === 'tr' ? { top: '4vh', right: '4vw', borderLeft: 'none', borderBottom: 'none' } :
              pos === 'bl' ? { bottom: '4vh', left: '4vw', borderRight: 'none', borderTop: 'none' } :
              { bottom: '4vh', right: '4vw', borderLeft: 'none', borderTop: 'none' }),
          }} />
        ))}

        {/* Top tagline */}
        <div data-depth="0.02" style={{
          position: 'absolute',
          top: '8vh',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.08)',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 700,
          letterSpacing: '0.3em',
          textTransform: 'uppercase' as const,
          whiteSpace: 'nowrap' as const,
          zIndex: 0,
          animation: 'tagReveal 1.5s ease 0.5s forwards',
          opacity: 0,
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          ラーメン
        </div>

        {/* Main ramen container */}
        <div data-depth="0.04" style={{
          position: 'relative',
          zIndex: 1,
          animation: 'containerReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          opacity: 0,
        }}>
          <div style={{
            position: 'relative',
            animation: 'floatBowl 5s ease-in-out infinite',
            animationDelay: '1.2s',
          }}>
            {/* Steam canvas */}
            <canvas
              ref={canvasRef}
              style={{
                position: 'absolute',
                top: -200,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 400, height: 350,
                pointerEvents: 'none' as const,
                zIndex: 2,
                opacity: 0,
                animation: 'steamFadeIn 2s ease 1.5s forwards',
              }}
            />

            {/* Ramen image */}
            <img
              src="/images/ramen-hero.png"
              alt="Ramen Weather is a State of Mind"
              style={{
                width: 'min(480px, 85vw)',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
                transition: 'filter 0.4s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 35px 70px rgba(59, 78, 138, 0.5))';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))';
              }}
            />

            {/* Orbiting food items */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: 560, height: 560,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none' as const,
              zIndex: 3,
            }}>
              {FOOD_ITEMS.map((food, i) => (
                <div
                  key={food.label}
                  ref={el => { orbitItemsRef.current[i] = el; }}
                  style={{
                    position: 'absolute',
                    width: 64, height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    transition: 'transform 0.2s ease',
                    transformOrigin: 'center center',
                  }}
                >
                  {food.emoji}
                  <span style={{
                    position: 'absolute',
                    bottom: -22,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.55rem',
                    color: 'rgba(255,255,255,0.6)',
                    whiteSpace: 'nowrap' as const,
                    letterSpacing: '0.05em',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textAlign: 'center' as const,
                  }}>
                    {food.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-depth="0.01" style={{
          position: 'absolute',
          bottom: '6vh',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center' as const,
          zIndex: 3,
          opacity: 0,
          animation: 'bottomReveal 1s ease 1.8s forwards',
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase' as const,
            marginBottom: '1.5rem',
          }}>
            Warmth in every bowl
          </p>
          <Link href="/dashboard" style={{
            display: 'inline-block',
            padding: '14px 42px',
            background: 'transparent',
            color: '#7b8fc7',
            border: '1.5px solid rgba(123, 143, 199, 0.4)',
            borderRadius: 50,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            textDecoration: 'none',
            position: 'relative' as const,
            overflow: 'hidden' as const,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(123, 143, 199, 0.8)';
            el.style.color = '#fff';
            el.style.transform = 'translateY(-2px)';
            el.style.boxShadow = '0 8px 30px rgba(123, 143, 199, 0.2)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(123, 143, 199, 0.4)';
            el.style.color = '#7b8fc7';
            el.style.transform = 'translateY(0)';
            el.style.boxShadow = 'none';
          }}
          >
            Enter Dashboard
          </Link>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: '2vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: 6,
          opacity: 0,
          animation: 'scrollHint 1s ease 3s forwards',
          zIndex: 3,
        }}>
          <div style={{
            width: 1, height: 30,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </>
  );
}
