import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


export default function OrderCompleted() {
  return (

    <div className="flex items-center justify-center flex-col md:mx-[100px] lg:mx-[260px]">
      <div className="mt-[40px] relative p-[10px] flex items-center w-full justify-center md:border-b md:border-l md:border-dashed md:border-gray-300">
        <div>
          <div className="flex items-center justify-center flex-col gap-[15px]">
            <ul className="relative w-24 h-24">
              <img
                src="/order-completed/bg-gray-img.png"
                className="absolute inset-0 -z-10 w-full h-full"
                alt=""
              />
              <img
                src="/order-completed/ellipse.png"
                className="absolute z-0 top-[10px] left-[12px] w-[75%] h-[75%]"
                alt=""
              />
              <img
                src="/order-completed/tick-mark.png"
                className="absolute z-10 top-[24px] left-[21px] w-[50%] h-[50%]"
                alt=""
              />
            </ul>
            <h1 className={`${josefinSans.className} text-[22px] text-nowrap text-[#101750] font-bold`}>Your Order Is Completed! </h1>
            <p className="text-center text-[#8D92A7] text-[12px] leading-5">Thank you for your order! Your order is being processed and will be completed within 3-6 <span className="hidden lg:inline"><br /></span> 
              hours. You will receive an email confirmation when your order is completed.
            </p>
            <button className="w-[150px] bg-[#FB2E86] text-white rounded-sm text-center py-3">
              <Link href={"/"}>Continue Shopping</Link>
            </button>
          </div>


          <div className="hidden md:block">

            <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-white px-2">
              <img src="/order-completed/clock1.png" alt="Clock" className="w-16 h-16" />
            </div>


            <div className="flex-1"></div>

            <div className="absolute right-0 -bottom-7 transform bg-white">
              <img src="/order-completed/checklist.png" alt="Checklist" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>


        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />

    </div>

  );
}
