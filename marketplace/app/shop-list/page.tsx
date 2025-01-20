import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


export default function ShopList() {
  return (

    <div >
    <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
    <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Shop List
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Shop List</p>
        </li>
      </div>
      <div className="mx-[150px]">
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


      <ul className="grid grid-cols-1 gap-[35px] mt-[40px] place-items-center">
    <li className="flex items-center justify-center shadow-sm gap-[10px] p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 32.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 321.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 323.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 324.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 32.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 321.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img src="/shop-list/Rectangle 32.png" alt="" className="w-[150px]"/>
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
              <h3 className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}>Accumsan tincidunt</h3>
              <ul id="colors" className="flex  flex-wrap gap-x-2 items-center">
                <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
              </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                    <p className={`${josefinSans.className} text-[#151875]`}>$26.00</p>
                    <p className={`${josefinSans.className} line-through text-[#F701A8]`}>$42.00</p>
                    <ul id="colors" className="flex items-center">
                <li><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-filled.png" alt="" /></li>
                <li ><img src="/star-empty.png" alt="" /></li>
              </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div className="flex gap-x-[30px] mt-[5px]">
              <img className="w-[20px]" src="/fluent_cart-24-regular.png" alt="" /><img className="w-[18px]" src="/uil_search-plus.png" alt="" /><img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
    </li>
    </ul>
      </div>

        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
    </div>


    
  );
}
