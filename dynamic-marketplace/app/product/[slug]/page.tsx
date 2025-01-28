'use client'

import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import { client } from "@/sanity/lib/client";
import { Josefin_Sans } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import { useRouter, useParams } from "next/navigation"; // Import useParams for migration-safe param access
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import useCartStore from "@/store/useCartStore";
import React from "react";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

interface Product {
  id: number;
  name: string;
  image: any;
  slug: { current: string };
  price: number;
  discountPercentage: number;
  description: string;
  stockLevel: number;
  category: string;
}

interface RelatedProduct extends Omit<Product, "category"> { }

export default function ProductDetail() {
  const params = useParams(); // Access params dynamically
  const slug = params.slug;// Unwrap the promise of `params`

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();
  const router = useRouter();

  // Fetch product and related products
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0]`;
        const productData = await client.fetch(query, { slug });

        if (!productData) {
          router.replace("/404"); // Redirect to 404 if product not found
          return;
        }

        setProduct(productData);

        const relatedQuery = `
          *[_type == "product" && category == $category && slug.current != $slug][0...3] {
            name,
            price,
            image,
            slug
          }
        `;
        const relatedProductsData = await client.fetch(relatedQuery, {
          category: productData.category,
          slug: productData.slug.current,
        });
        setRelatedProducts(relatedProductsData);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
        router.replace("/404");
      }
    };

    fetchProductData();
  }, [slug, router]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          slug: product.slug,
          discountPercentage: product.discountPercentage,
          description: product.description,
          stockLevel: product.stockLevel,
          category: product.category,
        },
        quantity
      );
      toast.success("Product added to cart");
    } else {
      toast.error("Product not added to cart");
    }
    setQuantity(1);
  };


  if (!product) {
    return <Loader />; // Show a loading state while fetching
  }
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  return (
    <div>
      {/* Page header */}
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}>
          {product.name} Details
        </h1>
        <li className="text-[10px]">
          <Link href="/">Home .</Link>
          <Link href="/products-list">Products</Link>
          <p className="text-[#FB2E86]">Product Details</p>
        </li>
      </div>

      {/* Product details */}
      <div className="container flex items-center justify-center justify-self-center mx-[20px]">
        <div className="flex flex-col mt-10 md:flex-row items-center lg:p-[50px] p-4 shadow-evenly-around max-w-[750px] overflow-hidden">
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt="Main product view"
              className="object-contain max-w-[400px] min-w-[150px]"
              width={400}
              height={400}
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
                <span className="line-through text-[#F701A8] text-[14px]">
                  ${((product.price / (1 - product.discountPercentage / 100)).toFixed(0))}
                </span>
              )}
            </div>
            <p className={`${josefinSans.className} text-[14px] text-[#9295AA]`}>
              {product.description}
            </p>
            <p className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>
              Stock Available <span className="text-[#F701A8]">{product.stockLevel}</span>
            </p>
            <ul className="flex gap-5">
              <div className="flex items-center rounded-full border border-gray-300">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button disabled={quantity > product.stockLevel -1 } onClick={() => handleQuantityChange(1)} className="px-4 py-2 hover:bg-gray-100"                   
>
                  +
                </button>
              </div>
              <li className={`${josefinSans.className} text-[#0D134E] text-sm`}>
                <Button variant={"ActivePage"} onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mx-[20px] mt-[40px]`}
        >
          Related Products
        </h2>
        <div className="mx-[20px] mt-[40px] flex flex-wrap gap-[20px] justify-center">
          {relatedProducts.map((relatedProduct) => (
            <ul key={relatedProduct.slug.current} className="w-[190px] h-fit p-[5px] md:w-[220px]">
              <Link href={`/product/${relatedProduct.slug.current}`}>
                <li>
                  <Image
                    src={urlFor(relatedProduct.image).url()}
                    alt={relatedProduct.name}
                    width={150}
                    height={150}
                    className="w-fit h-full"
                  />
                </li>

                <ul className="flex justify-between items-center mt-[10px]">
                  <li className={`${josefinSans.className} text-[#151875]`}>
                    {relatedProduct.name}
                  </li>
                </ul>
                <li className={`${josefinSans.className} text-[#151875]`}>
                  ${relatedProduct.price}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
