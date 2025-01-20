import { Button } from "@/components/ui/button";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


import Image from "next/image";
import * as React from "react"

export default function NotFound() {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          404 Not Found
        </h1>
        <li className="text-[10px]">
          <p>Home .</p>
          <p>Pages .</p>
          <p className="text-[#FB2E86]">404 Not Found</p>
        </li>
      </div>

      <div className="flex flex-col items-center gap-[20px] mx-[20px]">
        <Image src="/404-not-found.png" alt="" width={800} height={800} layout="responsive" />
        <h2 className={`${josefinSans.className} text-[20px] text-[#152970] font-bold`}>oops! The page you requested was not found!</h2>
      <Button variant={'ActivePage'} className= {`${josefinSans.className} rounded-none px-[25px]`}>Back to Home</Button>
      </div>
      <div className="flex justify-center items-center">
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
      </div>
      </div>

  )
}


