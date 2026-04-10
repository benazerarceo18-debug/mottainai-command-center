'use client';

import Image from 'next/image';
import { useState } from 'react';

type ConceptImage =
  | { id: number; label: string; src: string; pending?: false }
  | { id: number; label: string; src?: undefined; pending: true };

const CONCEPT_IMAGES: ConceptImage[] = [
  { id: 3,  label: 'Floor Plan',             src: '/concepts/floor-plan.jpg'   },
  { id: 7,  label: 'Entry Kiosks',           src: '/concepts/entry-kiosks.jpg' },
  { id: 1,  label: 'Store Facade',           pending: true },
  { id: 2,  label: 'Interior Visualization', pending: true },
  { id: 4,  label: 'Floor Plan (Alt)',        pending: true },
  { id: 5,  label: 'Mezzanine View',         pending: true },
  { id: 6,  label: 'Bar Detail',             pending: true },
  { id: 8,  label: 'Assembly Theater',       pending: true },
  { id: 9,  label: 'Kitchen Workflow',       pending: true },
  { id: 10, label: 'Customer Journey',       pending: true },
  { id: 11, label: 'Dining Automation',      pending: true },
];

export default function ImageGallery() {
  const [lightbox, setLightbox] = useState<ConceptImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONCEPT_IMAGES.map((img) =>
          img.pending ? (
            <div
              key={img.id}
              className="relative rounded-xl border border-dashed border-gray-200 overflow-hidden aspect-video bg-gray-50 flex flex-col items-center justify-center gap-2"
            >
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18M3.75 4.875c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H4.875a1.125 1.125 0 01-1.125-1.125V4.875z" />
              </svg>
              <p className="text-xs font-medium text-gray-400">{img.label}</p>
              <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-400">Concept Pending</span>
            </div>
          ) : (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className="group relative rounded-xl border border-border overflow-hidden aspect-video bg-gray-100 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-medium">{img.label}</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Lightbox */}
      {lightbox && !lightbox.pending && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src!}
              alt={lightbox.label}
              width={1200}
              height={800}
              className="rounded-xl object-contain w-full max-h-[80vh]"
            />
            <div className="mt-3 text-center text-white font-medium">{lightbox.label}</div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
