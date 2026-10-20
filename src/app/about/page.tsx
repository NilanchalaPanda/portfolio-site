import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { User, BookOpen, Award, Users, ArrowRight, ShieldCheck, Terminal, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nilanchala Panda",
  description: "Personal and professional biography, engineering philosophy, education, leadership, and hackathons.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          Biography & Philosophy
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          About Nilanchala Panda
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Software developer with 1+ year of production experience based in Mumbai, India.
        </p>
      </div>

      {/* Narrative Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Engineering Perspective & Journey
        </h2>
        <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            I am a software developer working across full-stack applications, mobile development, backend APIs, and AI-powered workflows. My day-to-day work centers around TypeScript, JavaScript, Node.js, NestJS, React, React Native, PostgreSQL, and cloud infrastructure.
          </p>
          <p>
            What excites me most as an engineer is not simply stitching libraries together, but understanding the underlying performance characteristics of systems. Whether that means profiling GPU execution bottlenecks in a machine-learning audio pipeline to achieve a 75% speedup, planning a zero-downtime 35 TB media migration across cloud providers, or optimizing React state to shave client response times from 50 ms to 10 ms, I care about measurable outcomes.
          </p>
          <p>
            I believe the best software systems are built with pragmatic architecture, deep curiosity about performance constraints, and a commitment to reliability.
          </p>
        </div>
      </section>

      {/* Three Operating Principles */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Core Operating Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
              01 / Evidence Over Assumption
            </span>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Measure & Profile First
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Premature optimization wastes effort. Profiling real bottlenecks—like forced alignment in WhisperX or unneeded React re-renders—reveals the true highest-leverage fixes.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              02 / Resilient Systems
            </span>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Zero-Downtime Mentality
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Production systems cannot afford blind cutovers. Dual-write adapters, fallback mechanisms, and data verification guarantee uninterrupted user experience.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <span className="font-mono text-xs text-purple-600 dark:text-purple-400 font-bold">
              03 / Pragmatic AI
            </span>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Applied Product Integration
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              AI models create value when integrated into reliable product pipelines—combining Elasticsearch candidate retrieval, speech-to-text, and conversational agents.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Education
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Academic Background
          </h3>
        </div>

        <div className="space-y-4">
          {profile.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {edu.institution}
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-neutral-500 dark:text-neutral-400">{edu.period}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/50">
                    {edu.grade}
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {edu.degree}
              </p>
              {edu.highlights && (
                <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1 pt-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-1.5">
                      <span className="text-blue-500 font-bold">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Leadership & Community
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            QuestIT · Technical Officer
          </h3>
        </div>

        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-neutral-400">Student Engineering Body · VESIT</span>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Technical Leadership & Student Mentorship
              </h4>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 self-start sm:self-auto">
              {profile.leadership.tenure}
            </span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {profile.leadership.achievements.map((ach, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Users className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hackathons & Awards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Competitive Engineering
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Hackathons & Distinctions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.hackathons.map((h, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {h.title}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {h.placement}
                </span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {h.event}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Callout */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
            Have a project or opportunity in mind?
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            I’m always happy to connect and discuss engineering challenges.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
        >
          Contact Nilanchal
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
