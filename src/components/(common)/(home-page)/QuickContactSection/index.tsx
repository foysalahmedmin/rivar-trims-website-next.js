import { Phone } from "lucide-react";

const QuickContactSection = () => {
  return (
    <section className="bg-muted intersection-fade-in py-8 md:py-24">
      <div className="container flex flex-wrap justify-between gap-6 md:flex-row md:items-center md:gap-8">
        <h3 className="text-sm lg:text-xl">
          Looking for professional <br /> digital services?
        </h3>
        <div className="flex gap-4">
          <Phone className="text-primary my-1 size-4 lg:size-6" />
          <div>
            <strong className="block text-sm font-normal lg:text-xl">
              +64 28 470 0533
            </strong>
            <p className="text-xs lg:text-sm">Call us now for more details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
