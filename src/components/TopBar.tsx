'use client';

import { useSidebar } from '@/components/Sidebar';

export default function TopBar() {
  const { toggle } = useSidebar();

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="lg:hidden text-text-primary"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1
          className="text-lg font-semibold text-text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mottainai Command Center
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-gold text-navy text-xs font-semibold">
          In Development
        </span>
        <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-medium">
          B
        </div>
      </div>
    </header>
  );
}
