import { Layers, LucideIcon, Package, Tag } from "lucide-react";

export type TService = {
  _id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  details: {
    title: string;
    description: string;
    images?: string[];
  };
  points?: string[];
};

export const services: TService[] = [
  {
    _id: "woven-labels",
    icon: Tag,
    title: "Woven Labels",
    description:
      "High-definition woven labels that define your brand's identity. From damask to satin, we create durable and elegant labels for all garment types.",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200",
    link: "/services/woven-labels",
    details: {
      title: "Premium Woven Labels",
      description: `
        <p>Our woven labels are the hallmark of quality for any garment. Utilizing advanced air-jet and broadloom weaving technologies, we produce labels with intricate details, crystal-clear text, and superior softness.</p>
        <p>We offer a wide range of qualities including High Definition Damask, Satin, and Taffeta. Our labels are Oeko-Tex Standard 100 certified, ensuring they are free from harmful substances and safe for direct skin contact.</p>
        <p>Whether you need a classic center-fold label or a unique laser-cut shape, our design team works closely with you to bring your vision to life.</p>
      `,
      images: [
        "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1200",
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1200",
      ],
    },
    points: [
      "High Definition Damask Weave",
      "Soft Ultrasonic Cut Edges",
      "Sustainable Recycled Polyester Options",
      "Custom Fold Configurations",
    ],
  },
  {
    _id: "heat-transfers",
    icon: Layers,
    title: "Heat Transfers",
    description:
      "Seamless and durable heat transfer labels for sportswear and intimate apparel. Offering tag-less comfort with vibrant, stretchable designs.",
    thumbnail: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200",
    link: "/services/heat-transfers",
    details: {
      title: "Innovative Heat Transfer Solutions",
      description: `
        <p>Say goodbye to irritation with our premium heat transfer labels. Perfect for activewear, lingerie, and infant clothing, our transfers provide a smooth, "tag-less" experience.</p>
        <p>We specialize in various techniques including Silicone, Reflective, and Water-based transfers. Our prints are rigorously tested for wash durability, elasticity, and color fastness.</p>
        <p>With quick application times and low bonding temperatures, our transfers improve production efficiency while upgrading the aesthetic of your final product.</p>
      `,
      images: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
      ],
    },
    points: [
      "Eco-friendly Water-based Inks",
      "High Stretch & Recovery",
      "Reflective & Glow-in-the-Dark Options",
      "Superior Wash Durability",
    ],
  },
  {
    _id: "packaging-solutions",
    icon: Package,
    title: "Sustainable Packaging",
    description:
      "Eco-conscious packaging solutions including hang tags, polybags, and boxes. protect your products while telling your sustainability story.",
    thumbnail: "https://images.unsplash.com/photo-1585802347318-7b44585c5750?q=80&w=1200",
    link: "/services/packaging-solutions",
    details: {
      title: "Complete Packaging Ecosystem",
      description: `
        <p>Packaging is the first touchpoint for your customer. We deliver complete packaging solutions that elevate your unboxing experience.</p>
        <p>From FSC-certified paper hang tags to biodegradable polybags and rigid gift boxes, we cover all your packaging needs. Our offset printing capabilities ensure accurate brand colors and crisp graphics.</p>
        <p>We are constantly innovating with recycled materials to help brands meet their sustainability goals without compromising on luxury.</p>
      `,
      images: [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200",
        "https://images.unsplash.com/photo-1530538987395-032d1800fdd4?q=80&w=1200",
      ],
    },
    points: [
      "FSC-Certified Paper Stocks",
      "Biodegradable Polybags",
      "Recycled Corrugated Boxes",
      "Custom Finishes (Foil, Emboss, UV)",
    ],
  },
];
