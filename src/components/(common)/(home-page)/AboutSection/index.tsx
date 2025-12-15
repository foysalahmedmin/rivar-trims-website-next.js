import { about_links } from "@/assets/data/links";
import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 self-stretch lg:order-1">
            <div className="relative h-full w-full lg:pr-8 lg:pb-8">
              <img
                src="/images/(home-page)/about.png"
                alt="Team working together in modern office"
                className="bg-muted size-full rounded-xl object-cover"
                loading="lazy"
              />

              {/* Stats card overlay */}
              <div className="bg-card absolute right-0 bottom-0 hidden rounded-xl border p-6 shadow-xl lg:block">
                <div className="text-center">
                  <div className="mb-1 text-4xl">50+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle>
              <Subtitle>Next Horizon</Subtitle>
              <Title>Empowering Digital Growth with Smart Innovation</Title>
              <Description>
                <p>
                  Rivar Trims is your trusted partner in building powerful digital
                  solutions that fuel business growth. From top-tier web
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

            {/* About Links Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {about_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group intersection-fade-in hover:border-primary/50 bg-card block rounded-lg border p-4 transition-all duration-200"
                >
                  <div className="mb-2 flex items-center gap-4">
                    <div className="bg-primary/5 group-hover:bg-primary/10 flex size-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-500">
                      <span className="text-primary">
                        {<link.icon className="size-6" />}
                      </span>
                    </div>
                    <h4 className="group-hover:text-primary font-semibold text-gray-900 transition-colors duration-200">
                      {link.text}
                    </h4>
                    <ArrowRight className="group-hover:text-primary ml-auto size-4 text-gray-400 transition-all duration-200 group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {link.description}
                  </p>
                </Link>
              ))}
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
