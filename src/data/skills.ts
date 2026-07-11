import {
  Code2,
  Layout,
  Server,
  Database,
  ShieldHalf,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategory } from "@/types";

// Using a generic icon per skill row keeps the visual language consistent;
// the category icon carries the identity, the skill icon is a small dot-marker.
const dot: LucideIcon = Code2;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages I write and reason in daily.",
    icon: Code2,
    skills: [
      { name: "Python", level: 92, icon: dot },
      { name: "C", level: 70, icon: dot },
      { name: "C++", level: 68, icon: dot },
      { name: "Java", level: 60, icon: dot },
      { name: "PHP", level: 58, icon: dot },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building clean, responsive interfaces.",
    icon: Layout,
    skills: [
      { name: "HTML", level: 88, icon: dot },
      { name: "CSS", level: 82, icon: dot },
      { name: "JavaScript", level: 75, icon: dot },
      { name: "React", level: 65, icon: dot },
      { name: "Tailwind CSS", level: 78, icon: dot },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs and services that hold up under load.",
    icon: Server,
    skills: [
      { name: "Flask", level: 80, icon: dot },
      { name: "PHP", level: 58, icon: dot },
      { name: "REST APIs", level: 78, icon: dot },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling and querying data reliably.",
    icon: Database,
    skills: [
      { name: "SQL", level: 80, icon: dot },
      { name: "MySQL", level: 76, icon: dot },
      { name: "SQLite", level: 74, icon: dot },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Thinking like an attacker to build safer systems.",
    icon: ShieldHalf,
    skills: [
      { name: "Linux", level: 82, icon: dot },
      { name: "Kali Linux", level: 76, icon: dot },
      { name: "Nmap", level: 74, icon: dot },
      { name: "Wireshark", level: 70, icon: dot },
      { name: "Burp Suite", level: 68, icon: dot },
      { name: "Metasploit", level: 62, icon: dot },
      { name: "OWASP Top 10", level: 72, icon: dot },
      { name: "Networking", level: 75, icon: dot },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The workbench I ship with.",
    icon: Wrench,
    skills: [
      { name: "Git", level: 84, icon: dot },
      { name: "GitHub", level: 84, icon: dot },
      { name: "VS Code", level: 90, icon: dot },
      { name: "Power BI", level: 72, icon: dot },
      { name: "Docker", level: 55, icon: dot },
    ],
  },
];
