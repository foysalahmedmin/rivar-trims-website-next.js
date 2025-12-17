import { blogs } from "@/assets/data/blogs";
import BlogCard from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <section id="blogs" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:gap-14 lg:grid-cols-3">
          <div className="space-y-8 md:space-y-12">
            <SectionTitle className="max-w-60">
              <Subtitle>Insights</Subtitle>
              <Title isAnimation={true}>Blogs</Title>
              <Description>
                Our people are dedicated to finding solutions to every
                challenge. That spirit makes for some great stories.
              </Description>
            </SectionTitle>
            <Link href={"/blogs"} className="inline-block">
              <Button asChild={true} size="lg">
                <span>VIEW ALL BLOGS</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2">
            {blogs
              ?.slice(0, 2)
              ?.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
