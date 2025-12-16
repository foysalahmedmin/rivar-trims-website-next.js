import { projects } from "@/assets/data/projects";
import ProjectInfoSection from "@/components/(common)/(projects-details-page)/ProjectsInfoSection";
import ProjectsNavigationSection from "@/components/(common)/(projects-details-page)/ProjectsNavigationSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((project) => project._id === id);
  return {
    title: project?.title,
    description: project?.description,
  };
};

export const generateStaticParams = async () => {
  return projects.map((project) => ({
    id: project._id,
  }));
};

const ProjectsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((project) => project._id === id);
  const { title, description, thumbnail, images, details } = project || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Case Study"
        title={title}
        description={description}
        image={thumbnail}
      />
      <ProjectInfoSection project={project} />

      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {/* Challenge */}
          <div className="grid gap-8 md:grid-cols-2 lg:items-center">
             <div className="space-y-4">
                <h2 className="text-primary text-2xl font-bold">The Challenge</h2>
                <p className="text-muted-foreground text-lg">{details?.challenge}</p>
             </div>
             <div className="bg-muted aspect-video overflow-hidden rounded-lg">
                <Image 
                  src={images?.[0] || thumbnail || ""} 
                  alt="Challenge" 
                  width={600} 
                  height={400} 
                  className="h-full w-full object-cover"
                />
             </div>
          </div>

          {/* Solution */}
          <div className="grid gap-8 md:grid-cols-2 lg:items-center">
             <div className="bg-muted order-2 aspect-video overflow-hidden rounded-lg md:order-1">
                <Image 
                  src={images?.[1] || thumbnail || ""} 
                  alt="Solution" 
                  width={600} 
                  height={400} 
                  className="h-full w-full object-cover"
                />
             </div>
             <div className="order-1 space-y-4 md:order-2">
                <h2 className="text-primary text-2xl font-bold">Our Solution</h2>
                <p className="text-muted-foreground text-lg">{details?.solution}</p>
             </div>
          </div>

          {/* Result */}
           <div className="grid gap-8 md:grid-cols-2 lg:items-center">
             <div className="space-y-4">
                <h2 className="text-primary text-2xl font-bold">The Result</h2>
                <p className="text-muted-foreground text-lg">{details?.result}</p>
             </div>
              {/* Optional: Add another image or visual if available, or just text */}
          </div>
        </div>
      </section>

      <ProjectsNavigationSection id={id} />
      <FollowUpSection />
    </main>
  );
};

export default ProjectsDetailsPage;
