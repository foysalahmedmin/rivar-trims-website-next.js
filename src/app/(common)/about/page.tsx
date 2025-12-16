import CertificationsSection from "@/components/sections/CertificationsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import SplitSection from "@/components/sections/SplitSection";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const metrics = [
  {
    title: "100+",
    description: "Global Brands Served",
  },
  {
    title: "6+",
    description: "Years of Excellence",
  },
  {
    title: "150+",
    description: "Skilled Professionals",
  },
];

export const metadata = {
  title: "About | Rivar Trims",
  description:
    "Learn about Rivar Trims, a premier garments accessories manufacturer. Discover our journey, our commitment to sustainability, and our state-of-the-art manufacturing capabilities in Dhaka.",
};

const AboutPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="About Us"
        title="Weaving Quality into Every Thread"
        description="Rivar Trims Limited, a concern of Mondol Group, combines decades of textile expertise with modern manufacturing technology. Established as a complete backward linkage solution, we are united by a common mission: to deliver exquisite detailing that defines your brand."
        image="/images/(about-page)/page-header.png"
        metrics={metrics}
      />

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Core Values</Subtitle>
            <Title>Mission & Vision</Title>
          </SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-primary mb-4 text-2xl font-bold">
                Our Mission
              </h3>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  To build up long term business relations with our valued
                  clients by satisfying them with superior quality, competitive
                  price and on time delivery of accessories products.
                </li>
                <li>
                  To upgrade our technology and invest in human resources
                  development on continuous basis.
                </li>
                <li>
                  To explore new market for our products and make positive
                  contribution to the country’s export earnings.
                </li>
              </ul>
            </div>
            <div className="bg-card border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-primary mb-4 text-2xl font-bold">
                Our Vision
              </h3>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  To become a world-class garments accessories manufacturer and
                  supplier company preferred by the valued clients in the world
                  market.
                </li>
                <li>
                  To upgrade our technology and invest in human resources
                  development on continuous basis.
                </li>
                <li>
                  To explore new market for our products and make positive
                  contribution to the country’s export earnings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Chairman */}
      <SplitSection
        title="Message from Chairman"
        description={`<div>
          <h3 class="text-xl font-bold mb-2">MD. ABUL KALAM AZAD</h3>
          <p class="text-muted-foreground mb-4">Chairman, Rivar Trims Limited</p>
          <div class="space-y-4 italic">
            <p>
              "We want to do business with honesty, integrity and sincerity. Customer’s satisfaction with quality products is our motto and we never want to compromise with quality. For the sake of quality, we are always ready to set up most modern machinery in our factory. We always believe in quality; we don’t want to provide low quality goods just to do business."
            </p>
            <p>
              "We strongly believe that once we maintain quality, we feel confident in doing business. This is our strength and this differentiates us from others. We also believe in teamwork. Without combined efforts, nobody can achieve his or her goal."
            </p>
          </div>
        </div>`}
        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" // Placeholder for Chairman
      />

      <SplitSection
        title="The Rivar Trims Difference"
        description={`<div>
          <p>
            In a competitive global market, Rivar Trims stands out by blending local manufacturing cost-efficiencies 
            with world-class quality standards. We don't just supply trims; we deliver reliability, innovation, and compliance.
          </p>

          <p class="font-medium">Here’s what makes us different:</p>
          <div class="grid gap-4">
            <div>
              <h3 class="font-semibold text-lg">Vertical Integration</h3>
              <p>
                From design to weaving, printing, and finishing—everything happens in-house. This gives us 
                complete control over quality and lead times, ensuring your production schedule is never compromised.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Speed to Market</h3>
              <p>
                Our optimized production lines and 24/7 distinct shifts allow us to offer some of the 
                fastest turnaround times in the industry for both sampling and bulk production.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Technical Expertise</h3>
              <p>
                Our team of textile engineers and design specialists understand fabric behavior. We advise 
                on the best trim solutions that won't shrink, fade, or irritate the skin.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Global Compliance</h3>
              <p>
                We adhere to strict international standards including Oeko-Tex 100, ensuring our products are 
                free from harmful substances and safe for global export to US and EU markets.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg">Sustainable Innovation</h3>
              <p>
                We are constantly innovating with biodegradable materials and recycled yarns to help your 
                brand meet its sustainability goals without sacrificing aesthetics.
              </p>
            </div>
          </div>

          <p>
            At Rivar Trims, our commitment goes beyond the product. We strive to build
            long-term partnerships rooted in trust, performance, and mutual growth. That’s
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
