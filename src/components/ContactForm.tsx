"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);
    setSubmitted(true);
    // In production without dedicated backend, prefill mailto link as direct action
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-8">
      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email card */}
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
              <Mail className="w-3.5 h-3.5" />
              Direct Email
            </div>
            <p className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              {profile.email}
            </p>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  Copy Address
                </>
              )}
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              Open Mail Client
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Professional Profiles */}
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
              <MessageSquare className="w-3.5 h-3.5" />
              Verified Networks
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Reach out for collaboration, systems engineering, or technical discussions.
            </p>
          </div>
          <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href={profile.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-1"
            >
              X <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215]">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
          Send a Direct Note
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Your message will be formatted and opened in your email client addressed directly to Nilanchal.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-sm">
            <p className="font-semibold mb-1">Message ready in your email client!</p>
            <p className="text-xs">
              If your client did not launch automatically, feel free to write directly to{" "}
              <a href={`mailto:${profile.email}`} className="underline font-mono">
                {profile.email}
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-mono">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Technical Inquiry / Collaboration / Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share context on what you're building or what you'd like to discuss..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
