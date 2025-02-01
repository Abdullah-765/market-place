'use client'

import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react'
import { Josefin_Sans } from 'next/font/google'
import { urlFor } from '@/sanity/lib/image'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import { defineQuery } from 'next-sanity'
import Link from 'next/link'
import Loader from '@/components/loader'
import Image from 'next/image'

interface productsDataProps {
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
export default function ProductsList() {

  const [data, setData] = useState<productsDataProps[] | null>(null);
  const [isGrid, setIsGrid] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const query = defineQuery(`*[_type == "product"] {id, slug, description, image, price, discountPercentage, name, stockLevel, category}`)
      const result = await client.fetch(query)
      setData(result);
    }

    fetchData()
  }, [])

  if (!data) {
    return <Loader/>;
  }


  const highestPriceFirst = data
    .map((product: productsDataProps) => ({
      ProductSortedid: product.id,
      discountedPrice: product.price - (product.price * product.discountPercentage) / 100
    }))
    .sort((a: { discountedPrice: number }, b: { discountedPrice: number }) => a.discountedPrice - b.discountedPrice); // Sort by price

  console.log(highestPriceFirst);


  return (
    <div >
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Shop Grid Defualt
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Shop Grid Default</p>
        </li>
      </div>

      <div className="mx-[20px] lg:mx-[150px]">
        <li className="flex flex-col items-start mt-[10px]" >
          <h2
            className={`${josefinSans.className} text-[#151875] text-[15px] font-bold`}
          >
            Ecommerce Accecories & Fasion items
          </h2>
          <p className="text-[#8A8FB9] text-[10px]">
            About 9620 results (0.62 second)
          </p>
        </li>
        <ul className="flex flex-wrap gap-[10px] mt-[10px]">
          <li>
            <p className="text-[#182378]">Per Page:</p>
            <input
              type="text"
              className="w-[45px] border border-[#E7E6EF] outline-none"
            />
          </li>
          <li>
            <label className="text-[#182378]">Sort By:</label>
            <select className="border border-[#E7E6EF] outline-none text-[#8A8FB9] text-[10px] p-[2px]">
              <option value="best-match">Best Match</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
              <option value="newest">Newest</option>
            </select>
          </li>
          <li>
            <p className="text-[#182378]">View:</p>
            <button onClick={() => {
              setIsGrid(true)
              console.log(isGrid);
            }}><img src="/final-logos/clarity_grid-view-solid.png" alt="" /></button>
            <button onClick={() => {
              setIsGrid(false)
              console.log(isGrid);

            }}><img src="/final-logos/fa-solid_list.png" alt="" /></button>
            <input
              type="text"
              placeholder=""
              className="border w-[80px] border-[#E7E6EF] outline-none"
            />
          </li>
        </ul>
        {isGrid &&
          <ul className="grid grid-cols-2 gap-[15px] mt-[20px] lg:grid-cols-4">
            {data.map((product: productsDataProps) => (
              <Link href={`/product/${product.slug.current}`} key={product.id}>
                <li className="flex items-center p-[17px] h-[250px] justify-center flex-col border border-gray-100">
                  <img src={urlFor(product.image).url()} alt="" className="h-[65%] mb-[10px]" />
                  <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
                    <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>{product.name}</h3>

                    <div className="flex gap-[20px] mt-[5px]">
                      <p className={`${josefinSans.className} text-[#151875]`}>${product.price}</p>
                      <p className={`${josefinSans.className} text-[#F701A8] line-through`}>
                        {product.discountPercentage > 0 ? '$' + (product.price / (1 - product.discountPercentage / 100)).toFixed(0) : ""} </p>
                    </div>
                  </ul>
                </li>
              </Link>

            ))}


          </ul>
        }

        {!isGrid &&
          <ul className='flex flex-col gap-[20px] items-center justify-center mt-[40px]'>
            {data.map((product: productsDataProps) => (
              <Link href={`/product/${product.slug.current}`} key={product.id} className='md:max-w-[250px]"'>
                <li className="flex items-center justify-center p-[17px] gap-[10px] shadow-sm m-0 h-auto">
                  <Image src={urlFor(product.image).url()} alt="" width={100} height={100} layout='responsive' className="max-w-[150px]" />
                  <ul className="flex flex-col justify-center gap-[5px] w-full">
                    <li className="flex flex-wrap">
                      <h3 className={`${josefinSans.className} text-[#151875] text font-bold mr-[15px]`}>{product.name}</h3>
                    </li>
                    <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                      <p className={`${josefinSans.className} text-[#151875]`}>{product.price}</p>
                      <p className={`${josefinSans.className} line-through text-[#F701A8]`}> {product.discountPercentage > 0 ? '$' + (product.price / (1 - product.discountPercentage / 100)).toFixed(0) : ""} </p>
                    </div>
                    <p className="text-[#9295AA] text-[10px]">{product.description}</p>
                    <div className="flex gap-x-[30px] mt-[5px]">
                      <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
                    </div>
                  </ul>
                </li>
              </Link>
            ))}
          </ul>
        }

        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px] justify-self-center" />
      </div>

    </div>
  );
}
