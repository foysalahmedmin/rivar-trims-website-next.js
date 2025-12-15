import { points } from "@/assets/data/visions";
import ValuesSection from "@/components/(common)/(visions-page)/ValuesSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitStickySection from "@/components/sections/SplitStickySection";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Visions | Rivar Trims",
  description:
    "Rivar Trims | We believe in the power of collaboration, creativity, and technology to solve complex problems. Our team of dedicated strategists, designers, developers, and marketers is committed to creating solutions that help businesses grow, engage users, and stay competitive in a rapidly evolving digital landscape.",
};

const VisionsPage = async () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Driving Digital Excellence"
        title="Our Vision"
        description="We believe in the power of collaboration, creativity, and technology to solve complex problems. Our team of dedicated strategists, designers, developers, and marketers is committed to creating solutions that help businesses grow, engage users, and stay competitive in a rapidly evolving digital landscape."
        image="/images/(visions-page)/page-header.png"
      />
      <section className="bg-muted intersection-fade-in py-16 md:py-24">
        <div className="container max-w-5xl">
          <SectionTitle>
            <Subtitle>Our Vision</Subtitle>
            <Title>
              To unify strategy, creativity, and technology into seamless
              digital solutions that fuel sustainable business growth.
            </Title>
          </SectionTitle>
        </div>
      </section>
      <SplitStickySection image={points?.thumbnail} contents={points?.list} />
      <ValuesSection />
      <PageHeaderSection
        subtitle="Our Core Values"
        title="Innovation. Reliability. Collaboration. Transparency. Growth."
        description="These values shape how we approach every project and client relationship. Whether building high-performance web platforms, launching impactful campaigns, or streamlining business systems, we prioritize excellence, open communication, and long-term success for our partners."
        image="/images/(visions-page)/core-values.png"
      />
      {/* <LeadershipsSection /> */}
      <FollowUpSection />
    </main>
  );
};

export default VisionsPage;
