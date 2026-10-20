import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { profile } from "@/data/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nilanchala Panda",
  description: "Get in touch with Nilanchala Panda for software development, systems optimization, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
          Let’s Connect
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Whether you want to discuss systems architecture, machine learning pipelines, full-stack development, or an engineering role, my inbox is open.
        </p>
      </div>

      {/* Meta Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-xs font-mono">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <MapPin className="w-4 h-4 text-neutral-400" />
          <span>Location: {profile.location}</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <Clock className="w-4 h-4 text-neutral-400" />
          <span>Timezone: IST (UTC +5:30)</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
          <span>{profile.availability}</span>
        </div>
      </div>

      {/* Interactive Contact & Message Hub */}
      <ContactForm />
    </div>
  );
}
