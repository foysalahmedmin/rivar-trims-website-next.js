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
        "group bg-card intersection-fade-in relative aspect-[2/1] w-full cursor-pointer overflow-hidden rounded-xl",
        className,
      )}
    >
      <Link
        key={product?._id}
        href={"/products/" + product?._id}
        className="size-full"
      >
        <Image
          className="bg-muted size-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110"
          src={product?.thumbnail || ""}
          alt={product?.title || "Product Thumbnail"}
          height={250}
          width={500}
        />
        <div className="group-hover:bg-background/50 text-foreground dark absolute inset-0 flex items-end justify-start overflow-hidden transition-all duration-500 group-hover:backdrop-blur-xs">
          <div className="translate-y-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="pb-1 text-3xl">{product?.title}</h3>
            <p className="line-clamp-3 text-sm">{product?.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
