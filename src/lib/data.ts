import type { KPI, BDHighlight, MenuItem, PipelineSite, FinancialScenario, Milestone, RockStatus } from './types';

export const BRAND = {
  name: 'Mottainai',
  tagline: 'Japanese Ramen, Reimagined for Everyone',
  positioning: 'Value-segment fast-casual Japanese ramen concept by the makers of Yushoken',
  architecture: 'Standalone brand — NHI Group',
  tone: 'Friendly, inclusive, approachable — no chef ego',
  priceRange: '₱250–450',
  status: 'Under Development',
  target: '50 stores by 2033',
  annualRevenue: '₱900M',
  annualNOI: '₱207M',
  personas: [
    { name: 'Budget-Conscious Ramen Lover', age: '18-35', description: 'Wants quality ramen at accessible prices. Frequents food courts and malls.' },
    { name: 'Mall Family Diner', age: '30-50', description: 'Looking for quick, satisfying meals for the family. Values consistency and speed.' },
    { name: 'Office Worker', age: '25-40', description: 'Needs a reliable lunch option. Appreciates efficiency and good value.' },
    { name: 'Delivery-First Customer', age: '20-35', description: 'Orders through GrabFood/Foodpanda. Values packaging quality and delivery speed.' },
  ],
  competitiveFrame: ['Tokyo Tokyo', 'Marugame Udon', 'Ramen Kuroda', 'Yoshinoya'],
  nonNegotiables: [
    'Single unified concept — no tiers',
    'Price band ₱250–450',
    'Food cost ₱70/bowl (≤35% FC%)',
    'Friendly, inclusive tone',
    'Standalone brand — no Yushoken endorsement',
    'Aoyama-san is a consultant, not an employee',
    'Delivery = 30–40% of revenue',
    'No delivery platform exclusivity',
    'Sustainability is operational, not branded',
  ],
};

export const UNIT_ECONOMICS = {
  coversPerDay: 240,
  avgCheck: 280,
  foodCostPerBowl: 70,
  fcPercent: 25,
  ebitdaPercent: 37,
  capexPerStore: '₱10–15M',
  capexStandalone: '₱15–20M standalone',
  monthlyRevenue: 2016000,
  monthlyEbitda: 745920,
  paybackMonths: '8–10',
  sqm: '60–80',
};

export const KPIS: KPI[] = [
  { id: 'rock-1', label: 'Rock #1 Menu Development', value: 'Complete', status: 'success', description: '7 core SKUs locked with FC ≤35%. Aoyama-san signed off.' },
  { id: 'rock-2', label: 'Rock #2 Expansion Playbook', value: 'On Track', status: 'warning', description: '65% complete. 8 appendices in progress, target Jun 2026.' },
  { id: 'pipeline', label: 'Pipeline Sites', value: '3 Active', status: 'info', description: 'SMDC Ice Tower + SMDC Light Mall (Award Notices signed). SM North EDSA identified.' },
  { id: 'fc-target', label: 'Target Food Cost', value: '≤35%', status: 'success', description: 'All 7 SKUs validated below 35% FC. Weighted avg 24.6%.' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'shoyu', name: 'Shoyu Ramen', nameJp: '醤油ラーメン', description: 'Classic soy-based broth with chashu, ajitama, nori, and green onions', targetCost: 62, actualCost: 62, fcPercent: 24.8, price: 250, status: 'locked' },
  { id: 'shio', name: 'Shio Ramen', nameJp: '塩ラーメン', description: 'Light salt-based broth with tender chicken, bamboo shoots, and yuzu zest', targetCost: 58, actualCost: 58, fcPercent: 23.2, price: 250, status: 'locked' },
  { id: 'miso', name: 'Miso Ramen', nameJp: '味噌ラーメン', description: 'Rich miso broth with ground pork, corn, butter, and bean sprouts', targetCost: 70, actualCost: 70, fcPercent: 25.0, price: 280, status: 'locked' },
  { id: 'tantanmen', name: 'Tantanmen', nameJp: '担々麺', description: 'Spicy sesame broth with minced pork, bok choy, and chili oil', targetCost: 68, actualCost: 68, fcPercent: 24.3, price: 280, status: 'locked' },
  { id: 'tsukemen', name: 'Tsukemen', nameJp: 'つけ麺', description: 'Dipping-style ramen with rich tonkotsu dipping broth and thick noodles', targetCost: 65, actualCost: 65, fcPercent: 26.0, price: 250, status: 'locked' },
  { id: 'mazesoba', name: 'Mazesoba', nameJp: 'まぜそば', description: 'Brothless ramen tossed in savory tare with egg yolk, nori, and garlic chips', targetCost: 52, actualCost: 52, fcPercent: 23.6, price: 220, status: 'locked' },
  { id: 'gyudon', name: 'Gyudon', nameJp: '牛丼', description: 'Simmered beef over rice with onions and pickled ginger', targetCost: 45, actualCost: 45, fcPercent: 25.0, price: 180, status: 'locked' },
];

export const PIPELINE_SITES: PipelineSite[] = [
  {
    id: 'smdc-ice',
    name: 'SMDC Ice Tower',
    location: 'MOA Complex, Pasay City',
    landlord: 'SM Development Corporation',
    stage: 'awarded',
    score: 7.65, // 45.9/60 normalized
    sqm: 221.74,
    monthlyRent: 221740,
    notes: 'Ramen Yushoken — Award Notice signed Feb 13, 2026. Site score 45.9/60 GO WITH CONDITIONS. Lease May 15, 2026 – Apr 30, 2029.',
  },
  {
    id: 'light-mall',
    name: 'SMDC Light Mall',
    location: 'EDSA corner Madison St., Mandaluyong',
    landlord: 'SM Development Corporation',
    stage: 'awarded',
    score: 7.8,
    sqm: 229.46,
    monthlyRent: 263879,
    notes: 'Ramen Yushoken — Award Notice signed Jan 19, 2026. Units 119b/120. Lease May 1, 2026 – Apr 30, 2029. MRT Boni connected.',
  },
  {
    id: 'sm-north',
    name: 'SM North EDSA',
    location: 'Quezon City',
    landlord: 'SM Prime',
    stage: 'awarded',
    score: null,
    sqm: 60,
    monthlyRent: null,
    notes: 'Large catchment area. Inline dining expansion wing.',
  },
];

export const FINANCIAL_SCENARIOS: FinancialScenario[] = [
  {
    name: 'conservative',
    storesY1: 2, storesY2: 4, storesY3: 7, storesY4: 10, storesY5: 14,
    revenueY1: 48_000_000, revenueY2: 97_000_000, revenueY3: 168_000_000, revenueY4: 240_000_000, revenueY5: 336_000_000,
    ebitdaY1: 17_760_000, ebitdaY2: 35_890_000, ebitdaY3: 62_160_000, ebitdaY4: 88_800_000, ebitdaY5: 124_320_000,
    roic: 48,
    paybackMonths: 14,
  },
  {
    name: 'base',
    storesY1: 3, storesY2: 6, storesY3: 12, storesY4: 18, storesY5: 24,
    revenueY1: 72_000_000, revenueY2: 145_000_000, revenueY3: 290_000_000, revenueY4: 435_000_000, revenueY5: 580_000_000,
    ebitdaY1: 26_640_000, ebitdaY2: 53_650_000, ebitdaY3: 107_300_000, ebitdaY4: 160_950_000, ebitdaY5: 214_600_000,
    roic: 82,
    paybackMonths: 9,
  },
  {
    name: 'aggressive',
    storesY1: 4, storesY2: 9, storesY3: 18, storesY4: 26, storesY5: 35,
    revenueY1: 97_000_000, revenueY2: 218_000_000, revenueY3: 435_000_000, revenueY4: 629_000_000, revenueY5: 847_000_000,
    ebitdaY1: 35_890_000, ebitdaY2: 80_660_000, ebitdaY3: 160_950_000, ebitdaY4: 232_730_000, ebitdaY5: 313_390_000,
    roic: 124,
    paybackMonths: 6,
  },
];

export const FINANCIAL_YEARS = ['Y1 (2027)', 'Y2 (2028)', 'Y3 (2029)', 'Y4 (2030)', 'Y5 (2031)'];

export const BD_HIGHLIGHTS: BDHighlight[] = [
  { id: 'bd-1', date: '2026-04-07', title: 'Rock #1 Complete — 7 Core SKUs Locked', content: 'All 7 core SKUs finalized with food cost validated at ≤35%. Aoyama-san signed off on broth specifications. Ready for pilot production.', category: 'milestone' },
  { id: 'bd-2', date: '2026-03-31', title: 'Strategic pivot finalized — single unified concept confirmed', content: 'Board approved single unified concept. 3-tier format (Kaiten/Standard/Express) permanently dropped. Simplifies scaling, franchising, and landlord negotiations.', category: 'brand' },
  { id: 'bd-3', date: '2026-02-13', title: 'SMDC Ice Tower — Award Notice Signed', content: 'Ramen Yushoken at SMDC Ice Tower, MOA Complex, Pasay City. 221.74 sqm, site score 45.9/60, lease May 15, 2026 – Apr 30, 2029. Validates NHI as SMDC tenant — entry point for Mottainai placement.', category: 'expansion' },
];

export const MILESTONES: Milestone[] = [
  { id: 'ms-1', title: 'Menu Development Complete', description: '7 core SKUs locked with FC ≤35%. Aoyama-san signed off.', startDate: '2026-01-01', endDate: '2026-04-07', status: 'completed', category: 'menu' },
  { id: 'ms-2', title: 'Expansion Playbook V1', description: 'All 8 appendices finalized. Board-ready document.', startDate: '2026-02-01', endDate: '2026-06-30', status: 'on-track', category: 'expansion' },
  { id: 'ms-3', title: 'SM MOA Lease Negotiation', description: 'Formal lease proposal to SM Prime for pilot food court location.', startDate: '2026-04-01', endDate: '2026-07-31', status: 'on-track', category: 'expansion' },
  { id: 'ms-4', title: 'Pilot Store Build-out', description: 'Construction and fit-out of first SM MOA location.', startDate: '2026-07-01', endDate: '2026-10-31', status: 'on-track', category: 'operations' },
  { id: 'ms-5', title: 'Soft Launch', description: 'Controlled opening at first SMDC location with limited marketing.', startDate: '2027-04-01', endDate: '2027-09-30', status: 'on-track', category: 'operations' },
];

export const ROCKS: RockStatus[] = [
  {
    id: 'rock-1',
    name: 'Rock #1 — Mottainai Core Menu',
    owner: 'Benz + Aoyama-san',
    target: 'Apr 2026',
    progress: 100,
    status: 'complete',
    milestones: ['7 SKUs locked', 'FC ≤35% validated', 'Aoyama-san signed off', 'Broth specs finalized'],
  },
  {
    id: 'rock-2',
    name: 'Rock #2 — Expansion Playbook V1',
    owner: 'Benz + BDSP Team',
    target: 'Jun 2026',
    progress: 65,
    status: 'on-track',
    milestones: ['Appendices A-F drafted', 'SM MOA site scored', 'Financial model built', 'Lease intel in progress'],
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
  { id: 'r-1', risk: 'Cannibalization of Yushoken', severity: 'Medium', mitigation: 'Different price segment (₱250-450 vs ₱500-700). Different positioning. Endorsed model creates halo effect.' },
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
