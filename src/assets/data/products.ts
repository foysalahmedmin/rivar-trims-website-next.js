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
    thumbnail: "/images/products/printed-label/thumbnail.jpg",
    link: "/products/printed-label",
    images: [
      "/images/products/printed-label/01.jpg",
      "/images/products/printed-label/02.jpg",
      "/images/products/printed-label/03.jpg",
      "/images/products/printed-label/04.jpg",
      "/images/products/printed-label/05.jpg",
      "/images/products/printed-label/06.jpg",
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
    thumbnail: "/images/products/offset-printing/thumbnail.jpg",
    link: "/products/offset-printing",
    images: [
      "/images/products/offset-printing/01.jpg",
      "/images/products/offset-printing/02.jpg",
      "/images/products/offset-printing/03.jpg",
      "/images/products/offset-printing/04.jpg",
      "/images/products/offset-printing/05.jpg",
      "/images/products/offset-printing/06.jpg",
      "/images/products/offset-printing/07.jpg",
      "/images/products/offset-printing/08.jpg",
      "/images/products/offset-printing/09.jpg",
      "/images/products/offset-printing/10.jpg",
      "/images/products/offset-printing/11.jpg",
      "/images/products/offset-printing/12.jpg",
      "/images/products/offset-printing/13.webp",
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
    thumbnail: "/images/products/heat-transfer/thumbnail.jpg",
    link: "/products/heat-transfer",
    images: [
      "/images/products/heat-transfer/01.jpg",
      "/images/products/heat-transfer/02.jpg",
      "/images/products/heat-transfer/03.jpg",
      "/images/products/heat-transfer/04.jpg",
      "/images/products/heat-transfer/05.jpg",
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
    thumbnail: "/images/products/reflective-heat-seal/thumbnail.jpg",
    link: "/products/reflective-heat-seal",
    images: [
      "/images/products/reflective-heat-seal/01.jpg",
      "/images/products/reflective-heat-seal/02.jpg",
      "/images/products/reflective-heat-seal/03.jpg",
      "/images/products/reflective-heat-seal/04.jpg",
      "/images/products/reflective-heat-seal/05.jpg",
      "/images/products/reflective-heat-seal/06.jpg",
      "/images/products/reflective-heat-seal/07.jpg",
      "/images/products/reflective-heat-seal/08.jpg",
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
    thumbnail: "/images/products/woven-label/thumbnail.jpg",
    link: "/products/woven-label",
    images: [
      "/images/products/woven-label/01.jpg",
      "/images/products/woven-label/02.jpg",
      "/images/products/woven-label/03.jpg",
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
    thumbnail: "/images/products/satin-cotton-ribbon/thumbnail.jpg",
    link: "/products/satin-cotton-ribbon",
    images: [
      "/images/products/satin-cotton-ribbon/01.jpg",
      "/images/products/satin-cotton-ribbon/02.jpg",
      "/images/products/satin-cotton-ribbon/03.jpg",
      "/images/products/satin-cotton-ribbon/04.jpg",
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
    thumbnail: "/images/products/twill-tape/thumbnail.jpg",
    link: "/products/twill-tape",
    images: [
      "/images/products/twill-tape/01.jpg",
      "/images/products/twill-tape/02.jpg",
      "/images/products/twill-tape/03.jpg",
      "/images/products/twill-tape/04.jpg",
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
    thumbnail: "/images/products/pu-leather-patch/thumbnail.jpg",
    link: "/products/pu-leather-patch",
    images: [
      "/images/products/pu-leather-patch/01.jpeg",
      "/images/products/pu-leather-patch/02.jpg",
      "/images/products/pu-leather-patch/03.jpg",
      "/images/products/pu-leather-patch/04.jpg",
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
    thumbnail: "/images/products/thermal-print/thumbnail.jpg",
    link: "/products/thermal-print",
    images: [
      "/images/products/thermal-print/01.jpg",
      "/images/products/thermal-print/02.jpg",
      "/images/products/thermal-print/03.jpg",
      "/images/products/thermal-print/04.jpg",
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
    thumbnail: "/images/products/poly-bag/thumbnail.jpg",
    link: "/products/poly-bag",
    images: [
      "/images/products/poly-bag/01.jpg",
      "/images/products/poly-bag/02.jpg",
      "/images/products/poly-bag/03.png",
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
    thumbnail: "/images/products/semi-auto-carton/thumbnail.jpg",
    link: "/products/semi-auto-carton",
    images: [
      "/images/products/semi-auto-carton/01.jpg",
      "/images/products/semi-auto-carton/02.jpg",
      "/images/products/semi-auto-carton/03.jpg",
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
  {
    _id: "pvc-screen-print",
    title: "PVC & Screen Print",
    description:
      "Premium PVC labels and high-quality screen printing for branding, size stickers, and decorative apparel accents.",
    thumbnail: "/images/products/pvc-screen-print/thumbnail.jpg",
    link: "/products/pvc-screen-print",
    images: [
      "/images/products/pvc-screen-print/01.jpg",
      "/images/products/pvc-screen-print/02.jpg",
      "/images/products/pvc-screen-print/03.jpg",
      "/images/products/pvc-screen-print/04.jpg",
      "/images/products/pvc-screen-print/05.jpg",
    ],
    details: {
      title: "PVC & Screen Printing",
      description: `
        <p>We provide versatile PVC and screen printing solutions suitable for a wide range of apparel and accessories. Our screen printing unit is equipped with advanced machinery to ensure precision and durability.</p>
        <p>Our product range includes:</p>
        <ul>
          <li>PVC Soft Labels</li>
          <li>High-Density Screen Prints</li>
          <li>Size Stickers & Adhesive Labels</li>
          <li>Silicon & Rubber Printing</li>
        </ul>
        <p><strong>Daily Production Capacity:</strong> 3,00,000 pieces</p>
      `,
    },
  },
];
