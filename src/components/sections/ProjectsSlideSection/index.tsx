import type { TProject } from "@/assets/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProjectsSlideSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  projects?: TProject[];
  className?: string;
};

const ProjectsSlideSection = ({
  title,
  subtitle,
  description,
  projects,
  className,
}: ProjectsSlideSectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <div className="mb-6 sm:px-4 md:px-6">
          <SectionTitle className="">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </SectionTitle>
          <Link
            href={"/projects"}
            className="primary hover:text-primary underline-effect inline-block"
          >
            View All Projects
          </Link>
        </div>
        <div>
          <Carousel className="group">
            <CarouselContent>
              {projects?.map((project) => (
                <CarouselItem
                  key={project._id}
                  className="basis-1/1 px-2 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
              <CarouselPreviousTrigger className="left-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselNextTrigger className="right-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselPagination className="foreground -bottom-6 md:basis-1/3 md:px-6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlideSection;
