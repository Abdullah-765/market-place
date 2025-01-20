import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "300", "400", "500", "600", "700"],
});
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"

import SidebarBlogs from "@/components/sidebar-blog";
import { Button } from "@/components/ui/button";
export default function BlogPage() {
    return (
    <div>
      <ul className="header-heading">
        <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
          <h1
            className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
          >
            Single Blog
          </h1>
          <li className="text-[10px]">
            <p>Home . </p>
            <p>Pages . </p>
            <p className="text-[#FB2E86]">Single Blog</p>
          </li>
        </div>
      </ul>

      <div className="flex items-center justify-center ">
        <div id="collapsable-sidebar">
          <div className="flex items-start justify-center relative">

            {/* main content */}
              <div className="mx-[20px] mt-[40px]">
                <ul className="flex flex-col gap-[30px] items-center w-fit max-w-[800px] justify-center mt-[40px] " >
                  <div className="flex items-center justify-center flex-col max-w-[800px]">
                    <img src="/blog-page/main-blog-1.png" alt="" className="bg-[#F6F7FB] rounded-md mb-[10px]" />
                    <div className='p-[10px]'>
                      <ul className="flex items-center bg-white w-[100%] gap-[4px]">
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px] mr-[50px]`}><img src="/latest-blog/pen-vector.png" alt="" className='object-contain' /><span className="bg-[#FFE7F9]">Surf Auxion</span></li>
                        <li className={`${josefinSans.className} text-[#1A0B5B] items-center flex gap-[5px]`}><img src="/latest-blog/calender-vector.png" alt="" className='object-contain' /><span className="bg-[#FFECE2]">Aug 09 2020</span></li>
                      </ul>
                      <ul>
                        <h3 className={`${josefinSans.className} text-[18px] text-[#1A0B5B]  font-bold mt-[20px]`}>Mauris at orci non vulputate diam tincidunt nec.</h3>
                        <p className='text-[#8A8FB9] leading-6 text-[14px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                        <p className='text-[#8A8FB9] leading-6 text-[14px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                        <div className='bg-[#FAFAFB] border-l border-[#FC45A0] mt-[20px] leading-6 px-[10px] pt-[20px] pb-[10px] text-[16px] italic text-[#969CB4]'>
                          <p className={josefinSans.className}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequattoamk risusu”</p>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-[10px] md:justify-center">
                    <li><img src="/single-blog/single-blog-2.png" alt="" className="max-w-[380px]" /></li>
                    <li><img src="/single-blog/single-blog-1.png" alt="" className="max-w-[380px]"/></li>
                  </div>
                        <p className='text-[#8A8FB9] leading-6 text-[14px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
      <div className="mx-[20px] mt-[40px] flex flex-wrap gap-[20px] items-center justify-between">
        <ul className="max-w-[170px] p-[5px] box-border">
          <li>
            <img src="/single-blog/1.png" alt="" />
          </li>
          <li className="flex-col justify-between items-start mt-[10px]">
            <h3 className={`${josefinSans.className} text-[22px] `}>Quam sed</h3>

          </li>

          <ul className="flex justify-between">
                      <div className={`${josefinSans.className} flex items-center gap-[10px]`}><p className="text-[#151875]">$32.00</p>
                      <p className="text-[#FF38B0] line-through">$56.00</p></div>
                      <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>

          </ul>
        </ul>
        <ul className="max-w-[170px] p-[5px]">
          <li>
            <img src="/single-blog/2.png" alt="" />
          </li>
          <li className="flex-col justify-between items-start mt-[10px]">
            <h3 className={`${josefinSans.className} text-[22px] `}>Quam sed</h3>

          </li>

          <ul className="flex justify-between">
                      <div className={`${josefinSans.className} flex items-center gap-[10px]`}><p className="text-[#151875]">$32.00</p>
                      <p className="text-[#FF38B0] line-through">$56.00</p></div>
                      <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>

          </ul>
        </ul>

        <ul className="max-w-[170px] p-[5px]">
          <li>
            <img src="/single-blog/3.png" alt="" />
          </li>
          <li className="flex-col justify-between items-start mt-[10px]">
            <h3 className={`${josefinSans.className} text-[22px] `}>Quam sed</h3>

          </li>

          <ul className="flex justify-between">
                      <div className={`${josefinSans.className} flex items-center gap-[10px]`}><p className="text-[#151875]">$32.00</p>
                      <p className="text-[#FF38B0] line-through">$56.00</p></div>
                      <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>

          </ul>
        </ul>

        <ul className="max-w-[170px] p-[5px]">
          <li>
            <img src="/single-blog/4.png" alt="" />
          </li>
          <li className="flex-col justify-between items-start mt-[10px]">
            <h3 className={`${josefinSans.className} text-[22px] `}>Quam sed</h3>

          </li>

          <ul className="flex justify-between">
                      <div className={`${josefinSans.className} flex items-center gap-[10px]`}><p className="text-[#151875]">$32.00</p>
                      <p className="text-[#FF38B0] line-through">$56.00</p></div>
                      <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>

          </ul>
        </ul>
      </div>

      <p className='text-[#8A8FB9] leading-6 text-[14px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

      <p className='text-[#8A8FB9] leading-6 text-[14px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                </ul>
                <div className="flex items-center justify-center gap-[10px] w-full mt-[20px]">
                    <img src="/blog-page/face.png" alt="" />
                    <img src="/blog-page/insta.png" alt="" />
                    <img src="/blog-page/twitter.png" alt="" />
                  </div>

                  
<Pagination className="mt-[30px] flex justify-between bg-[#F7F8FB]">
  <PaginationPrevious className="text-[#8A8FB9] border-none"/>
      <PaginationContent>
        
      </PaginationContent>
      <PaginationNext className="text-[#8A8FB9] border-none"/>
    </Pagination>

    <div className="w-[80%] mt-[20px]">

<div className="flex flex-col gap-[20px]">
<ul className="flex items-center gap-[10px] w-full border p-[20px] shadow-evenly-around">
         <li><img src="/single-blog/bottom-card-1.png" alt="" className="max-w-[130px]"/></li>
         <ul>
            <li className="flex items-center">                        <h3 className={`${josefinSans.className} text-[18px] text-[#1A0B5B]  font-[600] mr-[20px]`}>Sapien ac</h3>
            <h3 className="text-[#A3A2B6] text-[14px]">Jan 09 2020</h3>
            </li>
            <li>
            <p className='text-[#8A8FB9] leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
            </li>
         </ul>
      </ul>
      <ul className="flex items-center gap-[10px] w-full border p-[20px] shadow-evenly-around">
         <li><img src="/single-blog/bottom-card-2.png" alt="" className="max-w-[130px]"/></li>
         <ul>
            <li className="flex items-center">                        <h3 className={`${josefinSans.className} text-[18px] text-[#1A0B5B]  font-[600] mr-[20px]`}>Augue conva</h3>
            <h3 className="text-[#A3A2B6] text-[14px]">Jan 09 2020</h3>
            </li>
            <li>
            <p className='text-[#8A8FB9] leading-6 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
            </li>
         </ul>
      </ul>

</div>

      <ul className="w-full flex flex-col mt-[70px]">
        <li className="flex gap-[30px] flex-wrap"><input placeholder="Your Name*" type="text" className="flex-1 h-[45px] text-[14px] p-[8px] border border-[#8A8FB9] rounded-none outline-none focus:outline-none"/>
        <input placeholder="Write Your Email*" type="text" className="flex-1 h-[45px] text-[14px] p-[8px] border border-[#8A8FB9] rounded-none outline-none focus:outline-none"/></li>
        <li>
        <textarea placeholder="Write Your Email*"
         className="flex-1 mt-[30px] h-[170px] text-[14px] p-[15px] border border-[#8A8FB9] rounded-none outline-none focus:outline-none"/>
        </li>


                    <li className="mt-[20px]">
                      <div className="relative ">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox1"
                        className="flex items-center justify-center w-4 h-4 bg-[#FB2E86] text-[white] font-bold peer-checked:text-[#FB2E86] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>

                      </div>
                      <p className="text-[14px] text-[#8A91AB]">Save my name, email, and website in this browser for the next time I comment.</p>
                    </li>
                    <Button className="w-[100%] text-[12px] rounded-none bg-[#FB2E86] mt-[30px] p-[10px] hover:bg-[#FB2E86] hover:opacity-[0.9]
 ">Continue Shipping</Button>

      </ul>
    </div>
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
