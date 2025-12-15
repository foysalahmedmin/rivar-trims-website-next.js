import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SplitImageSectionProps = {
  className?: string;
  items?: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
  }[];
};

const SplitImageSection = ({
  items = [],
  className = "",
}: SplitImageSectionProps) => {
  return (
    <section className="intersection-fade-in py-16 md:py-24">
      <div
        className={cn(
          "container grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16",
          className,
        )}
      >
        {items?.map((item, index) => {
          const { title, description, subtitle, image } = item;
          return (
            <div key={index} className="intersection-fade-in w-full">
              {(title || subtitle || description) && (
                <SectionTitle>
                  {subtitle && <Subtitle>{subtitle}</Subtitle>}
                  {title && <Title>{title}</Title>}
                  {description && (
                    <Description className="text-xl">{description}</Description>
                  )}
                </SectionTitle>
              )}
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  className="bg-muted size-full object-cover object-center"
                  src={image || ""}
                  alt="hero-split-image"
                  height={700}
                  width={525}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SplitImageSection;
