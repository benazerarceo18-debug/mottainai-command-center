import { MENU_ITEMS } from '@/lib/data';
import CostWaterfallChart from '@/components/CostWaterfallChart';
import AoyamaTracker from '@/components/AoyamaTracker';

export default function MenuPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1a1a2e]">Menu Development</h1>
        <p className="text-sm text-gray-500 mt-1">
          Rock #1 — Complete ✓ | 7 Core SKUs Locked &amp; FC-Validated
        </p>
      </div>

      {/* Status banner */}
      <div className="bg-emerald-600 text-white rounded-lg px-5 py-3 text-sm font-medium">
        All 7 SKUs locked as of April 7, 2026
      </div>

      {/* SKU Registry */}
      <section>
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">SKU Registry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-base font-bold text-[#1a1a2e]">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.nameJp}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold uppercase tracking-wide">
                  {item.status === 'locked' ? 'Locked' : item.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">{item.description}</p>
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-lg font-bold text-[#1a1a2e]">₱{item.price}</p>
                  <p className="text-[10px] text-gray-400">Price</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#1a1a2e]">₱{item.actualCost}</p>
                  <p className="text-[10px] text-gray-400">Food Cost</p>
                </div>
                <div className="text-center">
                  <p
                    className={`text-lg font-bold ${
                      item.fcPercent <= 30 ? 'text-emerald-600' : 'text-amber-500'
                    }`}
                  >
                    {item.fcPercent}%
                  </p>
                  <p className="text-[10px] text-gray-400">FC%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Waterfall */}
      <section>
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Cost Waterfall</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <CostWaterfallChart />
        </div>
      </section>

      {/* Aoyama Workback */}
      <section>
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Aoyama Workback</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <AoyamaTracker />
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#1a1a2e]">₱60</p>
            <p className="text-xs text-gray-500 mt-1">Avg Food Cost / bowl</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#1a1a2e]">24.6%</p>
            <p className="text-xs text-gray-500 mt-1">Avg FC%</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-2xl font-bold text-[#1a1a2e]">₱180–280</p>
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
