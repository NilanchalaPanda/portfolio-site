"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, ArrowRight } from "lucide-react";

export function BlogListWithHover({ posts }: { posts: BlogPost[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="relative space-y-4">
      {posts.map((post) => {
        const isHovered = hoveredSlug === post.slug;
        const isOtherHovered = hoveredSlug !== null && !isHovered;

        return (
          <div
            key={post.slug}
            onMouseEnter={() => setHoveredSlug(post.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            className={`group relative rounded-xl p-3 sm:p-4 -mx-3 transition-all duration-200 ${
              isOtherHovered ? "opacity-40" : "opacity-100"
            } hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1.5 flex-1 pr-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-base text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors inline-block"
                >
                  {post.title}
                </Link>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publish_date}
                  </span>
                  <span>·</span>
                  <span>{post.reading_time}</span>
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-[11px]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors self-start sm:self-auto shrink-0 pt-1"
              >
                <span>Read more</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Floating Preview Card on Hover (as in Screenshot 2) */}
            {isHovered && (
              <div
                className="hidden lg:flex pointer-events-none fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-5 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-700 shadow-2xl flex-col items-center justify-between text-center transition-all animate-in fade-in zoom-in-95 duration-150"
                style={{
                  boxShadow:
                    "0 20px 40px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
              >
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                  Article Preview
                </div>
                <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 line-clamp-2 px-2">
                  {post.title}
                </h4>

                {/* Minimal graphic / node diagram */}
                <div className="my-4 w-full h-24 rounded-lg bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center p-2 relative overflow-hidden">
                  <svg
                    viewBox="0 0 200 80"
                    className="w-full h-full text-blue-500/40 dark:text-blue-400/40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="40" cy="40" r="14" className="stroke-blue-500 fill-blue-500/10" />
                    <circle cx="100" cy="25" r="10" className="stroke-indigo-500 fill-indigo-500/10" />
                    <circle cx="100" cy="55" r="10" className="stroke-purple-500 fill-purple-500/10" />
                    <circle cx="160" cy="40" r="14" className="stroke-emerald-500 fill-emerald-500/10" />
                    <line x1="54" y1="40" x2="90" y2="28" strokeDasharray="3 3" />
                    <line x1="54" y1="40" x2="90" y2="52" strokeDasharray="3 3" />
                    <line x1="110" y1="28" x2="146" y2="40" strokeDasharray="3 3" />
                    <line x1="110" y1="52" x2="146" y2="40" strokeDasharray="3 3" />
                  </svg>
                  <span className="absolute bottom-1 right-2 text-[10px] font-mono text-neutral-400">
                    systems::pipeline
                  </span>
                </div>

                <div className="text-[10px] font-mono text-neutral-400">
                  @nilanchal · {post.reading_time}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
