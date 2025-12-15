import { services } from "@/assets/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    type: "link",
    text: "About",
    href: "/about",
  },
  // {
  //   type: "link",
  //   text: "Leaderships",
  //   href: "/leaderships",
  // },
  {
    type: "link",
    text: "Services",
    href: "/services",
  },
  // {
  //   type: "link",
  //   text: "Projects",
  //   href: "/projects",
  // },
  {
    type: "link",
    text: "Blogs",
    href: "/blogs",
  },
  // {
  //   type: "link",
  //   text: "Career",
  //   href: "/careers",
  // },
  // {
  //   type: "link",
  //   text: "History",
  //   href: "/history",
  // },
  {
    type: "link",
    text: "Vision",
    href: "/visions",
  },
  {
    type: "link",
    text: "Contact",
    href: "/contact",
  },
];
const links = [
  {
    type: "link",
    text: "About",
    href: "/about",
  },
  // {
  //   type: "link",
  //   text: "Leaderships",
  //   href: "/leaderships",
  // },
  {
    type: "link",
    text: "Services",
    href: "/services",
  },
  // {
  //   type: "link",
  //   text: "Projects",
  //   href: "/projects",
  // },
  {
    type: "link",
    text: "Blogs",
    href: "/blogs",
  },
  // {
  //   type: "link",
  //   text: "Career",
  //   href: "/careers",
  // },
  // {
  //   type: "link",
  //   text: "History",
  //   href: "/history",
  // },
  {
    type: "link",
    text: "Vision",
    href: "/visions",
  },
];
const socials = [
  {
    text: "Facebook",
    href: "https://www.facebook.com/rivar-trims",
    target: "_blank",
  },
  // {
  //   text: "Linkedin",
  //   href: "https://www.linkedin.com/company/rivar-trims",
  //   target: "_blank",
  // },
  {
    text: "Instagram",
    href: "https://www.instagram.com/rivar-trims",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer className="intersection-fade-in py-16 md:py-24">
      <div className="container space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4 lg:col-span-3 xl:col-span-2 xl:space-y-12">
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
            <div className="flex flex-wrap gap-4">
              {/* <Link target="_blank" href="tel:+64284700533">
                <Button size="lg">
                  <span>+64 28 470 0533</span>
                </Button>
              </Link> */}
              <Link href="/services">
                <Button size="lg">
                  <span>EXPLORE SERVICES</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <span>CONTACT US</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <strong className="mb-4 block font-medium">Menu</strong>
            <ul className={cn("space-y-2")}>
              {menu.map((item, index) => (
                <li className="font-light" key={index}>
                  {item?.type === "link" ? (
                    <Link
                      className="underline-effect primary hover:text-primary"
                      href={item?.href || "#"}
                    >
                      {item?.text}
                    </Link>
                  ) : (
                    <p className="mb-4">{item?.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <strong className="mb-4 block font-medium">Services</strong>
            <ul className={cn("grid space-y-2 lg:grid-cols-2")}>
              {services
                .map((service) => {
                  return {
                    type: "link",
                    text: service?.title,
                    href: `/services/${service?._id}`,
                  };
                })
                .map((item, index) => (
                  <li className="font-light" key={index}>
                    {item?.type === "link" ? (
                      <Link
                        className="underline-effect primary hover:text-primary"
                        href={item?.href || "#"}
                      >
                        {item?.text}
                      </Link>
                    ) : (
                      <p className="mb-4">{item?.text}</p>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:hidden lg:grid-cols-4">
          {links.map((link, index) => (
            <Link className="w-full" key={index} href={link?.href}>
              <Button
                className="border-b-foreground hover:text-primary hover:border-b-primary w-full items-start justify-start rounded-none border-b bg-transparent px-0 uppercase hover:bg-transparent"
                size="lg"
              >
                <span>{link?.text}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            ©2025
            <Link
              className="primary underline-effect hover:text-primary"
              href="https://www.rivartrims.com"
            >
              Rivar Trims Limited
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            {socials?.map((social, index) => (
              <Link
                className="primary underline-effect hover:text-primary"
                key={index}
                href={social?.href}
                target={social?.target}
              >
                {social?.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            <Link
              className="primary underline-effect hover:text-primary"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              className="primary underline-effect hover:text-primary"
              href="/privacy-policy"
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
