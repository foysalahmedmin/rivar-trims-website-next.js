export type TProject = {
  _id: string;
  title: string;
  category: "Sports" | "Denim" | "Luxury" | "Kids";
  thumbnail: string;
  description: string;
  images: string[];
  client: string;
  date: string;
  details: {
    challenge: string;
    solution: string;
    result: string;
  };
};

export const projects: TProject[] = [
  {
    _id: "active-wear-branding",
    title: "ActiveWave Performance Collection",
    category: "Sports",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    description: "Developing a comprehensive trim package for a high-performance activewear line.",
    images: [
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=1200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200",
    ],
    client: "ActiveWave Global",
    date: "March 2024",
    details: {
      challenge: "The client needed a labelling solution that was non-abrasive for high-movement activities and reflective for night safety.",
      solution: "We engineered a silicone-based heat transfer label with integrated high-visibility reflective elements. The base material was chosen for its extreme elasticity to move with the fabric.",
      result: "A sleek, functional branding package that enhanced the garment's performance and safety features, receiving 100% positive feedback from user trials.",
    },
  },
  {
    _id: "eco-denim-series",
    title: "BlueEarth Sustainable Denim",
    category: "Denim",
    thumbnail: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1200",
    description: "Creating vintage-inspired, eco-friendly trims for a premium denim brand.",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200",
      "https://images.unsplash.com/photo-1605518216938-7c31b7e14ad0?q=80&w=1200",
    ],
    client: "BlueEarth Denim Co.",
    date: "January 2024",
    details: {
      challenge: "The brand required a rugged, vintage layout but strictly adhered to vegan and zero-plastic policies.",
      solution: "We utilized 'Jacron' paper patches as a durable leather alternative and developed metal buttons using recycled alloys with a natural oxidization finish instead of chemical plating.",
      result: "A fully sustainable trim set that perfectly matched the heritage aesthetic of the brand while adhering to strict environmental standards.",
    },
  },
  {
    _id: "little-stars-kids",
    title: "Little Stars Safe-Wear",
    category: "Kids",
    thumbnail: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1200",
    description: "Safety-first trim production for a leading European children's clothing retailer.",
    images: [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1200",
    ],
    client: "Little Stars Europe",
    date: "November 2023",
    details: {
      challenge: "Meeting strict CPSIA and EN71 safety standards for toddlers, ensuring no small parts or sharp edges.",
      solution: "We produced soft-edge ultrasonic cut woven labels and securely attached snap buttons that underwent rigorous pull-testing. All inks used were non-toxic and lead-free.",
      result: "A playful yet safe collection that passed all international safety audits with zero compliance issues.",
    },
  },
];
