import { TNewsEvent } from "@/assets/data/news-events";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type NewsEventCardProps = {
  item: TNewsEvent;
  className?: string;
};

const NewsEventCard = ({ item, className }: NewsEventCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card intersection-fade-in h-full overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      <Link href={`/news-events/${item._id}`} className="block h-full">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <div className="bg-background/90 text-foreground rounded px-2 py-0.5 font-semibold">
              {item.category}
            </div>
          </div>
        </div>
        <div className="flex h-[calc(100%-aspect-video)] flex-col p-5">
          <span className="text-muted-foreground mb-2 block text-xs font-semibold tracking-wider uppercase">
            {item.date}
          </span>
          <h3 className="group-hover:text-primary mb-3 line-clamp-2 text-xl font-bold transition-colors">
            {item.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow text-sm">
            {item.description}
          </p>
          <span className="text-primary group-hover:border-primary w-fit border-b-2 border-transparent text-sm font-bold tracking-wider uppercase transition-all">
            Read More
          </span>
        </div>
      </Link>
    </div>
  );
};

export default NewsEventCard;
