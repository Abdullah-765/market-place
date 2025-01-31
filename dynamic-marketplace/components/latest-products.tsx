import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Loader } from 'lucide-react'
import { defineQuery } from 'next-sanity'
import { Josefin_Sans } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

interface latestProductsProps {
  id: number,
  name: string,
  slug: {current: string},
  image: string,
  price: number,
  discountPercentage: number,
  description: string,
  stockLevel: number,
  category: string,
}


export default function LatestProducts({data}:{data:latestProductsProps[]}) {

  // const [data, setData] = useState<latestProductsProps[] | null>(null)
  // useEffect(() => {
  //   const fetchData = async () => {

  //     const query = defineQuery(`*[_type == "latestProducts"] {description, slug, image, price, discountPercentage, name, stockLevel, category}`)
  //     const result = await client.fetch(query)
  //     setData(result);
  //   };

  //   fetchData();
  // }, []);

  // if (!data) {
  //   return <Loader />;
  // }

  return (

    <div id="latest-products" className='mx-[20px] flex items-center flex-col'>
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Latest Products</h2>
      <div className="flex flex-wrap gap-[20px] justify-center lg:mx-[200px]" id="latest-products">
      {data.map((product: latestProductsProps) => (
        <li key={product.id}>
                  <Link href={`/product/${product.slug.current}`}>
          <ul className="flex items-center justify-center w-[180px] lg:w-[280px] flex-col shadow-sm">
            <img src={urlFor(product.image).url()} alt="" className=" w-[150px] bg-[#F6F7FB] mb-[10px]" />
            <ul className="flex justify-evenly items-center bg-white w-[100%] gap-[4px] ">
              <h3 className="text-[#151875] font-[600] text-[11px]" >{product.name}</h3>
              <p className={`${josefinSans.className} text-[#151875] font-[600] text-[12px]`} >${product.price}</p>
              <p className={`${josefinSans.className} text-[#FB2E86] font-[600] text-[12px] line-through`} >
                {product.discountPercentage > 0 ? '$'+(product.price/(1-product.discountPercentage/100)).toFixed(0) : "" }
              </p>
            </ul>
          </ul>
          </Link>
        </li>
        ))}
      </div>


    </div>
  )
}
