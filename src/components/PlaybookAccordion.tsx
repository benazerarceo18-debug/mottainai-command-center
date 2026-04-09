'use client';

import { useState } from 'react';
import { APPENDICES } from '@/lib/data';

export default function PlaybookAccordion() {
  const [openLetter, setOpenLetter] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {APPENDICES.map((app) => {
        const isOpen = openLetter === app.letter;
        return (
          <div
            key={app.letter}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenLetter(isOpen ? null : app.letter)}
              className="w-full flex items-center justify-between p-4 hover:bg-bg transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {app.letter}
                </span>
                <span className="text-sm font-semibold text-text-primary">{app.title}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 text-text-muted transition-transform shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-secondary ml-11">{app.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
