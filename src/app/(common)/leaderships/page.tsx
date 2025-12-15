import FollowUpSection from "@/components/sections/FollowUpSection";
import LeadershipsSlideSection from "@/components/sections/LeadershipsSlideSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitSection from "@/components/sections/SplitSection";

const metrics = [
  {
    title: "50+",
    description: "Projects done",
  },
  {
    title: "0.5+",
    description: "Years of experience",
  },
  {
    title: "10+",
    description: "Team members",
  },
];

export const metadata = {
  title: "Leaderships | Rivar Trims",
  description:
    "Rivar Trims | Rivar Trims's leadership team combines decades of technology expertise with visionary digital strategy.",
};

const LeadershipsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Leaderships"
        title="The champions of a construction revolution"
        description="Rivar Trims's leadership team combines decades of technology expertise with visionary digital strategy."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=12000&q=80"
        metrics={metrics}
      />
      <SplitSection
        className="bg-muted"
        subtitle="Co-Founder & Project Manager"
        title="Foysal Ahmed"
        description={`<div class="text-xl">
            Visionary co-founder driving Rivar Trims's mission to deliver human-centric technology solutions through ethical innovation and strategic leadership.
          </div>`}
        image="/images/leaderships/foysalahmedmin.png"
        links={[
          {
            text: "Read More",
            url: "/leaderships/foysalahmedmin",
          },
        ]}
      />
      <LeadershipsSlideSection title="Our leaderships" />
      <FollowUpSection />
    </main>
  );
};

export default LeadershipsPage;
