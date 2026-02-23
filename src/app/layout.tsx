import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const siteUrl = "https://gleamworks-app.vercel.app";
const title = "GleamWorks | Professional Cleaning Services";
const description =
  "GleamWorks offers premium post-construction cleaning, deep cleaning, and move-in/move-out cleaning services in Ughelli, Delta State. Experience spotless perfection.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "cleaning service",
    "post construction cleaning",
    "deep cleaning",
    "move in cleaning",
    "move out cleaning",
    "professional cleaning",
    "Ughelli",
    "Delta State",
    "Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "GleamWorks",
    title,
    description,
    images: [
      {
        url: "/images/gallery-1.jpeg",
        width: 864,
        height: 1080,
        alt: "GleamWorks Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/gallery-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
