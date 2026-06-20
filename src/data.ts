import { CancerModelSpec, PartnershipCaseStudy, InvestorChapter } from './types';

export const CANCER_MODELS: CancerModelSpec[] = [
  {
    id: 'lung',
    name: 'Lung Cancer Risk Stratifier',
    population: 'UK and West African general primary care cohort (Validation trials)',
    datasetSize: 142000,
    validationType: 'Retrospective',
    auc: 0.89,
    sensitivity: 0.87,
    specificity: 0.91,
    falseNegativeRate: 13,
    status: 'Pilot Active',
    inputs: ['Age', 'Smoking duration', 'Pack-years', 'Longitudinal COPD history', 'Socio-demographic vulnerability index', 'Recurrent respiratory symptoms'],
    description: 'Enables GPs to identify patients with high occult lung cancer risk who do not meet standard national screening thresholds but can benefit from targeted diagnostic chest CT.'
  },
  {
    id: 'prostate',
    name: 'Prostate Cancer Risk Stratifier',
    population: 'Diverse ancestral cohorts (focused on African and Afro-Caribbean demographics)',
    datasetSize: 89000,
    validationType: 'Hybrid',
    auc: 0.91,
    sensitivity: 0.89,
    specificity: 0.88,
    falseNegativeRate: 11,
    status: 'Research Use',
    inputs: ['Age', 'African, Caribbean or European ancestry flags', 'Family history logs', 'Longitudinal PSA trajectory', 'Urinary micro-symptom index'],
    description: 'Tailored for early prostate cancer risk signal detection, addressing the high clinical disparity where men of African ancestry have double the prostate mortality rates.'
  },
  {
    id: 'breast',
    name: 'Breast Cancer Diagnostic Triage Support',
    population: 'Sub-Saharan and European mixed mammography-deferred populations',
    datasetSize: 112000,
    validationType: 'Retrospective',
    auc: 0.88,
    sensitivity: 0.85,
    specificity: 0.90,
    falseNegativeRate: 15,
    status: 'Clinical Prototype',
    inputs: ['Age', 'First-degree family history', 'BMI trendlines', 'Previous benign biopsies', 'Symptomatic breast changes history', 'Reproductive milestones'],
    description: 'Provides priority diagnostic routing recommendations for patients with dense breast tissue or delayed access to mammographic screenings.'
  },
  {
    id: 'colorectal',
    name: 'Colorectal Early Referral Prioritizer',
    population: 'Primary care presentation symptomatic patient registry',
    datasetSize: 167000,
    validationType: 'Prospective',
    auc: 0.87,
    sensitivity: 0.86,
    specificity: 0.89,
    falseNegativeRate: 14,
    status: 'In Validation',
    inputs: ['Unexplained weight loss trajectory', 'Persistent hemoglobin/ferritin dips', 'Bowel movement frequency trends', 'Age', 'Comorbidity indexes'],
    description: 'Flags obscure symptomatic combinations to prioritize colorectal visual investigations and FIT test scheduling in high-pressure referral lists.'
  }
];

export const CASE_STUDIES: PartnershipCaseStudy[] = [
  {
    id: 'lagos-oncology',
    partnerName: 'Lagos University Teaching Hospital Clinical Trial Group',
    location: 'Lagos, Nigeria',
    status: 'Phase I Validation Completed',
    description: 'Evaluating model sensitivity on populations of West African ancestry to address the extreme lack of representation in global genetic and oncological training databases.',
    outcomes: [
      'Retrospective analysis of 12,400 historically documented cases.',
      'Identified earlier risk signals in 19% of late-stage cohort records.',
      'Published study on demographically localized specificity calibration.'
    ],
    type: 'Clinical'
  },
  {
    id: 'uk-gp-network',
    partnerName: 'NHS Regional Primary Care Trust (Consortium Pilot)',
    location: 'London, United Kingdom',
    status: 'Implementation Pipeline Study',
    description: 'Testing EHR-integration pathways to measure GP alert-fatigue thresholds and optimize silent background risk scoring workflows.',
    outcomes: [
      'Zero clinical consultation time overhead noted.',
      'Assessed 1,500 active primary care patient pathways.',
      'Demonstrated 23% increase in appropriate early screening uptake.'
    ],
    type: 'Academic'
  },
  {
    id: 'ncd-coalition',
    partnerName: 'West African Early Cancer Triage Initiative',
    location: 'Regional Ministry Pilot',
    status: 'Approved Framework',
    description: 'Collaborating on AI-ready registries and capacity-building frameworks for rural clinics utilizing low-energy local hardware architectures.',
    outcomes: [
      'Built custom regional cancer-data collection blueprints.',
      'Enlisted 32 training sites for early referral optimization training.',
      'Integrated structural socioeconomic risk indexing variables.'
    ],
    type: 'Government'
  }
];

export const INVESTOR_CHAPTERS: InvestorChapter[] = [
  {
    title: 'The Macro Problem',
    subtitle: 'Under-diagnosed disease & systemic blockages',
    points: [
      'Up to 40% of cancer cases are misdiagnosed or found at late-stage IV (World Health Organization).',
      'Clinical backlogs in primary care referral queues lead to treatment delays.',
      'Global early detection diagnostics is a $120B addressable market, yet existing algorithms lack demographic localization.'
    ],
    metric: '10M',
    metricLabel: 'Deaths globally in 2022'
  },
  {
    title: 'Our Technology Moat',
    subtitle: 'Representation is the ultimate defensive bar',
    points: [
      'Diverse, proprietary localized datasets in London & Sub-Saharan clinical partnerships.',
      'MunroCare® AI engines are uniquely calibrated to address diagnostic margins in African-ancestry and historically underserved populations.',
      'Workstage clinical-compatibility plug-ins with FHIR integrations, offering smooth non-intrusive physician feedback loops.'
    ],
    metric: '512K',
    metricLabel: 'Validated registry records'
  },
  {
    title: 'Defensible Business Model',
    subtitle: 'Diverse B2B and public-health monetative streams',
    points: [
      'Per-screen screening assessment fee on commercial diagnostic lists.',
      'Annual SaaS licensing models for independent clinical networks & diagnostic laboratories.',
      'National deployment contracts with health ministries for database normalization and AI-ready registries.'
    ],
    metric: '$2.8B',
    metricLabel: 'Projected Total Addressable Market'
  },
  {
    title: 'Development Roadmap',
    subtitle: 'Rigorous clinical trial pathways and approval horizons',
    points: [
      'Q2 2026: Deliver Multi-Cohort Retrospective Validation Briefs.',
      'Q4 2026: Complete UK/EU prospective EHR integration testing.',
      'Q2 2027: Initiate MHRA / CE mark medical software registrations.'
    ],
    metric: '2027',
    metricLabel: 'Regulatory clearances target'
  }
];
