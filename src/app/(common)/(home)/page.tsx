import AboutSection from "@/components/(common)/(home-page)/AboutSection";
import BlogsSection from "@/components/(common)/(home-page)/BlogsSection";
import CallToActionSection from "@/components/(common)/(home-page)/CallToActionSection";
import FAQSection from "@/components/(common)/(home-page)/FAQSection";
import FeaturesSection from "@/components/(common)/(home-page)/FeaturesSection";
import HeroSection from "@/components/(common)/(home-page)/HeroSection";
import ProductsSection from "@/components/(common)/(home-page)/ProductsSection";
import ServicesSection from "@/components/(common)/(home-page)/ServicesSection";

export const metadata = {
  title: "Home | Rivar Trims",
  description:
    "Rivar Trims | Digital Transformation Agency in Silicon Valley. We build digital experiences that are not just functional, but meaningful. We approach every project with a blend of strategic insight and technical craftsmanship, striving to understand not just what a client wants, but why they want it.",
};

const HomePage = () => {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      {/* <QuickContactSection /> */}
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      {/* <LeadershipsSection /> */}
      <FeaturesSection />
      {/* <ProjectsSection /> */}
      <BlogsSection />
      {/* <TestimonialsSection /> */}
      {/* <ClientsSection /> */}
      <CallToActionSection />
      <FAQSection />
    </main>
  );
};

export default HomePage;
