import Link from "next/link";
import { TerminalSquare } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <div className="flex items-center gap-2 font-mono text-sm text-accent">
        <TerminalSquare className="h-5 w-5" />
        404
      </div>
      <h1 className="text-4xl font-bold text-text sm:text-6xl">
        <span className="text-gradient">Page not found</span>
      </h1>
      <p className="max-w-md text-muted">
        The route you requested doesn&apos;t resolve to anything here.
        Let&apos;s get you back to known territory.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}
