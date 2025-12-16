export type TBlog = {
  _id: string;
  title: string;
  thumbnail: string;
  tags: string[];
  description: string;
  content: string; // HTML
  author: string;
  date: string;
};

export const blogs: TBlog[] = [
  {
    _id: "future-of-sustainable-trims",
    title: "The Future of Sustainable Trims in Fashion",
    thumbnail: "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1200",
    tags: ["Sustainability", "Innovation"],
    description:
      "Exploring how biodegradable materials and recycled inputs are reshaping the garment accessories industry.",
    content: `
      <p>The fashion industry is at a turning point, and accessories are no exception. Sustainable trims are moving from a niche request to a standard requirement for major global brands.</p>
      <h2>Moving Beyond Plastic</h2>
      <p>Traditional polyester labels and plastic buttons are being replaced by bio-based alternatives. Materials like Tencel, organic cotton, and recycled PET (rPET) bottles are becoming the new norm.</p>
      <p>At Rivar Trims, we are pioneering the use of biodegradable polymers that decompose naturally without leaving harmful microplastics behind.</p>
      <h2>The Role of Certifications</h2>
      <p>Transparency is key. Certifications like GRS (Global Recycled Standard) and Oeko-Tex serve as the benchmark for genuine sustainability, ensuring that 'green' claims are backed by rigorous testing.</p>
    `,
    author: "Foysal Ahmed",
    date: "15 Oct, 2024",
  },
  {
    _id: "digital-product-passports",
    title: "Digital Product Passports: Trims as Data Carriers",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    tags: ["Technology", "Supply Chain"],
    description:
      "How QR codes and NFC chips in labels are enabling transparency and circularity in the textile supply chain.",
    content: `
      <p>A label is no longer just a brand identifier; it's a portal to the product's journey. With the upcoming EU regulations on Digital Product Passports (DPP), smart trims are essential.</p>
      <h2>Connecting Consumer and Creator</h2>
      <p>By embedding QR codes or NFC chips into wash care labels, brands can share detailed information about the garment's origin, materials, and recyclability directly with the consumer.</p>
      <p>This technology not only builds trust but also facilitates recycling processes by making material composition data easily accessible to sorting facilities.</p>
    `,
    author: "Rivar Tech Team",
    date: "22 Sep, 2024",
  },
    {
    _id: "choosing-right-label",
    title: "Choosing the Right Label for Your Fabric",
    thumbnail: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1200",
    tags: ["Guide", "Production"],
    description:
      "A manufacturer's guide to selecting the perfect label type—Woven, Printed, or Heat Transfer—based on fabric properties.",
    content: `
      <p>Selecting the wrong label type can ruin the drape of a garment or cause skin irritation. Understanding the compatibility between label and fabric is crucial.</p>
      <h2>Woven vs. Heat Transfer</h2>
      <p>For heavy fabrics like denim or canvas, a high-definition damask woven label adds value and durability. However, for lightweight activewear or lingerie, a woven label might be too stiff.</p>
      <p>In these cases, heat transfer labels are superior. They stretch with the fabric and eliminate bulk, providing a 'second-skin' feel that is essential for comfort.</p>
    `,
    author: "Design Studio",
    date: "05 Aug, 2024",
  },
];
