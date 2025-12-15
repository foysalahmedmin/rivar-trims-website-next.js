import { Button } from "@/components/ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="dark text-foreground relative flex min-h-[60vh] w-full items-center py-24 pt-40 xl:min-h-[80vh]"
    >
      <video
        src="/hero.mp4"
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        muted
        loop
      />
      {/* Gradient overlay for better text readability */}
      <div className="from-background/90 via-background/60 absolute inset-0 -z-10 bg-gradient-to-r to-transparent" />

      <div className="container">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          <h1 className="text-4xl uppercase lg:text-6xl">
            <span className="border-primary inline-block border-l-2 pl-4 font-semibold lg:border-l-8 lg:pl-4">
              Transform Your Business
            </span>{" "}
            <br />
            <span className="font-mokoto-glitch mt-6 inline-block">
              Digitally
            </span>
          </h1>

          <p className="text-muted-foreground max-w-lg lg:text-xl">
            Rivar Trims is a leading digital solutions company specializing in web
            development, mobile applications, and cloud technologies.{" "}
            <strong>We&apos;ve</strong> helped businesses of all sizes transform
            their digital presence and achieve their goals through innovative
            technology solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <Button asChild={true} size="lg">
                <span>Our Services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="foreground"
                asChild={true}
                size="lg"
                variant="outline"
              >
                <span>Get Started</span>
              </Button>
            </Link>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 pt-6 md:max-w-2xl md:grid-cols-6">
            {[
              { value: "App", desc: "Development" },
              { value: "Content", desc: "Creation" },
              { value: "Digital", desc: "Marketing" },
              { value: "SEO", desc: "Optimization" },
              { value: "UI/UX", desc: "Design" },
              { value: "Business", desc: "Solutions" },
            ].map((item, index) => (
              <div
                key={index}
                className="border-primary border-l-2 pl-2 lg:pl-4"
              >
                <div className="text-sm font-semibold md:text-base">
                  {item.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
