import { client } from '@/sanity/lib/client'
import { Josefin_Sans } from 'next/font/google'
import { urlFor } from '@/sanity/lib/image'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import { defineQuery } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Loader } from 'lucide-react'
import { useState, useEffect } from 'react'

interface featuredProductsProps {
  id: number,
  name: string,
  slug: { current: string },
  image: string,
  price: number,
  description: string,
  discountPercentage: number,
  stockLevel: number,
  category: string,
}
export default function FeaturedProducts({data}:{data:featuredProductsProps[]}) {

  // const [data, setData] = useState<featuredProductsProps[] | null>(null)
  // useEffect(() => {
  //   const fetchData = async () => {

  //     const query = defineQuery(`*[_type == "featuredProducts"] {id, slug, description, image, price, discountPercentage, name, stockLevel, category}`)
  //     const result = await client.fetch(query)
  //     setData(result);
  //   };

  //   fetchData();
  // }, []);

  // if (!data) {
  //   return <Loader />;
  // }

  return (
    <div id="featured-products" className="mx-[20px] lg:mx-[200px]">
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Featured Products</h2>
      <h3 className="text-center text-[14px] text-[#FB2E86] mb-3 font-bold ">Check All</h3>
      <ul className="flex flex-wrap gap-[20px] items-center justify-center" id="featured-products">
        {data.map((product: featuredProductsProps) => (
          <li key={product.id}>
            <Link href={`/product/${product.slug.current}`}>
              <div className="lg:min-w-[200px] w-[170px] h-[250px] lg:max-w-[250px] flex items-center justify-center flex-col shadow-sm">
                <div className="bg-[#F6F7FB] mb-[10px] h-[70%]">
                  <Image width={100} height={100} src={urlFor(product.image).url()} alt="featured-products-img" className='h-full' />
                </div>
                <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] ">
                  <h3 className="text-[#FB2E86] font-[700] text-center">{product.name}</h3>
                  <p className={josefinSans.className}>${product.price}</p>
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
