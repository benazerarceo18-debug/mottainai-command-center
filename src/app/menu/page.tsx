import Image from 'next/image';
import Link from 'next/link';
import { MENU_ITEMS } from '@/lib/data';
import CostWaterfallChart from '@/components/CostWaterfallChart';
import AoyamaTracker from '@/components/AoyamaTracker';

const FOOD_GALLERY = [
  { src: '/images/food/ramen-tonkotsu.png', label: 'Tonkotsu Ramen' },
  { src: '/images/food/gyoza-crispy.png', label: 'Crispy Gyoza' },
  { src: '/images/food/salmon-oshizushi.png', label: 'Salmon Oshizushi' },
  { src: '/images/food/yakimeshi.png', label: 'Yakimeshi' },
  { src: '/images/food/chimaki.png', label: 'Chimaki' },
  { src: '/images/food/ramen-spicy-shoyu.png', label: 'Spicy Shoyu Ramen' },
  { src: '/images/food/mochi-daifuku.png', label: 'Mochi Daifuku' },
];

export default function MenuPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">Menu Development</h1>
          <p className="text-sm text-gray-500 mt-1">
            Rock #1 — Complete ✓ | 7 Core SKUs Locked &amp; FC-Validated
          </p>
        </div>
        <Link
          href="/rd-report"
          className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F97316] transition-colors"
        >
          Full R&amp;D Report →
        </Link>
      </div>

      {/* Status banner */}
      <div className="bg-emerald-600 text-white rounded-lg px-5 py-3 text-sm font-medium">
        All 7 SKUs locked as of April 7, 2026
      </div>

      {/* SKU Registry */}
      <section>
        <h2 className="text-xl font-bold text-[#111827] mb-4">SKU Registry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-base font-bold text-[#111827]">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.nameJp}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                  item.status === 'excluded'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {item.status === 'locked' ? 'Locked' : item.status === 'excluded' ? 'Excluded' : item.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">{item.description}</p>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm font-bold text-[#111827]">₱{item.price}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Price</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#111827]">₱{item.actualCost}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Food Cost</p>
                </div>
                <div className="text-center">
                  <p
                    className={`text-sm font-bold ${
                      item.fcPercent <= 30 ? 'text-emerald-600' : 'text-amber-500'
                    }`}
                  >
                    {item.fcPercent}%
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">FC%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Visual Gallery */}
      <section>
        <h2 className="text-xl font-bold text-[#111827] mb-4">Menu Visual Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOOD_GALLERY.map((item) => (
            <div key={item.src} className="relative rounded-xl overflow-hidden aspect-video bg-gray-100">
              <Image src={item.src} alt={item.label} fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Waterfall */}
      <section>
        <h2 className="text-xl font-bold text-[#111827] mb-4">Cost Waterfall</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <CostWaterfallChart />
        </div>
      </section>

      {/* Aoyama Workback */}
      <section>
        <h2 className="text-xl font-bold text-[#111827] mb-4">Aoyama Workback</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <AoyamaTracker />
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-xl font-bold text-[#111827] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#111827]">₱70</p>
            <p className="text-xs text-gray-500 mt-1">Avg Food Cost / bowl</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#111827]">31.5%</p>
            <p className="text-xs text-gray-500 mt-1">Avg FC%</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#111827]">₱120–480</p>
            <p className="text-xs text-gray-500 mt-1">Price Range</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-emerald-600">≤35% ✓</p>
            <p className="text-xs text-gray-500 mt-1">Target FC</p>
          </div>
        </div>
      </section>
    </div>
  );
}
