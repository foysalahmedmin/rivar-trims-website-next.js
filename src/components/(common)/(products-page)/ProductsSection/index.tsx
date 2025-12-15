import { TProduct } from "@/assets/data/products";
import ProductCard from "@/components/cards/ProductCard";

const ProductsSection = ({ products = [] }: { products: TProduct[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {products?.map((product) => (
          <div key={product?._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
