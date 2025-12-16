import { newsEvents } from "@/assets/data/news-events";
import NewsEventCard from "@/components/cards/NewsEventCard";
import { Button } from "@/components/ui/Button";
import {
    Description,
    SectionTitle,
    Subtitle,
    Title,
} from "@/components/ui/SectionTitle";
import Link from "next/link";

const NewsEventsSection = () => {
  return (
    <section id="news-events" className="intersection-fade-in py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle className="md:max-w-xl">
            <Subtitle>Updates</Subtitle>
            <Title>News & Events</Title>
            <Description>
              Stay updated with the latest news, events, and media features from Rivar Trims. 
              Discover our sustainable innovations and global exhibitions.
            </Description>
          </SectionTitle>
          <Link href={"/news-events"} className="inline-block">
            <Button asChild={true} size="lg" variant="outline">
              <span>VIEW ALL NEWS</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.slice(0, 3).map((item) => (
            <NewsEventCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
