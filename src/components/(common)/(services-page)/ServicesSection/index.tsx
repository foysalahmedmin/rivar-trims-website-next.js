import { TService } from "@/assets/data/services";
import ServiceCard from "@/components/cards/ServiceCard";

const ServicesSection = ({ services = [] }: { services: TService[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {services?.map((service) => (
          <div key={service?._id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
