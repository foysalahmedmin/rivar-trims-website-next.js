import CertificationsSection from "@/components/sections/CertificationsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import PartnersSection from "@/components/sections/PartnersSection";
import SplitSection from "@/components/sections/SplitSection";

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
        description="Rivar Trims combines decades of textile expertise with modern manufacturing technology. From our factory in Dhaka to global fashion hubs, we are united by a common mission: to deliver exquisite detailing that defines your brand."
        image="/images/(about-page)/page-header.png"
        metrics={metrics}
      />

      <SplitSection
        title="The Rivar Trims Difference"
        description={`<div class="space-y-4">
          <p>
            In a competitive global market, Rivar Trims stands out by blending local manufacturing cost-efficiencies 
            with world-class quality standards. We don't just supply trims; we deliver reliability, innovation, and compliance.
          </p>

          <p class="font-medium">Here’s what makes us different:</p>
          <div class="grid gap-6">
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
