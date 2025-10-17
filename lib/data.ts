import profileData from "@/data/profile.json";
import skillsData from "@/data/skills.json";
import coreSkillsData from "@/data/core-skills.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import achievementsData from "@/data/achievements.json";
import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";

import type {
  Profile,
  SkillsData,
  CoreSkillsData,
  ProjectsData,
  ExperienceData,
  AchievementsData,
  ClientData,
  Project,
  Experience,
} from "@/types";

/**
 * Get profile information
 */
export const getProfile = (): Profile => {
  return profileData as Profile;
};

/**
 * Get all skills data (for developer view)
 */
export const getSkills = (): SkillsData => {
  return skillsData as SkillsData;
};

/**
 * Get core skills categories (for recruiter view)
 */
export const getCoreSkills = (): CoreSkillsData => {
  return coreSkillsData as CoreSkillsData;
};

/**
 * Get all projects
 * @param featuredOnly - If true, returns only featured projects
 */
export const getProjects = (featuredOnly = false): Project[] => {
  const data = projectsData as ProjectsData;
  return featuredOnly ? data.projects.filter((p) => p.featured) : data.projects;
};

/**
 * Get work experience timeline
 */
export const getExperience = (): Experience[] => {
  const data = experienceData as ExperienceData;
  return data.experiences;
};

/**
 * Get achievements
 */
export const getAchievements = () => {
  return achievementsData as AchievementsData;
};

/**
 * Get client-related data (services and case studies)
 */
export const getClientData = (): ClientData => {
  return servicesData as ClientData;
};

/**
 * Get recruiter skills (skills with proficiency levels)
 */
export const getRecruiterSkills = () => {
  return (skillsData as SkillsData).recruiterSkills;
};

/**
 * Get tech stack categories
 */
export const getTechStack = () => {
  return (skillsData as SkillsData).techStack;
};

/**
 * Get testimonials
 * @param featuredOnly - If true, returns only featured testimonials
 */
export const getTestimonials = (featuredOnly = false) => {
  const data = testimonialsData as { testimonials: any[] };
  return featuredOnly
    ? data.testimonials.filter((t) => t.featured)
    : data.testimonials;
};
