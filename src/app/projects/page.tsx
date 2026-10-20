import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/Icons";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Search,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Detailed case studies and applications built by Nilanchala Panda, spanning applied AI, search, and conversational systems.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          Engineering Portfolio
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          Projects & Case Studies
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          In-depth technical writeups and applications combining full-stack
          development, applied machine learning, semantic search, and
          conversational interfaces.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-8">
        {profile.projects.map((project) => (
          <div
            key={project.slug}
            className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {project.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h2>
                <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto pt-2 sm:pt-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-1.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                >
                  Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Architecture Highlights & Takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80 space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  Key Capabilities
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80 space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-emerald-500" />
                  Technical Implementation
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {project.architectureNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">·</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-xs font-mono text-neutral-400 mr-1">
                Stack:
              </span>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
