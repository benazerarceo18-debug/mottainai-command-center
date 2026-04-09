'use client';

const CONCEPT_IMAGES = [
  { id: 1, label: 'Store Facade' },
  { id: 2, label: 'Interior Visualization' },
  { id: 3, label: 'Floor Plan' },
  { id: 4, label: 'Floor Plan (Alt)' },
  { id: 5, label: 'Mezzanine View' },
  { id: 6, label: 'Bar Detail' },
  { id: 7, label: 'Entry Kiosks' },
  { id: 8, label: 'Assembly Theater' },
  { id: 9, label: 'Kitchen Workflow' },
  { id: 10, label: 'Customer Journey' },
  { id: 11, label: 'Dining Automation' },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CONCEPT_IMAGES.map((img) => (
        <div
          key={img.id}
          className="group relative rounded-xl border border-border overflow-hidden aspect-video bg-gray-100"
        >
          {/* TODO: Replace placeholder with <Image src={`/concepts/${slug}.png`} alt={img.label} fill className="object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <p className="text-white text-sm font-medium">{img.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
