import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Outfit, Rubik_Glitch } from "next/font/google";
import React from "react";
import "./globals.css";

// Font declarations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rivar Trims - Global Quality, Local Excellence",
  description: "Premier Manufacturer of Garment Trims & Accessories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${rubikGlitch.variable} ${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
