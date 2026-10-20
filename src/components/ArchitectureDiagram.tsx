"use client";

import React, { useState } from "react";
import { Server, Cpu, Database, Cloud, HardDrive, ArrowRight, Layers, Radio } from "lucide-react";

type ArchitectureType = "audio" | "storage" | "pillar";

export function ArchitectureDiagram() {
  const [activeArch, setActiveArch] = useState<ArchitectureType>("audio");

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] p-6 sm:p-8 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Systems Architecture
          </span>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            Engineered Production Pipelines
          </h3>
        </div>

        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-lg text-xs font-mono self-start sm:self-auto">
          <button
            onClick={() => setActiveArch("audio")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeArch === "audio"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            WhisperX Pipeline
          </button>
          <button
            onClick={() => setActiveArch("storage")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeArch === "storage"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            35 TB Migration
          </button>
          <button
            onClick={() => setActiveArch("pillar")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              activeArch === "pillar"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            P.I.L.L.A.R
          </button>
        </div>
      </div>

      {/* Diagram Canvas */}
      {activeArch === "audio" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Radio className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                1. Ingestion
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Audio Stream & Task Queue (Direct / Batch Excel)
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Server className="w-6 h-6 text-indigo-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                2. API Gateway
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                RunPod Serverless container trigger & chunk validation
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-blue-300 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 flex flex-col items-center">
              <Cpu className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                3. GPU Worker
              </div>
              <div className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-1">
                WhisperX + CUDA CTranslate2 + Pyannote Diarization (3.97m)
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Layers className="w-6 h-6 text-purple-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                4. Output Dispatch
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Time-aligned transcripts & speaker-segmented JSON
              </div>
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Key Optimization:</span> Isolated Pyannote diarization and WhisperX forced alignment into non-blocking, pipelined CUDA tasks with optimized batch sizes, dropping duration from 15.5m down to 3.97m.
          </div>
        </div>
      )}

      {activeArch === "storage" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Database className="w-6 h-6 text-amber-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Legacy Supabase
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Source 35 TB media catalog (video, audio, recordings)
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Server className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Dual-Write Adapter
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Zero-downtime streaming sync & checksum validation
              </div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 flex flex-col items-center">
              <HardDrive className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                Backblaze B2
              </div>
              <div className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-1">
                High-capacity, cost-effective durable object storage
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Cloud className="w-6 h-6 text-indigo-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Cloudflare CDN
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Edge caching & global low-latency streaming
              </div>
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Reliability Outcome:</span> Achieved seamless, uninterrupted playback and ingestion for all users while migrating 35 TB of media with zero minutes of system downtime.
          </div>
        </div>
      )}

      {activeArch === "pillar" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Layers className="w-6 h-6 text-cyan-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Next.js + Kinde
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Authenticated legal research workspace & queries
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Database className="w-6 h-6 text-amber-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Elasticsearch
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Indexed repository across 300,000+ legal precedents
              </div>
            </div>

            <div className="p-4 rounded-xl border border-indigo-300 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col items-center">
              <Cpu className="w-6 h-6 text-indigo-500 mb-2" />
              <div className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                DistilBART
              </div>
              <div className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-1">
                High-speed abstractive multi-document summarization
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#18181b] flex flex-col items-center">
              <Server className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                Llama 2 Engine
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Grounded conversational legal assistance & Q&A
              </div>
            </div>
          </div>
          <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">System Design:</span> Decoupled rapid BM25/semantic Elasticsearch retrieval from heavy generative inference, providing instant search feedback alongside deep AI synthesis.
          </div>
        </div>
      )}
    </div>
  );
}
