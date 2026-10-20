import React from "react";

export function PixelAvatar({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-md flex items-center justify-center shrink-0 select-none`}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full p-1 image-pixelated"
        shapeRendering="crispEdges"
      >
        {/* Retro pixel art avatar head with headphones */}
        {/* Headphone band */}
        <rect x="8" y="4" width="16" height="3" fill="#3b82f6" />
        <rect x="6" y="7" width="3" height="10" fill="#2563eb" />
        <rect x="23" y="7" width="3" height="10" fill="#2563eb" />
        {/* Hair */}
        <rect x="9" y="7" width="14" height="6" fill="#27272a" />
        <rect x="8" y="11" width="3" height="4" fill="#27272a" />
        {/* Face */}
        <rect x="10" y="11" width="12" height="10" fill="#fcd34d" />
        {/* Eyes */}
        <rect x="12" y="14" width="2" height="2" fill="#09090b" />
        <rect x="18" y="14" width="2" height="2" fill="#09090b" />
        {/* Glasses bridge */}
        <rect x="14" y="14" width="4" height="1" fill="#18181b" />
        {/* Smile */}
        <rect x="14" y="18" width="4" height="1" fill="#b45309" />
        {/* Hoodie collar */}
        <rect x="8" y="22" width="16" height="8" fill="#1e293b" />
        <rect x="13" y="22" width="6" height="4" fill="#38bdf8" />
      </svg>
    </div>
  );
}
