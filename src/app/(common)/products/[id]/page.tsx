import { products } from "@/assets/data/products";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitFloatSection from "@/components/sections/SplitFloatSection";
import Image from "next/image";

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
  const { title, description, thumbnail, details, images } = product || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Product"
        title={title}
        description={description}
        image={thumbnail}
      />
      <SplitFloatSection
        subtitle="Details"
        title={details?.title}
        description={details?.description}
        image={images?.[0] || thumbnail}
      />
      
      {/* Product Gallery Section */}
      {images && images.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Product Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {images.map((img, index) => (
                 <div key={index} className="relative aspect-video overflow-hidden rounded-xl">
                   <Image 
                     src={img} 
                     alt={`${title} - Image ${index + 1}`}
                     fill
                     className="object-cover hover:scale-105 transition-transform duration-500"
                   />
                 </div>
               ))}
            </div>
          </div>
        </section>
      )}

      <FollowUpSection />
    </main>
  );
};

export default ProductDetailsPage;
