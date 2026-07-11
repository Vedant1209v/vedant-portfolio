"use client";

import { Mail, ArrowUp, TerminalSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { NAV_LINKS, SITE } from "@/data/site";

const SOCIALS = [
  { icon: GithubIcon, href: SITE.github, label: "GitHub" },
  { icon: LinkedinIcon, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-text">
          <TerminalSquare className="h-5 w-5 text-accent" />
          VL<span className="text-accent">.</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-accent/50 hover:text-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
