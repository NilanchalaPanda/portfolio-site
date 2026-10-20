"use client";

import React, { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { blogPosts } from "@/data/blog";
import { PixelAvatar } from "@/components/Avatar";
import { SpotifyStatus } from "@/components/SpotifyStatus";
import { BlogListWithHover } from "@/components/BlogCardWithPreview";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";
import {
  Copy,
  Check,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section (Matches Screenshot 1 from ramx.in) */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center gap-4">
          <PixelAvatar className="w-14 h-14" />
          <div className="space-y-0.5">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              {profile.name}
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              <span>{profile.title}</span>
              <span>·</span>
              <span>Systems Engineer</span>
              <span>·</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="Click to copy email"
              >
                <span>{profile.email}</span>
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Short Personal Bio */}
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
          I build software, optimize systems, and turn complex engineering
          problems into practical solutions.
        </p>

        {/* Spotify Status Banner */}
        <div className="pt-1">
          <SpotifyStatus />
        </div>

        {/* Minimalist Social Icon Links Row */}
        <div className="flex items-center gap-4 pt-1 text-neutral-500 dark:text-neutral-400">
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="X (Twitter)"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.socials.devfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Devfolio"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Experience Section (Matches Screenshot 1 from ramx.in) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Experience
        </h2>

        <div className="space-y-5">
          {/* Capgemini */}
          <div className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
                  Capgemini
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Working
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                Software Developer (Full Stack & Systems)
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right">
              <div>July 2025 – Present</div>
              <div>Mumbai, India (On-Site)</div>
            </div>
          </div>

          {/* Faydo */}
          <div className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="space-y-0.5">
              <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
                Faydo
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                Full Stack Intern
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right">
              <div>March 2025 – April 2025</div>
              <div>Bengaluru, India (Remote)</div>
            </div>
          </div>

          {/* Revued */}
          <div className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="space-y-0.5">
              <h3 className="font-semibold text-base text-neutral-900 dark:text-neutral-100">
                Revued
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                Full Stack Developer Intern
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right">
              <div>October 2024 – February 2025</div>
              <div>Remote</div>
            </div>
          </div>
        </div>

        {/* Pill Button: Show all work experiences */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/experience"
            className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Show all work experiences
          </Link>
        </div>
      </section>

      {/* Blog Section (Matches Screenshot 1 & 2 from ramx.in) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Blog
        </h2>

        {/* Top 3 Blog Posts with Floating Preview Card on Hover */}
        <BlogListWithHover posts={blogPosts.slice(0, 3)} />

        {/* Pill Button: Show all blogs */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Show all blogs
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Featured Projects
        </h2>

        <div className="space-y-4">
          {profile.projects.map((project) => (
            <div
              key={project.slug}
              className="p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-bold text-base text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </Link>
                <span className="text-xs font-mono text-neutral-400">
                  {project.date}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-center">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Show all projects
          </Link>
        </div>
      </section>
    </div>
  );
}
