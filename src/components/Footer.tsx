import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0c0e] py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-200 dark:border-neutral-800/80">
          {/* Col 1: Bio & Location */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                {profile.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono">
                {profile.title}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              Software developer building resilient web & mobile applications,
              optimizing performance-critical pipelines, and integrating applied
              AI systems.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{profile.location}</span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                {profile.availability}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Experience & Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <p>
            © {currentYear} {profile.name}. All verified credentials & work
            recorded.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
