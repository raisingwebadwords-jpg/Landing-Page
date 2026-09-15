export interface AuditFormData {
  websiteUrl: string;
  businessCategory: string;
  primaryService: string;
  targetLocation: string;
}

export interface AuditResults {
  overallScore: number;
  traditionalSeo: number;
  aeoReadiness: number;
  geoReadiness: number;
  contentAuthority: number;
  technicalHealth: number;
  opportunityLevel: 'MODERATE' | 'HIGH' | 'CRITICAL';
  diagnosticGaps: string[];
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  websiteUrl: string;
  industry: string;
  monthlyBudget: string;
  primaryGoal: string;
  selectedService: 'SEO' | 'AEO' | 'GEO' | 'SEO + AEO + GEO' | 'Not Sure';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PlatformNode {
  name: string;
  iconName: string;
  type: 'Traditional Search' | 'Generative LLM' | 'Answer Engine' | 'Hybrid';
  status: string;
  description: string;
  querySample: string;
  simulatedAnswer: string;
}
