import { TLeadership } from "@/assets/data/leaderships";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LeadershipCardProps = {
  leadership: Partial<TLeadership>;
  className?: string;
};
const LeadershipCard = ({ leadership, className }: LeadershipCardProps) => {
  return (
    <div
      className={cn(
        "group/card intersection-fade-in grid grid-cols-2 items-center gap-6 md:px-6",
        className,
      )}
    >
      <div className="aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-xl">
        <Image
          className="bg-muted size-full object-cover object-center transition-all duration-700 ease-in-out group-hover/card:scale-110"
          src={leadership?.image || ""}
          alt={leadership?.name || ""}
          height={700}
          width={525}
        />
      </div>
      <div className="space-y-6 md:pr-12">
        <div className="space-y-2">
          <h3 className="text-3xl">
            <Link
              href={"/leaderships/" + leadership?._id}
              className="primary hover:text-primary underline-effect"
            >
              {leadership?.name}
            </Link>
          </h3>
          <strong className="inline-block">{leadership?.designation}</strong>
        </div>
        <p className="leading-relaxed">{leadership?.short_description}</p>
      </div>
    </div>
  );
};

export default LeadershipCard;
