import { projects } from "@/assets/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="mb-6 sm:px-4 md:px-6 lg:ml-24">
          <SectionTitle className="">
            <Subtitle>Projects</Subtitle>
            <Title isAnimation={true}>
              Delivering our clients more project clarity, greater insight, and
              less chaos.
            </Title>
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

export default ProjectsSection;
