import { urlFor } from '@/sanity/lib/image'
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export interface UniqueFeaturesProps{
  id: number,
  name: string,
  slug: { current: string },
  image: string,
  price: number,
  description: string,
  discountPercentage: number,
  stockLevel: number,
  category: string,
  descriptionPoint1?: string,
  descriptionPoint2?: string,
  descriptionPoint3?: string,
}

export default function UniqueFeaturesTrendingProducts({data}:{data: UniqueFeaturesProps[]}) {

//   const query = defineQuery(`*[_type == "uniqueFeatures"] {slug, id, description, descriptionPoint1, descriptionPoint2, descriptionPoint3, image, price, discountPercentage, name, stockLevel, category}`)

//   let uniqueFeaturesData = []
  
//   try {
//     uniqueFeaturesData = await client.fetch(query)
//   } catch (error) {
//     console.log(`No Unique features Data found on fetch`, error);
//   }

// if (!uniqueFeaturesData || uniqueFeaturesData.length === 0) {
//   return console.log('no data available');
// }
      return (
      <div id="marketing-panel-main-div" className="flex gap-[5px] w-[100%] bg-[#F1F0FF] justify-center relative items-center h-[40vh] sm:h-[60vh]" key={data[0].id}>
      <Image src={urlFor(data[0].image).url()} alt="marketing" width={400} height={400} layout='responsive' className="max-w-[400px]" />
      <div className='ml-[20px]'>
        <h1 className={josefinSans.className}><span className="text-[18px] text-[#151875] font-bold md:text-[30px]">Unique Features Of leatest & Trending Poducts</span></h1>
        <ul className='hidden text-[#ACABC3] leading-6 md:inline-block'>
          <li><div id="bullets" className='bg-red-600 w-[10px] h-[10px] rounded-full' /> <p className='text-[12px]'>{data[0].descriptionPoint1}</p></li>
          <li><div className='bg-green-600 w-[10px] h-[10px] rounded-full'></div> <p className='text-[12px]'>{data[0].descriptionPoint3}</p></li>
          <li><div className='bg-blue-600 w-[10px] h-[10px] rounded-full'></div> <p className='text-[12px]'>{data[0].descriptionPoint3}</p></li>
        </ul>

        <ul className='flex gap-[10px] items-center'>
          <li><Link href={`/product/${data[0].slug.current}`}><button className="bg-[#FB2E86] text-white py-[8px] px-[30px] cursor-pointer text-[10px] mt-[5px]"><span className={josefinSans.className}>Shop now</span></button></Link></li>

          <li className='flex flex-col items-start justify-center'>
            <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>{data[0].name}</p>
            <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>${data[0].price}</p>
          </li>
        </ul>

      </div>
    </div>
  )
  
}
