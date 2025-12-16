
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
    _id: "texworld-paris-2024",
    title: "Rivar Trims at Texworld Paris 2024",
    description: " showcasing our latest sustainable trim collections at one of the world's leading fabric and trim fairs.",
    date: "February 12, 2024",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    category: "Event",
    details: {
      title: "Showcasing Innovation at Texworld Paris",
      description: `
        <p>Rivar Trims is proud to announce our participation in Texworld Paris 2024. As a leader in the garment accessories industry, we are excited to showcase our latest innovations in sustainable trims and packaging.</p>
        <p>Our booth featured our newest collection of recycled polyester labels, organic cotton hang tags, and biodegradable polybags. We engaged with global fashion brands and discussed the future of eco-friendly manufacturing.</p>
        <p>The feedback was overwhelming, with many partners expressing interest in our new "Green Trims" initiative which aims to reduce carbon footprint by 30% over the next two years.</p>
      `,
      images: [
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200",
        "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1200"
      ]
    }
  },
  {
    _id: "sustainable-award-2023",
    title: "Received 'Best Sustainable Supplier' Award",
    description: "Rivar Trims recognized for outstanding contribution to eco-friendly manufacturing practices.",
    date: "November 05, 2023",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
    category: "News",
    details: {
      title: "Honored with Sustainability Award",
      description: `
        <p>We are thrilled to share that Rivar Trims has been awarded the 'Best Sustainable Supplier' award at the 2023 Global Apparel Summit.</p>
        <p>This recognition is a testament to our ongoing commitment to reducing environmental impact through innovation. From implementing solar power in our factories to sourcing 100% recycled raw materials, sustainability is at the core of everything we do.</p>
        <p>We thank our dedicated team and loyal partners for making this achievement possible.</p>
      `
    }
  },
  {
    _id: "expansion-new-factory",
    title: "Expansion: New Factory Wing Opened",
    description: "Increasing our production capacity by 40% to meet growing global demand.",
    date: "August 20, 2023",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    category: "News",
    details: {
      title: "Scaling Up: New Factory Wing Operational",
      description: `
        <p>To support the growing needs of our international clients, Rivar Trims has officially opened a new wing at our Dhaka manufacturing facility.</p>
        <p>This expansion increases our production capacity by 40%, allowing for faster turnaround times on bulk orders of woven labels and heat transfers. The new facility is equipped with state-of-the-art broadloom machines and automated quality control systems.</p>
        <p>This investment reflects our confidence in the garment sector's growth and our readiness to serve top-tier global retailers.</p>
      `
    }
  },
  {
    _id: "feature-apparel-insider",
    title: "Featured in Apparel Insider Magazine",
    description: "Our CEO discusses the future of smart trims and digital IDs in the supply chain.",
    date: "June 15, 2023",
    thumbnail: "https://images.unsplash.com/photo-1546913199-55e06682967e?q=80&w=1200",
    category: "Media",
    details: {
      title: "Media Feature: The Future of Smart Trims",
      description: `
        <p>Rivar Trims was recently featured in the June issue of Apparel Insider. Our CEO sat down to discuss the emerging trends in the trims industry, specifically focusing on Digital Product Passports (DPP) and smart tagging.</p>
        <p>"Trims are no longer just for branding; they are becoming data carriers," he noted. The article highlights our R&D efforts in integrating NFC and QR technology into standard woven labels.</p>
        <p>Read the full interview on the Apparel Insider website.</p>
      `
    }
  },
  {
    _id: "dhaka-int-trade-fair",
    title: "Exhibiting at Dhaka Int. Trade Fair",
    description: "Join us at the largest trade event in Bangladesh to see our local excellence.",
    date: "January 10, 2023",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    category: "Event",
    details: {
      title: "Connecting Locally, Growing Globally",
      description: `
        <p>Rivar Trims is excited to participate in the Dhaka International Trade Fair (DITF) this year. It is a fantastic opportunity to connect with local garment manufacturers and buying houses.</p>
        <p>Visitors can find us at Pavilion 12, where we are displaying our full range of offset printing solutions, leather patches, and zipper pullers.</p>
      `
    }
  }
];
