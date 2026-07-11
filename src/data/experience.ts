import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "boston-institute",
    title: "Cybersecurity & Ethical Hacking Program",
    organization: "Boston Institute of Analytics",
    period: "2026",
    description:
      "Completed an intensive program covering offensive and defensive security fundamentals.",
    points: [
      "Practiced penetration testing workflows using Kali Linux, Nmap, and Burp Suite",
      "Studied the OWASP Top 10 and applied it to real vulnerable web applications",
      "Built hands-on labs for network scanning and traffic analysis with Wireshark",
    ],
    type: "program",
  },
  {
    id: "codsoft",
    title: "Python Development Intern",
    organization: "CodSoft",
    period: "2026",
    description:
      "Remote internship focused on shipping small, well-tested Python applications.",
    points: [
      "Delivered CLI and GUI tools including a to-do app, calculator, and password generator",
      "Wrote clean, documented code reviewed against internship submission guidelines",
      "Collaborated asynchronously and met weekly project deadlines",
    ],
    type: "internship",
  },
  {
    id: "academic-projects",
    title: "Academic Projects",
    organization: "BCA Coursework",
    period: "2023 — Present",
    description:
      "Applied classroom fundamentals to independent projects spanning software, data, and security.",
    points: [
      "Built database-backed applications for coursework in SQL and system design",
      "Explored Power BI for dashboarding and data storytelling",
      "Maintained a public GitHub profile documenting ongoing learning",
    ],
    type: "academic",
  },
];
