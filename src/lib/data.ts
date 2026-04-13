import type { KPI, BDHighlight, MenuItem, PipelineSite, FinancialScenario, Milestone, RockStatus, ServiceFormat } from './types';

export const BRAND = {
  name: 'Mottainai',
  tagline: 'Japanese Ramen, Reimagined for Everyone',
  positioning: 'Mass-market fast-casual Japanese ramen — broad appeal without dilution',
  architecture: 'Independent brand',
  tone: 'Friendly, inclusive, approachable — no chef ego',
  priceRange: '₱250–450',
  status: 'Under Development',
  target: '50 stores by 2033',
  annualRevenue: '₱4.5B (50 stores)',
  annualNOI: '₱315M (7% EBITDA)',
  launchTarget: 'Q3 2027 (July)',
  strategicFrame: 'Uniqlo of Ramen',
  coreValues: ['Customer Focus', 'Continuous Innovation / Kaizen', 'Quality'] as const,
  positioningStatement: 'An experience designed for everyone, without being designed down for anyone.',
  personas: [
    { name: 'Budget-Conscious Ramen Lover', age: '18-35', description: 'Wants quality ramen at accessible prices. Frequents malls and inline dining.' },
    { name: 'Mall Family Diner', age: '30-50', description: 'Looking for quick, satisfying meals for the family. Values consistency and speed.' },
    { name: 'Office Worker', age: '25-40', description: 'Needs a reliable lunch option. Appreciates efficiency and good value.' },
    { name: 'Delivery-First Customer', age: '20-35', description: 'Orders through GrabFood/Foodpanda. Values packaging quality and delivery speed.' },
  ],
  competitiveFrame: ['Tokyo Tokyo', 'Marugame Udon', 'Ramen Kuroda', 'Yoshinoya', 'Pepper Lunch'],
  nonNegotiables: [
    'Single unified concept — no tiers',
    'Price band ₱250–450',
    'Food cost ₱70/bowl (≤35% FC%)',
    'Friendly, inclusive tone',
    'Independent brand — standalone identity',
    'Aoyama-san is a consultant, not an employee',
    'Delivery = 30–40% of revenue',
    'No delivery platform exclusivity',
    'Sustainability is operational, not branded',
  ],
};

export const UNIT_ECONOMICS = {
  coversPerDay: 400,
  avgCheck: 625,
  foodCostPerBowl: 70,
  fcPercent: 25,
  ebitdaPercent: 7,
  capexPerStore: '₱18–20M',
  capexStandalone: '₱18–20M per 150sqm store',
  monthlyRevenue: 7500000,   // 400 covers × ₱625 × 30 days
  monthlyEbitda: 525000,     // 7.5M × 7%
  paybackMonths: '34–38',    // ₱19M / ₱525K ≈ 36 months
  sqm: '~150',
  commissary: 'TBA — costs pending',
};

export const KPIS: KPI[] = [
  { id: 'rock-1', label: 'Rock #1 Menu Development', value: 'Complete', status: 'success', description: '10 core SKUs locked with FC ≤35%. Aoyama-san signed off.' },
  { id: 'rock-2', label: 'Rock #2 Expansion Playbook', value: 'Complete', status: 'success', description: 'Playbook V1 finalized. All 8 appendices board-ready. Consumer testing next (Q3 2026).' },
  { id: 'pipeline', label: 'Pipeline Sites', value: '3 Active', status: 'info', description: 'SMDC Ice Tower + SMDC Light Mall (Award Notices signed). SM North EDSA identified.' },
  { id: 'fc-target', label: 'Target Food Cost', value: '25%', status: 'success', description: 'Target 25% FC used for all forecasts. Actual weighted avg 31.0% — optimization in progress.' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'konbu-sui', name: 'Konbu Sui Ramen', nameJp: '昆布水ラーメン', description: 'Kelp-infused clear broth ramen with delicate umami depth', targetCost: 70.30, actualCost: 70.30, fcPercent: 31.5, price: 250, status: 'locked' },
  { id: 'sanratanmen', name: 'Sanratanmen', nameJp: '酸辣湯麺', description: 'Hot and sour ramen with rich chili-vinegar broth', targetCost: 83.28, actualCost: 83.28, fcPercent: 31.1, price: 300, status: 'locked' },
  { id: 'shoyu', name: 'Shoyu Ramen', nameJp: '醤油ラーメン', description: 'Soy-based tare with Paitan Hybrid broth, chashu, ajitama, nori, green onions', targetCost: 68.50, actualCost: 68.50, fcPercent: 30.7, price: 250, status: 'locked' },
  { id: 'shio', name: 'Shio Ramen', nameJp: '塩ラーメン', description: 'Salt-based tare with Paitan Hybrid broth, chicken, bamboo shoots, yuzu zest', targetCost: 65.80, actualCost: 65.80, fcPercent: 29.5, price: 250, status: 'locked' },
  { id: 'tantanmen', name: 'Tantanmen', nameJp: '担々麺', description: 'Sesame-chili tare with Paitan Hybrid broth, ground pork, bok choy, chili oil', targetCost: 78.50, actualCost: 78.50, fcPercent: 31.4, price: 280, status: 'locked' },
  { id: 'tori-sushi-noko', name: 'Tori Sushi Noko (Agemono)', nameJp: '鶏すしノコ', description: 'Crispy chicken agemono with seasoned rice', targetCost: 59.11, actualCost: 59.11, fcPercent: 31.5, price: 210, status: 'locked' },
  { id: 'chahan', name: 'Chahan', nameJp: 'チャーハン', description: 'Japanese-style fried rice with savory garlic and egg', targetCost: 59.14, actualCost: 59.14, fcPercent: 31.5, price: 210, status: 'locked' },
  { id: 'chimaki', name: 'Chimaki (3pcs)', nameJp: 'ちまき', description: 'Steamed sticky rice dumplings wrapped in bamboo leaf', targetCost: 137.49, actualCost: 137.49, fcPercent: 32.1, price: 480, status: 'locked' },
  { id: 'gyoza', name: 'Gyoza', nameJp: '餃子', description: 'Pan-fried dumplings with savory filling — Chef Popoy recipe', targetCost: 59.10, actualCost: 59.10, fcPercent: 31.5, price: 210, status: 'locked' },
  { id: 'daifuku', name: 'Daifuku', nameJp: '大福', description: 'Soft mochi filled with sweet red bean paste', targetCost: 33.64, actualCost: 33.64, fcPercent: 31.4, price: 120, status: 'locked' },
  { id: 'ebi-fry', name: 'Ebi Fry (5pcs)', nameJp: 'エビフライ', description: 'Deep-fried breaded shrimp — excluded due to 81.5% FC%', targetCost: 181.95, actualCost: 181.95, fcPercent: 81.5, price: 250, status: 'excluded' },
];

export const PIPELINE_SITES: PipelineSite[] = [
  {
    id: 'smdc-ice',
    name: 'SMDC Ice Tower',
    location: 'MOA Complex, Pasay City',
    landlord: 'SM Development Corporation',
    stage: 'mock-awarded',
    siteClass: 'Mixed Use',
    score: 7.65,
    sqm: 221.74,
    monthlyRent: 221740,
    visited: true,
    formDone: true,
    notes: 'Ramen Yushoken — Award Notice signed Feb 13, 2026. Site score 45.9/60 GO WITH CONDITIONS. Lease May 15, 2026 – Apr 30, 2029.',
  },
  {
    id: 'light-mall',
    name: 'SMDC Light Mall',
    location: 'EDSA corner Madison St., Mandaluyong',
    landlord: 'SM Development Corporation',
    stage: 'mock-awarded',
    siteClass: 'Mixed Use',
    score: 7.8,
    sqm: 229.46,
    monthlyRent: 263879,
    visited: true,
    formDone: true,
    notes: 'Ramen Yushoken — Award Notice signed Jan 19, 2026. Units 119b/120. Lease May 1, 2026 – Apr 30, 2029. MRT Boni connected.',
  },
  {
    id: 'sm-megamall',
    name: 'SM Mega Mall',
    location: 'Mandaluyong City',
    landlord: 'SM Prime',
    stage: 'evaluated',
    siteClass: 'Premium — Class A',
    score: null,
    sqm: null,
    monthlyRent: null,
    visited: true,
    formDone: false,
    notes: 'Evaluated: Inline mall units across multiple levels. High foot traffic corridor identified. Strong profile.',
  },
  {
    id: 'sm-north',
    name: 'SM North EDSA',
    location: 'Quezon City',
    landlord: 'SM Prime',
    stage: 'evaluated',
    siteClass: 'Premium — Class A',
    score: null,
    sqm: 60,
    monthlyRent: null,
    visited: true,
    formDone: false,
    notes: 'Key North Metro anchor. Assessed GFA availability and proximity to new anchor dining corridor.',
  },
  {
    id: 'sm-fairview',
    name: 'SM Fairview',
    location: 'Quezon City',
    landlord: 'SM Prime',
    stage: 'evaluated',
    siteClass: 'Suburban — High Traffic',
    score: null,
    sqm: null,
    monthlyRent: null,
    visited: true,
    formDone: false,
    notes: 'North QC catchment area. Strong alignment with Mottainai target mass-market profile.',
  },
  {
    id: 'robinsons-ermita',
    name: 'Robinsons Ermita',
    location: 'Manila',
    landlord: 'Robinsons Land',
    stage: 'evaluated',
    siteClass: 'Mid-Tier — Urban Core',
    score: null,
    sqm: null,
    monthlyRent: null,
    visited: true,
    formDone: false,
    notes: 'Urban-core viability. Evaluated for accessibility and inline unit positioning.',
  },
  {
    id: 'sm-moa',
    name: 'SM Mall of Asia',
    location: 'Pasay City',
    landlord: 'SM Prime',
    stage: 'identified',
    siteClass: 'Premium — Class A',
    score: null,
    sqm: null,
    monthlyRent: null,
    visited: false,
    formDone: false,
    notes: 'High-traffic destination mall. Under consideration as Mottainai pilot location.',
  },
];

export const FINANCIAL_SCENARIOS: FinancialScenario[] = [
  {
    // Conservative: 350 covers/day, ₱625 avg check, 6% EBITDA, ₱20M CapEx
    // Rev/store/yr = 350 × 625 × 360 = ₱78.75M
    name: 'conservative',
    storesY1: 2, storesY2: 4, storesY3: 7, storesY4: 10, storesY5: 14,
    revenueY1: 157_500_000, revenueY2: 315_000_000, revenueY3: 551_250_000, revenueY4: 787_500_000, revenueY5: 1_102_500_000,
    ebitdaY1: 9_450_000, ebitdaY2: 18_900_000, ebitdaY3: 33_075_000, ebitdaY4: 47_250_000, ebitdaY5: 66_150_000,
    roic: 24,
    paybackMonths: 51,  // ₱20M / (₱78.75M × 6% / 12) = 50.8
  },
  {
    // Base: 400 covers/day, ₱625 avg check, 7% EBITDA, ₱19M CapEx
    // Rev/store/yr = 400 × 625 × 360 = ₱90M
    name: 'base',
    storesY1: 3, storesY2: 6, storesY3: 12, storesY4: 18, storesY5: 24,
    revenueY1: 270_000_000, revenueY2: 540_000_000, revenueY3: 1_080_000_000, revenueY4: 1_620_000_000, revenueY5: 2_160_000_000,
    ebitdaY1: 18_900_000, ebitdaY2: 37_800_000, ebitdaY3: 75_600_000, ebitdaY4: 113_400_000, ebitdaY5: 151_200_000,
    roic: 33,
    paybackMonths: 36,  // ₱19M / (₱90M × 7% / 12) = 36.2
  },
  {
    // Aggressive: 500 covers/day, ₱625 avg check, 8% EBITDA, ₱18M CapEx
    // Rev/store/yr = 500 × 625 × 360 = ₱112.5M
    name: 'aggressive',
    storesY1: 4, storesY2: 9, storesY3: 18, storesY4: 26, storesY5: 35,
    revenueY1: 450_000_000, revenueY2: 1_012_500_000, revenueY3: 2_025_000_000, revenueY4: 2_925_000_000, revenueY5: 3_937_500_000,
    ebitdaY1: 36_000_000, ebitdaY2: 81_000_000, ebitdaY3: 162_000_000, ebitdaY4: 234_000_000, ebitdaY5: 315_000_000,
    roic: 50,
    paybackMonths: 24,  // ₱18M / (₱112.5M × 8% / 12) = 24
  },
];

export const FINANCIAL_YEARS = ['Y1 (2027)', 'Y2 (2028)', 'Y3 (2029)', 'Y4 (2030)', 'Y5 (2031)'];

export const BD_HIGHLIGHTS: BDHighlight[] = [
  { id: 'bd-1', date: '2026-04-07', title: 'Rock #1 Complete — 10 Core SKUs Locked', content: 'All 10 core SKUs finalized with food cost validated at ≤35%. Aoyama-san signed off on broth specifications. Ready for pilot production.', category: 'milestone' },
  { id: 'bd-2', date: '2026-03-31', title: 'Strategic pivot finalized — single unified concept confirmed', content: 'Board approved single unified concept. 3-tier format (Kaiten/Standard/Express) permanently dropped. Simplifies scaling, franchising, and landlord negotiations.', category: 'brand' },
  { id: 'bd-3', date: '2026-02-13', title: 'SMDC Ice Tower — Award Notice Signed', content: 'Ramen Yushoken at SMDC Ice Tower, MOA Complex, Pasay City. 221.74 sqm, site score 45.9/60, lease May 15, 2026 – Apr 30, 2029. Validates NHI as SMDC tenant — entry point for Mottainai placement.', category: 'expansion' },
];

export const SERVICE_FORMATS: ServiceFormat[] = [
  {
    id: 'full-service',
    name: 'Full Service (with Automation)',
    status: 'confirmed',
    description: 'Primary format. Inline dining, fast casual with kiosk ordering and KDS automation.',
    size: '~150 sqm',
    automation: 'Touchscreen ordering, kitchen display system',
    risk: null,
  },
  {
    id: 'kaiten',
    name: 'Kaiten',
    status: 'exploratory',
    description: 'Conveyor belt service model. Under investigation — NOT approved.',
    size: 'TBD',
    automation: 'Automated conveyor line',
    risk: 'BURN RISK: Hot soup on automated conveyor presents safety liability to customers. Requires food safety engineering study before approval.',
  },
];

export const MILESTONES: Milestone[] = [
  { id: 'ms-0', title: 'Business Plan Approved by Board', description: 'Full business plan presented to and approved by Owners and Board of Directors.', startDate: '2026-10-01', endDate: '2026-12-31', status: 'upcoming', category: 'strategy' },
  { id: 'ms-1', title: 'Menu Development Complete', description: '10 core SKUs locked with FC ≤35%. Aoyama-san signed off.', startDate: '2026-01-01', endDate: '2026-04-07', status: 'completed', category: 'menu' },
  { id: 'ms-2', title: 'Expansion Playbook V1', description: 'All 8 appendices finalized. Board-ready document.', startDate: '2026-02-01', endDate: '2026-04-10', status: 'completed', category: 'expansion' },
  { id: 'ms-gz', title: 'Guangzhou & Shenzhen — Concept Refinement', description: 'Canton Fair visit. Equipment sourcing, supplier meetings, and fast-casual ramen concept benchmarking in GZ and SZ.', startDate: '2026-04-15', endDate: '2026-04-30', status: 'on-track', category: 'menu' },
  { id: 'ms-3', title: 'SM MOA Lease Signed', description: 'Formal lease agreement with SM Prime for pilot inline dining location.', startDate: '2026-04-01', endDate: '2026-09-30', status: 'on-track', category: 'expansion' },
  { id: 'ms-4', title: 'Pilot Store Build-out', description: 'Construction and fit-out of first SM MOA location.', startDate: '2026-10-01', endDate: '2027-03-31', status: 'upcoming', category: 'operations' },
  { id: 'ms-5', title: 'Ops Training', description: 'Staff recruitment, training program execution, and dry runs.', startDate: '2027-01-01', endDate: '2027-05-31', status: 'upcoming', category: 'operations' },
  { id: 'ms-6', title: 'Marketing Activation', description: 'Pre-launch marketing campaign and brand awareness push.', startDate: '2027-04-01', endDate: '2027-06-30', status: 'upcoming', category: 'brand' },
  { id: 'ms-7', title: 'Soft Open', description: 'Controlled opening with limited marketing and feedback collection.', startDate: '2027-06-01', endDate: '2027-06-30', status: 'upcoming', category: 'operations' },
  { id: 'ms-8', title: 'Grand Launch', description: 'Full public launch of Mottainai at SM MOA — Q3 2027.', startDate: '2027-07-01', endDate: '2027-07-31', status: 'upcoming', category: 'operations' },
];

export const ROCKS: RockStatus[] = [
  {
    id: 'rock-1',
    name: 'Rock #1 — Mottainai Core Menu',
    owner: 'Benz + Aoyama-san',
    target: 'Apr 2026',
    progress: 100,
    status: 'complete',
    milestones: ['10 SKUs locked', 'FC ≤35% validated', 'Aoyama-san signed off', 'Broth specs finalized'],
  },
  {
    id: 'rock-2',
    name: 'Rock #2 — Expansion Playbook V1',
    owner: 'Benz + BDSP Team',
    target: 'Jun 2026',
    progress: 100,
    status: 'complete',
    milestones: ['All 8 appendices finalized', 'SM MOA site scored', 'Financial model built', 'Board-ready document'],
  },
];

export const APPENDICES = [
  { letter: 'A', title: 'Demographic Analysis Protocol', description: 'Income targets, population density viability thresholds, household type scoring methodology for site evaluation.' },
  { letter: 'B', title: 'Competition Mapping Framework', description: 'Direct competitor identification, market saturation scoring, competitive positioning analysis within 2km radius.' },
  { letter: 'C', title: 'Site Evaluation Checklist', description: 'Physical site assessment criteria: visibility, access, adjacent tenants, ceiling height, ventilation, utilities.' },
  { letter: 'D', title: 'Traffic & Accessibility Assessment', description: 'Foot traffic counting protocol (pedestrians/hour scale), public transport proximity, parking availability.' },
  { letter: 'E', title: 'Field Visit Protocol Manual', description: '2-3 hour structured field visit execution workflow with observation templates and scoring guides.' },
  { letter: 'F', title: 'Site Scoring Matrix', description: 'Weighted criteria: Demographics 30%, Competition 25%, Site 25%, Traffic 20%. GO/MAYBE/NO-GO thresholds.' },
  { letter: 'G', title: 'Market Viability Financial Model', description: 'P&L projection model for site-specific scenarios: revenue, costs, breakeven, payback period calculations.' },
  { letter: 'H', title: 'Lease Negotiation Intelligence', description: 'Leverage points, negotiation priorities, walk-away criteria, rent escalation caps, and occupancy cost thresholds.' },
];

export const RISKS = [
  { id: 'r-1', risk: 'Cannibalization of Yushoken', severity: 'Medium', mitigation: 'Different price segment (₱250-450 vs ₱500-700). Different positioning. Independent brand identity — no cross-endorsement.' },
  { id: 'r-2', risk: 'Food cost volatility', severity: 'High', mitigation: 'Locked supplier contracts. 35% FC ceiling with ₱70/bowl target. Quarterly price review mechanism.' },
  { id: 'r-3', risk: 'Mall landlord dependency (70% SM Prime)', severity: 'Medium', mitigation: 'Multi-landlord strategy. Ayala 16%, Robinsons 10%. Standalone options for diversification.' },
  { id: 'r-4', risk: 'Execution speed — 50 stores in 7 years', severity: 'Medium', mitigation: 'Phased rollout. Proven unit economics before scaling. Franchise model after Year 3.' },
  { id: 'r-5', risk: 'Delivery platform margin compression', severity: 'Low', mitigation: 'No exclusivity. Multi-platform. Own delivery channel development after Year 2.' },
];

export const LANDLORD_MIX = [
  { landlord: 'SM Prime', percentage: 70, stores: 35, color: '#111827' },
  { landlord: 'Ayala Land', percentage: 16, stores: 8, color: '#FB923C' },
  { landlord: 'Robinsons', percentage: 10, stores: 5, color: '#64748b' },
  { landlord: 'Others', percentage: 4, stores: 2, color: '#94a3b8' },
];

export const COST_WATERFALL = [
  { label: 'Noodles', value: 12 },
  { label: 'Broth', value: 18 },
  { label: 'Chashu', value: 15 },
  { label: 'Toppings', value: 10 },
  { label: 'Ajitama', value: 8 },
  { label: 'Packaging', value: 7 },
];

export const AOYAMA_PHASES = [
  { phase: 1, title: 'Foundation — Base Recipe Development', start: '2026-01', end: '2026-03', status: 'completed', deliverables: ['Broth base recipes (Shoyu, Shio, Miso)', 'Noodle specifications', 'Core tare formulations'] },
  { phase: 2, title: 'Refinement — Recipe Optimization', start: '2026-04', end: '2026-06', status: 'in_progress', deliverables: ['Cost-optimized recipes', 'Supplier specifications locked', 'QC standards documented'] },
  { phase: 3, title: 'Validation — Production Testing', start: '2026-07', end: '2026-08', status: 'pending', deliverables: ['Commissary-scale production test', 'Shelf life validation', 'Batch consistency audit'] },
  { phase: 4, title: 'Final Sign-off', start: '2026-09', end: '2026-09', status: 'pending', deliverables: ['Final recipe package handover', 'Training manual contribution', 'Consultant engagement close'] },
];

export const NAV_ITEMS = [
  { href: '/', label: 'Dashboard', icon: 'dashboard' },
  { href: '/brand', label: 'Brand', icon: 'brand' },
  { href: '/menu', label: 'Menu', icon: 'menu' },
  { href: '/expansion', label: 'Expansion', icon: 'expansion' },
  { href: '/financials', label: 'Financials', icon: 'financials' },
  { href: '/roadmap', label: 'Roadmap', icon: 'roadmap' },
  { href: '/board-deck', label: 'Board Deck', icon: 'deck' },
];
