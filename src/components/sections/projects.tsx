"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, FolderCode } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>(
    "All"
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've shipped and broken (on purpose)"
          description="A mix of Python tools, web apps, and security-flavored builds."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filter === cat
                  ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "border-border text-muted hover:text-text"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -8 }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:glow-primary"
    >
      {project.featured && (
        <span className="section-eyebrow absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-[10px] text-accent backdrop-blur">
          <Star className="h-3 w-3 fill-accent text-accent" /> Featured
        </span>
      )}

      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-card">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <FolderCode
          className="relative h-12 w-12 text-accent/60 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.2}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="mb-1.5 font-semibold text-text">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
