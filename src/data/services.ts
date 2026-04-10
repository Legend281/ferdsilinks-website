import { useLanguage } from '@/components/LanguageProvider';
import { serviceCategories as enServices } from './en/services';
import { serviceCategories as frServices } from './fr/services';

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface CapabilityFeature {
    icon: string;
    title: string;
    description: string;
    bullets: string[];
}

export interface CaseStudyTeaser {
    title: string;
    description: string;
    image: string;
    metric: string;
    metricText: string;
}

export interface ExpertLead {
    name: string;
    role: string;
    quote: string;
    image: string;
}

export interface ServiceCategory {
    id: string;
    slug: string;
    domain: string;
    title: string;
    description: string;
    heroImage: string;
    methodology: ProcessStep[];
    capabilities: CapabilityFeature[];
    techStack: string[];
    caseStudy: CaseStudyTeaser;
    expert: ExpertLead;
}

export const useServices = () => {
    const { language } = useLanguage();
    return language === 'fr' ? frServices : enServices;
};

// Default static fallback for Server Components (e.g. static routing)
export const serviceCategories = enServices;
