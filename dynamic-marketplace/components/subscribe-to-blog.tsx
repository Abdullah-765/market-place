import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function SubscribeToBlog(){
   return (
    <div className="w-[100%] h-[180px] flex items-center justify-center flex-col relative lg:h-[350px]">
      <img src="/top-categories/Rectangle 102.png" alt="" className='h-full w-full absolute z-[-1]'/>
        <h1 className={`${josefinSans.className} font-bold text-center text-[24px] text-[#151875]`}>Get Leatest Update By Subscribe <br /> 0ur Newslater</h1>
        <button className={`${josefinSans.className} bg-[#FB2E86] w-fit text-white py-[10px] px-[32px] cursor-pointer text-[12px] mt-[10px]`}>Shop Now</button>
      </div>
      
   )    
}
