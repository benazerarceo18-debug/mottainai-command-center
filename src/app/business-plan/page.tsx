export default function BusinessPlanPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Full Business Plan
        </h1>
        <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
          The complete Mottainai business plan — financials, market analysis, operations model, and go-to-market strategy — will be available here once approved by the Board of Directors.
        </p>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Expected: Q4 2026 — pending Board approval
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-200 my-8" />

        {/* What's coming */}
        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">What will be included</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg text-left">
          {[
            'Executive Summary',
            'Market Analysis',
            '5-Year Financial Model',
            'Operations Playbook',
            'Site Expansion Strategy',
            'Investment & Returns',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
