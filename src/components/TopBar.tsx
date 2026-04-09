'use client';

import { useSidebar } from '@/components/Sidebar';

export default function TopBar() {
  const { toggle } = useSidebar();

  return (
    <header className="relative bg-white/80 backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-6 shrink-0 h-16">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="lg:hidden text-[#1C1917]"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1
          className="text-lg font-semibold text-[#1C1917]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          Mottainai Command Center
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-[#F97316] text-white text-xs font-semibold">
          In Development
        </span>
        <div className="w-8 h-8 rounded-full bg-[#1C1917] flex items-center justify-center text-white text-sm font-medium">
          B
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#F97316]/80 via-[#F97316]/40 to-transparent" />
    </header>
  );
}
