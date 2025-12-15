import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import RootAnimation from "@/components/partials/RootAnimation";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rivar Trims",
  description: "Digital solutions.",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <RootAnimation>{children}</RootAnimation>
      <Footer />
    </>
  );
}
