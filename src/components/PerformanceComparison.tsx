"use client";

import React, { useState } from "react";
import { Zap, Clock, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

interface ComparisonProps {
  title: string;
  subtitle: string;
  beforeValue: string;
  beforeLabel: string;
  afterValue: string;
  afterLabel: string;
  reductionPercentage: string;
  details: string[];
}

export function PerformanceComparison({
  title = "Production Audio-Processing Optimization",
  subtitle = "WhisperX, CUDA, CTranslate2 & Pyannote Pipeline Acceleration",
  beforeValue = "15.5 min",
  beforeLabel = "Original Unoptimized Pipeline",
  afterValue = "3.97 min",
  afterLabel = "Re-engineered GPU Pipeline",
  reductionPercentage = "~75% Faster",
  details = [
    "Identified forced alignment & speaker diarization as the primary pipeline bottlenecks.",
    "Resolved WhisperX, CUDA, and CTranslate2 runtime execution constraints.",
    "Redesigned the API-to-GPU dispatch architecture on RunPod Serverless.",
    "Eliminated redundant memory allocations and batch processing overhead.",
  ],
}: Partial<ComparisonProps>) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] p-6 sm:p-8 overflow-hidden transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50 mb-2">
            <Zap className="w-3.5 h-3.5" />
            Verified Performance Benchmark
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-lg self-start sm:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("after")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === "after"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Optimized (3.97m)
          </button>
          <button
            onClick={() => setActiveTab("before")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeTab === "before"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Original (15.5m)
          </button>
        </div>
      </div>

      {/* Visual comparison bars */}
      <div className="py-6 space-y-4">
        {/* Before Bar */}
        <div>
          <div className="flex justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              {beforeLabel}
            </span>
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
              {beforeValue}
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                activeTab === "before"
                  ? "bg-amber-500 dark:bg-amber-400 w-full"
                  : "bg-neutral-300 dark:bg-neutral-700 w-full opacity-60"
              }`}
            />
          </div>
        </div>

        {/* After Bar */}
        <div>
          <div className="flex justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {afterLabel}
            </span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              {afterValue} ({reductionPercentage})
            </span>
          </div>
          <div className="w-full h-3 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                activeTab === "after"
                  ? "bg-emerald-500 dark:bg-emerald-400 w-[25%]"
                  : "bg-emerald-600/70 w-[25%]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Key Architectural Improvements List */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
          Engineering Interventions & Bottlenecks Resolved
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {details.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300"
            >
              <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
