'use client'

import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ghost, Menu } from "lucide-react";
import { useState } from "react";

export default function SidebarBlogs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center">
        <div id="collapsable-sidebar">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-1 left-2 z-50 p-1 bg-white rounded shadow"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center justify-center relative">

            {/* Sidebar */}
            <div
              id="sidebar"
              className={`
  fixed lg:static top-0 left-0 h-screen lg:h-auto overflow-y-auto lg:overflow-visible top-0 left-0 h-screen w-fit 
  bg-white shadow-lg lg:shadow-none
  transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0 lg:w-auto
  overflow-y-auto z-40
  mx-0 lg:mx-[20px] 
  mt-[30px] flex flex-col gap-[20px]
  p-4 pb-[100px] lg:p-0
`}
            >
              {/* Existing sidebar content... */}
              <ul className="mx-[20px] gap-y-[30px] flex flex-col">
                <div className="Search">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}>Search</h2>
                  <div className="flex items-center justify-center border-[#BDBDD8] px-[5px] border w-fit">
                    <Input placeholder="Search for posts" className="border-none rounded-none shadow-none outdivne-none"></Input><img src="/search-grey-sidebar.png" alt="" />
                  </div>
                </div >
                <div className="Categories">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Categories</h2>
                  <div className="flex items-center w-full">
                    <ul className="grid grid-cols-2 gap-[10px]">
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Hobbies (14)</Button></li>
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Women (21)</Button></li>
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Women (21)</Button></li>
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Women (21)</Button></li>
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Women (21)</Button></li>
                      <li><Button variant={"ghost"} className="text-[12px] bg-white text-[#3F509E] shadow-none active:bg-[#F939BF] active:text-white">Women (21)</Button></li>
                    </ul>
                  </div>
                </div >
                <div className="Recent-Post">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Recent post</h2>
                  <div className="flex items-center w-full">
                    <table className="w-fit border-collapse">
                      <tbody>
                        <tr>
                          <td className="flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/1.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>It is a long established fact</p>
                              <p className="text-[12px] text-gray-500">Aug 09 2020</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/2.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Vel fascinus purse</p>
                              <p className="text-[12px] text-gray-500">Color: Red</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/3.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Ac wrap watches</p>
                              <p className="text-[12px] text-gray-500">Color: Black</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/4.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Ac wrap watches</p>
                              <p className="text-[12px] text-gray-500">Color: Black</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div >
                <div className="Sale-Product">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Sales Product</h2>
                  <div className="flex items-center w-full">
                    <table className="w-fit border-collapse">
                      <tbody>
                        <tr>
                          <td className="flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/5.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Elit ornare in enim mauris.</p>
                              <p className="text-[12px] text-gray-500">Aug 09 2020</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/6.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Viverra pulvinar et enim.</p>
                              <p className="text-[12px] text-gray-500">Aug 09 2020</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="pt-4 flex items-center gap-[5px]">
                            <div className="relative min-w-[70px] min-h-[50px] max-w-[70px] max-h-[50px]">
                              <img src="/blog-page/7.png" alt="Product 1" />                      </div>
                            <div>
                              <p className={`${josefinSans.className} text-[#3F509E] text-[14px]`}>Mattis varius donec fdsfd</p>
                              <p className="text-[12px] text-gray-500">Aug 09 2020</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div >
                <div className="Offer-Product">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Offer Product</h2>
                  <div className="flex items-center w-full">
                    <ul className="grid grid-cols-2 gap-y-[20px] gap-x-[15px]">
                      <li className="flex flex-col gap-[3px]"><img src="/blog-page/8.png" alt="" /><h2 className="text-[#151875] font-semibold">Duis lectus est.</h2><p className="text-[#8A8FB9] text-[10px]">$12.00 - $15.00</p></li>
                      <li className="flex flex-col gap-[3px]"><img src="/blog-page/9.png" alt="" /><h2 className="text-[#151875] font-semibold">Duis lectus est.</h2><p className="text-[#8A8FB9] text-[10px]">$12.00 - $15.00</p></li>
                      <li className="flex flex-col gap-[3px]"><img src="/blog-page/10.png" alt="" /><h2 className="text-[#151875] font-semibold">Duis lectus est.</h2><p className="text-[#8A8FB9] text-[10px]">$12.00 - $15.00</p></li>
                      <li className="flex flex-col gap-[3px]"><img src="/blog-page/11.png" alt="" /><h2 className="text-[#151875] font-semibold">Duis lectus est.</h2><p className="text-[#8A8FB9] text-[10px]">$12.00 - $15.00</p></li>

                    </ul>
                  </div>
                </div >
                <div className="Follow">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Follow</h2>
                  <div className="flex items-center gap-[10px] w-full">
                    <img src="/blog-page/face.png" alt="" />
                    <img src="/blog-page/insta.png" alt="" />
                    <img src="/blog-page/twitter.png" alt="" />
                  </div>
                </div >
                <div className="tags">
                  <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mb-[20px]`}>Tags</h2>
                  <ul className="flex items-center flex-wrap gap-[10px] w-full">
                    <li className="text-[#151875] underline text-[14px]">General</li>
                    <li className="text-[#FB2E86] underline text-[14px]">Atsanil</li>
                    <li className="text-[#151875] underline text-[14px]">Insas.</li>
                    <li className="text-[#151875] underline text-[14px]">Bibsaas</li>
                    <li className="text-[#151875] underline text-[14px]">Nulla.</li>
                  </ul>
                </div >
              </ul>
            </div>


          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      </div>
    </div>




  );
}
