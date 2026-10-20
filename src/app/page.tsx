import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceComparison } from "@/components/PerformanceComparison";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Zap,
  Cpu,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const pillarIcons: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-blue-500" />,
    Zap: <Zap className="w-5 h-5 text-amber-500" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-500" />,
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="pt-4 sm:pt-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{profile.location}</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>{profile.title}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15] max-w-4xl">
          {profile.headline}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {profile.subheadline}
        </p>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Engineering Systems
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Social Link Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            LinkedIn
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <XIcon className="w-3.5 h-3.5" />
            X (Twitter)
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href={profile.socials.devfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            Devfolio
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
        </div>
      </section>

      {/* Metrics Highlights Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Measurable Production Impact
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            Documented Outcomes
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Positioning Pillars */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Core Engineering Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profile.positioningPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-3"
            >
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 w-fit">
                {pillarIcons[pillar.icon] || <Layers className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Performance Benchmark */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Case Study Highlight · WhisperX Pipeline
          </h2>
          <Link
            href="/experience"
            className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Read full engineering breakdown <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <PerformanceComparison />
      </section>

      {/* Systems Architecture Diagram */}
      <section className="space-y-4">
        <ArchitectureDiagram />
      </section>

      {/* Featured Projects Showcase */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Featured Work
            </h2>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Applied AI & Full-Stack Systems
            </h3>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1"
          >
            All projects <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.projects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    {project.category}
                  </span>
                  <span>{project.date}</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Summary */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Career History
            </h2>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Production Experience & Contributions
            </h3>
          </div>
          <Link
            href="/experience"
            className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1"
          >
            Detailed timeline <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-4">
          {profile.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {exp.company}
                  </h4>
                  <span className="text-neutral-400 dark:text-neutral-600">
                    /
                  </span>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    {exp.role}
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {exp.period} · {exp.location}
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {exp.summary}
              </p>

              {exp.featuredAchievements && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.featuredAchievements.map((ach, aIdx) => (
                    <span
                      key={aIdx}
                      className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                      {ach}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Technical Stack
          </h2>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Languages, Systems & Runtimes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-3"
            >
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Hackathons Highlights */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <BookOpen className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  VESIT, Mumbai
                </h4>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  CGPA: 9.38
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                B.E. in Information Technology, minor in Blockchain (2021 –
                2025)
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                Department of Information Technology. Co-authored IEEE published
                research on smart financial education platforms.
              </p>
            </div>
          </div>

          {/* Hackathons Highlights */}
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              <Award className="w-4 h-4" />
              <span>Hackathon Milestones</span>
            </div>
            <div className="space-y-2 text-xs">
              {profile.hackathons.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800/80 last:border-0 last:pb-0"
                >
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {item.event}
                    </span>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium shrink-0">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="p-8 sm:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-linear-to-b from-white to-neutral-50 dark:from-[#121215] dark:to-[#0c0c0e] text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Interested in building reliable software together?
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Whether you want to discuss systems optimization, full-stack
          application development, or an engineering role, I’d love to connect.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-mono"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </div>
  );
}
