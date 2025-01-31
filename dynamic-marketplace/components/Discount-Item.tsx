import { Josefin_Sans } from 'next/font/google'
import { urlFor } from '@/sanity/lib/image'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
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
  slug: { current: string }
  descriptionPoint1?: string,
  descriptionPoint2?: string,
  descriptionPoint3?: string,
  descriptionPoint4?: string,
  mainHeading: string,
}

export default function DiscountItem({ data }: { data: discountItemProp }) {

  return (
    <div id="Discount-item" className='mx-[20px] lg:mx-[150px]'>
      <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Discount Item</h2>

      <Link href={`/product/${data.slug.current}`} key={data.id}>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          <div>
            <Image src={urlFor(data.image).url()} alt="" width={350} height={350} layout='responsive' className='min-w-[350px]' />
          </div>
          <div>
            <h1 className={`${josefinSans.className} text-[30px] text-[#1A0B5B] font-bold`}>{data.mainHeading}</h1>
            <h3 className={`${josefinSans.className} text-[14px] text-[#FB2E86]`}>{data.name}</h3>
            <p className='text-[#B7BACB] text-[12px] mb-[10px]' >{data.description}</p>
            <ul className='flex flex-col gap-y-[5px] text-[#B7BACB] text-[12px] gap-x-[20px]'>
              {data.descriptionPoint1 && (
                <li>&#10003; {data.descriptionPoint1}</li>
              )}
              {data.descriptionPoint2 && (
                <li>&#10003; {data.descriptionPoint2}</li>
              )}
              {data.descriptionPoint3 && (
                <li>&#10003; {data.descriptionPoint3}</li>
              )}
              {data.descriptionPoint4 && (
                <li>&#10003; {data.descriptionPoint4}</li>
              )}
            </ul>
            <button className={`${josefinSans.className} bg-[#FB2E86] text-white py-[10px] px-[28px] cursor-pointer text-[12px] mt-[10px]`}>Shop Now</button>
          </div>
        </div>
      </Link>
    </div>

  )
}   
