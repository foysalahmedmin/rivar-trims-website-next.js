"use client";

import { products, TProduct } from "@/assets/data/products";
import ProductCard from "@/components/cards/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductDetailsClient = ({
  product,
}: {
  product: Omit<TProduct, "icon">;
}) => {
  const [activeImage, setActiveImage] = useState(product.thumbnail);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2070"
          alt="Hero Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Floating Card Container */}
      <div className="relative z-20 container -mt-[150px] pb-12">
        <div className="bg-card flex flex-col shadow-2xl md:flex-row">
          {/* Left Content */}
          <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
            <h1 className="text-foreground mb-6 text-3xl font-bold uppercase md:text-4xl">
              {product.title}
            </h1>
            <div
              className="text-muted-foreground border-primary mb-8 border-l-4 pl-4 text-justify text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: product.details.description,
              }}
            />
            <Link href="/contact">
              <Button asChild>Request Quote</Button>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="w-full p-5 md:w-1/2">
            <div className="bg-muted relative flex h-[350px] w-full items-center justify-center overflow-hidden bg-gray-200">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                className="object-cover transition-opacity duration-300"
              />
              {/* Decorative Elements */}
              <span className="text-primary absolute top-1/2 -right-6 -rotate-90 transform bg-white px-1 text-xs font-bold">
                120MM
              </span>
              <span className="text-primary absolute bottom-2 left-1/2 -translate-x-1/2 transform bg-white px-1 text-xs font-bold">
                200MM
              </span>
            </div>

            {/* Thumbnails */}
            <div className="mt-8 flex justify-start gap-4">
              {[product.thumbnail, ...product.images]
                .slice(0, 3)
                .map((img, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "bg-muted h-20 w-20 cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:scale-105",
                      activeImage === img
                        ? "border-primary"
                        : "border-transparent",
                    )}
                    onClick={() => setActiveImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={80}
                      height={80}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="mt-20 pb-20">
          <h2 className="text-foreground border-primary mx-auto mb-8 inline-block border-b-2 pb-2 text-center text-2xl font-bold tracking-wide uppercase">
            Explore More Products
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products
                .filter((p) => p._id !== product._id)
                .map((product) => (
                  <CarouselItem
                    key={product._id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPreviousTrigger className="bg-background/80 hover:bg-background absolute top-1/2 -left-4 -translate-y-1/2 border shadow-sm md:-left-12" />
            <CarouselNextTrigger className="bg-background/80 hover:bg-background absolute top-1/2 -right-4 -translate-y-1/2 border shadow-sm md:-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
