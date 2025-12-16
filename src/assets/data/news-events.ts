
export type TNewsEvent = {
  _id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  category: "Event" | "News" | "Media";
  details: {
    title: string;
    description: string; // HTML content
    images?: string[];
  };
};

export const newsEvents: TNewsEvent[] = [
  {
    _id: "yarn-fabric-show-2024",
    title: "15th Dhaka Int'l Yarn & Fabric Show 2024",
    description: "Mondol Group & Rivar Trims participated in the Winter Edition of this prestigious event.",
    date: "January 15, 2024",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200", // Generic event image
    category: "Event",
    details: {
      title: "Showcasing Excellence at Dhaka Int'l Yarn & Fabric Show 2024",
      description: `
        <p>Rivar Trims joined industry leaders at the 15th Dhaka International Yarn & Fabric Show 2024 (Winter Edition). As a key concern of Mondol Group, we showcased our latest innovations in sustainable trims and accessories.</p>
        <p>The event provided an excellent platform to connect with international buyers and demonstrate our capacity for high-volume, high-quality production.</p>
      `,
      images: []
    }
  },
    {
    _id: "yarn-fabric-show-2023",
    title: "14th Dhaka Int'l Yarn & Fabric Show 2023",
    description: "Successfully showcased our product range at the 14th edition of the expo.",
    date: "August 31, 2023",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    category: "Event",
    details: {
      title: "Rivar Trims at the 14th Dhaka Yarn & Fabric Show",
      description: `
        <p>We are proud to have participated in the 14th Dhaka International Yarn & Fabric Show 2023. Our booth attracted significant attention from garment manufacturers looking for reliable backward linkage support.</p>
      `,
      images: []
    }
  },
  {
    _id: "grs-certification",
    title: "Achieved Global Recycled Standard (GRS) Certification",
    description: "Rivar Trims Limited has obtained the GRS certification, reinforcing our commitment to sustainability.",
    date: "February 01, 2023",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
    category: "News",
    details: {
      title: "Milestone Achievement: GRS Certification",
      description: `
        <p>We are thrilled to announce that Rivar Trims Limited has obtained the Global Recycled Standard (GRS) certification.</p>
        <p>This certification verifies our recycled content, chain of custody, social and environmental practices, and chemical restrictions. It is a major step forward in our mission to provide eco-friendly solutions to the global fashion industry.</p>
      `,
      images: []
    }
  },
];
