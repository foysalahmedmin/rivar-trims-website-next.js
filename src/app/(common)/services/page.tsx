import { services } from "@/assets/data/services";
import ServicesSection from "@/components/(common)/(services-page)/ServicesSection";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Services | Rivar Trims",
  description:
    "Rivar Trims | We offer a wide range of services to help you achieve your goals. From web development to mobile app development, we have the expertise to help you succeed in the digital world.",
};

const ServicesPage = () => {
  return (
    <main>
      <section className="intersection-fade-in py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Services</Subtitle>
            <Title>Services</Title>
            <Description>
              We offer a wide range of services to help you achieve your goals.
            </Description>
          </SectionTitle>
          <div>
            <ServicesSection services={services} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
