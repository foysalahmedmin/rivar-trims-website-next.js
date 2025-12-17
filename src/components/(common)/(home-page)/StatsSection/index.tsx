import { Banknote, Building2, Globe2, Users2 } from "lucide-react";

const stats = [
  {
    label: "Global Brands",
    value: "10+",
    icon: Globe2,
  },
  {
    label: "Skilled Workforce",
    value: "150+",
    icon: Users2,
  },
  {
    label: "Annual Turnover",
    value: "$2M",
    icon: Banknote,
  },
  {
    label: "Sq. Ft. Factory",
    value: "10k",
    icon: Building2,
  },
];

const StatsSection = () => {
  return (
    <section className="bg-primary intersection-fade-in text-primary-foreground py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="bg-primary-foreground/10 text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300 rounded-full p-4 mb-2">
                  <Icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-primary-foreground/80 font-medium text-lg uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
