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

interface discountItemProp {
  id: number,
  name: string,
  price: number,
  discountPercentage: number,
  image: string,
  description: string,
  category: string,
  slug: {current: string}
  descriptionPoint1?: string,
  descriptionPoint2?: string,
  descriptionPoint3?: string,
  descriptionPoint4?: string,
  mainHeading: string,
}

export default async function DiscountItem() {

  const query = defineQuery(`*[_type == "discountedItem"][0] {id, descriptionPoint1, descriptionPoint2, descriptionPoint3, descriptionPoint4, slug, mainHeading, description, image, price, discountPercentage, name, stockLevel, category}`)
  const discountedItem: discountItemProp = await client.fetch(query) 

  return (
    <div id="Discount-item" className='mx-[20px] lg:mx-[150px]'>
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Discount Item</h2>

      <Link href={`/product/${discountedItem.slug.current}`} key={discountedItem.id}>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div>
          <Image src={urlFor(discountedItem.image).url()} alt="" width={350} height={350} layout='responsive' className='min-w-[350px]' />
        </div>
        <div>
          <h1 className={`${josefinSans.className} text-[30px] text-[#1A0B5B] font-bold`}>{discountedItem.mainHeading}</h1>
          <h3 className={`${josefinSans.className} text-[14px] text-[#FB2E86]`}>{discountedItem.name}</h3>
          <p className='text-[#B7BACB] text-[12px] mb-[10px]' >{discountedItem.description}</p>
          <ul className='flex flex-col gap-y-[5px] text-[#B7BACB] text-[12px] gap-x-[20px]'>
            {discountedItem.descriptionPoint1 && (
              <li>&#10003; {discountedItem.descriptionPoint1}</li>
            )}
            {discountedItem.descriptionPoint2 && (
              <li>&#10003; {discountedItem.descriptionPoint2}</li>
            )}
            {discountedItem.descriptionPoint3 && (
              <li>&#10003; {discountedItem.descriptionPoint3}</li>
            )}
            {discountedItem.descriptionPoint4 && (
              <li>&#10003; {discountedItem.descriptionPoint4}</li>
            )}
          </ul>
          <button className={`${josefinSans.className} bg-[#FB2E86] text-white py-[10px] px-[28px] cursor-pointer text-[12px] mt-[10px]`}>Shop Now</button>
        </div>
      </div>
      </Link>
    </div>
    
  )
}   
