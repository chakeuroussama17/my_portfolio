import "./globals.css";
import type { Metadata } from "next";
import SiteBackground from "@/components/SiteBackground";

// Update this to your real domain after deploying — it's what absolute OG
// image URLs are resolved against.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chakeuroussama.vercel.app";

const TITLE = "Chakeur Oussama | Industrial AI & Automation Engineer";
const DESCRIPTION =
  "Computer vision safety systems, agentic automation and edge AI running in production on a factory floor. RM 99K in documented savings, 1,000+ enterprise users, first-author published research.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Industrial AI Engineer",
    "Computer Vision",
    "YOLOv8",
    "Machine Learning Engineer",
    "Edge AI",
    "AI Automation",
    "Malaysia",
  ],
  authors: [{ name: "Chakeur Oussama" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Chakeur Oussama",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
