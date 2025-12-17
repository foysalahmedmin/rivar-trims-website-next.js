import BankingPartnersSection from "@/components/sections/BankingPartnersSection";
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
                  To manufacture world class products with outstanding quality.
                </li>
                <li>
                  To become a globally prominent RMG accessories supplier and
                  manufacturer.
                </li>
                <li>
                  To insure customer a competitive advantage through outstanding
                  product with values.
                </li>
                <li>
                  To attain highest level of efficiency, Integrity & Honesty.
                </li>
              </ul>
            </div>
            <div className="bg-card border-border rounded-lg border p-8 shadow-sm">
              <h3 className="text-primary mb-4 text-2xl font-bold">
                Our Vision
              </h3>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  To manufacture internationally acceptable standard quality
                  product,
                </li>
                <li>
                  To be globally customer focused through better quality
                  services, latest technology with continuous innovation.
                </li>
                <li>
                  To be the company that best understands and satisfies the
                  product Quality, Service and customized needs of fashion
                  brands globally
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
          <h3 class="text-xl font-bold mb-2">ROBIUL AUAL</h3>
          <p class="text-muted-foreground mb-4">Chairman, Rivar Trims Limited</p>
          <div class="space-y-4 italic">
            <p>
              "Thanks to all of our valued clients.We have started business at 2017 as a man ufacturer of heat seal label
              and all kinds of offset items like hang tag, sewing tag, price tag, photo insert card photo box, sticker, etc.
              We use latest , technologies and machinaries for production to maintain standard quality. We always
              make best quality production don't compromise with quality.Secondly we always keep the commitment
              about timely delivery because we trust that quality and delivery commitment is the main key to business.Day by day our business is growing by the grace of Allah and with the cooper ation of our valued
              clients because we clients regarding our quality and service. Our price is also competitive which makes
              our clients happy."
            </p>
            <p>
              "Hope we will get more response from market and we always welcome encouragenew
              clients to start business with us for a smooth process of accessories order. We welcome you to be the
              part of our business. "
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
      <BankingPartnersSection />

      <FollowUpSection />
    </main>
  );
};

export default AboutPage;
