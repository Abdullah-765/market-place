import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function whatWeOffer(){
   return (
    <div className='mx-[20px] lg:mx-[150px]'>
      <h2 className={`${josefinSans.className} mb-[10px] text-center text-[26px] text-[#1A0B5B] font-bold`}>What Shopex Offer!</h2>
      <div className="mt-[40px]">
            <ul className='grid justify-evenly grid-cols-2 place-items-center gap-[20px] md:flex md:flex-wrap'>
              <li className={` shadow-evenly-around px-[20px] py-[40px] max-w-[210px] box-border h-auto flex flex-col items-center justify-center text-center gap-[10px]`} ><img src="/24-hours-support 1.png" alt="" />
                <h2 className={`${josefinSans.className} text-[#151875] text-[18px] font-semibold`}>24/7 Support</h2>
                <p className="hidden text-[#1A0B5B4D] sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </li>
              <li className={` shadow-evenly-around px-[20px] py-[40px] max-w-[210px] border-[#FF9100] border-b-2 box-border h-auto flex flex-col items-center justify-center text-center gap-[10px]`}><img src="/cashback 1.png" alt="" />
                <h2 className={`${josefinSans.className} text-[#151875] text-[18px] font-semibold`}>100% cashback</h2>
                <p className="hidden text-[#1A0B5B4D] sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </li>
              <li className={` shadow-evenly-around px-[20px] py-[40px] max-w-[210px] box-border h-auto flex flex-col items-center justify-center text-center gap-[10px]`}><img src="/group.png" alt="" />
                <h2 className={`${josefinSans.className} text-[#151875] text-[18px] font-semibold`}>Free Delivery</h2>
                <p className="hidden text-[#1A0B5B4D] sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </li>
              <li className={` shadow-evenly-around px-[20px] py-[40px] max-w-[210px] box-border h-auto flex flex-col items-center justify-center text-center gap-[10px]`}><img src="/premium-quality 1.png" alt="" />
                <h2 className={`${josefinSans.className} text-[#151875] text-[18px] font-semibold`}>Quality Product</h2>
                <p className="hidden text-[#1A0B5B4D] sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </li>
            </ul>
          </div>

    </div>
   )    
}
