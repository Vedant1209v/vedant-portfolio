"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  ShieldCheck,
  BadgeCheck,
  BarChart3,
  Server,
  Sparkles,
  Cloud,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const FOCUS_AREAS = [
  { label: "BCA Student", icon: GraduationCap },
  { label: "Python Developer", icon: Code },
  { label: "Cybersecurity Enthusiast", icon: ShieldCheck },
  { label: "Ethical Hacking Certified", icon: BadgeCheck },
  { label: "Power BI Certified", icon: BarChart3 },
  { label: "Learning Backend Development", icon: Server },
  { label: "Interested in Software Engineering", icon: Sparkles },
  { label: "Interested in Cloud", icon: Cloud },
];

const STATS = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Certificates", value: 6 },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "GitHub Contributions", value: 300, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 — About"
          title="Building carefully, breaking things responsibly"
          description="A quick look at who I am, what I focus on, and how I've spent my time so far."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a BCA student who splits attention between two things
              that fit together better than they first appear:{" "}
              <span className="text-text">writing clean Python</span> and{" "}
              <span className="text-text">understanding how systems fail</span>.
              That combination shapes how I build — I try to write software
              that works, and then think about how it could be broken.
            </p>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m ethical-hacking and Power BI certified, currently
              deepening my backend development skills, and actively exploring
              cloud infrastructure and open-source contribution as the next
              steps in my growth.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              {FOCUS_AREAS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:text-text"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-accent" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glow-primary flex flex-col items-start justify-center gap-1 rounded-2xl p-6 sm:p-8"
              >
                <span className="text-3xl font-bold text-gradient sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
