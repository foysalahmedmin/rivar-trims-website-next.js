import { services } from "@/assets/data/services";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitFloatSection from "@/components/sections/SplitFloatSection";
import { Check } from "lucide-react";

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
        image={details?.images?.[0] || thumbnail}
      />
      {/* <SingleProjectSection
        project={projects?.find((project) => project?.sector === service?._id)}
      /> */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="bg-muted relative aspect-square overflow-hidden rounded-xl lg:aspect-[4/3]">
                <img
                  src={details?.images?.[1] || thumbnail || ""}
                  alt="Service Features"
                  className="object-cover"
                />
             </div>
             <div className="space-y-8">
                <div>
                   <h2 className="text-primary text-3xl font-bold">Key Features</h2>
                   <p className="text-muted-foreground mt-2 text-lg">
                      What makes our {title} stand out.
                   </p>
                </div>
                <ul className="space-y-4">
                  {points?.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-foreground text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>
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
