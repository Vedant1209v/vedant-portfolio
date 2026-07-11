"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ShieldHalf } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/data/experience";
import type { ExperienceItem } from "@/types";

const ICONS: Record<ExperienceItem["type"], typeof Briefcase> = {
  internship: Briefcase,
  academic: GraduationCap,
  program: ShieldHalf,
};

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="05 — Experience"
          title="Where the learning happened"
          description="Programs, internships, and academic work that shaped my practice."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-6" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const Icon = ICONS[item.type];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  <div className="glow-primary absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-accent sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <span className="section-eyebrow rounded-full border border-border px-3 py-1 text-[11px] text-accent">
                        {item.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-primary">
                      {item.organization}
                    </p>
                    <p className="mb-4 text-sm text-muted">{item.description}</p>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
