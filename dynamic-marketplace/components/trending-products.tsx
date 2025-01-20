import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Image from 'next/image'

export default function TrendingProducts(){
   return (
    <div id="Trending-products" className="mx-[20px] lg:mx-[150px]">
        <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Trending Products</h2>
        <ul className="flex flex-wrap gap-[20px] justify-center items-center" id="featured-products">
          <div className="flex items-center justify-center flex-col shadow-sm lg:min-w-[200px]">
            <img src="/Trending-products/image 1171.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px]">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm lg:min-w-[200px]">
            <img src="/Trending-products/image 1170.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px] ">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
              
            </ul>
          </div>

          <div className="flex items-center justify-center flex-col shadow-sm lg:min-w-[200px]">
            <img src="/Trending-products/image 31.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px] ">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-col shadow-sm lg:min-w-[200px]">
            <img src="/Trending-products/image 32.png" alt="" className="bg-[#F6F7FB] h-[70%] mb-[10px]"/>
            <ul className="flex justify-center flex-col items-center bg-white w-[100%] gap-[4px] py-[10px]">
              <h3 className="text-[#1A0B5B] font-[600] text-[10px]">Cantiliver Chair</h3>
              <ul>
                <p className={`${josefinSans.className} inline-block mr-[10px] text-[#151875]`}>$22.00</p>
                <p className={`${josefinSans.className}  inline-block opacity-60 line-through`}>$42.00</p>
              </ul>
            </ul>
          </div>
        </ul>

        <ul className="flex flex-wrap gap-[20px]">
        <div className=' h-auto p-[10px] bg-[#FFF6FB] flex-1 flex justify-between box-border lg:p-[30px]'>
          <li className='flex flex-col justify-stretch items-start'>
            <h2 className={`${josefinSans.className} text-[#1A0B5B] text-[18px] text-nowrap font-bold`}>23% off in all products</h2>
            <h3 className="text-[#FB2E86] underline text-[10px]">Shop Now</h3>
          </li>
            <Image src="/Trending-products/image 1162.png" alt="" width={110} height={110} layout='responsive'  className='max-w-[220px] max-h-[220px]' />
        </div>  
        <div className='grid grid-cols-2 gap-[20px]'>
        <div className=' h-auto p-[10px] bg-[#EEEFFB] flex flex-col justify-between '>
          <li className='flex flex-col justify-stretch items-start'>
            <h2 className={`${josefinSans.className} text-[#1A0B5B] text-[18px] font-bold`}>23% off in all products</h2>
            <h3 className="text-[#FB2E86] underline text-[10px]">View Collection</h3>
          </li>
          <Image src="/Trending-products/image 1161.png" width={110} height={110} layout='responsive' alt=""  />
        </div>  
        <ul className=' h-auto p-[10px] gap-[20px] flex flex-col'>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
            <li>
              <img src="/Trending-products/image 30.png" alt="" className='w-[70px] py-[2px] px-[10px] bg-[#F6F7FB]'/>
              <p className={`${josefinSans.className} text-[12px] text-[#151875]`}>Executive Seat chair <br /><span className='text-[#151875]'>$32.00</span></p>
            </li>
        </ul>  
        </div>
        </ul>
      </div>
   )    
}
