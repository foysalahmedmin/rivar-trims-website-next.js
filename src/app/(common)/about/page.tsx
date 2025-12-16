import CertificationsSection from "@/components/sections/CertificationsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import SplitSection from "@/components/sections/SplitSection";

const metrics = [
  {
    title: "50+",
    description: "Digital solutions delivered",
  },
  {
    title: "0.5+",
    description: "Years of tech innovation",
  },
  {
    title: "10+",
    description: "Digital experts",
  },
];

export const metadata = {
  title: "About | Rivar Trims",
  description:
    "Rivar Trims's leadership team combines decades of technology expertise with visionary digital strategy. From Silicon Valley veterans to creative pioneers, our leaders are united by a common mission: to transform businesses through cutting-edge digital solutions. Meet the minds powering our clients' digital evolution.",
};

const AboutPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="About Us"
        title="Architects of the Digital Revolution"
        description="Rivar Trims's leadership team combines decades of technology expertise with visionary digital strategy. From Silicon Valley veterans to creative pioneers, our leaders are united by a common mission: to transform businesses through cutting-edge digital solutions. Meet the minds powering our clients' digital evolution."
        image="/images/(about-page)/page-header.png"
        metrics={metrics}
      />

      <SplitSection
        title="The Rivar Trims Difference"
        description={`<div class="space-y-4">
          <p>
            In an era where digital agencies are abundant and skillsets overlap, Rivar Trims rises
            above by delivering not just services—but results, relationships, and long-term value.
            What sets us apart isn’t just how we code, but how we think, collaborate, and drive change.
          </p>

          <p class="font-medium">Here’s what makes us different:</p>
          <div class="grid gap-6">
            <div>
              <h3 class="font-semibold text-lg">Full-Stack Expertise</h3>
              <p>
                We offer end-to-end capabilities across the entire technology stack. Whether it's
                modern frontend interfaces with React and Next.js or backend systems powered by Node.js,
                Express, and scalable NoSQL databases—we handle the complete product lifecycle.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Agile Innovation</h3>
              <p>
                Our agile methodology allows us to iterate fast, respond to feedback, and adapt to
                evolving business needs. We don't just build once—we refine continuously to deliver
                market-ready solutions that evolve with you.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Results-Obsessed</h3>
              <p>
                We measure success in metrics that matter to you: increased user engagement,
                faster load times, lower churn, higher conversions, and tangible ROI.
                Every decision is made with your KPIs in mind.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Transparent Collaboration</h3>
              <p>
                Our team works as an extension of yours. We believe in clear communication,
                mutual respect, and shared accountability—ensuring that you’re informed
                and empowered at every step of the journey.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Business-Driven Engineering</h3>
              <p>
                We understand the business context behind every feature. We don’t just
                write code—we engineer systems that solve business problems, enhance
                customer experiences, and drive sustainable growth.
              </p>
            </div>
          </div>

          <p>
            At Rivar Trims, our commitment goes beyond project completion. We strive to build
            long-term relationships rooted in trust, performance, and innovation. That’s
            the Rivar Trims difference.
          </p>
        </div>`}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop"
      />

      <CertificationsSection />
      <PartnersSection />

      <FollowUpSection />
    </main>
  );
};

export default AboutPage;
