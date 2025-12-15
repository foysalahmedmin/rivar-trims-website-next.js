import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitFloatSection from "@/components/sections/SplitFloatSection";
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
      <SplitFloatSection
        className="bg-muted"
        title="Our Digital Philosophy"
        description={`<div class="space-y-6">
          <p>
            At Rivar Trims, we believe that digital transformation is not simply about implementing
            the latest tools—it’s about crafting solutions that align with human intent, business
            values, and long-term growth. Our philosophy centers on purpose-driven innovation,
            ensuring that technology works for people—not the other way around.
          </p>

          <p>
            We approach every project with a blend of strategic insight and technical craftsmanship,
            striving to understand not just what a client wants, but why they want it. This
            perspective helps us build digital experiences that are not only functional,
            but meaningful.
          </p>

          <p class="font-medium">Our digital solutions are built to:</p>
          <ul class="list-disc space-y-2 pl-6">
            <li>
              <strong>Address core business pain points</strong> through real-time analytics and
              actionable insights
            </li>
            <li>
              <strong>Integrate seamlessly</strong> with your existing software, processes, and teams
              without unnecessary complexity
            </li>
            <li>
              <strong>Scale efficiently</strong> and remain adaptable in the face of rapid market and
              technological change
            </li>
            <li>
              <strong>Maximize ROI</strong> by automating repetitive tasks, optimizing performance, and
              reducing operational overhead
            </li>
          </ul>

          <p>
            We serve a broad spectrum of clients—from lean startups navigating early product-market fit,
            to enterprise organizations undergoing system-wide transformation. In all cases, we bring
            the same commitment: to unlock technology’s full potential in the service of human and
            organizational excellence.
          </p>

          <p>
            Our philosophy isn’t just a mindset—it’s a methodology. One that combines thoughtful research,
            iterative design, agile development, and measurable impact.
          </p>
        </div>`}
        image="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=800&h=600&fit=crop"
      />

      <SplitSection
        title="The Rivar Trims Difference"
        description={`<div class="space-y-6">
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

      <FollowUpSection />
    </main>
  );
};

export default AboutPage;
