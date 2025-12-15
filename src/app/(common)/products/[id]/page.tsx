import { products } from "@/assets/data/products";
import ProductDetailsClient from "@/components/(common)/(products-page)/ProductDetailsClient";
import FollowUpSection from "@/components/sections/FollowUpSection";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const product = products.find((product) => product._id === id);
  return {
    title: product?.title,
    description: product?.description,
  };
};

export const generateStaticParams = async () => {
  return products.map((product) => ({ id: product._id }));
};

const ProductDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = products.find((product) => product._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { icon, ...serializedProduct } = product;

  return (
    <main>
      <ProductDetailsClient product={serializedProduct} />
      <FollowUpSection />
    </main>
  );
};

export default ProductDetailsPage;
