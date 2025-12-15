import { products } from "@/assets/data/products";
import ProductsSection from "@/components/(common)/(products-page)/ProductsSection";
import {
    Description,
    SectionTitle,
    Subtitle,
    Title,
} from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Products | Rivar Trims",
  description:
    "Explore our wide range of high-quality garment accessories and trims. From printed labels to sustainable packaging, we deliver excellence in every detail.",
};

const ProductsPage = () => {
  return (
    <main>
      <section className="intersection-fade-in py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Products</Subtitle>
            <Title>Products</Title>
            <Description>
              Explore our wide range of high-quality garment accessories and trims.
            </Description>
          </SectionTitle>
          <div>
            <ProductsSection products={products} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
