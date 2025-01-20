import { client } from '@/sanity/lib/client'
import { Josefin_Sans } from 'next/font/google'
import { urlFor } from '@/sanity/lib/image'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import { defineQuery } from 'next-sanity'
import Image from 'next/image'
import { Slug } from 'sanity'

interface featuredProductsProps {
  id: number,
  name: string,
  slug: Slug,
  image: string,
  price: number,
  description: string,
  stockLevel: number,
  category: string,
}
export default async function FeaturedProducts() {

  const query = defineQuery(`*[_type == "featuredProducts"] {description, image, price, discountPrice, name, stockLevel, category}`)
  const featuredProducts = await client.fetch(query)

  return (
    <div id="featured-products" className="mx-[20px] lg:mx-[200px]">
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Featured Products</h2>
      <h3 className="text-center text-[14px] text-[#FB2E86] mb-3 font-bold ">Check All</h3>
      <ul className="flex flex-wrap gap-[20px] items-center justify-center" id="featured-products">
        {featuredProducts.map((products: featuredProductsProps) => (
          <div className="lg:min-w-[200px] h-[250px] lg:max-w-[250px] flex items-center justify-center flex-col shadow-sm">
            <div className="bg-[#F6F7FB] mb-[10px] h-[70%]">
              <Image width={100} height={100} src={urlFor(products.image).url()} alt="featured-products-img" className='h-full' />
            </div>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] ">
              <h3 className="text-[#FB2E86] font-[700] text-center">{products.name}</h3>
              <p className={josefinSans.className}>${products.price}</p>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  )
}
