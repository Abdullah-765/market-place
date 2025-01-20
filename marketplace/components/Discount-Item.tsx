import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Image from 'next/image'

export default function DiscountItem(){
   return (
    <div id="Discount-item" className='mx-[20px] lg:mx-[150px]'>
    <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Discount Item</h2>
      <ul className="text-center text-[#1A0B5B] flex gap-[20px] items-center justify-center text-[12px] mb-3">
        <li className="text-[#FB2E86] underline">Wood Chair &#x2022;</li>
        <li>Plastic Chair</li>
        <li>Sofa Collection</li>
      </ul>

      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <div>
          <Image src="/items/discount-item.png" alt="" width={350} height={350} layout='responsive' className='min-w-[350px]' />
          </div>
        <div>
        <h1 className={`${josefinSans.className} text-[30px] text-[#1A0B5B] font-bold`}>20% Discount Of All Products</h1>
          <h3 className={`${josefinSans.className} text-[14px] text-[#FB2E86]`}>Eams Sofa Compact</h3>
          <p className='text-[#B7BACB] text-[12px] mb-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          <ul className='flex flex-col gap-y-[5px] text-[#B7BACB] text-[12px] gap-x-[20px]'>
            <li>&#10003; Material expose like metals</li>
            <li>&#10003; Clear lines and geomatric figures</li>
            <li>&#10003; Simple neutral colours.</li>
            <li>&#10003; Material expose like metals</li>
          </ul>
          <button className={`${josefinSans.className} bg-[#FB2E86] text-white py-[10px] px-[28px] cursor-pointer text-[12px] mt-[10px]`}>Shop Now</button>
        </div>
      </div>
    </div>
   )    
}   
