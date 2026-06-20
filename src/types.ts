export type PageId =
  | 'home'
  | 'clinicians'
  | 'health-systems'
  | 'governments'
  | 'evidence'
  | 'technology'
  | 'responsible-ai'
  | 'investors'
  | 'about'
  | 'contact';

export interface NavigationItem {
  id: PageId;
  label: string;
  category: 'primary' | 'audience' | 'governance' | 'meta';
  shortDesc: string;
}

export interface CancerModelSpec {
  id: string;
  name: string;
  population: string;
  datasetSize: number;
  validationType: 'Retrospective' | 'Prospective' | 'Hybrid';
  auc: number;
  sensitivity: number;
  specificity: number;
  falseNegativeRate: number;
  status: 'In Validation' | 'Research Use' | 'Clinical Prototype' | 'Pilot Active';
  inputs: string[];
  description: string;
}

export interface PartnershipCaseStudy {
  id: string;
  partnerName: string;
  location: string;
  status: string;
  description: string;
  outcomes: string[];
  type: 'Clinical' | 'Government' | 'Academic';
}

export interface InvestorChapter {
  title: string;
  subtitle: string;
  points: string[];
  metric?: string;
  metricLabel?: string;
}
