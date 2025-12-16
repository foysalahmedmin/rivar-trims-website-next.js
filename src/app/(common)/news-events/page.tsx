import NewsEventsSection from "@/components/(common)/(news-events-page)/NewsEventsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";

export const metadata = {
  title: "News & Events | Rivar Trims",
  description:
    "Stay updated with the latest news, events, and media features from Rivar Trims. Discover our sustainable innovations and global exhibitions.",
};

const NewsEventsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="News & Events"
        title="Latest Updates & Insights"
        description="Stay connected with our journey as we shape the future of garment trims. Read about our latest innovations, sustainability milestones, and global exhibitions."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2600"
      />
      <NewsEventsSection />
      <FollowUpSection />
    </main>
  );
};

export default NewsEventsPage;
