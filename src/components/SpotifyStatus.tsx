import React from "react";

export function SpotifyStatus() {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono">
      {/* Spotify Green Icon */}
      <svg
        className="w-4 h-4 text-emerald-500 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.794-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.496 9.723 1.115.294.18.386.563.207.855zm1.226-2.73c-.226.367-.708.482-1.075.257-2.69-1.653-6.79-2.133-9.97-1.167-.413.125-.85-.106-.975-.518-.125-.413.106-.85.518-.975 3.633-1.103 8.148-.568 11.245 1.33.367.226.482.708.257 1.073zm.106-2.855C14.692 8.95 9.375 8.775 6.297 9.71c-.495.15-1.02-.13-1.17-.625-.15-.494.13-1.02.625-1.17 3.534-1.072 9.404-.867 13.127 1.345.446.265.592.846.327 1.29-.265.447-.846.593-1.29.328z" />
      </svg>
      <span className="shrink-0 text-neutral-400">Last played —</span>
      <a
        href="https://open.spotify.com/track/0febwTwLDSZzrt46i1RBF5"
        target="_blank"
        rel="noopener noreferrer"
        className="truncate hover:underline text-neutral-700 dark:text-neutral-300 transition-colors"
      >
        <span className="font-medium text-neutral-900 dark:text-neutral-100">Ishqa Ve</span>
        <span> · Zeeshan Ali, Yuvraj Tung</span>
      </a>
    </div>
  );
}
