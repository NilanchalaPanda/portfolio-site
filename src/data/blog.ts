export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  publish_date: string;
  reading_time: string;
  categories: string[];
  content: string[];
  previewSvgSnippet?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "whisperx-pipeline-optimization",
    title: "How We Cut Audio Processing by 75% on RunPod Serverless",
    description:
      "A deep dive into diagnosing forced alignment and Pyannote diarization bottlenecks, CUDA runtime tuning, and API-to-GPU dispatch.",
    publish_date: "August 22, 2026",
    reading_time: "5 min read",
    categories: ["Engineering", "AI", "Performance"],
    content: [
      "In speech-to-text workflows, raw transcription is rarely the only computationally intensive step. When our production pipeline scaled to multi-speaker audio recordings, task turnaround times ballooned to 15–16 minutes per job.",
      "By profiling the pipeline step by step, we isolated the true culprits: forced phoneme alignment and speaker diarization via Pyannote. While the base transcription ran relatively smoothly, sequential GPU-to-CPU transfers and un-batched alignment tasks were starving the GPU.",
      "We restructured the worker container on RunPod Serverless, aligned CTranslate2 runtime flags with our GPU architecture, and decoupled speaker segmentation into a pipelined CUDA task.",
      "The result was a drop from ~15.5 minutes down to 3.97 minutes per file—a verified ~75% reduction in latency and substantial serverless compute savings.",
    ],
  },
  {
    id: 2,
    slug: "zero-downtime-35tb-media-migration",
    title: "Zero-Downtime Migration of 35 TB Production Media to Backblaze B2 & Cloudflare",
    description:
      "Architecting dual-write adapters, byte-range edge streaming, and cryptographic checksum validation for video and meeting recordings.",
    publish_date: "July 28, 2026",
    reading_time: "6 min read",
    categories: ["Engineering", "Systems"],
    content: [
      "Migrating 35 Terabytes of active media files without disrupting ongoing user uploads, live audio playback, or meeting video streams is a high-wire systems engineering challenge.",
      "Instead of scheduling an off-peak maintenance window, we designed a dual-write storage adapter. All new inbound assets were concurrently written to Backblaze B2 while an asynchronous background replicator backfilled legacy files from Supabase.",
      "By configuring Cloudflare CDN with edge caching rules and byte-range request streaming, global video loading times dropped noticeably while egress bandwidth costs were effectively zeroed.",
    ],
  },
  {
    id: 3,
    slug: "faydo-latency-reduction",
    title: "Shaving Frontend Latency from 50ms to 10ms with Smart State Caching",
    description:
      "Eliminating redundant network requests, normalizing state propagation, and accelerating interactive checkout flows.",
    publish_date: "May 18, 2026",
    reading_time: "4 min read",
    categories: ["Engineering", "Next.js", "Performance"],
    content: [
      "Micro-delays in interactive ecommerce and purchase flows degrade user trust. In the Prepurchase flow at Faydo, client response times averaged 50ms due to cascading state updates and un-debounced network round-trips.",
      "We introduced normalized in-memory caching, selective memoization, and WebSocket-driven state broadcasts. Measurements after release verified an 80% reduction in response time down to sub-10ms.",
    ],
  },
  {
    id: 4,
    slug: "elasticsearch-legal-retrieval",
    title: "Semantic Search Across 300,000+ Legal Precedents with Elasticsearch and DistilBART",
    description:
      "Architecting multi-stage hybrid retrieval and abstractive summarization across dense judicial archives.",
    publish_date: "January 14, 2026",
    reading_time: "7 min read",
    categories: ["AI", "Engineering"],
    content: [
      "Legal archives contain immense depth but minimal structure. Querying hundreds of thousands of precedent judgments requires combining statutory citation tokenization with semantic vector embeddings.",
      "In P.I.L.L.A.R, we decoupled the candidate filtering stage (Elasticsearch BM25 + vector search) from generative inference (DistilBART and Llama 2), delivering sub-second discovery while preserving citation fidelity.",
    ],
  },
  {
    id: 5,
    slug: "whatsapp-voice-assistant-whisper",
    title: "Building a Multi-Modal WhatsApp Assistant with Whisper and Command R+",
    description:
      "Handling incoming voice notes, audio transcribing, and conversational college recommendation algorithms on WhatsApp.",
    publish_date: "September 10, 2025",
    reading_time: "5 min read",
    categories: ["AI", "Personal"],
    content: [
      "Prospective students often prefer sending spontaneous voice notes rather than navigating complicated application forms. CampusPro brought conversational admissions discovery directly to WhatsApp.",
      "We bridged Twilio's audio webhook stream to Whisper speech-to-text models, and fed parsed parameters to Cohere's Command R+ to compute customized college recommendations.",
    ],
  },
];
