import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});



import { Button } from "@/components/ui/button";

import * as React from "react"
import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          About Us
        </h1>
        <li className="text-[10px]">
          <p>Home .</p>
          <p>Pages .</p>
          <p className="text-[#FB2E86]">About Us</p>
        </li>
      </div>

      <div className="main-container flex flex-col items-center justify-center">
        <div className="mt-[40px] flex flex-col items-center justify-center px-[20px] ">
          <ul className="flex items-center justify-center flex-col gap-[20px] md:flex-row max-w-[900px]">
            <img src="/about-us/1.png" alt="" className="h-auto w-[80%] max-w-[450px] shadow-blue-dark rounded-md box-border" />
            <li className="flex flex-col items-start gap-[30px]"><h1 className={`${josefinSans.className} text-[#101750] text-[24px] font-bold lg:text-[32px] mt-[20px]`}>
              Know About Our Ecomerce
              <br />Business, History
            </h1>
              <p className='text-[#8A8FB9] leading-6 text-[14px]'>Lorem ipsum dolor sit amet, consecteturadipiscingelit. Mattis nequeultricesmattisaliquam, malesuada diam est. Malesuadasemtristiqueameterat vitae eget dolor lobortis. Accumsanfaucibus vitae lobortisquisbibendumquam.</p>
              <Button variant={'ActivePage'} className="bg-[#FB2E86] rounded-sm px-[20px]"><Link href={"/contact-us"}>Contact us</Link></Button>
            </li>
          </ul>
          <div className="mt-[40px]">
            <h2 className={`${josefinSans.className} mb-[40px] mt-[40px] text-center text-[26px] text-[#1A0B5B] font-bold`}>Our Features</h2>
            <ul className='grid justify-evenly grid-cols-2 gap-[20px] md:flex md:flex-wrap'>
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

        <div className="our-clients-say mt-[60px] px-[40px] flex mb-[60px] items-center justify-center bg-[#FBFBFF] w-full h-[50vh]">
          <div className="max-w-[600px]">
            <h2 className={`${josefinSans.className} mb-[40px] mt-[40px] text-center text-[32px] text-[#000000] font-bold`}>Our Clients Say!</h2>
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-4">
                <img alt="Profile picture of a person smiling" className="w-[60px] h-[60px] rounded-sm" src="/about-us/bottom1.png" />
                <img alt="Profile picture of a person wearing glasses" className="w-[60px] h-[60px] rounded-sm" src="/about-us/bottom2.png" />
                <img alt="Profile picture of a person in a suit" className="w-[60px] h-[60px] rounded-sm" src="/about-us/bottom3.png" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Selina Gomez
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Ceo At Webecy Digital
              </p>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="block w-4 h-1 bg-pink-500">
                </span>
                <span className="block w-8 h-1 bg-pink-300">
                </span>
                <span className="block w-4 h-1 bg-pink-500">
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>


  )
}


