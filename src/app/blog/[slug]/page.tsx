import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all articles
        </Link>
      </div>

      <header className="space-y-3 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.publish_date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.reading_time}
          </span>
        </div>

        <h1 className="text-2xl font-extrabold leading-snug tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl">
          {post.title}
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-mono text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

      <div className="prose space-y-4 text-sm leading-relaxed text-neutral-700 dark:prose-invert dark:text-neutral-300 sm:text-base">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="flex items-center justify-between border-t border-neutral-200 pt-8 text-xs font-mono text-neutral-500 dark:border-neutral-800">
        <Link href="/blog" className="flex items-center gap-1 hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          More articles
        </Link>
        <span>Nilanchala Panda</span>
      </footer>
    </article>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-2xl animate-pulse space-y-4">
          <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
      }
    >
      <BlogPostContent slug={slug} />
    </Suspense>
  );
}
