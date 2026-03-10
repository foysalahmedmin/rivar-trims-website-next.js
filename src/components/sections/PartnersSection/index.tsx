"use client";

import { partners } from "@/assets/data/partners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const PartnersSection = () => {
  return (
    <section className="bg-background intersection-fade-in border-t py-12 md:py-20">
      <div className="container">
        <SectionTitle className="mb-10 text-center">
          <Title className="text-muted-foreground/60 text-2xl font-bold tracking-widest uppercase md:text-3xl">
            Trusted by Global Leaders
          </Title>
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
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-8 items-center md:-ml-16">
            {partners.map((partner) => (
              <CarouselItem
                key={partner._id}
                className="basis-1/3 pl-8 md:basis-1/4 md:pl-16 lg:basis-1/5"
              >
                <div className="group relative flex h-16 w-full cursor-pointer items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 md:h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="max-h-full w-auto object-contain"
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
