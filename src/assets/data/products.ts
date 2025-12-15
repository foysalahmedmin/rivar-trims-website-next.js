import { LucideIcon, Package, Printer, ScanLine, Shirt, Tag, Box } from "lucide-react";

export type TProduct = {
  _id: string;
  icon: LucideIcon;
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
    icon: Tag,
    title: "Printed Label",
    description: "Care & Composition Labels. Perfect fusion of durability and skin-friendly comfort.",
    thumbnail: "https://images.unsplash.com/photo-1616609783935-71cb4659f13e?q=80&w=600",
    link: "/products/printed-label",
    images: [
      "https://images.unsplash.com/photo-1616609783935-71cb4659f13e?q=80&w=1200",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    ],
    details: {
      title: "Printed Label",
      description: `
        <div class="product-details">
          <h3>High-Definition Printed Labels</h3>
          <p>Our Printed Labels represent the perfect fusion of durability and skin-friendly comfort. Utilizing high-grade sustainable inks and premium fabric bases, we ensure that every care instruction and brand logo remains crisp and legible even after repeated industrial washes.</p>
          
          <h4>Key Features:</h4>
          <ul>
            <li><strong>Durability:</strong> Withstand rigors of supply chain and washing.</li>
            <li><strong>Comfort:</strong> Soft touch against the skin, ideal for intimate wear.</li>
            <li><strong>Compliance:</strong> Crucial for consumer information and regulatory compliance.</li>
          </ul>
        </div>
      `,
    },
  },
  {
    _id: "offset-printing",
    icon: Printer,
    title: "Offset Printing",
    description: "Hang Tags & Inlays. Elevate your brand's unboxing experience with premium printing.",
    thumbnail: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600",
    link: "/products/offset-printing",
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1200",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200",
    ],
    details: {
      title: "Offset Printing Solutions",
      description: `
        <div class="product-details">
          <h3>Premium Offset Printing</h3>
          <p>Elevate your brand's unboxing experience with our premium Offset Printing solutions, covering hang tags, photo inlays, and paper bands. Using world-class Heidelberg machinery, we deliver vibrant color accuracy and sharp detailing.</p>
          
          <h4>Offerings:</h4>
          <ul>
            <li><strong>Materials:</strong> Wide range of paper stocks, including recycled and FSC-certified options.</li>
            <li><strong>Finishes:</strong> UV coating, embossing, and foiling.</li>
            <li><strong>Impact:</strong> Powerful marketing tools at the point of sale.</li>
          </ul>
        </div>
      `,
    },
  },
  {
    _id: "heat-transfer",
    icon: ScanLine,
    title: "Heat Transfer",
    description: "Durable Logo Prints. Experience the tag-less revolution for performance wear.",
    thumbnail: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600",
    link: "/products/heat-transfer",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200",
    ],
    details: {
      title: "Heat Transfer Labels",
      description: `
        <div class="product-details">
          <h3>Tag-less Revolution</h3>
          <p>Designed for performance wear and seamless garments, these transfers eliminate the bulk and irritation of traditional sewn-in labels. Our transfers offer superior adhesion to various fabric types, including high-stretch synthetics.</p>
          
          <h4>Benefits:</h4>
          <ul>
            <li><strong>Comfort:</strong> No skin irritation.</li>
            <li><strong>Durability:</strong> No cracking or fading.</li>
            <li><strong>Versatility:</strong> Reflective safety logos or subtle branding.</li>
          </ul>
        </div>
      `,
    },
  },
  {
    _id: "woven-label",
    icon: Shirt,
    title: "Woven Label",
    description: "Classic Branding. The quintessential signature of quality apparel.",
    thumbnail: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600",
    link: "/products/woven-label",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1200",
    ],
    details: {
      title: "Woven Labels",
      description: `
        <div class="product-details">
          <h3>Signature of Quality</h3>
          <p>We use high-definition looms to weave your logo directly into the fabric, creating a label that is not only elegant but incredibly durable. From damask to satin weaves, we offer a variety of textures and finishes.</p>
          
          <h4>Features:</h4>
          <ul>
            <li><strong>Quality:</strong> High-definition weaving.</li>
            <li><strong>Comfort:</strong> Ultrasonic cutting for soft edges.</li>
            <li><strong>Longevity:</strong> Designed to last the lifetime of the garment.</li>
          </ul>
        </div>
      `,
    },
  },
  {
    _id: "leather-patch",
    icon: Package,
    title: "PU & Leather Patch",
    description: "Premium Denim Trims. Add a rugged, premium aesthetic to your denim.",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    link: "/products/leather-patch",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1200",
    ],
    details: {
      title: "PU & Genuine Leather Patches",
      description: `
        <div class="product-details">
          <h3>Rugged Aesthetic</h3>
          <p>Add a rugged, premium aesthetic to your denim and outerwear with our PU and Genuine Leather Patches. We offer a diverse range of finishes, including embossed, debossed, and printed options.</p>
          
          <h4>Options:</h4>
          <ul>
            <li><strong>Material:</strong> Genuine leather or vegan-friendly PU.</li>
            <li><strong>Finishes:</strong> Embossed, debossed, printed.</li>
            <li><strong>Usage:</strong> Perfect for jeans, jackets, and heavy-duty bags.</li>
          </ul>
        </div>
      `,
    },
  },
  {
    _id: "carton",
    icon: Box,
    title: "Semi Auto Carton",
    description: "Sustainable Packaging. Robust cartons tailored to your shipping requirements.",
    thumbnail: "https://images.unsplash.com/photo-1585802347318-7b44585c5750?q=80&w=600",
    link: "/products/carton",
    images: [
      "https://images.unsplash.com/photo-1585802347318-7b44585c5750?q=80&w=1200",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200",
    ],
    details: {
      title: "Packaging Solutions",
      description: `
        <div class="product-details">
          <h3>Robust & Sustainable</h3>
          <p>Our packaging solutions extend beyond the garment itself to include robust Semi-Auto Cartons. We manufacture 3-ply, 5-ply, and 7-ply corrugated cartons tailored to your shipping requirements.</p>
          
          <h4>Highlights:</h4>
          <ul>
            <li><strong>Customization:</strong> High-quality flexographic printing.</li>
            <li><strong>Sustainability:</strong> Recycled paper pulp and eco-friendly adhesives.</li>
            <li><strong>Strength:</strong> Engineered to withstand stacking and handling.</li>
          </ul>
        </div>
      `,
    },
  },
];
