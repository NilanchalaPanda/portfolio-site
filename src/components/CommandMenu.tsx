"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, FileText, Briefcase, FolderGit2, CornerDownLeft } from "lucide-react";
import { profile } from "@/data/profile";
import { blogPosts } from "@/data/blog";

interface SearchItem {
  id: string;
  title: string;
  category: "Blog" | "Work" | "Projects";
  subtitle: string;
  url: string;
}

export function CommandMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search items catalog
  const allItems: SearchItem[] = [
    // Blogs
    ...blogPosts.map((b) => ({
      id: `blog-${b.slug}`,
      title: b.title,
      category: "Blog" as const,
      subtitle: b.description,
      url: `/blog/${b.slug}`,
    })),
    // Projects
    ...profile.projects.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      category: "Projects" as const,
      subtitle: p.description,
      url: `/projects/${p.slug}`,
    })),
    // Work
    ...profile.experiences.map((e) => ({
      id: `exp-${e.company}`,
      title: `${e.company} — ${e.role}`,
      category: "Work" as const,
      subtitle: e.summary,
      url: `/experience`,
    })),
    // Systems
    {
      id: "sys-whisperx",
      title: "Audio-Processing Pipeline (75% speedup)",
      category: "Work" as const,
      subtitle: "WhisperX, CUDA, CTranslate2 & Pyannote on RunPod Serverless",
      url: "/experience",
    },
    {
      id: "sys-migration",
      title: "35 TB Zero-Downtime Media Migration",
      category: "Work" as const,
      subtitle: "Supabase to Backblaze B2 with Cloudflare CDN",
      url: "/experience",
    },
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(
            (prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length)
          );
        } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
          e.preventDefault();
          router.push(filteredItems[selectedIndex].url);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  // Helper to highlight matching text in search results
  const renderHighlighted = (text: string, term: string) => {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span
          key={i}
          className="bg-amber-400 dark:bg-amber-500/80 text-black px-1 py-0.5 rounded-sm font-semibold"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="px-2 py-0.5 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-400">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(item.url);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-start justify-between gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-neutral-200/80 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-300">
                        {item.category}
                      </span>
                      <h5 className="text-sm font-semibold truncate text-neutral-900 dark:text-neutral-100">
                        {renderHighlighted(item.title, query)}
                      </h5>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      {renderHighlighted(item.subtitle, query)}
                    </p>
                  </div>

                  {isSelected && (
                    <CornerDownLeft className="w-4 h-4 text-neutral-400 shrink-0 self-center" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer (matches Screenshot 3) */}
        <div className="px-4 py-2 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>Filter</span>
            <span className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
              All ↕
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Navigate with ↑↓</span>
            <span>·</span>
            <span>Select with ↵</span>
          </div>
        </div>
      </div>
    </div>
  );
}
