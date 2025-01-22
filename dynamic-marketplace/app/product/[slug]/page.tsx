import { client } from "@/sanity/lib/client"; // Sanity client setup
import { Josefin_Sans } from "next/font/google";
import { urlFor } from "@/sanity/lib/image"; // Image utility
import { notFound } from "next/navigation"; // For handling 404
import { Metadata } from "next"; // Optional: To set metadata
import Image from "next/image";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});
import { Button } from "@/components/ui/button";
interface Product {
  name: string;
  image: any;
  slug: { current: string };
  price: number;
  discountPercentage: number;
  description: string;
  stockLevel: number;
  category: string;
}

// Fetch product data directly
async function fetchProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(query, { slug });
  return product;
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await fetchProduct(params.slug);

  if (!product) {
    notFound(); // Redirect to 404 page if product is not found
  }

  return (
    <div>
      {/* Page header */}
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}>
          {product.name} Details
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Product Details</p>
        </li>
      </div>

      {/* Product details */}
      <div className="container flex items-center justify-center">
        <div className="flex flex-col mt-10 md:flex-row items-center p-4 shadow-evenly-around max-w-[750px] overflow-hidden">
            <div>
              <Image
                src={urlFor(product.image).url()}
                alt="Main product view"
                className="object-contain"
                width={380}
                height={380}
                layout="responsive"
              />
          </div>

          <div className="flex flex-col gap-[10px] mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
            <h2 className={`${josefinSans.className} text-[#0D134E] text-2xl font-semibold`}>
              {product.name}
            </h2>
            <div className={`${josefinSans.className} flex items-center gap-3`}>
              <span className="text-[#151875] text-[14px]">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="line-through text-[#F701A8]  text-[14px]">
                  ${((product.price / (1 - product.discountPercentage / 100)).toFixed(0))}
                </span>
              )}
            </div>
            <p className={`${josefinSans.className} text-[14px] text-[#9295AA]`}>
              {product.description}
            </p>
            <p className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Stock Awailable <span className="text-[#F701A8]">{product.stockLevel}</span></p>
            <ul className="flex gap-5">
              <li className={`${josefinSans.className} text-[#0D134E] text-sm`}><Button variant={'ActivePage'}>Add to cart</Button></li>
              <li><img src="/uil_heart-alt.png" alt="Wishlist" /></li>
            </ul>

            <div className="flex flex-col gap-[5px]">
              <li className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Categories <span className="text-[#F701A8]">{product.category}</span></li>
              <li className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Tags</li>
              <div className={`${josefinSans.className} flex gap-2.5 font-semibold text-sm text-[#0D134E]`}>
                <p>Share</p>
                <ul className="flex gap-2.5">
                  <img src="/product-details/facebook-share.png" alt="Facebook" />
                  <img src="/product-details/instagram-share.png" alt="Instagram" />
                  <img src="/product-details/twitter-share.png" alt="Twitter" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional: Set metadata for SEO purposes
export const metadata: Metadata = {
  title: "Product Details",
  description: "Details about the product",
};
