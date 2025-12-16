"use client";

import { certifications } from "@/assets/data/certifications";
import { Description, SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Image from "next/image";

const CertificationsSection = () => {
  return (
    <section className="bg-muted/30 intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-6xl mx-auto">
             <SectionTitle className="mb-12">
                <Subtitle>Compliance & Quality</Subtitle>
                <Title>Certifications</Title>
                <Description>
                    We are committed to maintaining the highest standards of quality, safety, and sustainability. Our certifications reflect our dedication to ethical manufacturing and environmental responsibility.
                </Description>
            </SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
                {certifications.map((cert) => (
                    <div key={cert._id} className="flex flex-col items-center justify-center group">
                        <div className="bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300 w-full aspect-square flex items-center justify-center border border-border">
                            <div className="relative w-3/4 h-3/4">
                                <Image 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="mt-4 font-semibold text-foreground/80 text-sm md:text-base text-center">{cert.title}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
