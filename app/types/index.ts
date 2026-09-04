// app/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  badgeUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  skillsUsed: string[];
}