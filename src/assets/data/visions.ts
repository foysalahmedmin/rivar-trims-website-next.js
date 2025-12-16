import { Leaf, Lightbulb, LucideIcon, ShieldCheck } from "lucide-react";

export type TVision = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const visions: TVision[] = [
  {
    _id: "vision-innovation",
    title: "Innovation in Detail",
    description:
      "We constantly explore new materials and techniques to ensure your trims are not just functional, but a statement of your brand's quality.",
    icon: Lightbulb,
  },
  {
    _id: "vision-integrity",
    title: "Uncompromising Quality",
    description:
      "From raw material sourcing to the final check, our strict quality control ensures every button, label, and tag meets global standards.",
    icon: ShieldCheck,
  },
  {
    _id: "vision-sustainability",
    title: "Commitment to Earth",
    description:
      "We believe in fashion that doesn't cost the earth. We are dedicated to reducing our carbon footprint through sustainable manufacturing practices.",
    icon: Leaf,
  },
];

export type TValue = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

export const values: TValue[] = [
  {
    _id: "val-innovation",
    title: "Innovation",
    description: "Embracing new technologies and methods to stay ahead in the dynamic fashion industry.",
    icon: Lightbulb,
    link: "/about",
  },
  {
    _id: "val-integrity",
    title: "Reliability",
    description: "Consistent quality and timely delivery you can count on, every single time.",
    icon: ShieldCheck,
    link: "/about",
  },
  {
    _id: "val-sustainability",
    title: "Sustainability",
    description: "Committing to eco-friendly practices that protect our planet for future generations.",
    icon: Leaf,
    link: "/about",
  },
];
