import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "contact-book",
    title: "Contact Book",
    description:
      "A command-line and GUI contact manager built in Python with persistent local storage, search, and edit/delete flows.",
    image: "/projects/contact-book.svg",
    tags: ["CLI", "CRUD", "SQLite"],
    category: "Python",
    tech: ["Python", "SQLite", "Tkinter"],
    github: "https://github.com/vedantlandge/contact-book",
    featured: true,
  },
  {
    id: "todo-app",
    title: "Modern To-Do App",
    description:
      "A responsive task manager with drag-and-drop reordering, due dates, and local persistence — built with React and Tailwind.",
    image: "/projects/todo-app.svg",
    tags: ["React", "Productivity"],
    category: "Web Development",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/vedantlandge/modern-todo",
    demo: "https://todo.vedantlandge.dev",
    featured: true,
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description:
      "A polished browser game with score tracking, animated round results, and a lightweight computer opponent.",
    image: "/projects/rps.svg",
    tags: ["Game", "Frontend"],
    category: "Web Development",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/vedantlandge/rock-paper-scissors",
  },
  {
  id: "ai-weather-outfit-advisor",
  title: "Skyline – AI Weather & Outfit Advisor",
  description:
    "A modern AI-powered weather application that provides real-time weather forecasts, air quality, intelligent outfit recommendations, travel planning, interactive charts, dark/light mode, and responsive design using the OpenWeather API.",
  image: "/projects/skyline-weather.png", // Replace with your project screenshot
  tags: [
    "Next.js",
    "AI",
    "Weather API",
    "Travel Planner",
    "Responsive"
  ],
  category: "Full Stack Development",
  tech: [
    "Next.js 15",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "OpenWeather API",
    "Framer Motion"
  ],
  github: "https://github.com/Vedant1209v/ai-weather-outfit-advisor",
  demo: "https://ai-weather-outfit-advisor.netlify.app",
},
  {
    id: "qr-generator",
    title: "QR Generator",
    description:
      "Generates downloadable QR codes from text or URLs, with customizable size and error-correction level.",
    image: "/projects/qr-generator.svg",
    tags: ["Utility", "Python"],
    category: "Python",
    tech: ["Python", "qrcode", "Flask"],
    github: "https://github.com/vedantlandge/qr-generator",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "A configurable secure password generator with strength scoring and clipboard copy, built with a security-first mindset.",
    image: "/projects/password-generator.svg",
    tags: ["Security", "Python"],
    category: "Cybersecurity",
    tech: ["Python", "secrets", "Tkinter"],
    github: "https://github.com/vedantlandge/password-generator",
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Tracks daily expenses by category with monthly summaries and exportable reports for budgeting.",
    image: "/projects/expense-tracker.svg",
    tags: ["Finance", "Data"],
    category: "Python",
    tech: ["Python", "Pandas", "SQLite"],
    github: "https://github.com/vedantlandge/expense-tracker",
  },
  {
    id: "student-management",
    title: "Student Management System",
    description:
      "A desktop application for managing student records, attendance, and grades with role-based access.",
    image: "/projects/student-management.svg",
    tags: ["Desktop", "Database"],
    category: "Desktop Apps",
    tech: ["Python", "Tkinter", "MySQL"],
    github: "https://github.com/vedantlandge/student-management",
  },
];

export const PROJECT_CATEGORIES: Array<Project["category"] | "All"> = [
  "All",
  "Python",
  "Web Development",
  "Cybersecurity",
  "Power BI",
  "Desktop Apps",
];
