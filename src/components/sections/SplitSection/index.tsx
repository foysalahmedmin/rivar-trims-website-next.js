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

type SplitSectionProps = {
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

const SplitSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
  className = "",
  links = [],
}: SplitSectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle className="mb-0">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {title && <Title>{title}</Title>}
              {description && (
                <Description>
                  <div className="w-full">
                    <div className="prose prose-headings:font-normal prose-headings:mt-0 dark:prose-invert w-full max-w-none">
                      <div
                        className="text-foreground"
                        dangerouslySetInnerHTML={{ __html: description || "" }}
                      />
                    </div>
                  </div>
                </Description>
              )}
            </SectionTitle>
            {links?.length > 0 && (
              <div>
                {links?.map((link, index) => (
                  <Link key={index} href={link?.url}>
                    <Button asChild={true} variant="outline" size="lg">
                      <span>{link?.text}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image
              className="bg-muted size-full object-cover object-center"
              src={image}
              alt="hero-split-image"
              height={700}
              width={525}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
