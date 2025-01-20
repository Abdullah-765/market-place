import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

import SidebarBlogs from "@/components/sidebar-blog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import Link from "next/link";

export default function BlogPage() {
    return (
    <div>
      <ul id="header-heading">
        <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
          <h1
            className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
          >
            Blog Page
          </h1>
          <li className="text-[10px]">
            <p>Home . </p>
            <p>Pages . </p>
            <p className="text-[#FB2E86]">Blog Page</p>
          </li>
        </div>
      </ul>

      <div className="flex items-center justify-center">
        <div id="collapsable-sidebar">
          <div className="flex items-center justify-center relative">
          
                      {/* main content */}
                      <div>
              <div className="mx-[20px] mt-[40px]">
                <ul className="flex flex-col gap-[30px] items-center w-fit justify-center mt-[40px] " >

                  <div className="flex items-center justify-center flex-col max-w-[600px]">
                    <img src="/blog-page/main-blog-1.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]" />
                    <div className='p-[10px]'>
                      <ul className="flex items-center bg-white w-[100%] gap-[4px]">
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain' /><span className="bg-[#FFE7F9]">Surf Auxion</span></li>
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain' /><span className="bg-[#FFECE2]">Aug 09 2020</span></li>
                      </ul>
                      <ul>
                        <h3 className={`${josefinSans.className} text-[15px] text-[#1A0B5B]  font-bold mt-[10px]`}>Mauris at orci non vulputate diam tincidunt nec.</h3>
                        <p className='text-[#72718F] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <Link href={"/single-blog"} className='leading-6 font-border text-[#1A0B5B] hover:underline hover:text-[#FB2E86]'>Read More</Link>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-col max-w-[600px]">
                    <img src="/blog-page/main-blog-2.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]" />
                    <div className='p-[10px]'>
                      <ul className="flex items-center bg-white w-[100%] gap-[4px]">
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain' /><span className="bg-[#FFE7F9]">Surf Auxion</span></li>
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain' /><span className="bg-[#FFECE2]">Aug 09 2020</span></li>
                      </ul>
                      <ul>
                        <h3 className={`${josefinSans.className} text-[15px] text-[#1A0B5B]  font-bold mt-[10px]`}>Mauris at orci non vulputate diam tincidunt nec.</h3>
                        <p className='text-[#72718F] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <Link href={"/single-blog"} className='leading-6 font-border text-[#1A0B5B] hover:underline hover:text-[#FB2E86]'>Read More</Link>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-col max-w-[600px]">
                    <img src="/blog-page/main-blog-3.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]" />
                    <div className='p-[10px]'>
                      <ul className="flex items-center bg-white w-[100%] gap-[4px]">
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain' /><span className="bg-[#FFE7F9]">Surf Auxion</span></li>
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain' /><span className="bg-[#FFECE2]">Aug 09 2020</span></li>
                      </ul>
                      <ul>
                        <h3 className={`${josefinSans.className} text-[15px] text-[#1A0B5B]  font-bold mt-[10px]`}>Mauris at orci non vulputate diam tincidunt nec.</h3>
                        <p className='text-[#72718F] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <Link href={"/single-blog"} className='leading-6 font-border text-[#1A0B5B] hover:underline hover:text-[#FB2E86]'>Read More</Link>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>


<Pagination className="mt-[30px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>

            </div>
            {/* Sidebar */}
            <SidebarBlogs/>


          </div>
        </div>
      </div>
<div className="flex flex-col justify-center items-center">
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />

</div>
    </div>




  );
}
