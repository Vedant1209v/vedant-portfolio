# Vedant Landge — Portfolio

A premium, dark, cybersecurity-inspired developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — things to personalize

1. **Resume** — replace `public/resume.pdf` with your real resume (same filename, or update `resumeUrl` in `src/data/site.ts`).
2. **Contact form (EmailJS)** — copy `.env.local.example` to `.env.local` and fill in your EmailJS Service ID, Template ID, and Public Key from [dashboard.emailjs.com](https://dashboard.emailjs.com). Your EmailJS template should use these variables: `from_name`, `from_email`, `subject`, `message`.
3. **GitHub section** — update `githubUsername` and `github` in `src/data/site.ts` to your GitHub handle; the section fetches live stats and repos from the public GitHub API at runtime (no token needed).
4. **Site info** — update `SITE` in `src/data/site.ts` (email, LinkedIn, location, site URL) — this also drives the SEO metadata, sitemap, and robots.txt.
5. **Profile photo** — the hero currently shows a placeholder avatar frame. Swap in a real photo by editing `src/components/sections/hero.tsx`.
6. **Content** — edit `src/data/skills.ts`, `src/data/projects.ts`, `src/data/certifications.ts`, and `src/data/experience.ts` with your real projects and credentials.
7. **OG image / favicon** — add `public/og-image.png` (1200×630) for social share previews; `public/favicon.ico` is already included by Next.js scaffolding.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (custom design tokens for the color system)
- Framer Motion for animation
- lucide-react for icons
- React Hook Form + Zod for the contact form
- EmailJS (`@emailjs/browser`) to send messages client-side, no backend required

## Project structure

```
src/
  app/            # routes, layout, metadata, sitemap/robots
  components/
    ui/           # buttons, badges, section heading, counters, brand icons
    sections/     # navbar, hero, about, skills, projects, certifications,
                   # experience, github, contact, footer
  data/           # all editable content lives here
  hooks/          # typing effect, active-section tracking, scroll progress, parallax
  lib/            # utils (cn helper)
  types/          # shared TypeScript types
```

## Notes

- The GitHub contribution graph uses a public chart image service (`ghchart.rshah.org`); swap it out if you'd prefer a self-hosted heatmap.
- Dark mode is the site's signature look; the navbar toggle is a lightweight visual affordance rather than a full light theme, to preserve the intended aesthetic.
- Run `npm run build` before deploying to confirm everything compiles in your environment.
