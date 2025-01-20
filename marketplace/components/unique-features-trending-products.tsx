import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Image from 'next/image'

export default function UniqueFeaturesTrendingProducts(){
   return (
    <div id="marketing-panel-main-div" className="flex gap-[5px] w-[100%] bg-[#F1F0FF] justify-center relative items-center h-[40vh] sm:h-[60vh] ">
        <Image src="/items/group-153.png" alt="marketing" width={450} height={450} layout='responsive' className="max-w-[450px]" />
        <div className='ml-[20px]'>  
        <h1 className={josefinSans.className}><span className="text-[18px] text-[#151875] font-bold md:text-[30px]">Unique Features Of leatest & Trending Poducts</span></h1>
        <ul className='hidden text-[#ACABC3] leading-6 md:inline-block'>
          <li><div id="bullets" className='bg-red-600 w-[10px] h-[10px] rounded-full'/> <p className='text-[12px]'>All frames constructed with hardwood solids and laminates</p></li>
          <li><div  className='bg-green-600 w-[10px] h-[10px] rounded-full'></div> <p className='text-[12px]'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p></li>
          <li><div  className='bg-blue-600 w-[10px] h-[10px] rounded-full'></div> <p className='text-[12px]'>Arms, backs and seats are structurally reinforced</p></li>
        </ul> 

        <ul className='flex gap-[10px] items-center'>
          <li><button className="bg-[#FB2E86] text-white py-[8px] px-[30px] cursor-pointer text-[10px] mt-[5px]"><span className={josefinSans.className}>Add to Cart</span></button></li>

        <li className='flex flex-col items-start justify-center'>
        <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>B&B Italian Sofa</p>
        <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>$32.00</p>
        </li>
        </ul> 

        </div>
      </div>
   )    
}
