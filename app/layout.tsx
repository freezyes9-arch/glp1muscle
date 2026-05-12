import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  verification: {
    google: "URN7WfAqpsvdUCUknj_SFZjb78FkbOfKTJczdWC9a2A",
  },

  title: {
    default: "GLP-1 Intelligence | Muscle Loss and Protein Calculators for GLP-1 Users",
    template: "%s | GLP-1 Intelligence"
  },

  description:
    "Free GLP-1 muscle loss and protein calculators for Ozempic, Wegovy, Mounjaro, and Zepbound users who want to preserve strength while losing weight.",

  alternates: { canonical: "/" },

  openGraph: {
    title: "GLP-1 Intelligence",
    description: "Muscle preservation calculators and practical GLP-1 protein tools.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Intelligence",
    description: "Calculate muscle loss risk and protein needs while losing weight on GLP-1s."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#08111f" }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}