import { newsEvents } from "@/assets/data/news-events";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsEventDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return newsEvents.map((item) => ({
    id: item._id,
  }));
}

export async function generateMetadata({ params }: NewsEventDetailsPageProps) {
  const { id } = params;
  const item = newsEvents.find((n) => n._id === id);

  if (!item) {
    return {
      title: "News Not Found | Rivar Trims",
    };
  }

  return {
    title: `${item.title} | News & Events | Rivar Trims`,
    description: item.description,
  };
}

const NewsEventDetailsPage = ({ params }: NewsEventDetailsPageProps) => {
  const { id } = params;
  const item = newsEvents.find((n) => n._id === id);

  if (!item) {
    return notFound();
  }

  return (
    <main>
      <PageHeaderSection
        subtitle={item.category}
        title={item.title}
        description={item.date}
        image={item.thumbnail}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card mb-12 overflow-hidden rounded-xl border shadow-lg">
            <div className="p-8 md:p-12">
              {/* Post Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-primary mb-6 text-3xl font-bold">
                  {item.details.title}
                </h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                    <div
                      className="text-foreground"
                      dangerouslySetInnerHTML={{
                        __html: item.details.description || "",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Gallery Images if available */}
              {item.details.images && item.details.images.length > 0 && (
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {item.details.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video overflow-hidden rounded-lg shadow-sm"
                    >
                      <Image
                        src={img}
                        alt={`Gallery image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-muted flex items-center justify-between border-t px-8 py-6">
              <Link href="/news-events">
                <Button variant="outline">&larr; Back to News</Button>
              </Link>
              <div className="flex gap-2">
                <div className="bg-muted px-2 py-0.5">{item.category}</div>
                <div className="bg-muted px-2 py-0.5">{item.date}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
};

export default NewsEventDetailsPage;
