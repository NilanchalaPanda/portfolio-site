import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6">
      <div className="font-mono text-sm text-neutral-400">404 — Page Not Found</div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
        This route does not exist.
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
        The page you are looking for may have moved or doesn’t exist. Head back to explore the portfolio.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
