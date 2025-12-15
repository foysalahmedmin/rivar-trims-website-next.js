import { features } from "@/assets/data/features";
import { Description, Subtitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-muted intersection-fade-in py-16 md:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-4">
          <div className="text-center md:text-left">
            <Subtitle className="after:hidden md:after:inline-block">
              Features
            </Subtitle>
            <Title>
              Why <br />
              choose us
            </Title>
            <Description>
              We deliver purposeful solutions with measurable impact
            </Description>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:col-span-3 lg:grid-cols-3">
            {features?.map((feature, index) => {
              const col2 = index % 2;
              const col3 = index % 3;
              const alignClassMD = col2 === 0 ? "md:mr-auto" : "md:ml-auto";
              const alignClassLG =
                col3 === 0
                  ? "lg:mr-auto lg:ml-0"
                  : col3 === 1
                    ? "lg:mx-auto"
                    : "lg:ml-auto lg:mr-0";
              return (
                <div
                  key={feature?._id}
                  className={cn(
                    "intersection-fade-in mx-auto flex max-w-60 flex-col items-center space-y-4 text-center md:items-start md:text-left",
                    alignClassMD,
                    alignClassLG,
                  )}
                >
                  <feature.icon
                    className="text-primary inline-block size-16"
                    strokeWidth={1}
                  />
                  <div className="space-y-2">
                    <h3 className="text-3xl">{feature?.title}</h3>
                    <p className="leading-relaxed">{feature?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
