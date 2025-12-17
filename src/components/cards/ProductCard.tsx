import { TProduct } from "@/assets/data/products";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Partial<TProduct>;
  className?: string;
};

const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card intersection-fade-in border-primary relative h-80 w-full cursor-pointer overflow-hidden rounded-xl border-b-4 shadow-lg",
        className,
      )}
    >
      <Link
        key={product?._id}
        href={"/products/" + product?._id}
        className="block size-full"
      >
        <Image
          className="bg-muted size-full object-cover object-center transition-all duration-500 group-hover:scale-110"
          src={product?.thumbnail || ""}
          alt={product?.title || "Product Thumbnail"}
          height={320}
          width={600}
        />
        <div className="from-primary/90 to-primary/80 absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-gradient-to-r p-6 text-center opacity-95 transition-transform duration-400 ease-out group-hover:translate-y-0">
          <h3 className="text-primary-foreground mb-2 text-xl font-bold uppercase">
            {product?.title}
          </h3>
          <p className="text-primary-foreground text-xs">
            {product?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
