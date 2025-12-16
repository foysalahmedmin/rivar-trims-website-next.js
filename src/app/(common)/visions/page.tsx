import { visions } from "@/assets/data/visions";
import ValuesSection from "@/components/(common)/(visions-page)/ValuesSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Visions | Rivar Trims",
  description:
    "Rivar Trims | Unifying strategy, creativity, and sustainability to deliver exceptional garment accessories.",
};

const VisionsPage = async () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Driving Manufacturing Excellence"
        title="Our Vision"
        description="We believe in the power of precision, innovation, and sustainability. Our team is committed to creating trim solutions that enhance your brand value while adhering to the highest global standards."
        image="/images/(visions-page)/page-header.png"
      />
      <section className="bg-muted intersection-fade-in py-16 md:py-24">
        <div className="container max-w-5xl">
          <SectionTitle>
            <Subtitle>Our Vision</Subtitle>
            <Title>
              To lead the global trims industry with sustainable innovation and uncompromising quality.
            </Title>
          </SectionTitle>
        </div>
      </section>

      {/* Visions Grid replacing SplitStickySection */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visions.map((vision) => {
              const Icon = vision.icon;
              return (
                <div key={vision._id} className="bg-card hover:border-primary border-border group rounded-xl border p-8 transition-colors duration-300">
                  <div className="bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground mb-6 flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300">
                     <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{vision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ValuesSection />
      
      {/* <LeadershipsSection /> */}
      <FollowUpSection />
    </main>
  );
};

export default VisionsPage;
