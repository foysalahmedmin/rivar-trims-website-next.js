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
    _id: "printed-label",
    title: "Printed Label",
    description:
      "High-quality care labels with apparel composition and care instructions to extend product life.",
    thumbnail:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    link: "/products/printed-label",
    images: [
      "https://images.unsplash.com/photo-1629198720835-1c9c6d46e4c6?q=80&w=1200",
      "https://images.unsplash.com/photo-1582555172866-f73bb13a2ad3?q=80&w=1200",
    ],
    details: {
      title: "Printed Care Labels",
      description: `
        <p>Our high-quality care labels provide consumers with important apparel composition and care instructions to extend product life and drive satisfaction. We use advanced manufacturing technologies including:</p>
        <ul>
          <li>Flexo Printing</li>
          <li>Ultrasonic Cutting & Folding</li>
          <li>Flexo Block Printing</li>
          <li>Auto Screen Print & Curing Machine</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 10,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "offset-printing",
    title: "Offset Printing",
    description:
      "Premium offset printing for hang tags, photo inlays, paper bands, and other quality printing solutions.",
    thumbnail:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    link: "/products/offset-printing",
    images: [
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1200",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1200",
    ],
    details: {
      title: "Offset Printing Services",
      description: `
        <p>We produce all kinds of hang tags, photo inlays, paper bands, and other quality printing using world-class Heidelberg machines. Our equipment includes:</p>
        <ul>
          <li>Offset Printing 5 Color Machine</li>
          <li>Offset Printing 2 Color Machine</li>
          <li>Offset Printing Single Color Machine</li>
        </ul>
        <p>Our state-of-the-art facility features:</p>
        <ul>
          <li>CTP (Computer to Plate) Technology</li>
          <li>Film Output Machine</li>
          <li>Lamination Services</li>
          <li>Auto Die Cutting & Polar Cutting</li>
          <li>UV Spot & Foil Printing</li>
          <li>Digital Printing Capabilities</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 8,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "heat-transfer",
    title: "Heat Transfer",
    description:
      "Durable, long-lasting heat transfer printing resistant to fading and cracking for various applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800",
    link: "/products/heat-transfer",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200",
      "https://images.unsplash.com/photo-1561361513-2d000d50ff0c?q=80&w=1200",
    ],
    details: {
      title: "Heat Transfer Printing",
      description: `
        <p>The heat transfer printing process involves applying designs onto transfer paper using special inks, which are then heat-pressed onto fabric. This results in durable, long-lasting prints resistant to fading and cracking.</p>
        <p>Our process includes:</p>
        <ul>
          <li>Special Ink Printing</li>
          <li>Heat Pressing Technology</li>
          <li>Vacuum Machine Woven Dryer</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong></p>
        <ul>
          <li>Heat Seal Labels: 10,00,000 pieces</li>
          <li>Photo Stickers/Prints: 50,000-1,00,000 pieces</li>
        </ul>
      `,
    },
  },
  {
    _id: "reflective-heat-seal",
    title: "Reflective Heat Seal",
    description:
      "Retro-reflective heat transfer vinyl for safety and fashion applications, meeting EN471 standards.",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    link: "/products/reflective-heat-seal",
    images: [
      "https://images.unsplash.com/photo-1556305078-b9d678f7f5b5?q=80&w=1200",
      "https://images.unsplash.com/photo-1582555172866-f73bb13a2ad3?q=80&w=1200",
    ],
    details: {
      title: "Reflective Heat Seal Vinyl",
      description: `
        <p>ReflexCut reflective heat transfer vinyl is designed for transferring solid color logos, graphics, or text onto cotton and polyester fabrics. This technology provides increased visibility for safety applications while also being used in fashion for stunning light-reflective designs.</p>
        <p>Key features:</p>
        <ul>
          <li>Uses retro-reflection technology</li>
          <li>Meets EN471 safety standards</li>
          <li>Suitable for both safety and fashion applications</li>
          <li>Can be cut with plotter cutters or scissors</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 2,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "woven-label",
    title: "Woven Label",
    description:
      "High-quality computerized woven labels with laser ultrasonic cutting and various finishing options.",
    thumbnail:
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=800",
    link: "/products/woven-label",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200",
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1200",
    ],
    details: {
      title: "Premium Woven Labels",
      description: `
        <p>Our woven labels are produced using state-of-the-art computerized woven label machines with various finishing options:</p>
        <ul>
          <li>Laser Ultrasonic Cutting, Folding & Slitting (soft edge)</li>
          <li>Heat Cutting & Folding</li>
          <li>High-definition damask, satin, and taffeta materials</li>
        </ul>
        <p>Capable of reproducing fine details and complex logos, our labels ensure your brand stands out with a professional finish.</p>
        <p><strong>Daily Production Capacity:</strong> 5,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "satin-cotton-ribbon",
    title: "Satin & Cotton Ribbon",
    description:
      "World-class Megaba brand ribbon knitting with mini continuous dyeing and automatic calendering.",
    thumbnail:
      "https://images.unsplash.com/photo-1563178975-8965e4e8f8b3?q=80&w=800",
    link: "/products/satin-cotton-ribbon",
    images: [
      "https://images.unsplash.com/photo-1512428813834-c702c770a65f?q=80&w=1200",
      "https://images.unsplash.com/photo-1526778548025-fa2f9a8754d8?q=80&w=1200",
    ],
    details: {
      title: "Satin & Cotton Ribbons",
      description: `
        <p>We produce high-quality satin and cotton ribbons using world-class Megaba brand ribbon knitting machines with advanced manufacturing processes:</p>
        <ul>
          <li>Mini Continuous Dyeing in Light Colors</li>
          <li>Automatic Calendering & Rolling</li>
          <li>Premium yarn selection for superior finish</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 1,00,000 yards</p>
      `,
    },
  },
  {
    _id: "twill-tape",
    title: "Twill Tape",
    description:
      "Essential narrow fabric tapes made from cotton, polyester, and synthetic yarns for fashion applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1567401893416-a5dc5749c340?q=80&w=800",
    link: "/products/twill-tape",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200",
      "https://images.unsplash.com/photo-1551488831-00ddcb929696?q=80&w=1200",
    ],
    details: {
      title: "Twill Tapes",
      description: `
        <p>Narrow fabric has become an essential part of today's fashion. We manufacture various tapes using cotton, polyester, and synthetic yarn based twill tape for diverse applications.</p>
        <p>Our product range includes:</p>
        <ul>
          <li>Heringbone Tapes</li>
          <li>Canvas Tapes</li>
          <li>Narrow & Flat Tapes</li>
          <li>Waist & Oxford Tapes</li>
          <li>Striped Tapes</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 2,00,000 yards</p>
      `,
    },
  },
  {
    _id: "pu-leather-patch",
    title: "PU & Leather Patch",
    description:
      "Genuine or faux leather patches for embellishing, reinforcing, or repairing clothing and accessories.",
    thumbnail:
      "https://images.unsplash.com/photo-1549648184-8c84d0f4c5c1?q=80&w=800",
    link: "/products/pu-leather-patch",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200",
      "https://images.unsplash.com/photo-1551488831-00ddcb929696?q=80&w=1200",
    ],
    details: {
      title: "PU & Leather Patches",
      description: `
        <p>Leather patches are small pieces of leather, either genuine or faux, that are used to embellish, reinforce, or repair items like clothing, accessories, and bags. They add a durable and stylish element to products.</p>
        <p>Features include:</p>
        <ul>
          <li>Embossed or Debossed Designs</li>
          <li>Branding and Decorative Applications</li>
          <li>Durable Construction</li>
          <li>Customizable Shapes and Sizes</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 1,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "thermal-print",
    title: "Thermal Print",
    description:
      "Digital thermal printing for adhesive labels, barcode labels, and tracking labels using thermal paper technology.",
    thumbnail:
      "https://images.unsplash.com/photo-1587825140708-dfcf72c8e7a8?q=80&w=800",
    link: "/products/thermal-print",
    images: [
      "https://images.unsplash.com/photo-1629198720835-1c9c6d46e4c6?q=80&w=1200",
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1200",
    ],
    details: {
      title: "Thermal Printing Services",
      description: `
        <p>Thermal printing is a digital printing process that produces printed images by selectively heating coated thermochromic paper as it passes over the thermal printer.</p>
        <p>Our thermal printing services include:</p>
        <ul>
          <li>Poly Adhesive Labels</li>
          <li>Carton Adhesive Labels</li>
          <li>Tracking Labels</li>
          <li>Barcode Labels</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 5,00,000 pieces</p>
      `,
    },
  },
  {
    _id: "poly-bag",
    title: "Poly Bag",
    description:
      "High-quality poly bags and sheets with precise measurement and quality printing for various applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
    link: "/products/poly-bag",
    images: [
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1200",
      "https://images.unsplash.com/photo-1582555172866-f73bb13a2ad3?q=80&w=1200",
    ],
    details: {
      title: "Poly Bags Manufacturing",
      description: `
        <p>Our poly bag unit is equipped with modern high-speed blowing machines from Taiwan, ensuring correct measurement and quality printing on poly bags and sheets.</p>
        <p>Our product range includes:</p>
        <ul>
          <li>Blister, Individual, and Adhesive Bags</li>
          <li>Hanger Bags with Flap and Gusset</li>
          <li>Printed Poly Bags</li>
          <li>LDPE, PP, Recycled & Bio-Degradable Bags</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 100,000 pieces</p>
      `,
    },
  },
  {
    _id: "semi-auto-carton",
    title: "Semi Auto Carton",
    description:
      "High-quality 7, 5 & 3 ply cartons using recycled and virgin paper from global sources with custom printing.",
    thumbnail:
      "https://images.unsplash.com/photo-1606851181061-bb7c81df91b1?q=80&w=800",
    link: "/products/semi-auto-carton",
    images: [
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1200",
      "https://images.unsplash.com/photo-1606851181061-bb7c81df91b1?q=80&w=1200",
    ],
    details: {
      title: "Semi Automatic Carton Production",
      description: `
        <p>We use recycled and virgin paper sourced from Europe, Australia, USA, Korea, Taiwan, Thailand, and Malaysia to ensure the highest quality carton products.</p>
        <p>Our offerings include:</p>
        <ul>
          <li>7, 5 & 3 Ply Cartons</li>
          <li>Customized Printing Options</li>
          <li>Various Size Configurations</li>
          <li>Quality Packaging Solutions</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 10,000 pieces</p>
      `,
    },
  },
];
