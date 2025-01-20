import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});



import { Button } from "@/components/ui/button";

import * as React from "react"

export default function Faqs() {
  return (
    <div>
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          FAQ
        </h1>
        <li className="text-[10px]">
          <p>Home .</p>
          <p>Pages .</p>
          <p className="text-[#FB2E86]">FAQ</p>
        </li>
      </div>

    <div className={`${josefinSans.className} container mx-auto p-6 mt-[40px]`}>
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3">
                <h1 className="text-3xl font-semibold text-blue-900 mb-6">Generel Information</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Eu dictumst cum at sed euismood condimentum?</h2>
                    <p className="text-gray-600 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Magna bibendum est fermentum eros.</h2>
                    <p className="text-gray-600 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Odio muskana hak eris conseekin sceleton?</h2>
                    <p className="text-gray-600 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Elit id blandit sabara boi velit gua mara?</h2>
                    <p className="text-gray-600 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
            </div>
            <div className="lg:w-[450px] bg-gray-50 p-[30px]">
                <h2 className="text-xl font-semibold text-blue-900 mb-6">Ask a Question</h2>
                <form className="text-[14px]">
                    <div className="mb-4">
                        <input type="text" placeholder="Your Name*" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Subject*" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"/>
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Type Your Message*" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FB2E86] h-32"></textarea>
                    </div>
                    <button type="submit" className="px-[30px] py-3 bg-pink-500 text-white font-semibold hover:bg-pink-600">Send Mail</button>
                </form>
            </div>
        </div>
    </div>

    </div>


  )
}


