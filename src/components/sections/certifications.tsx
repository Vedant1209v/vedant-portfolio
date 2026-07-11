"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 — Certifications"
          title="Credentials that back up the claims"
          description="Formal training across security, data, and programming."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-2xl transition-shadow duration-300 hover:glow-accent"
            >
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-secondary/10">
                <div className="grid-bg absolute inset-0 opacity-30" />
                <Award
                  className="relative h-10 w-10 text-accent/70 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.3}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 font-semibold text-text">{cert.title}</h3>
                <p className="text-sm text-muted">
                  {cert.issuer} &middot; {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-primary"
                  >
                    View credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
