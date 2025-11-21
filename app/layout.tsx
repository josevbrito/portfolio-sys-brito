import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "José Brito",
    template: "%s | José Brito"
  },
  description: "Desenvolvedor Full Stack e Cientista de Dados. Especialista em Laravel, Next.js, Python e IA. Veja meus projetos e entre em contato.",
  keywords: ["José Brito", "Engenheiro de Software", "Cientista de Dados", "Laravel", "Next.js", "IA", "Desenvolvedor Full Stack"],
  authors: [{ name: "José Victor Brito Costa" }],
  creator: "José Victor Brito Costa",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://josevbrito.com",
    title: "José Brito",
    description: "Portfólio de José Victor Brito Costa. Transformando dados complexos em aplicações robustas.",
    siteName: "José Brito Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
