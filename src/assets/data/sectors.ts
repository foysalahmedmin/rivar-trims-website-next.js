import {
    Baby, // For Kids
    Diamond, // For Denim (or similar, maybe Shirt)
    Dumbbell, // For Sports
    LucideIcon,
    Shirt
} from "lucide-react";

export type TSector = {
  _id: "sports" | "denim" | "luxury" | "kids";
  icon: LucideIcon;
  title: string;
  description: string;
  value: "sports" | "denim" | "luxury" | "kids";
};

export const sectors: TSector[] = [
  {
    _id: "sports",
    icon: Dumbbell,
    title: "Sports",
    description: "Performance-driven trims for activewear.",
    value: "sports",
  },
  {
    _id: "denim",
    icon: Shirt,
    title: "Denim",
    description: "Durable and sustainable accessories for jeans.",
    value: "denim",
  },
  {
    _id: "luxury",
    icon: Diamond,
    title: "Luxury",
    description: "Premium trims for high-end fashion.",
    value: "luxury",
  },
  {
    _id: "kids",
    icon: Baby,
    title: "Kids",
    description: "Safe and playful accessories for children.",
    value: "kids",
  },
];
