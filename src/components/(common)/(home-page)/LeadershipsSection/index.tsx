import { leaderships } from "@/assets/data/leaderships";
import LeadershipCard from "@/components/cards/LeadershipCard";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const LeadershipsSection = () => {
  return (
    <section id="leaderships" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-3">
          <div className="space-y-8 md:space-y-12">
            <Subtitle>Leaderships</Subtitle>
            <Title isAnimation={true}>Meet our leadership</Title>
            <Link href={"/leaderships"} className="inline-block">
              <Button
                asChild={true}
                className="foreground"
                variant="outline"
                size="lg"
              >
                <span>LEARN MORE</span>
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-2">
            <Carousel className="group">
              <CarouselContent>
                {leaderships?.map((leadership) => (
                  <CarouselItem key={leadership._id}>
                    <LeadershipCard leadership={leadership} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                <CarouselPreviousTrigger className="-left-2 hidden h-14 text-4xl md:inline-flex" />
                <CarouselNextTrigger className="-right-2 hidden h-14 text-4xl md:inline-flex" />
                <CarouselPagination className="foreground -bottom-6 md:px-6" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipsSection;
