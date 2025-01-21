import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { defineQuery } from 'next-sanity'
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import { Slug } from 'sanity'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

interface TrendingProductsProps {
  id: number,
  name: string,
  slug: Slug,
  image: string,
  price: number,
  discountPercentage: number,
  description: string,
  stockLevel: number,
  category: string,
}

export default async function TrendingProducts() {

  const query = defineQuery(`*[_type == "trendingProducts"] {description, image, price, discountPercentage, name, stockLevel, category}`)
  const trendingProducts = await client.fetch(query)

  return (
    <div id="Trending-products" className="mx-[20px] lg:mx-[150px]">
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Trending Products</h2>
      <ul className="flex flex-wrap gap-[20px] justify-center items-center" id="featured-products">
        {trendingProducts.map((product: TrendingProductsProps) => (
          <div className="flex items-center justify-center flex-col shadow-sm w-[160px] lg:min-w-[200px]" key={product.id}>
            <img src={urlFor(product.image).url()} alt={product.name} className="bg-[#F6F7FB] h-[70%] mb-[10px]" />
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px]">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">{product.name}</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>${product.price}</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>
                  {product.discountPercentage > 0 ? '$' + (product.price / (1 - product.discountPercentage / 100)).toFixed(0) : ""}
                </p>
              </ul>
            </ul>
          </div>
        ))
        }


      </ul>
    </div>
  )
}
