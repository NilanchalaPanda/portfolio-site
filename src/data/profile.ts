export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
  change?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  role: string;
  companyOrContext: string;
  period: string;
  metric?: {
    before: string;
    after: string;
    delta: string;
    description: string;
  };
  summary: string;
  stack: string[];
  keyPoints: string[];
  architectureSummary: string;
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Full-Stack & AI" | "Conversational AI & Systems" | "Web & Mobile";
  stack: string[];
  highlights: string[];
  architectureNotes: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  featuredAchievements?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  highlights?: string[];
}

export interface HackathonAchievement {
  title: string;
  event: string;
  placement: string;
  description: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  headline: string;
  subheadline: string;
  title: string;
  experienceYears: string;
  location: string;
  email: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
    devfolio: string;
    email: string;
  };
  bio: string[];
  positioningPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  metrics: MetricHighlight[];
  featuredCaseStudies: CaseStudy[];
  projects: Project[];
  experiences: Experience[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: Education[];
  hackathons: HackathonAchievement[];
  leadership: {
    role: string;
    organization: string;
    tenure: string;
    achievements: string[];
  };
}

export const profile: ProfileData = {
  name: "Nilanchala Panda",
  shortName: "Nilanchal",
  headline: "I build software, optimize systems, and turn complex engineering problems into practical solutions.",
  subheadline:
    "Software developer with 1+ year of production experience across full-stack applications, mobile development, backend APIs, and AI-powered workflows. Specialized in profiling bottlenecks, re-engineering pipelines, and shipping reliable products.",
  title: "Software Developer",
  experienceYears: "1+ Year Production",
  location: "Mumbai, India",
  email: "nilanchal.r.panda@gmail.com",
  availability: "Open to technical conversations & opportunities",
  socials: {
    github: "https://github.com/NilanchalaPanda",
    linkedin: "https://www.linkedin.com/in/nilanchal-panda",
    x: "https://x.com/dev_nilanchal",
    devfolio: "https://devfolio.co/@Nilanchal",
    email: "mailto:nilanchal.r.panda@gmail.com",
  },
  bio: [
    "I am a software developer with experience building full-stack and React Native applications using TypeScript, JavaScript, Node.js, NestJS, React, PostgreSQL, and cloud infrastructure.",
    "My work spans backend API development, mobile application development, authentication, performance optimization, AI and media-processing workflows, and production infrastructure.",
    "I am particularly interested in building practical software, improving the performance and reliability of systems, integrating complex technologies, and solving engineering problems that have measurable impact.",
  ],
  positioningPillars: [
    {
      title: "Full-Stack & Application Engineering",
      description:
        "Building responsive web apps, Expo & React Native mobile experiences, robust NestJS/Node.js REST APIs, and resilient authentication flows.",
      icon: "Layers",
    },
    {
      title: "Performance & Systems Optimization",
      description:
        "Profiling bottlenecks, reducing latency from 50ms to 10ms, slashing ML audio processing times by ~75%, and managing zero-downtime 35 TB media migrations.",
      icon: "Zap",
    },
    {
      title: "Applied AI & Pipeline Integration",
      description:
        "Connecting WhisperX, Pyannote, CTranslate2, Llama 2, and Elasticsearch with cloud infrastructure like RunPod Serverless and Cloudflare CDN.",
      icon: "Cpu",
    },
  ],
  metrics: [
    {
      label: "Audio Pipeline Speedup",
      value: "75%",
      subtext: "From ~15.5 min down to 3.97 min",
      change: "Reduced processing by 75%",
    },
    {
      label: "Zero-Downtime Migration",
      value: "35 TB",
      subtext: "Production media migrated to B2 + Cloudflare",
      change: "100% uptime maintained",
    },
    {
      label: "Client Response Time",
      value: "-80%",
      subtext: "From 50 ms down to 10 ms at Faydo",
      change: "State & caching re-architecture",
    },
    {
      label: "Operational Records Audited",
      value: "28k+",
      subtext: "Production task-submissions analyzed",
      change: "Deduplicated & data quality improved",
    },
  ],
  featuredCaseStudies: [
    {
      id: "audio-pipeline",
      title: "Audio-Processing Pipeline Optimization",
      tagline: "Slashing transcription & diarization turnaround by ~75% on RunPod Serverless",
      role: "Software Developer",
      companyOrContext: "Capgemini",
      period: "2025 – 2026",
      metric: {
        before: "15–16 min",
        after: "3.97 min",
        delta: "~75% reduction",
        description: "End-to-end processing duration per workload",
      },
      summary:
        "Profiled and re-engineered an audio-processing pipeline utilizing WhisperX and Pyannote. Diagnosed forced alignment and diarization bottlenecks, eliminated CUDA/CTranslate2 runtime inefficiencies, and overhauled the API-to-GPU dispatch on RunPod Serverless.",
      stack: [
        "Python",
        "WhisperX",
        "Pyannote",
        "CUDA",
        "CTranslate2",
        "RunPod Serverless",
        "Docker",
      ],
      keyPoints: [
        "Identified forced alignment and speaker diarization as the primary pipeline bottlenecks.",
        "Resolved WhisperX, CUDA, and CTranslate2 execution incompatibilities.",
        "Redesigned the API-to-GPU dispatch layer to maximize batching and hardware throughput.",
        "Achieved a verified drop from ~15–16 minutes down to 3.97 minutes.",
      ],
      architectureSummary:
        "Client Request → API Gateway → RunPod Serverless Container (Optimized CTranslate2 + Pyannote Worker) → High-throughput GPU execution → Structured Output Dispatch",
    },
    {
      id: "storage-migration",
      title: "35 TB Media Storage Zero-Downtime Migration",
      tagline: "Architecting high-availability storage & CDN routing for large-scale media assets",
      role: "Software Developer",
      companyOrContext: "Capgemini",
      period: "2025 – 2026",
      summary:
        "Architected and executed a zero-downtime migration of 35 TB of production video, audio, and meeting media from Supabase to Backblaze B2, fronted by Cloudflare CDN for edge caching and low-latency delivery.",
      stack: [
        "Backblaze B2",
        "Cloudflare CDN",
        "Supabase",
        "Node.js",
        "Object Storage Architecture",
      ],
      keyPoints: [
        "Planned dual-write and phased migration strategies to ensure 100% service availability.",
        "Integrated Cloudflare CDN with edge caching rules to optimize global video and audio streaming.",
        "Verified checksums and data integrity across 35 Terabytes of mission-critical assets.",
      ],
      architectureSummary:
        "Dual-Write API Adapter → Backblaze B2 Bucket → Cloudflare CDN Edge Cache → Global Client Delivery",
    },
    {
      id: "faydo-optimization",
      title: "Faydo Client Performance & State Optimization",
      tagline: "80% response-time reduction through optimized state handling and caching",
      role: "Full Stack Intern",
      companyOrContext: "Faydo",
      period: "March 2025 – April 2025",
      metric: {
        before: "50 ms",
        after: "10 ms",
        delta: "80% reduction",
        description: "Measured client response time",
      },
      summary:
        "Re-engineered the Prepurchase user flow and real-time search interface, addressing excessive re-renders, un-cached network requests, and inefficient state propagation.",
      stack: ["React.js", "TypeScript", "State Management", "Performance Profiling", "Real-Time Tracking"],
      keyPoints: [
        "Redesigned Prepurchase checkout flow for seamless transactional UX.",
        "Implemented targeted caching layers and debounced queries for real-time search.",
        "Reduced measured response time from 50 ms to 10 ms.",
        "Integrated dynamic UI interactions and live support functionality.",
      ],
      architectureSummary:
        "Normalized State Cache → Debounced Search Pipeline → Dynamic UI Renderer with Sub-10ms UI Feedback",
    },
  ],
  projects: [
    {
      slug: "pillar",
      title: "P.I.L.L.A.R",
      date: "January 2024",
      tagline: "Full-Stack Legal-Assistance Platform across 300,000+ Cases",
      description:
        "An AI-powered legal research and assistance platform combining conversational intelligence, document summarization, and high-performance semantic retrieval over 300k+ legal cases.",
      longDescription:
        "P.I.L.L.A.R bridges the gap between massive, dense legal archives and actionable legal insights. Built with Next.js, Elasticsearch, and open-weight AI models, the platform allows users to semantically search precedent cases, extract concise multi-document summaries, and interact with a domain-aware legal dialogue agent.",
      category: "Full-Stack & AI",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Kinde Auth",
        "Elasticsearch",
        "DistilBART",
        "Llama 2",
        "TypeScript",
      ],
      highlights: [
        "Semantic search and BM25 hybrid querying indexed across 300,000+ legal records.",
        "Abstractive legal document summarization powered by fine-tuned DistilBART pipelines.",
        "Conversational legal query assistant backed by Llama 2 for grounded Q&A.",
        "Secure user authentication and workspace state with Kinde Auth.",
      ],
      architectureNotes: [
        "Frontend: Next.js App Router with Tailwind CSS for clean, responsive document inspection.",
        "Retrieval Engine: Elasticsearch cluster optimized for case law citations, date filtering, and full-text tokenization.",
        "Inference Layer: DistilBART for rapid document summarization, paired with Llama 2 for conversational synthesis.",
        "Security & State: Kinde Auth integration guarding user workspaces, saved search queries, and summaries.",
      ],
    },
    {
      slug: "campuspro",
      title: "CampusPro",
      date: "September 2024",
      tagline: "WhatsApp AI Student Assistant & Recommendation Engine",
      description:
        "A conversational bot enabling students to discover colleges, inquire about admissions, and receive personalized recommendations via text and voice messages on WhatsApp.",
      longDescription:
        "CampusPro democratizes college discovery by meeting students directly on WhatsApp. By combining WhisperAI for multi-modal speech transcription with Cohere's Command R+ language model, the system understands natural student queries in both text and voice, routing them into a custom recommendation engine.",
      category: "Conversational AI & Systems",
      stack: [
        "Next.js",
        "Express.js",
        "MongoDB Atlas",
        "WhisperAI",
        "Command R+",
        "Twilio",
        "Docker",
      ],
      highlights: [
        "Dual-modality interface supporting both natural voice notes and text messaging over WhatsApp.",
        "Speech-to-text pipeline using WhisperAI to transcribe audio messages into text tokens.",
        "Personalized college recommendation algorithms based on academic scores, preferences, and location.",
        "Containerized with Docker for predictable deployment across staging and production.",
      ],
      architectureNotes: [
        "Messaging Hub: Twilio WhatsApp Business API webhooks dispatching payloads to the backend.",
        "Audio Processing: Inbound voice notes are buffered and transcribed using WhisperAI.",
        "Intelligence Engine: Command R+ extracts structured search intents (branch, budget, rank, location).",
        "Storage & Persistence: MongoDB Atlas cluster storing user profiles, college catalogs, and chat histories.",
      ],
      githubUrl: "https://github.com/NilanchalaPanda/campusPro",
    },
  ],
  experiences: [
    {
      company: "Capgemini",
      role: "Software Developer",
      location: "Mumbai, India",
      period: "July 2025 – Present",
      summary:
        "Developing and maintaining production React Native and web applications using TypeScript, Node.js, NestJS, PostgreSQL, and Sequelize.",
      bullets: [
        "Engineered core authentication and onboarding user flows across web and mobile platforms.",
        "Built internationalized, multilingual application experiences and localized state architectures.",
        "Developed mobile application features with React Native and Expo, including real-time notifications and an integrated inbox.",
        "Profiled and re-engineered an audio-processing pipeline (WhisperX, CUDA, CTranslate2, Pyannote), cutting processing time from ~15–16 minutes down to 3.97 minutes (~75% reduction).",
        "Constructed media-processing workflows connecting Vercel, RunPod Serverless, FFmpeg, WhisperX, Google Drive, and Vercel Blob, unifying direct-upload and batch Excel ingestion.",
        "Architected a zero-downtime migration of 35 TB of production video, audio, and meeting media from Supabase to Backblaze B2 with Cloudflare CDN edge caching.",
        "Analyzed 28,024 production task-submission records to identify duplicate entries, optimize operational queues, and improve data reliability.",
      ],
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Sequelize",
        "WhisperX",
        "CUDA",
        "Pyannote",
        "RunPod Serverless",
        "Docker",
        "Backblaze B2",
        "Cloudflare CDN",
      ],
      featuredAchievements: [
        "75% audio-processing pipeline acceleration (15–16 min → 3.97 min)",
        "35 TB zero-downtime cloud media migration",
        "Operational audit of 28,024 production task records",
      ],
    },
    {
      company: "Faydo",
      role: "Full Stack Intern",
      location: "Bengaluru, remote",
      period: "March 2025 – April 2025",
      summary:
        "Focused on frontend application performance optimization, state management refactoring, and user flow redesign.",
      bullets: [
        "Optimized React application performance through refined state handling, memoization, and targeted cache layers.",
        "Reduced measured response time from 50 ms to 10 ms (an 80% reduction).",
        "Redesigned the Prepurchase flow for improved conversion and transactional stability.",
        "Implemented dynamic UI behaviors, real-time search, user usage tracking, and live customer support integration.",
      ],
      technologies: ["React.js", "TypeScript", "State Management", "Performance Profiling", "WebSockets"],
      featuredAchievements: ["80% measured response-time reduction (50 ms → 10 ms)"],
    },
    {
      company: "Revued",
      role: "Full Stack Developer Intern",
      location: "Remote",
      period: "October 2024 – February 2025",
      summary:
        "Engineered secure authentication, OAuth workflows, and external receipt-verification pipelines.",
      bullets: [
        "Implemented secure authentication and route protection using Next.js, NextAuth, and OAuth 2.0.",
        "Streamlined user onboarding experience and reduced friction across credential and social login flows.",
        "Enhanced Review API reliability and error-handling semantics under high request volumes.",
        "Integrated Veryfi API for automated receipt parsing and purchase verification.",
      ],
      technologies: ["Next.js", "NextAuth", "OAuth 2.0", "TypeScript", "Node.js", "Veryfi API"],
    },
  ],
  skills: [
    {
      category: "Languages & Databases",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      category: "Frontend & Mobile",
      items: ["React.js", "React Native", "Expo", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "NestJS", "Sequelize", "REST APIs", "Apache Spark", "Scala"],
    },
    {
      category: "Cloud, Infrastructure & DevOps",
      items: [
        "Docker",
        "Nginx",
        "AWS",
        "Azure",
        "Vercel",
        "RunPod Serverless",
        "Cloudflare CDN",
        "Backblaze B2",
        "Git & GitHub",
      ],
    },
    {
      category: "AI, Media & Specialized Runtimes",
      items: [
        "WhisperX",
        "CUDA",
        "CTranslate2",
        "Pyannote",
        "FFmpeg",
        "Elasticsearch",
        "Llama 2",
        "DistilBART",
        "Command R+",
        "Twilio",
      ],
    },
    {
      category: "Security & Integrations",
      items: ["NextAuth", "Kinde Auth", "OAuth 2.0", "Veryfi", "Postman", "Vercel Blob"],
    },
  ],
  education: [
    {
      institution: "Vivekanand Education Society's Institute of Technology (VESIT)",
      degree: "Bachelor of Engineering in Information Technology, minor in Blockchain",
      period: "December 2021 – May 2025",
      grade: "CGPA: 9.38",
      highlights: [
        "Department of Information Technology",
        "Co-authored published IEEE research on smart financial education",
      ],
    },
    {
      institution: "Mithibai College of Science",
      degree: "Higher Secondary Certificate (HSC) in Information Technology",
      period: "May 2019 – June 2020",
      grade: "87.17%",
    },
  ],
  hackathons: [
    {
      title: "3rd Place (Podium)",
      event: "Brain-IT-On 2.0",
      placement: "National Level",
      description: "Secured third place in a competitive national-level engineering hackathon.",
    },
    {
      title: "Top-5 Finalist",
      event: "Renaissance Hackathon",
      placement: "Top 5",
      description: "Part of the only second-year team to qualify as finalists among senior competitors.",
    },
    {
      title: "Top 10 Finalist",
      event: "Mercer Mettl Limitless Hackathon",
      placement: "Top 10 of 50+",
      description: "Ranked in the top 10 among 50 participating teams nationwide.",
    },
    {
      title: "Semifinalist",
      event: "Project Deep Blue",
      placement: "Semifinals",
      description: "Advanced to semifinal round solving challenging societal engineering problems.",
    },
  ],
  leadership: {
    role: "Technical Officer",
    organization: "QuestIT (VESIT)",
    tenure: "2 Years",
    achievements: [
      "Organized 5 large-scale technical events engaging over 500+ student attendees.",
      "Mentored junior developers in web development, Git workflows, and systems concepts.",
      "Facilitated hands-on workshops and fostered an active engineering community on campus.",
    ],
  },
};
