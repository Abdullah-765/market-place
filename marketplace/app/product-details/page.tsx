import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


export default function ProductDetails() {
  return (

    <div>

      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Product Details
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Product Details</p>
        </li>
      </div>

      <div className="container mx-auto px-5">
        <div className="flex flex-col mt-10 md:flex-row items-start p-4 shadow-evenly-around max-w-[650px] overflow-hidden">
          <div className="flex items-center gap-2 w-full md:w-1/2 md:max-w-[300px]">
            <div className="flex flex-col gap-2 w-1/4 md:max-w-[80px]">
              <img src="/product-details/img1.png" alt="Product view 1" className="w-full rounded-sm object-contain" />
              <img src="/product-details/img2.png" alt="Product view 2" className="w-full rounded-sm object-contain" />
              <img src="/product-details/img3.png" alt="Product view 3" className="w-full rounded-sm object-contain" />
            </div>
            <div className="w-3/4 md:max-w-[200px]">
              <img src="/product-details/img4.png" alt="Main product view" className="w-full rounded-sm object-contain" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
            <h2 className={`${josefinSans.className} text-[#0D134E] text-2xl font-semibold`}>Playwood arm chair</h2>

            <div className="flex items-center">
              {[1, 2, 3, 4].map((_, i) => (
                <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
              ))}
              <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
              <span className="text-black ml-2">(2341)</span>
            </div>

            <div className={`${josefinSans.className} flex items-center gap-3`}>
              <span className="text-[#151875]">$26.00</span>
              <span className="line-through text-[#F701A8]">$42.00</span>
            </div>

            <p className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Color</p>
            <p className={`${josefinSans.className} text-xs text-[#9295AA]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
            </p>

            <ul className="ml-10 flex gap-5">
              <li className={`${josefinSans.className} text-[#0D134E] text-sm`}>Add to cart</li>
              <li><img src="/uil_heart-alt.png" alt="" /></li>
            </ul>

            <div>
              <li className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Categories</li>
              <li className={`${josefinSans.className} font-semibold text-sm text-[#0D134E]`}>Tags</li>
              <div className={`${josefinSans.className} flex gap-2.5 font-semibold text-sm text-[#0D134E]`}>
                <p>Share</p>
                <ul className="flex gap-2.5">
                  <img src="/product-details/facebook-share.png" alt="" />
                  <img src="/product-details/instagram-share.png" alt="" />
                  <img src="/product-details/twitter-share.png" alt="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mt-[40px] p-[20px] bg-[#F9F8FE]">
        <ul className="flex flex-col gap-[10px] md:flex-row justify-evenly">
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] underline underline-offset-4 font-semibold`}>Description</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Additional Info</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Reviews</li>
          <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Video</li>
        </ul>

        <div className="mt-[20px] flex flex-col gap-[20px]">
          <ul>
            <li className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>Varius tempor.</li>
            <li className={`${josefinSans.className} text-xs text-[#9295AA]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
          </ul>
          <div>
            <h2 className={`${josefinSans.className} text-[#0D134E] text-[16px] font-semibold`}>More Details</h2>
            <ul>
              <li className={`${josefinSans.className} text-xs text-[#9295AA]`}><span className="text-black font-[700] text-[20px] mr-[5px]">&#8594;</span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className={`${josefinSans.className} text-xs text-[#9295AA]`}><span className="text-[#1d2891] font-[700] text-[20px] mr-[5px]">&#8594;</span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className={`${josefinSans.className} text-xs text-[#9295AA]`}><span className="text-black font-[700] text-[20px] mr-[5px]">&#8594;</span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li className={`${josefinSans.className} text-xs text-[#9295AA]`}><span className="text-black font-[700] text-[20px] mr-[5px]">&#8594;</span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </ul>
          </div>
        </div>

      </div>

      <h2 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold mx-[20px] mt-[40px]`}>Related Products</h2>
      <div className="mx-[20px] mt-[40px] flex flex-wrap gap-[20px] items-center justify-center">
        <ul className="w-[190px] p-[5px] md:w-[220px]">
          <li>
            <img src="/related-products/img1.png" alt="" />
          </li>
          <ul className="flex justify-between items-center mt-[10px]">
            <li className={`${josefinSans.className} text-[#151875]`}>Mens Fashion Wear</li>
            <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>
          </ul>
          <li className={`${josefinSans.className} text-[#151875]`}>$26.00</li>
        </ul>
        <ul className="w-[190px] p-[5px] md:w-[220px]">
          <li>
            <img src="/related-products/img2.png" alt="" />
          </li>
          <ul className="flex justify-between items-center mt-[10px]">
            <li className={`${josefinSans.className} text-[#151875]`}>Mens Fashion Wear</li>
            <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>
          </ul>
          <li className={`${josefinSans.className} text-[#151875]`}>$26.00</li>
        </ul>
        <ul className="w-[190px] p-[5px] md:w-[220px]">
          <li>
            <img src="/related-products/img3.png" alt="" />
          </li>
          <ul className="flex justify-between items-center mt-[10px]">
            <li className={`${josefinSans.className} text-[#151875]`}>Mens Fashion Wear</li>
            <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>
          </ul>
          <li className={`${josefinSans.className} text-[#151875]`}>$26.00</li>
        </ul>
        <ul className="w-[190px] p-[5px] md:w-[220px]">
          <li>
            <img src="/related-products/img4.png" alt="" />
          </li>
          <ul className="flex justify-between items-center mt-[10px]">
            <li className={`${josefinSans.className} text-[#151875]`}>Mens Fashion Wear</li>
            <li className="flex gap-[1px] items-center">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src="/star-filled.png" alt="Filled star" className="w-3 h-3" />
                ))}
                <img src="/star-empty.png" alt="Empty star" className="w-3 h-3" />
            </li>
          </ul>
          <li className={`${josefinSans.className} text-[#151875]`}>$26.00</li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
      </div>
    </div>



  );
}
