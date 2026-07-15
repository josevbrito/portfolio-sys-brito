import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const BASE_URL = "https://josevbrito.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:  "José Brito - Software Engineer & Data Scientist",
    template: "%s | José Brito",
  },
  description:
    "Portfólio de José Victor Brito Costa - Engenheiro Full Stack e Cientista de Dados especializado em sistemas de alto impacto, IA aplicada e saúde pública.",
  keywords: [
    "José Brito", "engenheiro de software", "engenheiro full stack", "cientista de dados",
    "Next.js", "Laravel", "Python", "PostgreSQL", "Power BI",
    "portfólio", "Maranhão",
  ],
  authors: [{ name: "José Victor Brito Costa", url: BASE_URL }],
  icons: { icon: "/icon.svg" },
  openGraph: {
    type:        "website",
    url:         BASE_URL,
    siteName:    "sys.brito",
    title:       "José Brito - Software Engineer & Data Scientist",
    description:
      "Engenheiro Full Stack e Cientista de Dados. +10 projetos de alto impacto em saúde pública, IA, análise de dados, sistemas web e mobile.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "José Brito - Software Engineer & Data Scientist" }],
    locale: "pt_BR",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "José Brito - Software Engineer & Data Scientist",
    description: "Engenheiro Full Stack e Cientista de Dados. +10 projetos de alto impacto.",
    images:      ["/opengraph-image"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "bMUfLBtYdrxn8MbAg6llMplj3HsWYjGFYHMg06m75dY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <Footer />
          <SpeedInsights /> {/* Análise de Performance Vercel */}
          <Analytics />  {/* Vercel Analytics */}
        </LanguageProvider>
      </body>
    </html>
  );
}