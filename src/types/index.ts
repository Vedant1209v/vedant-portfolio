import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export type ProjectCategory =
  | "Python"
  | "Web Development"
  | "Cybersecurity"
  | "Power BI"
  | "Desktop Apps";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  points: string[];
  type: "internship" | "academic" | "program";
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
