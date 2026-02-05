import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BugShield Pest Control | Professional Pest Control in Seattle & Everett, WA",
  description:
    "BugShield Pest Control provides professional, eco-friendly pest control services in the greater Seattle and Everett, WA area. Termite control, rodent removal, bed bug treatment, and more. Licensed & insured. Call (425) 555-0192 for a free inspection.",
  keywords: [
    "pest control Seattle",
    "pest control Everett WA",
    "termite control",
    "rodent removal",
    "bed bug treatment",
    "mosquito control",
    "eco-friendly pest control",
    "BugShield Pest Control",
  ],
  authors: [{ name: "BugShield Pest Control" }],
  openGraph: {
    title: "BugShield Pest Control | Professional Pest Control Services",
    description:
      "Protect your home from unwanted pests. Professional, eco-friendly pest control services in Seattle & Everett, WA. Licensed & insured. Free inspections available.",
    type: "website",
    locale: "en_US",
    siteName: "BugShield Pest Control",
  },
  twitter: {
    card: "summary_large_image",
    title: "BugShield Pest Control | Professional Pest Control Services",
    description:
      "Protect your home from unwanted pests. Professional, eco-friendly pest control services in Seattle & Everett, WA.",
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
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
