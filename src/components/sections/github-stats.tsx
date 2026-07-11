"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Users, BookMarked } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/data/site";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export function GithubSection() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${SITE.githubUsername}`),
          fetch(
            `https://api.github.com/users/${SITE.githubUsername}/repos?sort=stars&per_page=6`
          ),
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error("GitHub API error");
        const userData: GithubUser = await userRes.json();
        const repoData: GithubRepo[] = await repoRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(
            [...repoData]
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 6)
          );
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="06 — GitHub"
          title="Open-source activity, live"
          description="Pulled directly from the GitHub API — repositories, followers, and pinned work."
        />

        {status === "error" && (
          <p className="mx-auto mb-8 max-w-md text-center text-sm text-muted">
            GitHub data couldn&apos;t be loaded right now. Visit the profile
            directly below.
          </p>
        )}

        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Repositories", value: user?.public_repos, icon: BookMarked },
            { label: "Followers", value: user?.followers, icon: Users },
            { label: "Following", value: user?.following, icon: GithubIcon },
            {
              label: "Total Stars",
              value: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
              icon: Star,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass flex flex-col items-center gap-2 rounded-2xl p-5 text-center"
            >
              <stat.icon className="h-5 w-5 text-accent" />
              <span className="text-2xl font-bold text-text">
                {status === "loading" ? "—" : stat.value ?? 0}
              </span>
              <span className="text-xs text-muted">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="glass mb-10 overflow-hidden rounded-2xl p-4 sm:p-6">
          <p className="section-eyebrow mb-4 text-xs text-muted">
            contribution activity
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/06B6D4/${SITE.githubUsername}`}
            alt={`${SITE.name} GitHub contribution graph`}
            className="w-full opacity-90"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(status === "ready" ? repos : Array.from({ length: 3 })).map(
            (repo, i) => {
              const r = repo as GithubRepo | undefined;
              return (
                <motion.a
                  key={r?.id ?? i}
                  href={r?.html_url ?? SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass flex flex-col gap-3 rounded-2xl p-6 transition-shadow hover:glow-primary"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-medium text-text">
                      <GithubIcon className="h-4 w-4 text-accent" />
                      {r?.name ?? "loading…"}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm text-muted">
                    {r?.description ?? "Fetching repository details."}
                  </p>
                  <div className="mt-auto flex items-center gap-4 text-xs text-muted">
                    {r?.language && (
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {r.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {r?.stargazers_count ?? 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {r?.forks_count ?? 0}
                    </span>
                  </div>
                </motion.a>
              );
            }
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" /> View full profile
          </a>
        </div>
      </div>
    </section>
  );
}
