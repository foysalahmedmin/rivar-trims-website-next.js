import { newsEvents } from "@/assets/data/news-events";
import NewsEventCard from "@/components/cards/NewsEventCard";

const NewsEventsSection = () => {
  return (
    <section className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item) => (
            <NewsEventCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
