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
