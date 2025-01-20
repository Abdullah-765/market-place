import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Link from 'next/link'

export default function Footer(){
   return (
    <div>
      <div className='mt-[50px] w-[100%] flex flex-col h-auto bg-[#EEEFFB] p-[10px] lg:items-center justify-center lg:px-[150px] py-[50px] lg:flex-row lg:gap-[50px]'>
      <div>
        <li className={`${josefinSans.className} text-[24px] font-bold mb-[10px]`}>Hekto</li>
            <li className="flex border-none bg-white w-fit border-[1px] h-[35px] rounded-sm p-[5px] items-center">
                <input type="text" className="h-[30px] text-[12px] p-[10px] rounded-sm outline-none border-none" placeholder='Enter Email Address'/>
                <button className="bg-[#FB2E86] h-[30px] m-0 px-[5px] w-[65px] text-[10px] rounded-sm text-white">Sign Up</button>
            </li>
        <li className='text-[#8A8FB9] text-[10px] leading-[18px] mt-[10px]'><p>Contact Info <br />17 Princess Road, London, Greater London NW1 8JR, UK</p></li> 

        </div>

        <ul id='footer-links' className='flex flex-wrap gap-x-[50px] gap-y-[30px] mt-[20px]'>
        <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px] lg:text-[14px]`}>Categories</h2>
        <Link href={"/"}>Laptops & Computers</Link>
        <Link href={"/"}>Cameras & Photography</Link>
        <Link href={"/"}>Smart Phones & Tablets</Link>
        <Link href={"/"}>Video Games & Consoles</Link>
        <Link href={"/"}>Waterproof Headphones</Link>
      </div>
      <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px] lg:text-[14px]`} >Customer Care</h2>
        <Link href={"/"}>My Account</Link>
        <Link href={"/"}>Discount</Link>
        <Link href={"/"}>Returns</Link>
        <Link href={"/"}>Orders History</Link>
        <Link href={"/"}>Order Tracking</Link>
      </div>
      <div>
        <h2 className={`${josefinSans.className} font-bold text-[11px] lg:text-[14px]`}>Pages</h2>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Browse the Shop</Link>
        <Link href={"/"}>Category</Link>
        <Link href={"/"}>Pre-Built Pages</Link>
        <Link href={"/"}>Visual Composer Elements</Link>
        <Link href={"/"}>WooCommerce Pages</Link>
      </div>
        </ul>
    </div>

    <ul className='bg-[#E7E4F8] text-[#9DA0AE] text-[10px] p-[8px] items-center flex justify-between lg:px-[250px]'>
      <li>©Webecy - All Rights Reserved</li>
      <ul className='flex gap-x-[5px]'>
      <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/bx_bxl-facebook.png" alt="" className='absolute'/>
        </li>
        <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/bx_bxl-instagram-alt.png" alt="" className='absolute'/>
        </li>
        <li className='relative flex items-center justify-center'>        
          <img src="/final-logos/ellipse.png" alt="" />
          <img src="/final-logos/twitter.png" alt="" className='absolute'/>
        </li>
      </ul>
    </ul>
    </div>
    
   )    
}
