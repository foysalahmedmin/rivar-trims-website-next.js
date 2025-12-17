"use client";

import { products } from "@/assets/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { ActiveLink } from "@/components/ui/ActiveLink";
import { Button } from "@/components/ui/Button";
import useScrollPosition from "@/hooks/ui/useScrollPosition";
import { useVisibleSection } from "@/hooks/utils/useVisibleSection";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

// Types
type NavLink = {
  href: string;
  name: string;
};

type HeaderProps = {
  className?: string;
};

// Constants
const ALL_PAGE_NAV_LINKS: NavLink[] = [
  { href: "/", name: "Home" },
  // { href: "/services", name: "Services" },
  { href: "/about", name: "About Us" },
  // { href: "/leaderships", name: "Leaderships" },
  // { href: "/projects", name: "Projects" },
  { href: "/products", name: "Products" },
  { href: "/news-events", name: "News & Events" },
  // { href: "/blogs", name: "Blogs" },
  { href: "/contact", name: "Contact Us" },
] as const;

const HOME_PAGE_NAV_LINKS: NavLink[] = [
  { href: "#home", name: "Home" },
  // { href: "#services", name: "Services" },
  { href: "#about", name: "About Us" },
  // { href: "#leaderships", name: "Leaderships" },
  // { href: "#features", name: "Features" },
  // { href: "#projects", name: "Projects" },
  { href: "#products", name: "Products" },
  { href: "#news-events", name: "News & Events" },
  { href: "/contact", name: "Contact Us" },
] as const;

const VISIBLE_SECTIONS = [
  "home",
  // "services",
  "about",
  // "leaderships",
  // "features",
  // "projects",
  "products",
  "news-events",
  // "blogs",
];

// Custom hook for mobile menu
const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};

// Components
const Logo: React.FC = () => (
  <Link href="/" className="" aria-label="Home">
    <Image
      src="/logo.png"
      alt="Logo"
      width={80}
      height={80}
      className="size-20 object-contain object-left"
      priority
    />
  </Link>
);

const NavItem: React.FC<{
  link: NavLink;
  visibleSection?: string;
  onClick?: () => void;
}> = ({ link, visibleSection, onClick }) => {
  const url = new URL(link.href, "http://localhost");
  const isHashed = !!url.hash;
  const isActive = visibleSection === url.hash.replace("#", "");

  const linkClassName = cn(
    "underline-effect foreground text-sm whitespace-nowrap uppercase transition-colors duration-200",
    {
      active: isActive,
    },
  );

  if (isHashed) {
    return (
      <Link href={link.href} className={linkClassName} onClick={onClick}>
        {link.name}
      </Link>
    );
  }

  return (
    <ActiveLink
      href={link.href}
      className={linkClassName}
      activeClassName="active"
      onClick={onClick}
    >
      {link.name}
    </ActiveLink>
  );
};

const DesktopNavigation: React.FC<{
  navLinks: NavLink[];
  visibleSection?: string;
}> = ({ navLinks, visibleSection }) => {
  const params = usePathname();
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  return (
    <nav className="hidden flex-1 items-center justify-center gap-4 px-0 lg:flex lg:gap-6 lg:px-16">
      {navLinks.map((link, index) => {
        if (link.name === "Products") {
          return (
            <div
              key={`${link.href}-${index}`}
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <Link
                href={link.href}
                className={cn(
                  "underline-effect foreground flex items-center gap-1 text-sm whitespace-nowrap uppercase transition-colors duration-200",
                  {
                    active:
                      visibleSection === "products" ||
                      params.startsWith("/products"),
                  },
                )}
              >
                {link.name}
                <ChevronDown
                  className={cn(
                    "text-muted-foreground h-4 w-4 transition-transform duration-200",
                    isProductsHovered && "rotate-180",
                  )}
                />
              </Link>
              {/* Desktop Dropdown */}
              <div
                className={cn(
                  "absolute top-full -left-1/2 -translate-x-1/4 gap-4 rounded-lg transition-all duration-300",
                  isProductsHovered
                    ? "visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible translate-y-4 opacity-0",
                )}
              >
                <div className="bg-card border-border mt-4 grid w-[600px] grid-cols-2 gap-4 rounded-lg border p-4 shadow-xl">
                  {products.map((product) => (
                    <Link
                      key={product._id}
                      href={product.link}
                      className="hover:bg-muted hover:border-primary flex items-center gap-3 rounded-md border-l-4 border-transparent p-2 transition-colors"
                    >
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{product.title}</h4>
                        <p className="text-muted-foreground line-clamp-1 text-xs">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <NavItem
            key={`${link.href}-${index}`}
            link={link}
            visibleSection={visibleSection}
          />
        );
      })}
    </nav>
  );
};

const MobileMenuButton: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => (
  <button
    className="flex flex-col space-y-1.5 focus:outline-none lg:hidden"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <span
      className={cn(
        "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
        isOpen && "translate-y-2 rotate-45",
      )}
    />
    <span
      className={cn(
        "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
        isOpen && "opacity-0",
      )}
    />
    <span
      className={cn(
        "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
        isOpen && "-translate-y-2 -rotate-45",
      )}
    />
  </button>
);

const MobileNavigation: React.FC<{
  navLinks: NavLink[];
  visibleSection?: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ navLinks, visibleSection, isOpen, onClose }) => {
  const params = usePathname();

  return (
    <div
      className={cn(
        "bg-card fixed inset-0 z-50 flex flex-col overflow-hidden transition-all duration-500",
        isOpen
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-full opacity-0",
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <button
          onClick={onClose}
          className="hover:bg-muted rounded-md p-2 transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <X className="size-8" />
        </button>
      </div>

      <nav
        className="container my-auto flex w-full max-w-md flex-1 flex-col gap-2 overflow-y-auto py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Accordion type="single" collapsible className="w-full">
          {navLinks.map((link, index) => {
            // Mobile Products Accordion
            if (link.name === "Products") {
              return (
                <AccordionItem
                  key={`mobile-${link.href}-${index}`}
                  value="products-accordion"
                  className="border-b-0"
                >
                  <AccordionTrigger
                    value="products-accordion"
                    className="py-2 hover:no-underline"
                  >
                    <span
                      className={cn(
                        "text-2xl font-medium uppercase",
                        (visibleSection === "products" ||
                          params.startsWith("/products")) &&
                          "text-primary",
                      )}
                    >
                      {link.name}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent value="products-accordion">
                    <div className="flex flex-col gap-4 pt-2 pl-4">
                      <Link
                        href="/products"
                        className="text-primary text-sm font-semibold uppercase"
                        onClick={onClose}
                      >
                        View All Products
                      </Link>
                      {products.map((product) => (
                        <Link
                          key={product._id}
                          href={product.link}
                          className="text-muted-foreground hover:text-primary text-sm transition-colors"
                          onClick={onClose}
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            }

            // Standard Mobile Links
            return (
              <div key={`mobile-${link.href}-${index}`} className="w-full py-2">
                <Link
                  href={link.href}
                  className={cn(
                    "hover:text-primary block text-2xl font-medium uppercase transition-colors",
                    visibleSection === link.href.replace("#", "") ||
                      (link.href !== "/" && params.startsWith(link.href))
                      ? "text-primary"
                      : "text-foreground",
                  )}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </Accordion>

        <div className="mt-6 w-full py-2">
          <Link
            href="/contact"
            className={cn(
              "hover:text-primary block text-2xl font-medium uppercase transition-colors",
              params === "/contact" ? "text-primary" : "text-foreground",
            )}
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

const ContactButton: React.FC = () => (
  <Link className="hidden lg:inline-block" href="/contact">
    <Button asChild={true}>
      <span>GET A QUOTE</span>
    </Button>
  </Link>
);

// Main Header Component
const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const navLinks = isHomePage ? HOME_PAGE_NAV_LINKS : ALL_PAGE_NAV_LINKS;

  const { scrollTop, scrollDirection } = useScrollPosition();
  const { visibleSection } = useVisibleSection(VISIBLE_SECTIONS, 0.5);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  // Header styling based on scroll and page
  const headerClassName = cn(
    "text-foreground top-0 right-0 left-0 z-50 h-20 bg-transparent backdrop-blur-xs transition-all duration-300 ease-in-out",
    "bg-card sticky",
    {
      // "bg-card sticky": !isHomePage,
      // fixed: isHomePage,
      // dark: scrollTop <= 80 && isHomePage,
      // "bg-background/95 shadow-sm": scrollTop > 80 && isHomePage,
      // "bg-background/95": isMobileMenuOpen && isHomePage,
      // "-translate-y-full":
      //   scrollDirection === "down" && scrollTop > 80 && isHomePage,
      // "translate-y-0":
      //   (scrollDirection === "up" && isHomePage) ||
      //   (scrollTop <= 80 && isHomePage),
    },
    className,
  );

  return (
    <>
      <header className={headerClassName}>
        <div className="container flex h-full items-center justify-between">
          <Logo />

          <DesktopNavigation
            navLinks={navLinks}
            visibleSection={visibleSection || undefined}
          />

          <div className="flex items-center gap-4">
            <ContactButton />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      <MobileNavigation
        navLinks={navLinks}
        visibleSection={visibleSection || undefined}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
};

export default Header;
