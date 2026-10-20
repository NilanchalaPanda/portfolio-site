"use client";

import React, { useState } from "react";
import { blogPosts } from "@/data/blog";
import { BlogListWithHover } from "@/components/BlogCardWithPreview";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { name: "All", count: blogPosts.length },
    {
      name: "Engineering",
      count: blogPosts.filter((p) => p.categories.includes("Engineering")).length,
    },
    {
      name: "AI",
      count: blogPosts.filter((p) => p.categories.includes("AI")).length,
    },
    {
      name: "Systems",
      count: blogPosts.filter((p) => p.categories.includes("Systems")).length,
    },
    {
      name: "Performance",
      count: blogPosts.filter((p) => p.categories.includes("Performance")).length,
    },
    {
      name: "Personal",
      count: blogPosts.filter((p) => p.categories.includes("Personal")).length,
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div className="space-y-8">
      {/* Page Title & Subtitle (Matches Screenshot 2) */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Blog
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Thoughts, technical deep dives, and insights on systems and engineering.
        </p>
      </div>

      {/* Filter Category Pills Bar (Matches Screenshot 2) */}
      <div className="flex flex-wrap items-center gap-2 pt-1 pb-4">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-xs"
                  : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-neutral-700 dark:bg-neutral-300 text-white dark:text-neutral-900"
                    : "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Blog List with Floating Thumbnail Preview on Hover */}
      <BlogListWithHover posts={filteredPosts} />
    </div>
  );
}
