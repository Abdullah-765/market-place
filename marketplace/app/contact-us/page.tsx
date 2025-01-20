import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});



import { Button } from "@/components/ui/button";

import * as React from "react"

export default function ContactUs() {
  return (
    <div>
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Contact Us
        </h1>
        <li className="text-[10px]">
          <p>Home .</p>
          <p>Pages .</p>
          <p className="text-[#FB2E86]">Contact Us</p>
        </li>
      </div>

      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
            <div>
              <h2 className={`${josefinSans.className} text-[28px] font-bold text-[#151875] mb-4`}>
                Information About us
              </h2>
              <p className={`${josefinSans.className} text-[16px] text-[#8A8FB9] mb-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="flex space-x-4">
                <div className="w-7 h-7 bg-[#5725DF] rounded-full">
                </div>
                <div className="w-7 h-7 bg-[#FF27B7] rounded-full">
                </div>
                <div className="w-7 h-7 bg-[#37DAF3] rounded-full">
                </div>
              </div>
            </div>
            <div>
              <h2 className={`${josefinSans.className} text-[28px] font-bold text-[#151875] mb-4`}>
                Contact Way
              </h2>

              <ul className="grid grid-cols-2 w-fit gap-y-[20px] gap-x-[20px]">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#5726DF] rounded-full mr-2"></div>
                  <div className="flex flex-col">
                    <p className="text-gray-600">Tel: 877-67-88-99</p>
                    <p className="text-gray-600">E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#FB2E86] rounded-full mr-2"></div>
                  <p className="text-gray-600">Support Forum <br />For over 24hr</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#FFB265] rounded-full mr-2"></div>
                  <p className="text-gray-600">20 Margaret st, London <br />Great britain, 3NM98-LK</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#1BE982] rounded-full mr-2"></div>
                  <p className="text-gray-600">Free standard shipping <br />on all orders.</p>
                </div>
              </ul>


            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8 md:mt-[150px]">
            <div>
              <h2 className={`${josefinSans.className} text-[28px] font-bold text-[#151875] mb-4`}>
                Get In Touch
              </h2>
              <p  className={`${josefinSans.className} text-[16px] text-[#8A8FB9] mb-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input className="border border-gray-300 p-2 rounded" placeholder="Your Name*" type="text" />
                  <input className="border border-gray-300 p-2 rounded" placeholder="Your E-mail" type="email" />
                </div>
                <input className="border border-gray-300 p-2 rounded w-full mb-4" placeholder="Subject*" type="text" />
                <textarea className="border border-gray-300 p-2 rounded w-full mb-4" placeholder="Type Your Message*"></textarea>
                <Button variant={"ActivePage"} className={`${josefinSans.className} px-[30px] rounded-none`}>
                  Send Mail
                </Button>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <img alt="Illustration of two people working on computers with various communication icons around them" src="/contact-us-img.png" />
            </div>
          </div>
        </div>

      </div>


    </div>


  )
}


