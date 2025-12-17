import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import { Building2, Clock, Globe2, Phone } from "lucide-react";

const banks = [
  {
    name: "JAMUNA BANK PLC",
    branch: "UTTARA BRANCH",
    address: "GIANT BUSINESS TOWER, PLOT NO 3 & 3A, SECTOR 3, UTTARA, DHAKA-1230.",
    phone: "+880 9610005678",
    swift: "JAMUBDDH054",
  },
  {
    name: "BANK ASIA LTD.",
    branch: "SONARGAON JANAPATH ROAD BRANCH",
    address: "Circle Windflower, Holding-30, Sonargaon Janapath Road, Sector-11, Uttara, Dhaka -1230",
    phone: "02 9816303-5",
    swift: "BALBBDDHCTS",
  },
];

const businessInfo = [
  {
    label: "Lead Time",
    value: "7 days after receive the L/C.",
    icon: Clock,
  },
  {
    label: "Yearly Turnover",
    value: "USS 2 Million",
    icon: Globe2,
  },
];

const BankingPartnersSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <SectionTitle className="mb-12 text-center">
          <Subtitle>Financial Partners</Subtitle>
          <Title>Our Banking Partners</Title>
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-card border-border hover:border-primary/50 group relative rounded-xl border p-8 shadow-sm transition-colors duration-300"
            >
              <div className="bg-primary/5 text-primary mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold md:text-2xl">{bank.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-wide">
                {bank.branch}
              </p>

              <div className="text-muted-foreground space-y-3 text-sm">
                <p suppressHydrationWarning>{bank.address}</p>
                <div className="flex items-center gap-2">
                  <Phone className="text-primary h-4 w-4" />
                  <span>{bank.phone}</span>
                </div>
                <div className="bg-muted inline-block rounded md:px-2 py-1 text-xs font-semibold">
                  SWIFT: <span className="text-foreground">{bank.swift}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Business Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {businessInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-primary text-primary-foreground flex items-center gap-6 rounded-xl p-6 shadow-lg md:p-8"
              >
                <div className="bg-primary-foreground/20 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="opacity-90">{info.label}</p>
                  <p className="text-xl font-bold md:text-2xl">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BankingPartnersSection;
