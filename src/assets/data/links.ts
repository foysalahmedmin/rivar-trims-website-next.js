import { Building, Eye, LucideIcon } from "lucide-react";

type TLink = {
  text: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const about_links: TLink[] = [
  // {
  //   text: "About",
  //   href: "/about",
  //   icon: Handshake,
  //   description: "Learn more about our company",
  // },
  // {
  //   text: "Leaderships",
  //   href: "/leaderships",
  //   icon: Users,
  //   description: "Meet our executive team and leadership",
  // },
  {
    text: "Services",
    href: "/services",
    icon: Building,
    description: "Explore our comprehensive service offerings",
  },
  // {
  //   text: "Projects",
  //   href: "/projects",
  //   icon: Briefcase,
  //   description: "View our portfolio and case studies",
  // },
  // {
  //   text: "Career",
  //   href: "/careers",
  //   icon: Target,
  //   description: "Join our growing team of professionals",
  // },
  // {
  //   text: "History",
  //   href: "/history",
  //   icon: Calendar,
  //   description: "Learn about our journey and milestones",
  // },
  {
    text: "Vision",
    href: "/visions",
    icon: Eye,
    description: "Discover our mission and future goals",
  },
];
