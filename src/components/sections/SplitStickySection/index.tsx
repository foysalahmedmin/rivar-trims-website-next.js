import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SplitStickySectionProps = {
  image?: string;
  contents?: {
    title?: string;
    description?: string;
    links?: {
      text?: string;
      url?: string;
    }[];
  }[];
  className?: string;
};

const SplitStickySection = ({
  image = "",
  contents = [],
  className = "",
}: SplitStickySectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="sticky top-20 bottom-0 h-[calc(100vh-5rem)] w-full overflow-hidden rounded-xl">
            <img
              className="bg-muted size-full object-cover object-center"
              src={image}
              alt="split-sticky-image"
            />
          </div>
          <div>
            {contents?.map((content, index) => (
              <div
                key={index}
                className="intersection-fade-in bg-background/25 flex min-h-[calc(100vh-5rem)] items-center px-6 py-8 backdrop-blur-xl md:py-12 lg:px-0"
              >
                <div>
                  <SectionTitle>
                    {content?.title && <Title>{content?.title}</Title>}
                    {content?.description && (
                      <Description>{content?.description}</Description>
                    )}
                  </SectionTitle>
                  {content?.links?.length && (
                    <div>
                      {content?.links?.map((link, index) => (
                        <Link key={index} href={"#"}>
                          <Button asChild={true} variant="outline" size="lg">
                            <span>{link?.text}</span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitStickySection;
