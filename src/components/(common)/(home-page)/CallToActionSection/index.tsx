import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section
      id="CTA"
      style={{
        backgroundImage: "url('/images/(home-page)/call-to-action-bg.png')",
      }}
      className="dark intersection-fade-in text-foreground bg-cover bg-center"
    >
      <div className="bg-background/50 py-16 md:py-24">
        <div className="container text-center">
          <SectionTitle variant="center">
            <Title>Build with us</Title>
            <Description>
              We’re ready to help you take on your most challenging projects—and
              turn great ideas into reality.
            </Description>
          </SectionTitle>
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Link href="/services">
              <Button asChild={true} size="lg">
                <span>Explore Our Services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="foreground"
                asChild={true}
                size="lg"
                variant="outline"
              >
                <span>CONTACT US</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
