"use client";

import { certifications } from "@/assets/data/certifications";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import Image from "next/image";

const CertificationsSection = () => {
  return (
    <section className="bg-muted/30 intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle className="mb-12">
            <Subtitle>Compliance & Quality</Subtitle>
            <Title>Certifications</Title>
            <Description>
              We are committed to maintaining the highest standards of quality,
              safety, and sustainability. Our certifications reflect our
              dedication to ethical manufacturing and environmental
              responsibility.
            </Description>
          </SectionTitle>

          <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3 md:gap-12">
            {certifications.map((cert) => (
              <div
                key={cert._id}
                className="group flex flex-col items-center justify-center"
              >
                <div className="border-border flex aspect-square w-full items-center justify-center rounded-xl border bg-white p-8 shadow-xs transition-shadow duration-300 hover:shadow-md">
                  <div className="relative h-full w-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain"
                      style={{ clipPath: "inset(5px)" }}
                    />
                  </div>
                </div>
                <p className="text-foreground/80 mt-4 text-center text-sm font-semibold md:text-base">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
