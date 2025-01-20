import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

export default function GridDefault() {
  return (
    <div >
      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Shop Grid Defualt
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Shop Grid Default</p>
        </li>
      </div>

      <div className="mx-[20px] lg:mx-[150px]">
              <li className="flex flex-col items-start mt-[10px]" >
        <h2
          className={`${josefinSans.className} text-[#151875] text-[15px] font-bold`}
        >
          Ecommerce Accecories & Fasion items
        </h2>
        <p className="text-[#8A8FB9] text-[10px]">
          About 9620 results (0.62 second)
        </p>
      </li>
      <ul className="flex flex-wrap gap-[10px] mt-[10px]">
        <li>
          <p className="text-[#182378]">Per Page:</p>
          <input
            type="text"
            className="w-[45px] border border-[#E7E6EF] outline-none"
          />
        </li>
        <li>
          <label className="text-[#182378]">Sort By:</label>
          <select className="border border-[#E7E6EF] outline-none text-[#8A8FB9] text-[10px] p-[2px]">
            <option value="best-match">Best Match</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="newest">Newest</option>
          </select>
        </li>
        <li>
          <p className="text-[#182378]">View:</p>
          <img src="/final-logos/clarity_grid-view-solid.png" alt="" />
          <img src="/final-logos/fa-solid_list.png" alt="" />
          <input
            type="text"
            placeholder=""
            className="border w-[80px] border-[#E7E6EF] outline-none"
          />
        </li>
      </ul>

    <ul className="grid grid-cols-2 gap-[15px] mt-[20px] lg:grid-cols-4">
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/10011 1.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/1562173100-movado-connect-1562173094 2.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/10011 1 (1).png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/1562173100-movado-connect-1562173094 2.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/cam 2.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/headphone-1.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/image 1164.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/image 1165.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/image 1173.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/purepng 1.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    <li className="flex items-center p-[17px] justify-center flex-col shadow-sm">
            <img src="/grid-default/purepng 1.png" alt="" className="h-[65%] mb-[10px]"/>
            <ul className="flex justify-center bg-white flex-col items-center w-full gap-[4px] ">
              <h3 className={`${josefinSans.className} text-[#151875] font-bold text-center mt-[5px]`}>Pellentesque condimentum ac</h3>
              <ul id="colors" className="flex gap-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              
              <div className="flex gap-[20px] mt-[5px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} text-[#F701A8]`}>$42.00</p>
              </div>
            </ul>
    </li>
    </ul>
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px] justify-self-center" />
      </div>

    </div>
  );
}
