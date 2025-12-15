import {
  Briefcase,
  Code2,
  Headphones,
  LayoutDashboard,
  LucideIcon,
  Megaphone,
  Paintbrush,
  PenLine,
  Search,
  UserPlus,
} from "lucide-react";

export type TSector = {
  _id:
    | "application-systems-development"
    | "content-creation"
    | "digital-marketing"
    | "seo"
    | "lead-generation"
    | "video-production"
    | "graphic-design"
    | "ui-ux-design"
    | "business-solutions"
    | "online-support";
  icon: LucideIcon;
  title: string;
  description: string;
  value:
    | "application-systems-development"
    | "content-creation"
    | "digital-marketing"
    | "seo"
    | "lead-generation"
    | "video-production"
    | "graphic-design"
    | "ui-ux-design"
    | "business-solutions"
    | "online-support";
};

export const sectors: TSector[] = [
  {
    _id: "application-systems-development",
    icon: Code2,
    title: "Application & Systems Development",
    description:
      "Custom software solutions including web, desktop, and mobile app development with scalable architectures.",
    value: "application-systems-development",
  },
  {
    _id: "content-creation",
    icon: PenLine,
    title: "Content Creation",
    description:
      "Engaging content tailored for blogs, social media, and marketing campaigns to boost brand visibility.",
    value: "content-creation",
  },
  {
    _id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions including SEO, email, and ad campaigns to grow your online presence.",
    value: "digital-marketing",
  },
  {
    _id: "seo",
    icon: Search,
    title: "SEO",
    description:
      "Search engine optimization to rank higher in search results and drive organic traffic to your website.",
    value: "seo",
  },
  {
    _id: "lead-generation",
    icon: UserPlus,
    title: "Lead Generation",
    description:
      "Result-driven strategies to attract, capture, and convert potential customers for your business.",
    value: "lead-generation",
  },
  // {
  //   _id: "video-production",
  //   icon: Clapperboard,
  //   title: "Video Production",
  //   description:
  //     "Professional video editing, motion graphics, and promotional content tailored for digital platforms.",
  //   value: "video-production",
  // },
  {
    _id: "graphic-design",
    icon: Paintbrush,
    title: "Graphic Design",
    description:
      "Visual design solutions including branding, social media graphics, print materials, and more.",
    value: "graphic-design",
  },
  {
    _id: "ui-ux-design",
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description:
      "User-focused interface design that blends aesthetics with functionality for seamless digital experiences.",
    value: "ui-ux-design",
  },
  {
    _id: "business-solutions",
    icon: Briefcase,
    title: "Business Solutions",
    description:
      "Enterprise-grade tools and consulting services designed to streamline operations and drive growth.",
    value: "business-solutions",
  },
  {
    _id: "online-support",
    icon: Headphones,
    title: "Online Support",
    description:
      "Reliable technical support, helpdesk services, and customer assistance tailored to your business needs.",
    value: "online-support",
  },
];
