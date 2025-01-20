'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { Josefin_Sans } from 'next/font/google'
import Link from "next/link"
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  // State to track screen width
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 700);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle visibility of the menu
  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };

  if (!isLargeScreen) {
    return (
      <div id="navbar">
        <div id="btn-toggle" className="bg-[#7E33E0] p-[5px] sticky w-[100%] m-0 flex justify-center cursor-pointer" onClick={toggleDiv}>
          <Image src="/imgs/hamburger-ico.png" width={16} height={16} alt="" />
        </div>
        {isVisible && (
          <div>
            <div className="bg-[#7E33E0] text-white flex justify-between py-[20px] px-[10px]">
              <ul id="div-number-mail">
                <li><Image src="/imgs/uil_envelope-alt.png" width={16} height={16} alt="msg-icon" /><p className="truncate .">mhhasanul@gmail.com</p></li>
                <li><Image src="/imgs/bx_bx-phone-call.png" width={16} height={16} alt="call-icon" />(12345)67890</li>
              </ul>
              <ul className="flex flex-wrap  gap-x-[10px] justify-start ">
                <li>English <Image src="/imgs/arrow-down-icn.png" width={16} height={16} alt="arrow" /></li>
                <li>USD <Image src="/imgs/arrow-down-icn.png" width={16} height={16} alt="arrow" /></li>
                <Link href={"/login"} className="flex items-center gap-[5px]">Login<Image src="/imgs/carbon_user.png" width={16} height={16} alt="user" /></Link>
                <Link href={"/wishlist"} className="flex items-center gap-[5px]">Wishlist<Image src="/imgs/uil_heart-alt.png" width={16} height={16} alt="wishlist" /></Link>
                <Link href={"/shop-cart"} className="flex items-center gap-[5px]">Cart<Image src="/imgs/fluent_cart-24-regular.png" width={24} height={24} alt="cart" /></Link>
              </ul>

            </div>

            <ul id="links" className="flex flex-col gap-x-[20px] flex-wrap justify-start align-center text-[#0D0E43] px-[10px] mt-[10px] ">
              <li className="text-[#FB2E86]"><Link href={'/'}>Home</Link></li>
              <Popover>
                <PopoverTrigger asChild className="w-fit p-0 m-0 text-[12px] font-[500]">
                  <Button variant="ghost">Pages</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[100px]">
                    <div className="grid gap-2">
                      <div className="items-center gap-4">
                        <Link href={'/about-us'}>About Us</Link>
                      </div>
                      <div className="items-center gap-4">
                      <Link href={'/faqs'}>FAQs</Link>
                      </div>
                      <div className="items-center gap-4">
                      <Link href={'/faqs'}>Shop List</Link>
                      </div>
                    </div>
                </PopoverContent>
              </Popover>
              <li><Link href={"/shop-grid-default"} className="cursor-pointer">Products</Link></li>
              <li><Link href={"/blog-page"} className="cursor-pointer">Blog</Link></li>
              <li><Link href={"/shop-left-sidebar"} className="cursor-pointer">Shop</Link></li>
              <li><Link href={"/about-us"} className="cursor-pointer">About Us</Link></li>
              <li><Link href={"/contact-us"} className="cursor-pointer">Contact</Link></li>
            </ul>

          </div>
        )}
        <div className="flex justify-between mt-[10px] px-[10px] ">
          <li className={josefinSans.className} id="name"><Link href={"/"}>Hekto</Link></li>
          <li className="flex border-[#E7E6EF] border-[1px] h-[30px]">
            <input id="search" type="text" className=" h-[25px] outline-none border-none flex-shrink" />
            <button className="bg-[#FB2E86] h-[30px] m-0 px-[5px]"><Image src="/imgs/uil_search.png" width={22} height={22} alt="cart" /></button>
          </li>

        </div>
      </div>
    )
  }

  return (
    <div id="navbar">
      <div>
        <div className="bg-[#7E33E0] text-white flex justify-between p-[10px]">
          <ul className="div-number-mail flex gap-[10px]">
            <li><Image src="/imgs/uil_envelope-alt.png" width={16} height={16} alt="msg-icon" /><p className="truncate .">mhhasanul@gmail.com</p></li>
            <li><Image src="/imgs/bx_bx-phone-call.png" width={16} height={16} alt="call-icon" />(12345)67890</li>
          </ul>
          <ul className="flex flex-wrap  gap-x-[10px] justify-start ">
            <li>English <Image src="/imgs/arrow-down-icn.png" width={16} height={16} alt="arrow" /></li>
            <li>USD <Image src="/imgs/arrow-down-icn.png" width={16} height={16} alt="arrow" /></li>
            <Link href={"/login"} className="flex items-center gap-[5px]">Login<Image src="/imgs/carbon_user.png" width={16} height={16} alt="user" /></Link>
            <Link href={"/wishlist"} className="flex items-center gap-[5px]">Wishlist<Image src="/imgs/uil_heart-alt.png" width={16} height={16} alt="wishlist" /></Link>
            <Link href={"/shop-cart"} className="flex items-center gap-[5px]">Cart<Image src="/imgs/fluent_cart-24-regular.png" width={24} height={24} alt="cart" /></Link>
          </ul>

        </div>

      </div>

      <div className="flex justify-between items-center mt-[10px] px-[10px] ">
        <li className={josefinSans.className} id="name"><Link href={"/"}>Hekto</Link></li>
        <ul id="links" className="flex gap-x-[20px] flex-wrap justify-start align-center text-[#0D0E43] px-[10px] mt-[10px] ">
          <li className="text-[#FB2E86]"><Link href={'/'}>Home</Link></li>
          <Popover>
                <PopoverTrigger asChild className="w-fit p-0 m-0 h-fit text-[12px] text-[black] font-[500]">
                  <Button variant="ghost">Pages</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[100px]">
                    <div className="grid gap-2">
                      <div className="items-center gap-4">
                        <Link href={'/about-us'}>About Us</Link>
                      </div>
                      <div className="items-center gap-4">
                      <Link href={'/faqs'}>FAQs</Link>
                      </div>
                      <div className="items-center gap-4">
                      <Link href={'/faqs'}>Shop List</Link>
                      </div>
                    </div>
                </PopoverContent>
              </Popover>
          <li><Link href={"/shop-grid-default"} className="cursor-pointer">Products</Link></li>
          <li><Link href={"/blog-page"} className="cursor-pointer">Blog</Link></li>
          <li><Link href={"/shop-left-sidebar"} className="cursor-pointer">Shop</Link></li>
          <li><Link href={"/about-us"} className="cursor-pointer">About Us</Link></li>
          <li><Link href={"/contact-us"} className="cursor-pointer">Contact</Link></li>
        </ul>
        <li className="flex border-[#E7E6EF] border-[1px] h-[30px]">
          <input id="search" type="text" className=" h-[25px] outline-none border-none flex-shrink" />
          <button className="bg-[#FB2E86] h-[30px] m-0 px-[5px]"><Image src="/imgs/uil_search.png" width={22} height={22} alt="cart" /></button>
        </li>

      </div>
    </div>
  )
}
