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
                src="/images/(home-page)/about.png"
                alt="Team working together in modern office"
                className="bg-muted size-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle>
              <Subtitle>Next Horizon</Subtitle>
              <Title>Empowering Digital Growth with Smart Innovation</Title>
              <Description>
                <p>
                  Rivar Trims is your trusted partner in building powerful
                  digital solutions that fuel business growth. From top-tier web
                  development and sleek, mobile app to scalable cloud
                  technologies, we help brands of all sizes transform their
                  online presence and achieve measurable success.
                </p>
                <br />
                <p>
                  Driven by a passion for innovation, a commitment to
                  excellence, and an obsession with client success, Rivar Trims
                  delivers tailor-made tech solutions that make a real impact.
                </p>
                <br />
                <p>
                  Let’s build what’s next together. Explore our services and
                  discover what sets us apart in the digital world.
                </p>
              </Description>
            </SectionTitle>

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
