import { client } from "@/sanity/lib/client";  // Assuming you have a client set up for Sanity
import { useRouter } from "next/router";
import { Josefin_Sans } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";  // Assuming you have an image utility

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

export default function ProductDetail({ product }) {
  if (!product) return <div>Product not found</div>;

  return (
    <div>
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

      <div className="container mx-auto px-5">
        <div className="flex flex-col mt-10 md:flex-row items-start p-4 shadow-evenly-around max-w-[650px] overflow-hidden">
          <div className="flex items-center gap-2 w-full md:w-1/2 md:max-w-[300px]">
            <div className="flex flex-col gap-2 w-1/4 md:max-w-[80px]">
                <img
                  src={urlFor(product.image).url()}
                  alt={`Product view`}
                  className="w-full rounded-sm object-contain"
                />
            </div>
            <div className="w-3/4 md:max-w-[200px]">
              <img
                src={urlFor(product.mainImage).url()}
                alt="Main product view"
                className="w-full rounded-sm object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
            <h2 className={`${josefinSans.className} text-[#0D134E] text-2xl font-semibold`}>
              {product.name}
            </h2>

            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
              ))}
              <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
              <span className="text-black ml-2">({product.reviewsCount})</span>
            </div>

            <div className={`${josefinSans.className} flex items-center gap-3`}>
              <span className="text-[#151875]">${product.price}</span>
              <span className="line-through text-[#F701A8]">${product.originalPrice}</span>
            </div>

            <p className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Color</p>
            <p className={`${josefinSans.className} text-xs text-[#9295AA]`}>
              {product.description}
            </p>

            <ul className="ml-10 flex gap-5">
              <li className={`${josefinSans.className} text-[#0D134E] text-sm`}>Add to cart</li>
              <li><img src="/uil_heart-alt.png" alt="Wishlist" /></li>
            </ul>

            <div>
              <li className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Categories</li>
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

      <div className="w-full h-fit mt-[40px] p-[20px] bg-[#F9F8FE]">
        <ul className="flex flex-col gap-[10px] md:flex-row justify-evenly">
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] underline underline-offset-4 font-semibold`}>Description</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Additional Info</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Reviews</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Video</li>
        </ul>

        <div className="mt-[20px] flex flex-col gap-[20px]">
          <ul>
            <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Varius tempor.</li>
            <li className={`${josefinSans.className} text-xs text-[#9295AA]`}>
              {product.detailedDescription}
            </li>
          </ul>
        </div>
      </div>

      <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mx-[20px] mt-[40px]`}>Related Products</h2>
      {/* <div className="mx-[20px] mt-[40px] flex flex-wrap gap-[20px] items-center justify-center">
        {product.relatedProducts.map((relatedProduct) => (
          <ul key={relatedProduct.id} className="w-[190px] p-[5px] md:w-[220px]">
            <li>
              <img src={urlFor(relatedProduct.image).url()} alt={relatedProduct.name} />
            </li>
            <ul className="flex justify-between items-center mt-[10px]">
              <li className={`${josefinSans.className} text-[#151875]`}>{relatedProduct.name}</li>
              <li className="flex gap-[1px] items-center">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
              </li>
            </ul>
            <li className={`${josefinSans.className} text-[#151875]`}>${relatedProduct.price}</li>
          </ul>
        ))}
      </div> */}
    </div>
  );
}

// Fetching data from your data source
export async function getServerSideProps({ params }) {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      product: product || null,
    },
  };
}
