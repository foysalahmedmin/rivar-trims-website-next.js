import type { TProject } from "@/assets/data/projects";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

type SingleProjectSectionProps = {
  className?: string;
  project?: Partial<TProject>;
};

const SingleProjectSection = ({
  className,
  project,
}: SingleProjectSectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <SectionTitle className="">
          {<Subtitle>Feature Project</Subtitle>}
          {<Title>{project?.title || "Unknown"}</Title>}
          {
            <Description className="text-xl md:text-3xl">
              {project?.description}
            </Description>
          }
        </SectionTitle>
        <div className="group/card grid items-center gap-6">
          <Link
            href={"/projects/" + project?._id}
            className="group/trigger relative aspect-[2/1] w-full cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              className="bg-muted size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
              src={project?.thumbnail}
              alt={project?.title}
            />
            <div className="group/trigger absolute right-0 bottom-0 flex h-20 flex-row-reverse items-center overflow-hidden">
              <div className="text-muted-foreground hover:text-primary z-10 flex aspect-square h-full items-center justify-center rounded-tl-xl rounded-br-xl bg-white transition-all duration-700 group-hover/trigger:rounded-tl-none">
                <Plus className="size-8" strokeWidth={1} />
              </div>
              <div className="text-muted-foreground hover:text-primary flex h-full origin-right translate-x-full items-center rounded-tl-xl rounded-br-xl bg-white px-4 transition-all duration-700 ease-in-out group-hover/trigger:translate-x-0 group-hover/trigger:rounded-br-none">
                <div>
                  <div>
                    {project?.tags?.map((tag, index) => (
                      <strong
                        key={index}
                        className="text-muted-foreground inline-block px-2 text-xs font-normal capitalize first:pl-0 last:pr-0"
                      >
                        {tag}
                      </strong>
                    ))}
                  </div>
                  <h3 className="hover-effect primary hover:text-primary">
                    {project?.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectSection;
