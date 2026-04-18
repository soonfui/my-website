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
  metadataBase: new URL("https://magmanet.my"),

  title: {
    default: "MagmaNet | Web Developer Malaysia",
    template: "%s | MagmaNet",
  },

  description:
    "Affordable web developer in Malaysia. Professional websites, landing pages and ecommerce stores from RM588.",

  keywords: [
    "web developer malaysia",
    "website malaysia",
    "cheap website malaysia",
    "landing page malaysia",
    "nextjs developer malaysia",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "MagmaNet | Web Developer Malaysia",
    description:
      "Professional websites, ecommerce stores and landing pages for Malaysian businesses.",
    url: "https://magmanet.my",
    siteName: "MagmaNet",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/public/logo.png",
        width: 1200,
        height: 630,
        alt: "MagmaNet",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MagmaNet | Web Developer Malaysia",
    description:
      "Affordable websites for businesses in Malaysia.",
    images: ["/public/logo.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}