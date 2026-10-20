import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Cpu, ShieldCheck, Layers, BookOpen, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.I.L.L.A.R — Legal Research & Assistance Platform",
  description: "Case study on building an AI-powered legal assistance platform indexing 300,000+ cases with Elasticsearch, DistilBART, and Llama 2.",
};

export default function PillarCaseStudy() {
  const stack = [
    "Next.js",
    "Tailwind CSS",
    "Kinde Auth",
    "Elasticsearch",
    "DistilBART",
    "Llama 2",
    "TypeScript",
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

      {/* Case Study Header */}
      <header className="space-y-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50">
            Case Study
          </span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-500 dark:text-neutral-400">January 2024</span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-500 dark:text-neutral-400">Full-Stack & Applied AI</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          P.I.L.L.A.R
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
          Full-Stack Legal-Assistance Platform Across 300,000+ Cases
        </p>

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

      {/* Overview & Problem */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          The Problem: The Density of Legal Archives
        </h2>
        <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Legal precedent research is inherently cumbersome. Legal professionals and students frequently sift through hundreds of thousands of historical judgments, statutory references, and jurisdictional opinions to find relevant precedents.
          </p>
          <p>
            Standard keyword search fails because legal terminology uses distinct nuances, statutory citations, and historical synonyms. Moreover, once relevant case files are located, each document can span tens to hundreds of pages, creating an acute bottleneck in summarization and contextual understanding.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          The Solution: Multi-Stage Hybrid Retrieval & AI Synthesis
        </h2>
        <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            P.I.L.L.A.R was designed as an integrated platform combining high-scale retrieval with targeted language model inference. Rather than passing raw legal documents directly to a costly or context-limited language model, the system introduces a clear separation between indexing/retrieval and generative reasoning.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 w-fit">
              <Database className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              1. 300k+ Case Index
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Elasticsearch cluster indexing judgments with tokenized statutory citations, court jurisdictions, and BM25 relevance scoring.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 w-fit">
              <Cpu className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              2. DistilBART Summarizer
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              High-throughput abstractive summarization yielding concise case headnotes without sacrificing key holdings or jurisdictional context.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-2">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 w-fit">
              <Layers className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              3. Llama 2 Dialogue
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Interactive conversational legal assistant grounded strictly in retrieved precedent passages, helping users clarify legal definitions.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture & Engineering Decisions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Architecture & Engineering Decisions
        </h2>
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              Decoupled Two-Stage Retrieval Pipeline
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              Querying large language models across 300,000 documents simultaneously is impossible within token boundaries. We structured Elasticsearch as a high-speed candidate filter, selecting the top 5–10 most relevant case paragraphs before forwarding them to DistilBART and Llama 2.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              Grounded Prompt Architecture
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              To mitigate hallucinations in legal contexts, the conversational agent was constrained to synthesize answers strictly referencing the retrieved case holdings, providing explicit case citations.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-mono font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              Secure User Workspace with Kinde Auth
            </h4>
            <p className="text-neutral-500 dark:text-neutral-400 pl-5">
              Integrated Kinde Auth to manage authenticated user sessions, persistent saved searches, bookmarked citations, and case analysis histories.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
        <span className="font-semibold">Note & Scope:</span> P.I.L.L.A.R is an exploratory research and legal-information platform built to evaluate semantic retrieval and summarization across unstructured corpora. It is designed to assist discovery and does not constitute authoritative legal advice.
      </div>
    </article>
  );
}
