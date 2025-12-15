import { services } from "@/assets/data/services";
import ServiceCard from "@/components/cards/ServiceCard";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section id="services" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="mb-6">
          <SectionTitle>
            <Subtitle>Our services</Subtitle>
            <Title>
              On-time delivery of powerful, cost-effective digital solutions
            </Title>
          </SectionTitle>
          <Link
            href={"/services"}
            className="primary hover:text-primary underline-effect inline-block"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
          {services?.map((service) => (
            <ServiceCard key={service?._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
