import { services } from "@/assets/data/services";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitFloatSection from "@/components/sections/SplitFloatSection";
import SplitStickySection from "@/components/sections/SplitStickySection";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const service = services.find((service) => service._id === id);
  return {
    title: service?.title,
    description: service?.description,
  };
};

export const generateStaticParams = async () => {
  return services.map((service) => ({ id: service._id }));
};

const ServicesDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const service = services.find((service) => service._id === id);
  const { title, description, thumbnail, details, points } = service || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Service"
        title={title}
        description={description}
        image={thumbnail}
      />
      <SplitFloatSection
        subtitle="Details"
        title={details?.title}
        description={details?.description}
        image={details?.thumbnail}
      />
      {/* <SingleProjectSection
        project={projects?.find((project) => project?.sector === service?._id)}
      /> */}
      <SplitStickySection image={points?.thumbnail} contents={points?.list} />
      {/* <ProjectsSlideSection
        title="Explore Similar Projects"
        projects={projects?.filter(
          (project) => project?.sector === service?._id,
        )}
      /> */}
      <FollowUpSection />
    </main>
  );
};

export default ServicesDetailsPage;
