# Nilanchala Panda — Personal Website & Digital Identity

A modern, high-performance, and typography-driven personal website and digital identity portfolio inspired by the minimalist editorial aesthetic of [ramx.in](https://ramx.in). Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Lucide Icons.

---

## Architecture & Design Overview

- **Centralized Data Model (`src/data/profile.ts`)**: All personal info, verified metrics, work history, project case studies, skills, education, and social links are kept strictly decoupled from the UI. Updating your details takes seconds without touching layout components.
- **Measurable Systems Engineering**: Highlights real, verified production outcomes:
  - **~75% Audio Pipeline Speedup**: Re-engineered WhisperX, CUDA, CTranslate2 & Pyannote on RunPod Serverless (15.5m down to 3.97m).
  - **35 TB Zero-Downtime Migration**: Production media transferred from Supabase to Backblaze B2 with Cloudflare CDN edge caching.
  - **-80% Client Latency**: React state and caching optimization at Faydo (50ms down to 10ms).
  - **28k+ Operational Audit**: 28,024 production task-submissions audited for deduplication and data quality.
- **Deep-Dive Case Studies**:
  - `/projects/pillar`: AI legal-assistance platform indexing 300,000+ cases with Elasticsearch, DistilBART, and Llama 2.
  - `/projects/campuspro`: Multi-modal WhatsApp bot with Whisper speech-to-text and Cohere Command R+ college recommendation engine.
- **Interactive Visualizations**:
  - Interactive Before/After slider & bar comparison for latency and processing benchmarks (`src/components/PerformanceComparison.tsx`).
  - Pipeline architecture flow diagrams for GPU inference, Cloudflare edge storage, and semantic search (`src/components/ArchitectureDiagram.tsx`).
- **Theme & Motion**:
  - Seamless Light and Dark mode toggle with persistent preference and flash-prevention script (`src/components/ThemeContext.tsx`).
  - Reduced-motion friendly and fully responsive across mobile, tablet, and widescreen.

---

## Key Routes

- `/` — Homepage: Hero, metrics grid, core positioning pillars, interactive benchmarks, featured projects, experience preview, and contact CTA.
- `/projects` — Full portfolio catalog of applied AI and systems projects.
- `/projects/pillar` — In-depth P.I.L.L.A.R case study.
- `/projects/campuspro` — In-depth CampusPro case study.
- `/experience` — Complete production history & deep dive into Capgemini, Faydo, and Revued engineering achievements.
- `/about` — Biography, core engineering principles, QuestIT technical leadership, VESIT education (9.38 CGPA), and hackathon honors.
- `/contact` — Interactive contact hub with one-click email copy, direct mailto dispatcher, and verified professional links.
- `/_not-found` — Custom 404 error page.

---

## Local Development

Ensure Node.js 20+ and pnpm are installed:

```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm dev

# 3. Open in browser
# http://localhost:3000
```

---

## Production Build & Verification

```bash
# Compile and build static pages
pnpm build

# Serve production build locally
pnpm start
```

---

## Updating Your Personal Details

All content is managed centrally in:

```
src/data/profile.ts
```

To update your email, add new projects, or edit career milestones, simply edit the typed data object in `src/data/profile.ts`.
