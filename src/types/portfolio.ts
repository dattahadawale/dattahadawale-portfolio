export type ProjectCategory = 'all' | 'data-analysis' | 'python-backend' | 'machine-learning';

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'data-analysis' | 'python-backend' | 'machine-learning';
  badge: string;
  tagline: string;
  oneLiner: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  contribution: string;
  results: string[];
  metrics: ProjectMetric[];
  architecture: {
    pipeline: string[];
    details: string;
  };
  challenges: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  dashboardImage?: string;
  highlights: string[];
  period?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Proficient';
    verifiedFrom: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  details: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    avatarUrl: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  recruiterNotes: {
    heading: string;
    points: string[];
  };
}
