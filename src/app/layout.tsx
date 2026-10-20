import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.subheadline,
  keywords: [
    "Nilanchala Panda",
    "Nilanchal Panda",
    "Software Developer",
    "Full Stack Developer",
    "Systems Engineer",
    "WhisperX",
    "RunPod Serverless",
    "Next.js",
    "TypeScript",
    "React Native",
    "Mumbai Developer",
  ],
  authors: [{ name: profile.name, url: "https://github.com/NilanchalaPanda" }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nilanchal.dev",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subheadline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subheadline,
    creator: "@dev_nilanchal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-neutral-50 dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
