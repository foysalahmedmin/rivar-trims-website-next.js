import { Button } from "@/components/ui/Button";
import {
    Description,
    SectionTitle,
    Subtitle,
    Title,
} from "@/components/ui/SectionTitle";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 self-stretch lg:order-1">
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
                alt="Team working together in modern office"
                className="bg-muted size-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle>
              <Subtitle>Who We Are</Subtitle>
              <Title>Global Standards, Local Craftsmanship.</Title>
              <Description>
                <p>
                  Rivar Trims Limited is a proud concern of Mondol Group, one of the leading conglomerates in the Bangladesh Garment Industry. 
                  Established to serve as a complete backward linkage solution, we specialize in high-quality garment accessories including 
                  woven labels, printed labels, heat transfers, and packaging solutions.
                </p>
                <p className="mt-4">
                  With a commitment to integrity, teamwork, and excellence, we strive to satisfy our valued clients with 
                  superior quality, competitive pricing, and on-time delivery. As a sister concern of Montrims Ltd., 
                  we leverage decades of industry expertise to meet global standards.
                </p>
              </Description>
            </SectionTitle>
            <div className="mb-8 grid grid-cols-2 gap-4 md:mb-12">
              <div className="border-primary border-l-4 px-2 md:px-4">
                <h4 className="text-xl font-bold">Eco-Friendly</h4>
                <p>Sustainable materials & inks</p>
              </div>
              <div className="border-primary border-l-4 px-2 md:px-4">
                <h4 className="text-xl font-bold">Fast Delivery</h4>
                <p>Sustainable materials & inks</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center justify-start gap-4">
              <Link href="/about">
                <Button asChild={true} size="lg">
                  <span>About Us</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button asChild={true} size="lg" variant="outline">
                  <span>Contact With Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
