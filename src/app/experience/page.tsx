import React from "react";
import { profile } from "@/data/profile";
import { PerformanceComparison } from "@/components/PerformanceComparison";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Briefcase, Zap, Database, Server, CheckCircle2, Shield, Layers, HardDrive } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Systems Engineering",
  description: "Production software development, systems optimization, media processing pipelines, and zero-downtime migrations engineered by Nilanchala Panda.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          Production Track Record
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          Experience & Systems Engineering
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Detailed breakdown of production software development, performance optimizations, and infrastructure architectures engineered across full-stack and mobile applications.
        </p>
      </div>

      {/* Featured Engineering Case Studies */}
      <section className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
            Deep-Dive Case Studies
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            High-Impact Systems Engineering Highlights
          </h3>
        </div>

        {/* Case Study 1: Audio Processing */}
        <div className="space-y-4">
          <PerformanceComparison
            title="Audio-Processing Pipeline Optimization · Capgemini"
            subtitle="Diagnosing Forced Alignment & Pyannote Bottlenecks on RunPod Serverless"
            beforeValue="15–16 min"
            beforeLabel="Unoptimized Baseline Pipeline"
            afterValue="3.97 min"
            afterLabel="Re-engineered GPU Pipeline"
            reductionPercentage="~75% Faster"
            details={[
              "Profiled the production audio pipeline and identified forced alignment and speaker diarization as the dominant runtime bottlenecks.",
              "Investigated WhisperX, CUDA, CTranslate2, and Pyannote execution constraints, resolving runtime incompatibilities.",
              "Redesigned the API-to-GPU dispatch layer to maximize batching throughput on RunPod Serverless.",
              "Decreased end-to-end task turnaround from ~15–16 minutes down to 3.97 minutes, representing a verified ~75% reduction.",
            ]}
          />
        </div>

        {/* Case Study 2: Storage Migration */}
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50 mb-2">
                <HardDrive className="w-3.5 h-3.5" />
                Zero-Downtime Infrastructure
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                35 TB Production Media-Storage Migration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                Supabase to Backblaze B2 with Cloudflare CDN Edge Caching
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">Capgemini · 2025–2026</span>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Architected and executed a zero-downtime migration of 35 Terabytes of production video, audio, and meeting media assets from Supabase to Backblaze B2, fronted by Cloudflare CDN for low-latency edge delivery and reduced egress overhead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                Zero System Downtime
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Engineered dual-write storage adapters ensuring uninterrupted media access and upload availability throughout the migration window.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                Cloudflare CDN Edge Routing
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Configured edge caching rules and byte-range request streaming to optimize playback performance for multi-gigabyte recordings.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                Data Verification
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Conducted automated cryptographic checksum audits across all 35 TB of migrated objects to guarantee complete data fidelity.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study 3: Operational Analysis & Faydo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 28k records */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400">
              <Database className="w-4 h-4" />
              <span>Operational Data Analysis</span>
            </div>
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              28,024 Production Task-Submission Audit
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Analyzed 28,024 production task-submission records to identify duplicate submissions, isolate asynchronous queue bottlenecks, and refine data-quality validation rules across media ingestion services.
            </p>
          </div>

          {/* Faydo 50ms -> 10ms */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
              <Zap className="w-4 h-4" />
              <span>Frontend Performance</span>
            </div>
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              Faydo Response Latency (50ms → 10ms)
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Re-engineered the Prepurchase checkout experience, state propagation, and real-time search caching, achieving an 80% reduction in measured UI response times.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Architecture Exploration */}
      <section className="space-y-4">
        <ArchitectureDiagram />
      </section>

      {/* Chronological Career Experience */}
      <section className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
            Chronology
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Work History & Roles
          </h3>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800">
          {profile.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 space-y-3">
              {/* Timeline marker */}
              <div className="absolute left-1.5 sm:left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#09090b] bg-blue-600" />

              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {exp.role}{" "}
                      <span className="text-neutral-400 font-normal">at</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </h4>
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {exp.summary}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-0.5">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
