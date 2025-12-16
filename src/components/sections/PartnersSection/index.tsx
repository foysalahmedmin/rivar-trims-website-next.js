"use client";

import { partners } from "@/assets/data/partners";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const PartnersSection = () => {
  return (
    <section className="bg-background intersection-fade-in py-12 md:py-20 border-t">
      <div className="container">
        <SectionTitle className="mb-10 text-center">
            <Title className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-muted-foreground/60">Trusted by Global Leaders</Title>
        </SectionTitle>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-8 md:-ml-16 items-center">
            {partners.map((partner) => (
              <CarouselItem
                key={partner._id}
                className="pl-8 md:pl-16 basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="relative group w-full h-16 md:h-20 flex items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           {/* Controls included for accessibility but customized to be subtle or hidden if purely automated */}
           {/* Using pointer-events-none to hide controls visually if preferred, or styling them minimally */}
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
