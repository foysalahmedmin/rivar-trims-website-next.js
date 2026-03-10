import AboutSection from "@/components/(common)/(home-page)/AboutSection";
import CallToActionSection from "@/components/(common)/(home-page)/CallToActionSection";
import HeroCarouselSection from "@/components/(common)/(home-page)/HeroCarouselSection";
import NewsEventsSection from "@/components/(common)/(home-page)/NewsEventsSection";
import ProductsSection from "@/components/(common)/(home-page)/ProductsSection";
import StatsSection from "@/components/(common)/(home-page)/StatsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WeCareSection from "@/components/sections/WeCareSection";

export const metadata = {
  title: "Rivar Trims Limited - Global Quality, Local Excellence",
  description:
    "Rivar Trims Limited is a leading manufacturer of high-quality garment accessories and packaging solutions. We supply woven labels, heat transfers, and sustainable trims to global fashion brands.",
};

const HomePage = () => {
  return (
    <main className="scroll-smooth">
      {/* <HeroSection /> */}
      <HeroCarouselSection />
      {/* <QuickContactSection /> */}
      {/* <ServicesSection /> */}
      <ProductsSection />
      <AboutSection />
      <StatsSection />
      <WeCareSection />
      <CoreValuesSection />
      {/* <LeadershipsSection /> */}
      {/* <FeaturesSection /> */}
      {/* <ProjectsSection /> */}
      {/* <BlogsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ClientsSection /> */}
      <NewsEventsSection />
      <CertificationsSection />
      <PartnersSection />
      <CallToActionSection />
      {/* <FAQSection /> */}
    </main>
  );
};

export default HomePage;
