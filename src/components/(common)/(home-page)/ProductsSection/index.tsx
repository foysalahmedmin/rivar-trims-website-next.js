import { products } from "@/assets/data/products";
import ProductCard from "@/components/cards/ProductCard";
import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section id="products" className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <div className="mb-6">
          <SectionTitle>
            <Subtitle>Our Products</Subtitle>
            <Title isAnimation={true}>Global Quality, Local Excellence</Title>
          </SectionTitle>
          <Link
            href={"/products"}
            className="primary hover:text-primary underline-effect inline-block"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
          {products
            ?.slice(0, 6)
            .map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
