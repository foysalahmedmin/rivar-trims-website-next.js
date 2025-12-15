import BenefitsSection from "@/components/sections/BenefitsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitSection2 from "@/components/sections/SplitSection2";

export const metadata = {
  title: "Career | Rivar Trims",
  description:
    "Rivar Trims | We're a team of digital experts who believe in creativity, strategy, and technology. Join us and shape the future of digital innovation. At Rivar Trims, we're building groundbreaking digital experiences that make a difference.",
};

const CareersPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Shape the future of digital innovation"
        title="Career"
        description="Join a team that thrives on creativity, strategy, and technology. At Rivar Trims, we believe the future belongs to those who build it—and we’re building it every day through groundbreaking digital experiences."
        image="/images/(careers-page)/page-header.png"
      />
      <PageHeaderSection
        subtitle="Careers at Rivar Trims"
        title="Life at Rivar Trims"
        description="Working at Rivar Trims means being part of a passionate team that values innovation, collaboration, and impact. Whether you're a developer, designer, strategist, or digital marketer, you’ll find a place where your ideas matter and your growth is supported. We prioritize flexibility, continuous learning, and a culture of excellence that pushes boundaries and delivers real results for global clients. Together, we build powerful software, drive successful campaigns, and design user-centered experiences that make a difference."
        image="/images/(careers-page)/career-life.png"
      />
      <BenefitsSection />
      <PageHeaderSection
        subtitle="Explore Opportunities"
        title="Your career in tech and creativity starts here"
        description="At Rivar Trims, we offer career paths in software engineering, UI/UX design, digital marketing, automation, project strategy, and beyond. We're not just offering jobs—we’re offering the chance to work on meaningful digital solutions that shape industries and improve lives."
        image="/images/(careers-page)/career-opportunities.png"
      />
      <SplitSection2
        className="bg-muted"
        subtitle="Talent Development"
        title="Internship Program"
        description="Our Internship Program is designed to launch careers in technology and marketing. Over 85% of our interns continue to grow with us, contributing across web and app development, performance marketing, design systems, and automation solutions. Interns work closely with experienced professionals, gaining real-world experience in project cycles, client collaboration, and strategic delivery. We offer structured internships in areas such as frontend/backend development, creative design, content, SEO/SEM, and tech-driven project management—empowering the next generation of digital innovators."
        image1="/images/(careers-page)/internship-1.png"
        image2="/images/(careers-page)/internship-2.png"
      />
      <FollowUpSection />
    </main>
  );
};

export default CareersPage;
