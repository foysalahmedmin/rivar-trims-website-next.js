"use client";

import type { TProject } from "@/assets/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const ProjectsTabSection = ({ projects = [] }: { projects: TProject[] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {projects
          ?.slice(0, isShowMore ? projects?.length : 6)
          ?.map((project) => (
            <div key={project?._id}>
              <ProjectCard project={project} />
            </div>
          ))}
      </div>
      <div>
        {projects?.length > 6 && (
          <div className="mt-12 flex items-center justify-center">
            <Button onClick={() => setIsShowMore(!isShowMore)}>
              {isShowMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabSection;
