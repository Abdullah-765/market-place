import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})

export default function LatestBlog(){
   return (
    <div className="mx-[20px] lg:mx-[150px]">
      <img src="/top-categories/promotional-banner.png" className='justify-self-center' alt="" />
        <h2 className={`${josefinSans.className} mt-6 mb-1 text-center text-[26px] text-[#1A0B5B] font-bold`}>Latest Blog</h2>
        
        <ul className="flex flex-wrap gap-[40px] items-center justify-center mt-[40px] lg:grid-cols-3 " >

        <div className="flex items-center justify-center flex-col w-[280px] shadow-md">
            <img src="/latest-blog/latest-blog-1.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]"/>
            <div className='p-[10px]'>
            <ul className="flex items-center bg-white w-[100%] gap-[4px]">
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain'/>Saber Ali</li>
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain'/>Saber Ali</li>
            </ul>
            <ul>
            <h3 className={`${josefinSans.className} text-[15px] text-[#1A0B5B]  font-bold mt-[10px]`}>Top esssential Trends in 2021</h3>
            <p className='text-[#72718F] leading-6'>More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <p className='leading-6 underline text-[#1A0B5B]'>Read More</p>
            </ul>
            </div>
          </div>  
          <div className="flex items-center justify-center flex-col w-[280px] shadow-md">
            <img src="/latest-blog/latest-blog-1.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]"/>
            <div className='p-[10px]'>
            <ul className="flex items-center bg-white w-[100%] gap-[4px]">
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain'/>Saber Ali</li>
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain'/>Saber Ali</li>
            </ul>
            <ul>
            <h3 className={`${josefinSans.className} text-[15px] text-[#FB2E86] mt-[10px] font-bold`}>Top esssential Trends in 2021</h3>
            <p className='text-[#72718F] leading-6'>More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <p className='leading-6 underline text-[#FB2E86]'>Read More</p>
            </ul>
            </div>
          </div>  
          <div className="flex items-center justify-center flex-col w-[280px] shadow-md">
            <img src="/latest-blog/latest-blog-1.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]"/>
            <div className='p-[10px]'>
            <ul className="flex items-center bg-white w-[100%] gap-[4px]">
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain'/>Saber Ali</li>
              <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain'/>Saber Ali</li>
            </ul>
            <ul>
            <h3 className={`${josefinSans.className} text-[15px] text-[#1A0B5B] font-bold mt-[10px]`}>Top esssential Trends in 2021</h3>
            <p className='text-[#72718F] leading-6'>More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <p className='leading-6 underline text-[#1A0B5B]'>Read More</p>
            </ul>
            </div>
          </div>  
        </ul>
      </div>
   )    
}
