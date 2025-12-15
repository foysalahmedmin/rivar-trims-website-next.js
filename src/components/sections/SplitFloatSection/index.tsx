import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SplitFloatSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  image?: string;
  className?: string;
  links?: {
    text: string;
    url: string;
  }[];
};

const SplitFloatSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
  className = "",
  links = [],
}: SplitFloatSectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <div className="relative">
          <SectionTitle className="mb-6">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {image && (
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[2/1]">
                <Image
                  className="bg-muted size-full object-cover object-center"
                  src={image}
                  alt="hero-split-image"
                  height={525}
                  width={700}
                />
              </div>
            )}
            {description && (
              <Description>
                <div className="w-full">
                  <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                    <div
                      className="text-foreground font-sans"
                      dangerouslySetInnerHTML={{ __html: description || "" }}
                    />
                  </div>
                </div>
              </Description>
            )}
            {links?.length > 0 && (
              <div className="clear-both pt-6">
                {links?.map((link, index) => (
                  <Link key={index} href={link?.url}>
                    <Button asChild={true} variant="outline" size="lg">
                      <span>{link?.text}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </SectionTitle>
        </div>
      </div>
    </section>
  );
};

export default SplitFloatSection;
