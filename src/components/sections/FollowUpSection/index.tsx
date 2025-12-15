import { Button } from "@/components/ui/Button";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const FollowUpSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/partials/followup-bg.png')" }}
      className="dark intersection-fade-in text-foreground bg-muted bg-cover bg-center bg-no-repeat"
    >
      <div className="background/50 border-primary border-b-8 py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Title>
              <span className="inline-block">Let&apos;s Grow</span>
              <br />
              <span className="ml-14 inline-block">Together.</span>
            </Title>
          </SectionTitle>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/services">
              <Button asChild={true} size="lg">
                <span>Explore Services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="foreground"
                asChild={true}
                size="lg"
                variant="outline"
              >
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUpSection;
