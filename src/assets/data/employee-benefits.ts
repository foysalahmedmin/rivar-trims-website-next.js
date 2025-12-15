import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  GraduationCap,
  HeartHandshake,
  MonitorCheck,
  Palmtree,
  Trophy,
} from "lucide-react";

export type TEmployeeBenefit = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const employee_benefits: TEmployeeBenefit[] = [
  {
    _id: "350db34",
    title: "Mental Wellness Support",
    description:
      "We care about your peace of mind. Access wellness check-ins and resources to stay focused, calm, and motivated.",
    icon: HeartHandshake,
  },
  {
    _id: "576f6ab",
    title: "Tech Setup & Tools",
    description:
      "We provide the essential devices, subscriptions, and tools you need to perform at your best—whether you're in the office or remote.",
    icon: MonitorCheck,
  },
  {
    _id: "367003c",
    title: "Flexible Work Arrangements",
    description:
      "Work from anywhere with flexible hours that fit your lifestyle. We trust you to get things done your way.",
    icon: CalendarClock,
  },
  {
    _id: "4f1b2f7",
    title: "Professional Development Opportunities",
    description:
      "Access online courses, workshops, and mentoring to sharpen your skills and stay ahead in your career.",
    icon: GraduationCap,
  },
  {
    _id: "dc5c301",
    title: "Generous Paid Time Off",
    description:
      "Recharge with ample vacation days, holidays, and time off policies designed to prioritize your rest and creativity.",
    icon: Palmtree,
  },
  {
    _id: "75282bd",
    title: "Employee Recognition Programs",
    description:
      "We celebrate your wins—big and small—through shoutouts, rewards, and performance bonuses.",
    icon: Trophy,
  },
];
