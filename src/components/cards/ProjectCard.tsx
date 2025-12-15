import { TProject } from "@/assets/data/projects";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Partial<TProject>;
  className?: string;
};

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group/card intersection-fade-in text-card-foreground grid gap-6",
        className,
      )}
    >
      <Link
        href={`/projects/${project?._id}`}
        className="relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-xl"
      >
        <Image
          src={project?.thumbnail || ""}
          alt={project?.title || "Project Thumbnail"}
          className="bg-muted size-full rounded-xl object-cover object-center transition-transform duration-700 ease-in-out group-hover/card:scale-110"
          height={700}
          width={525}
        />
        <div className="group/trigger absolute right-0 bottom-0 flex h-14 flex-row-reverse items-center overflow-hidden">
          <div className="text-muted-foreground hover:text-primary z-10 flex aspect-square h-full items-center justify-center rounded-tl-xl rounded-br-xl bg-white transition-all duration-700 group-hover/trigger:rounded-tl-none">
            <Plus className="size-8" strokeWidth={1} />
          </div>
          <div className="text-muted-foreground hover:text-primary flex h-full origin-right translate-x-full items-center rounded-tl-xl rounded-br-xl bg-white px-4 transition-all duration-700 ease-in-out group-hover/trigger:translate-x-0 group-hover/trigger:rounded-br-none">
            View Project
          </div>
        </div>
      </Link>

      <div className="space-y-6 md:pr-12">
        <div className="space-y-2">
          {project.tags?.length ? (
            <div className="text-muted-foreground flex flex-wrap items-center divide-x text-sm">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 capitalize first:pl-0 last:pr-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <h3 className="pb-1 text-3xl font-semibold">
            <Link
              href={`/projects/${project?._id}`}
              className="underline-effect hover:text-primary transition-colors"
            >
              {project?.title || "Untitled Project"}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
