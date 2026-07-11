"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import { SITE } from "@/data/site";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { Button } from "@/components/ui/button";

const FLOATING_LABELS = [
  { label: "python", top: "18%", left: "10%", delay: 0 },
  { label: "flask", top: "70%", left: "14%", delay: 0.6 },
  { label: "nmap", top: "24%", left: "84%", delay: 1.2 },
  { label: "kali", top: "66%", left: "82%", delay: 1.8 },
  { label: "sql", top: "44%", left: "6%", delay: 2.4 },
  { label: "react", top: "40%", left: "90%", delay: 3 },
];

export function Hero() {
  const typed = useTypingEffect(SITE.taglines);
  const { x, y } = useMouseParallax();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Animated grid */}
      <div
        className="grid-bg pointer-events-none absolute inset-0 opacity-70"
        style={{
          transform: `translate(${x * 6}px, ${y * 6}px)`,
        }}
      />

      {/* Glowing blobs */}
      <div
        className="animate-blob pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-[110px]"
        style={{ transform: `translate(${x * -12}px, ${y * -12}px)` }}
      />
      <div
        className="animate-blob pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-[120px]"
        style={{ animationDelay: "3s", transform: `translate(${x * 10}px, ${y * 8}px)` }}
      />
      <div
        className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
        style={{ animationDelay: "6s" }}
      />

      {/* Floating technology labels */}
      {FLOATING_LABELS.map((item) => (
        <motion.span
          key={item.label}
          className="section-eyebrow pointer-events-none absolute hidden rounded-full border border-border bg-white/5 px-3 py-1 text-[11px] text-muted backdrop-blur-md md:block"
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.label}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            available for internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">VEDANT</span>
            <br />
            <span className="text-text">LANDGE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex h-8 items-center font-mono text-lg text-muted sm:text-xl"
          >
            <span className="mr-2 text-accent">{">"}</span>
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base text-muted sm:text-lg"
          >
            BCA student building secure, reliable software — from Python
            backends to hands-on penetration testing. Currently exploring
            cloud infrastructure and open-source contribution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href={SITE.resumeUrl} download>
              <Button variant="primary">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
            <Button variant="outline" onClick={() => scrollTo("#projects")}>
              <FolderGit2 className="h-4 w-4" /> View Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("#contact")}>
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
        >
          <div className="glow-primary absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <div className="scanline glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border-white/10">
            <Image
              src="/profile.png"
              alt="Vedant Landge"
              fill
              className="object-cover"
              priority
            />
            <span className="absolute left-5 top-5 h-3 w-3 rounded-full border border-accent/50" />
            <span className="absolute bottom-5 right-5 h-3 w-3 rounded-full border border-primary/50" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border p-2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}