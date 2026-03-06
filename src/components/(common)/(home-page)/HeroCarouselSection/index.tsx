// components/HeroCarouselTailwind.tsx
"use client";

import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Factory,
  Globe,
  Package,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

type HeroFeature = {
  icon: ReactNode;
  text: string;
};

export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  overlayColor: string;
  textColor: string;
  features?: HeroFeature[];
};

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Premium Garments Accessories & Trims",
    subtitle: "Leading Manufacturer Since 2017",
    description:
      "High-quality woven labels, printed labels, heat transfers, and sustainable packaging solutions for the global fashion industry.",
    backgroundImage:
      "https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?q=80&w=2600",
    ctaText: "View Products",
    ctaLink: "/products",
    overlayColor: "from-red-900/80 via-red-600/40 to-transparent",
    textColor: "text-white",
    features: [
      {
        icon: <CheckCircle className="h-4 w-4" />,
        text: "Oeko-Tex 100 Certified",
      },
      { icon: <Award className="h-4 w-4" />, text: "FSC & GRS Certified" },
      { icon: <Users className="h-4 w-4" />, text: "Serving 100+ Brands" },
      { icon: <Package className="h-4 w-4" />, text: "Export Worldwide" },
    ],
  },
  {
    id: 2,
    title: "Eco-Friendly & Sustainable Packaging",
    subtitle: "Green Manufacturing",
    description:
      "FSC-certified hang tags, biodegradable polybags, and recycled packaging solutions. We believe in sustainability and care for our People, Place & Products.",
    backgroundImage:
      "https://images.unsplash.com/photo-1624137308703-e1da1ca881df?q=80&w=2600",
    ctaText: "About Us",
    ctaLink: "/about",
    overlayColor: "from-green-900/80 via-green-600/40 to-transparent",
    textColor: "text-white",
    features: [
      { icon: <Factory className="h-4 w-4" />, text: "Recycled Materials" },
      { icon: <Globe className="h-4 w-4" />, text: "Global Recycled Standard" },
      { icon: <Award className="h-4 w-4" />, text: "FSC Certified" },
      { icon: <Shield className="h-4 w-4" />, text: "100% Quality Check" },
    ],
  },
  {
    id: 3,
    title: "Advanced Heat Transfer & Reflective Labels",
    subtitle: "State-of-the-Art Technology",
    description:
      "Durable heat transfer labels and ReflexCut reflective vinyl for activewear and fashion. Long-lasting prints resistant to fading and cracking.",
    backgroundImage:
      "https://images.unsplash.com/photo-1693031630157-7ecc8d06de63?q=80&w=2600",
    ctaText: "Explore Products",
    ctaLink: "/products/heat-transfer",
    overlayColor: "from-blue-900/80 via-blue-600/40 to-transparent",
    textColor: "text-white",
    features: [
      {
        icon: <CheckCircle className="h-4 w-4" />,
        text: "Heat & Vacuum Press",
      },
      { icon: <Clock className="h-4 w-4" />, text: "10,00,000 pcs/day" },
      { icon: <Shield className="h-4 w-4" />, text: "EN471 Reflective Std." },
      { icon: <Package className="h-4 w-4" />, text: "Reflective Options" },
    ],
  },
];

const HeroCarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div id="home" className="relative w-full overflow-hidden">
      <Carousel
        autoplay
        opts={{
          loop: true,
          duration: 40,
        }}
        setApi={(api) => {
          // Update active slide when carousel changes
          api?.on("select", () => {
            setActiveSlide(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {heroSlides?.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className="dark text-foreground relative min-h-[44rem]"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-[5000ms] ease-linear ${
                    activeSlide === index ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    backgroundImage: `url('${slide.backgroundImage}')`,
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor}`}
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-6">
                  <div className="max-w-3xl">
                    {/* Animated Badge */}
                    <div
                      className={`mb-6 inline-flex items-center rounded-full border bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-500 ${
                        activeSlide === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="text-sm font-semibold text-white">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Animated Title */}
                    <h1
                      className={`text-4xl leading-1.5 font-bold md:text-6xl ${slide.textColor} mb-6 leading-tight transition-all delay-300 duration-700 ${
                        activeSlide === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Animated Description */}
                    <p
                      className={`md:text-lg ${slide.textColor} mb-6 max-w-2xl opacity-90 transition-all delay-500 duration-700 ${
                        activeSlide === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 transition-all delay-700 duration-700">
                      <div
                        className={`flex flex-wrap gap-3 transition-all duration-500 ${
                          activeSlide === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }`}
                      >
                        {slide?.features?.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
                          >
                            <div className="text-blue-300">{feature.icon}</div>
                            <span className="text-sm text-white/90">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated CTA Buttons */}
                    <div
                      className={`flex flex-col gap-4 transition-all delay-1000 duration-700 sm:flex-row ${
                        activeSlide === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      <Link href={slide.ctaLink || "#" + slide.ctaLink}>
                        <Button
                          size="lg"
                          variant="default"
                          className="bg-accent-foreground text-accent"
                        >
                          <span className="flex items-center">
                            {slide.ctaText}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </Link>
                      <Link href={"/contact"}>
                        <Button size="lg" variant="outline" className="accent">
                          <span className="flex items-center">
                            Contact
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPreviousTrigger
          className="left-4 border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:bg-white/20 md:left-6"
          shape="icon"
        >
          <ChevronLeft className="h-6 w-6" />
        </CarouselPreviousTrigger>

        <CarouselNextTrigger
          className="right-4 border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:bg-white/20 md:right-6"
          shape="icon"
        >
          <ChevronRight className="h-6 w-6" />
        </CarouselNextTrigger>

        {/* Slide Counter */}
        <div className="absolute right-6 bottom-6 z-20 hidden items-center space-x-3 lg:flex">
          <div className="text-sm text-white">
            <span className="text-2xl font-bold">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 opacity-50">/</span>
            <span className="opacity-70">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
          <div className="h-6 w-px bg-white/30"></div>
          <div className="flex flex-col">
            <span className="text-xs tracking-wider text-white/60 uppercase">
              Slide
            </span>
            <span className="text-sm text-white">
              {heroSlides[activeSlide]?.subtitle}
            </span>
          </div>
        </div>
      </Carousel>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 transform">
        <div className="animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselSection;
