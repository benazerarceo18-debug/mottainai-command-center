export interface KPICardData {
  label: string;
  value: string;
  status: 'success' | 'warning' | 'danger' | 'info';
  description: string;
}

export interface KPI {
  id: string;
  label: string;
  value: string;
  status: 'success' | 'warning' | 'danger' | 'info';
  description: string;
}

export interface BDHighlight {
  id: string;
  date: string;
  title: string;
  content: string;
  category: 'deal' | 'brand' | 'expansion' | 'financial' | 'milestone';
}

export interface QuickLink {
  href: string;
  title: string;
  description: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  targetCost: number;
  actualCost: number;
  fcPercent: number;
  price: number;
  status: 'locked' | 'testing' | 'pending';
}

export interface PipelineSite {
  id: string;
  name: string;
  location: string;
  landlord: string;
  stage: string;
  score: number | null;
  sqm: number | null;
  monthlyRent: number | null;
  notes: string;
}

export interface FinancialScenario {
  name: string;
  storesY1: number;
  storesY2: number;
  storesY3: number;
  storesY4: number;
  storesY5: number;
  revenueY1: number;
  revenueY2: number;
  revenueY3: number;
  revenueY4: number;
  revenueY5: number;
  ebitdaY1: number;
  ebitdaY2: number;
  ebitdaY3: number;
  ebitdaY4: number;
  ebitdaY5: number;
  roic: number;
  paybackMonths: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'on-track' | 'at-risk' | 'blocked' | 'upcoming';
  category: string;
}

export interface RockStatus {
  id: string;
  name: string;
  owner: string;
  target: string;
  progress: number;
  status: string;
  milestones: string[];
}
