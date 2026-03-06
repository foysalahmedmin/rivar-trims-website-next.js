"use client";

import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { Globe, PackageCheck, Users } from "lucide-react";

const weCareData = [
  {
    title: "PEOPLE",
    description:
      "We foster positive relationships with all stakeholders, prioritising their well-being, rights and safety.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "PLACE",
    description:
      "We seek sustainable practices, minimising environmental impact and aligning with the latest advancements and regulations.",
    icon: Globe,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "PRODUCTS",
    description:
      "We offer a comprehensive range of innovative solutions, empowering positive change through sustainable products, designs, and systems.",
    icon: PackageCheck,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const WeCareSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle className="mb-16">
            <Subtitle>Our Commitment</Subtitle>
            <Title>RIVAR TRIMS WE-CARE</Title>
            <Description>
              We believe in sustainability and by inspiring this core
              philosophy, we do best care of our People, Place & Products.
            </Description>
          </SectionTitle>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {weCareData.map((item, index) => (
              <div
                key={index}
                className="group border-border bg-card flex flex-col items-center rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bgColor} ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon size={32} />
                </div>
                <h3 className="text-foreground mb-4 text-xl font-bold tracking-wider">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeCareSection;
