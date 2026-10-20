import React from "react";
import { MetricHighlight } from "@/data/profile";

export function MetricCard({ metric }: { metric: MetricHighlight }) {
  return (
    <div className="group relative p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-3xl font-extrabold font-mono tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {metric.value}
        </span>
        {metric.change && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50">
            {metric.change}
          </span>
        )}
      </div>
      <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
        {metric.label}
      </h4>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
        {metric.subtext}
      </p>
    </div>
  );
}
