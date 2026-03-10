import { products } from "@/assets/data/products";
import {
  ArrowRight,
  Facebook,
  Factory,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/products" },
  { text: "News & Events", href: "/news-events" },
  { text: "Contact Us", href: "/contact" },
];

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/rivar-trims",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/rivar-trims",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-border mt-auto border-t pt-16 pb-8">
      <div className="container">
        {/* Main Footer Grid — 4 columns on desktop, stacked on mobile */}
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt="Rivar Trims Limited Logo"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-medium italic">
                "Perfect trims fashion looks perfect."
              </span>
              <br />
              We make you satisfied with our quality, commitment, and
              competitive price since 2017.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="bg-background border-border text-muted-foreground hover:text-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="flex flex-col gap-6">
            <h4 className="text-foreground text-sm font-bold tracking-wider uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Products ── */}
          <div className="flex flex-col gap-6">
            <h4 className="text-foreground text-sm font-bold tracking-wider uppercase">
              Our Products
            </h4>
            <ul className="flex flex-col gap-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={`/products/${product._id}`}
                    className="text-muted-foreground hover:text-primary block text-sm transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ── */}
          <div className="flex flex-col gap-6">
            <h4 className="text-foreground text-sm font-bold tracking-wider uppercase">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Factory className="text-primary mt-0.5 shrink-0" size={16} />
                <div className="flex flex-col gap-0.5">
                  <p className="text-foreground text-xs font-semibold uppercase">
                    Factory
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Holding-53, Block-A, Dharangartek, Nalvog, Nishatnagar,
                    Turag, Dhaka-1230
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-0.5 shrink-0" size={16} />
                <div className="flex flex-col gap-0.5">
                  <p className="text-foreground text-xs font-semibold uppercase">
                    Phone
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +88 01901 921508
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +88 01901 921509
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5 shrink-0" size={16} />
                <div className="flex flex-col gap-0.5">
                  <p className="text-foreground text-xs font-semibold uppercase">
                    Email
                  </p>
                  <p className="text-muted-foreground text-sm">
                    info@rivartrimsltd.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-semibold">
              Rivar Trims Limited.
            </span>{" "}
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
