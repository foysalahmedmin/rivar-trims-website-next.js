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
        "group bg-card intersection-fade-in relative h-80 w-full cursor-pointer overflow-hidden shadow-lg border-b-4 border-primary",
        className,
      )}
    >
      <Link
        key={product?._id}
        href={"/products/" + product?._id}
        className="size-full block"
      >
        <Image
          className="bg-muted size-full object-cover object-center transition-all duration-500 group-hover:scale-110"
          src={product?.thumbnail || ""}
          alt={product?.title || "Product Thumbnail"}
          height={320}
          width={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 opacity-95 flex flex-col justify-center items-center text-center p-6 translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0">
          <h3 className="text-xl text-primary-foreground mb-2 uppercase font-bold">{product?.title}</h3>
          <p className="text-primary-foreground text-xs">{product?.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
