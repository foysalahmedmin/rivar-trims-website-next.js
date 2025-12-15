import {
  BarChart,
  Clock,
  Code2,
  Cpu,
  LucideIcon,
  Receipt,
  Rocket,
  Settings,
  Smartphone,
  Users,
} from "lucide-react";

export type TFeature = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: TFeature[] = [
  {
    _id: "on-time-delivery",
    title: "On-Time Delivery",
    description:
      "We follow agile development practices to ensure your product is launched on schedule—every time.",
    icon: Clock,
  },
  {
    _id: "transparent-pricing",
    title: "Transparent Pricing",
    description:
      "Upfront and honest estimates with no hidden costs. You know exactly what you're paying for at every stage.",
    icon: Receipt,
  },
  {
    _id: "custom-secure-solutions",
    title: "Custom & Secure Solutions",
    description:
      "We design and build customized solutions with enterprise-grade security, tailored to your unique business goals and user needs.",
    icon: Settings,
  },
  {
    _id: "tech-expertise",
    title: "Technical Expertise",
    description:
      "Our certified professionals specialize in React, Node.js, AI/ML, and cloud platforms to build scalable digital products.",
    icon: Cpu,
  },
  {
    _id: "data-driven",
    title: "Data-Driven Strategy",
    description:
      "We leverage analytics and performance data to optimize your solution continuously for better ROI.",
    icon: BarChart,
  },
  {
    _id: "innovative-tech",
    title: "Emerging Technologies",
    description:
      "Stay ahead of the curve with AI integration, AR/VR experiences, and blockchain-powered innovations.",
    icon: Rocket,
  },
  {
    _id: "full-stack",
    title: "Full-Cycle Development",
    description:
      "From design and development to testing, deployment, and support—we manage the entire product lifecycle.",
    icon: Code2,
  },
  {
    _id: "cross-platform",
    title: "Cross-Platform Excellence",
    description:
      "Deliver consistent, high-quality experiences across web and mobile with responsive design and native apps.",
    icon: Smartphone,
  },
  {
    _id: "user-centric",
    title: "User-Centric Design",
    description:
      "Our human-centered approach ensures intuitive interfaces and seamless user experiences at every touchpoint.",
    icon: Users,
  },
];
