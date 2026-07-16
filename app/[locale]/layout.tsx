import type { Metadata } from "next";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/app/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const BASE_URL = "https://josevbrito.com";

const TITLE = "José Brito - Software Engineer & Data Scientist";

const META = {
  pt: {
    description:
      "Portfólio de José Victor Brito Costa - Engenheiro Full Stack e Cientista de Dados especializado em sistemas de alto impacto, IA aplicada e saúde pública.",
    ogDescription:
      "Engenheiro Full Stack e Cientista de Dados. +10 projetos de alto impacto em saúde pública, IA, análise de dados, sistemas web e mobile.",
    twitterDescription: "Engenheiro Full Stack e Cientista de Dados. +10 projetos de alto impacto.",
    keywords: [
      "José Brito", "engenheiro de software", "engenheiro full stack", "cientista de dados",
      "Next.js", "Laravel", "Python", "PostgreSQL", "Power BI",
      "portfólio", "Maranhão",
    ],
    ogLocale: "pt_BR",
  },
  en: {
    description:
      "Portfolio of José Victor Brito Costa - Software Engineer and Data Scientist specialized in high-impact systems, applied AI and public health.",
    ogDescription:
      "Software Engineer and Data Scientist. 10+ high-impact projects across public health, AI, data analysis, web and mobile systems.",
    twitterDescription: "Software Engineer and Data Scientist. 10+ high-impact projects.",
    keywords: [
      "José Brito", "software engineer", "full stack engineer", "data scientist",
      "Next.js", "Laravel", "Python", "PostgreSQL", "Power BI",
      "portfolio", "Maranhão", "Brazil",
    ],
    ogLocale: "en_US",
  },
} as const;

/** Locale-aware canonical + hreflang, so both versions get indexed separately. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as keyof typeof META] ?? META[routing.defaultLocale];
  const url = locale === routing.defaultLocale ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: TITLE, template: "%s | José Brito" },
    description: m.description,
    keywords: [...m.keywords],
    authors: [{ name: "José Victor Brito Costa", url: BASE_URL }],
    icons: { icon: "/icon.svg" },
    openGraph: {
      type:        "website",
      url,
      siteName:    "sys.brito",
      title:       TITLE,
      description: m.ogDescription,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
      locale: m.ogLocale,
    },
    twitter: {
      card:        "summary_large_image",
      title:       TITLE,
      description: m.twitterDescription,
      images:      ["/opengraph-image"],
    },
    alternates: {
      canonical: url,
      languages: {
        "pt-BR":     BASE_URL,
        "en":        `${BASE_URL}/en`,
        "x-default": BASE_URL,
      },
    },
    verification: {
      google: "bMUfLBtYdrxn8MbAg6llMplj3HsWYjGFYHMg06m75dY",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Opts the whole tree into static rendering; without it every page using
  // useTranslations falls back to dynamic.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextIntlClientProvider>
          {children}
          <Footer />
          <SpeedInsights /> {/* Análise de Performance Vercel */}
          <Analytics />  {/* Vercel Analytics */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}