import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Image from 'next/image'

export default function TopCategories(){
   return (
    <div id="Top-categories" className="mx-[20px]">
        <h2 className={`${josefinSans.className} mt-6 mb-[20px] text-center text-[26px] text-[#1A0B5B] font-bold`}>Top Categories</h2>
        <ul className="flex flex-wrap gap-[20px] items-center justify-center " id="top-categories">

        <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center px-[10px] bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative lg:w-[230px] lg:h-[230px] hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <Image src="/top-categories/image 23.png" alt="" width={140} height={140} layout="responsive" className='lg:max-w-[140px] max-w-[110px]' />
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] text-[14px] text-[#151875] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center px-[10px] bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative lg:w-[230px] lg:h-[230px] hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <Image src="/top-categories/image 1171.png" alt="" width={140} height={140} layout="responsive" className='lg:max-w-[140px] max-w-[110px]' />
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] text-[14px] text-[#151875] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center px-[10px] bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative lg:w-[230px] lg:h-[230px] hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <Image src="/top-categories/image 1168.png" alt="" width={140} height={140} layout="responsive" className='lg:max-w-[140px] max-w-[110px]' />
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] text-[14px] text-[#151875] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
          <div className='flex items-center flex-col gap-[10px] shadow-sm'>
          <div id='top-categories-image-hover-shadow-div' className="group flex items-center justify-center px-[10px] bg-[#F6F7FB] rounded-full h-[145px] w-[145px] relative lg:w-[230px] lg:h-[230px] hover:shadow-[-3px_5px_0px_0px_rgb(152,119,231)]">
          <Image src="/top-categories/image 1171.png" alt="" width={140} height={140} layout="responsive" className='lg:max-w-[140px] max-w-[110px]' />
          <button className='absolute bg-[#08D15F] p-[5px] text-[8px] text-white bottom-3 hidden group-hover:block'>View Shop</button>
          </div>
          <ul className="flex justify-center flex-col items-center w-[100%] text-[14px] text-[#151875] gap-[4px] ">
              <p className={josefinSans.className}>Mini LCW Chair</p>
              <p className={josefinSans.className}>$42.00</p>
            </ul>
          </div>
        </ul>
      </div>
   )    
}
