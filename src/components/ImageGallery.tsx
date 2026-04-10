'use client';

import Image from 'next/image';
import { useState } from 'react';

const CONCEPT_IMAGES = [
  { id: 1,  label: 'Store Facade',           src: '/concepts/store-facade.png'          },
  { id: 2,  label: 'Interior Visualization', src: '/concepts/interior-visualization.png' },
  { id: 3,  label: 'Floor Plan',             src: '/concepts/floor-plan.jpg'            },
  { id: 4,  label: 'Floor Plan (Alt)',        src: '/concepts/floor-plan-alt.png'        },
  { id: 5,  label: 'Mezzanine View',         src: '/concepts/mezzanine-view.png'        },
  { id: 6,  label: 'Bar Detail',             src: '/concepts/bar-detail.png'            },
  { id: 7,  label: 'Entry Kiosks',           src: '/concepts/entry-kiosks.jpg'          },
  { id: 8,  label: 'Assembly Theater',       src: '/concepts/assembly-theater.png'      },
  { id: 9,  label: 'Kitchen Workflow',       src: '/concepts/kitchen-workflow.png'      },
  { id: 10, label: 'Customer Journey',       src: '/concepts/customer-journey.png'      },
  { id: 11, label: 'Dining Automation',      src: '/concepts/dining-automation.png'     },
];

export default function ImageGallery() {
  const [lightbox, setLightbox] = useState<typeof CONCEPT_IMAGES[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONCEPT_IMAGES.map((img) => (
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
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
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
