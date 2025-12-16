export type TProduct = {
  _id: string;
  icon?: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  images: string[];
  details: {
    title: string;
    description: string;
  };
};

export const products: TProduct[] = [
  {
    _id: "woven-label",
    title: "Woven Label",
    description:
      "High-definition damask, satin, and taffeta woven labels for superior brand identification.",
    thumbnail: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=800",
    link: "/products/woven-label",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200",
       "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1200",
    ],
    details: {
      title: "Premium Woven Labels",
      description: `
        <p>Our woven labels are produced using state-of-the-art broadloom and needle loom technology. We offer a variety of finishes including:</p>
        <ul>
            <li>High Definition Damask</li>
            <li>Satin and Reverse Satin</li>
            <li>Taffeta</li>
            <li>Ultrasonic, Laser, and Hot Cut edges</li>
        </ul>
        <p>Capable of reproducing fine details and complex logos, our labels ensure your brand stands out with a professional finish.</p>
      `,
    },
  },
  {
    _id: "printed-label",
    title: "Printed Label",
    description:
      "Soft and durable printed care labels on satin, cotton, and tyvek materials.",
    thumbnail: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800",
    link: "/products/printed-label",
    images: [
      "https://images.unsplash.com/photo-1616604847460-61a7a58a7be7?q=80&w=1200",
    ],
    details: {
      title: "Versatile Printed Labels",
      description: `
        <p>Perfect for wash care instructions and size labels. We use rotary and flexographic printing techniques to ensure clarity and wash fastness.</p>
        <p>Materials available: Satin ribbon, Cotton tape, Polyester taffeta, and Tyvek.</p>
      `,
    },
  },
  {
    _id: "heat-transfer-label",
    title: "Heat Transfer Label",
    description:
      "Tag-less skin-friendly labels, perfect for activewear, lingerie, and infant clothing.",
    thumbnail: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800",
    link: "/products/heat-transfer-label",
    images: [
       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
    ],
    details: {
      title: "Tag-Free Comfort",
      description: `
        <p>Our Heat Transfer labels (HTL) provide a seamless, no-feel branding solution. Ideal for high-stretch fabrics.</p>
        <p>Available in: Silicone, Water-based, Reflective, and Photo-print quality.</p>
      `,
    },
  },
  {
    _id: "hang-tag",
    title: "Hang Tag",
    description:
      "Custom designed hang tags using FSC certified paper and premium finishes.",
    thumbnail: "https://images.unsplash.com/photo-1585802347318-7b44585c5750?q=80&w=800",
    link: "/products/hang-tag",
    images: [
        "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=800",
    ],
    details: {
      title: "Brand Identity Tags",
      description: `
        <p>Hang tags are the face of your retail presentation. We execute designs with foil stamping, embossing, UV coating, and unique die-cut shapes.</p>
        <p>We adhere to sustainable practices, offering recycled paper and soy-based inks.</p>
      `,
    },
  },
  {
    _id: "offset-printing",
    title: "Offset Printing",
    description:
      "Photo cards, packaging inlays, and marketing materials with vibrant color accuracy.",
    thumbnail: "https://images.unsplash.com/photo-1497211419994-142331908abd?q=80&w=800",
    link: "/products/offset-printing",
    images: [
        "https://images.unsplash.com/photo-1567080596-3c0f86235123?q=80&w=800",
    ],
    details: {
      title: "Precision Offset Printing",
      description: `
        <p>High-volume printing solutions for packaging inserts, waist tags, and cardboard boxes. We ensure precise CMYK color matching for global brand consistency.</p>
      `,
    },
  },
  {
    _id: "packaging",
    title: "Packaging",
    description:
      "Corrugated boxes, gift boxes, and rigid packaging solutions for retail.",
    thumbnail: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=800",
    link: "/products/packaging",
    images: [
        "https://images.unsplash.com/photo-1595246140625-573b715d11d3?q=80&w=800",
    ],
    details: {
      title: "Retail Ready Packaging",
      description: `
        <p>We produce sturdy and attractive packaging boxes. From e-commerce mailers to luxury rigid boxes, we have the structural design expertise to protect and present your product.</p>
      `,
    },
  },
  {
    _id: "poly-bag",
    title: "Poly Bag",
    description:
      "LDPE, PP, and biodegradable poly bags with up to 8-color rotogravure printing.",
    thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800",
    link: "/products/poly-bag",
    images: [
         "https://images.unsplash.com/photo-1608779633602-d983eb052d80?q=80&w=800",
    ],
    details: {
      title: "Sustainable Polybags",
      description: `
        <p>Essential for garment protection. We offer standard clear bags, adhesive seal bags, and slider zipper bags.</p>
        <p>Committed to the environment, we specialize in Recycled LDPE (GRS certified) and biodegradable options.</p>
      `,
    },
  },
  {
     _id: "badges",
    title: "Badges",
    description:
      "Embroidered, woven, and leather badges for denim, jackets, and uniforms.",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    link: "/products/badges",
    images: [
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800",
    ],
    details: {
      title: "Custom Badges & Patches",
      description: `
        <p>Add dimension to your garments with our range of patches. Includes genuine leather, faux leather (PU), embroidered patches with merrow edges, and rubber (PVC/Silicone) badges.</p>
      `,
    },
  },
    {
     _id: "tapes-belts",
    title: "Tapes & Belts",
    description:
      "Elastic tapes, drawstrings, and twill tapes for functional and decorative use.",
    thumbnail: "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=800",
    link: "/products/tapes-belts",
    images: [
        "https://images.unsplash.com/photo-1517153192946-4cb4dd6d929b?q=80&w=800",
    ],
    details: {
      title: "Industrial Tapes & Webbings",
      description: `
        <p>Woven and knitted elastics, jacquard waistbands, cotton twill tapes, and drawcords. We supply functional trims that meet rigorous durability tests.</p>
      `,
    },
  },
   {
     _id: "other-accessories",
    title: "Other Accessories",
    description:
      "Safety pins, clips, tissue paper, and finishing accessories.",
    thumbnail: "https://images.unsplash.com/photo-1584622412234-ac442c5567b4?q=80&w=800",
    link: "/products/other-accessories",
    images: [
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800",
    ],
    details: {
      title: "Garment Finishing Accessories",
      description: `
        <p>The final touches. We supply plastic clips, collar stays, butterfly keepers, and branded tissue paper to ensure your garment arrives in perfect condition.</p>
      `,
    },
  }
];
