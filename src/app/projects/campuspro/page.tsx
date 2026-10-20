import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import {
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  Mic,
  Cpu,
  Database,
  CheckCircle,
  Container,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusPro — WhatsApp AI Student Assistant",
  description:
    "Case study on CampusPro, a multi-modal WhatsApp bot integrating WhisperAI and Command R+ for personalized college recommendations.",
};

export default function CampusProCaseStudy() {
  const stack = [
    "Next.js",
    "Express.js",
    "MongoDB Atlas",
    "WhisperAI",
    "Command R+",
    "Twilio",
    "Docker",
  ];

  return (
    <article className="space-y-12 max-w-4xl mx-auto">
      {/* Navigation breadcrumb */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50">
            Case Study
          </span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-500 dark:text-neutral-400">
            September 2024
          </span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-500 dark:text-neutral-400">
            Conversational AI & Systems
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              CampusPro
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium mt-1">
              WhatsApp AI Student Assistant & Recommendation Engine
            </p>
          </div>

          <a
            href="https://github.com/NilanchalaPanda/campusPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors self-start sm:self-auto"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Repository
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {stack.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      {/* The Problem */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          The Problem: Friction in College Discovery
        </h2>
        <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Prospective higher-education students, particularly in regional
            areas, face high cognitive overhead navigating disparate university
            portals, eligibility criteria, cutoff ranks, and fees structures.
          </p>
          <p>
            Traditional web portals require downloading heavy brochures and
            filling complex forms. In contrast, WhatsApp is universally
            accessible on mobile devices, making it the most natural channel for
            real-time guidance if speech and natural language intelligence can
            be embedded seamlessly.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          The Solution: Multi-Modal Voice & Text WhatsApp Assistant
        </h2>
        <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            CampusPro bridges the gap by meeting students directly on WhatsApp.
            Whether a student sends a voice recording or a typed message, the
            system orchestrates a multi-step pipeline converting acoustic audio
            to text, extracting conversational intent, and querying structured
            college profiles.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 w-fit">
              <Mic className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              1. Whisper Speech Pipeline
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Accepts WhatsApp voice notes, streaming them to a Whisper
              speech-to-text pipeline to capture natural vernacular accents and
              queries.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 w-fit">
              <Cpu className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              2. Command R+ Intent Engine
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Extracts student parameters (exam scores, desired branch, budget,
              preferred cities) into structured queries for the recommendation
              backend.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 w-fit">
              <MessageSquare className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              3. WhatsApp Webhook Dispatch
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Twilio API integration formatting recommendations, eligibility
              summaries, and next steps into concise mobile messages.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Architecture & Technical Decisions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Architecture & Engineering Decisions
        </h2>
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Asynchronous Voice-to-Text Ingestion
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              Twilio delivers audio voice clips as raw OGG/Opus files. The
              backend buffers incoming media streams, forwards them to the
              Whisper worker, and normalizes output strings before triggering
              intent classification.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Structured Recommendation Matching
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              Queries against the MongoDB Atlas college catalog leverage
              compound filters on cutoff percentiles, category quotas, annual
              tuition brackets, and geographical preferences to rank candidate
              institutions.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <Container className="w-4 h-4 text-emerald-500" />
              Dockerized Microservices Environment
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              Containerized the application stack with Docker to ensure
              reproducible runtime environments across local development and
              cloud hosting.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
