// Profile Types
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  medium?: string;
  hackerrank?: string;
  facebook?: string;
  email?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  valueProposition?: string;
  bio?: string;
  location?: string;
  avatar?: string;
  availability?: string;
  social: SocialLinks;
}

// Skills Types
export interface Skill {
  name: string;
  level: number;
}

export interface TechStackItem {
  name: string;
  icon?: string;
}

export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface SkillsData {
  recruiterSkills: Skill[];
  techStack: TechStackCategory[];
}

// Projects Types
export interface Project {
  title: string;
  description: string;
  tech: string[];
  stars?: number;
  link?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ProjectsData {
  projects: Project[];
}

// Experience Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ExperienceData {
  experiences: Experience[];
}

// Achievements Types
export interface Achievement {
  title: string;
  description: string;
}

export interface AchievementsData {
  achievements: Achievement[];
}

// Services Types (for Client View)
export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export interface CaseStudy {
  client: string;
  project: string;
  result: string;
  metrics: string[];
}

export interface ClientData {
  services: Service[];
  caseStudies: CaseStudy[];
  workProcess: string[];
}

// Core Skills Categories (for Recruiter View)
export interface CoreSkillCategory {
  title: string;
  emoji: string;
  skills: string[];
}

export interface CoreSkillsData {
  categories: CoreSkillCategory[];
}
