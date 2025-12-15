import { projects } from "@/assets/data/projects";
import ProjectInfoSection from "@/components/(common)/(projects-details-page)/ProjectsInfoSection";
import ProjectsNavigationSection from "@/components/(common)/(projects-details-page)/ProjectsNavigationSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitImageSection from "@/components/sections/SplitImageSection";
import SplitSection1 from "@/components/sections/SplitSection1";
import SplitStickySection from "@/components/sections/SplitStickySection";

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
  const { title, description, thumbnail, images, details, points } =
    project || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Project"
        title={title}
        description={description}
        image={thumbnail}
      />
      <ProjectInfoSection project={project} />
      <SplitImageSection
        className="lg:[&>_:nth-child(even)]:mt-24 lg:[&>_:nth-child(odd)]:mb-24"
        items={images?.map((image) => ({ image }))}
      />
      <SplitSection1
        subtitle="Details"
        title={details?.title}
        description={details?.description}
        image={details?.thumbnail}
      />
      <SplitStickySection image={points?.thumbnail} contents={points?.list} />
      <ProjectsNavigationSection id={id} />
      <FollowUpSection />
    </main>
  );
};

export default ProjectsDetailsPage;
