"use client";

import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function ShopLeftSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
        <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
          <h1
            className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
          >
            Shop Left Sidebar
          </h1>
          <li className="text-[10px]">
            <p>Home . </p>
            <p>Pages . </p>
            <p className="text-[#FB2E86]">Shop Left Sidebar</p>
          </li>
        </div>
        <div className="lg:mx-[150px]">
        <li className="flex flex-col items-start mt-[10px] mx-[20px]">
          <h2
            className={`${josefinSans.className} text-[#151875] text-[15px] font-bold`}
          >
            Ecommerce Accecories & Fasion items
          </h2>
          <p className="text-[#8A8FB9] text-[10px]">
            About 9620 results (0.62 second)
          </p>
        </li>
        <ul className="flex flex-wrap gap-[10px] mx-[20px] mt-[10px]">
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

      <div className="flex">
        <div id="collapsable-sidebar">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-1 left-2 z-50 p-1 bg-white rounded shadow"
          >
            <Menu size={20} />
          </button>
          <div className="flex relative">
            {/* Sidebar */}
            <div
              id="sidebar"
              className={`
    fixed lg:static top-0 left-0 h-screen lg:h-auto overflow-y-auto lg:overflow-visible top-0 left-0 h-screen w-64
    bg-white shadow-lg lg:shadow-none
    transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}
    lg:translate-x-0 lg:w-auto
    overflow-y-auto z-40
    mx-0 lg:mx-[20px] 
    mt-[30px] flex flex-col gap-[20px]
    p-4 pb-[100px] lg:p-0
  `}
            >
              {/* Existing sidebar content... */}
              <div
                id="sidebar"
                className="mx-[20px] mt-[30px] flex flex-col gap-[20px]"
              >
                {/* product brand */}
                <ul className="flex flex-col gap-[8px] ">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Product Brand
                  </h3>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox1"
                        className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Coaster Furniture</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox2"
                        className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Fusion Dot High Fashion</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox3"
                        className="flex items-center justify-center w-4 h-4 bg-purple-500 text-purple-100 font-bold peer-checked:text-purple-500 bg-purple-100cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Unique Furniture Restor</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox4"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox4"
                        className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Dream Furniture Flipping</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox5"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox5"
                        className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Young Repurposed</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkbox6"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="checkbox6"
                        className="flex items-center justify-center w-4 h-4 bg-purple-100 text-purple-500 font-bold peer-checked:text-purple-100 cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Green DIY Furniture</p>
                  </li>
                </ul>

                {/* Discount offer */}
                <ul className="flex flex-col gap-[8px]">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Discount Offer
                  </h3>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Discountcheckbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Discountcheckbox1"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>20% Cashback</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Discountcheckbox2"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Discountcheckbox2"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>5% Cashback Offer</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Discountcheckbox3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Discountcheckbox3"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>25% Discount Offer</p>
                  </li>
                </ul>

                {/* Rating Item */}
                <ul className="flex flex-col gap-[8px]">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Rating Item
                  </h3>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Ratingcheckbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Ratingcheckbox1"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <p
                        className={`${josefinSans.className} text-black ml-[5px]`}
                      >
                        (2341)
                      </p>
                    </ul>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Ratingcheckbox2"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Ratingcheckbox2"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFCC2E] text-[#FFF6DA] font-bold peer-checked:text-[#FFCC2E] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <p
                        className={`${josefinSans.className} text-black ml-[5px]`}
                      >
                        (1726)
                      </p>
                    </ul>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Ratingcheckbox3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Ratingcheckbox3"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <p
                        className={`${josefinSans.className} text-black ml-[5px]`}
                      >
                        (258)
                      </p>
                    </ul>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Ratingcheckbox4"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Ratingcheckbox4"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFF6DA] text-[#FFCC2E] font-bold peer-checked:text-[#FFF6DA] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <ul id="colors" className="flex items-center">
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-filled.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <li>
                        <img src="/star-empty.png" alt="" />
                      </li>
                      <p
                        className={`${josefinSans.className} text-black ml-[5px]`}
                      >
                        (25)
                      </p>
                    </ul>
                  </li>
                </ul>

                {/* catergories */}
                <ul className="flex flex-col gap-[8px]">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Categories
                  </h3>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox1"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Prestashop</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox2"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox2"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Magento</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox3"
                        className="flex items-center justify-center w-4 h-4 bg-[#FF3EB2] text-[#FFDBF1] font-bold peer-checked:text-[#FF3EB2] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Bigcommerce</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox4"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox4"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>osCommerce</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox5"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox5"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>3dcart</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox6"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox6"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Bags</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox7"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox7"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Accessories</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox8"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox8"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Jewellery</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Categoriescheckbox9"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Categoriescheckbox9"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>Watches</p>
                  </li>
                </ul>

                {/* price filter */}
                <ul className="flex flex-col gap-[8px]">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Price filter
                  </h3>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Pricecheckbox1"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Pricecheckbox1"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>$0.00 - $150.00</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Pricecheckbox2"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Pricecheckbox2"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>$150.00 - $350.00</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Pricecheckbox3"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Pricecheckbox3"
                        className="flex items-center justify-center w-4 h-4 bg-[#FF3EB2] text-[#FFDBF1] font-bold peer-checked:text-[#FF3EB2] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>$150.00 - $504.00</p>
                  </li>
                  <li>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="Pricecheckbox4"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="Pricecheckbox4"
                        className="flex items-center justify-center w-4 h-4 bg-[#FFDBF1] text-[#FF3EB2] font-bold peer-checked:text-[#FFDBF1] cursor-pointer"
                      >
                        {/* The checkmark */}
                        &#10003;
                      </label>
                    </div>
                    <p>$450.00 +</p>
                  </li>

                  {/* Search Box */}

                  <li className="flex items-center gap-[5px] p-[5px] mt-[20px] border w-fit ">
                    <input
                      type="search"
                      placeholder="$10.00 - 20000$"
                      className="outline-none py-[3px] px-[5px]"
                      id=""
                    />
                    <img src="/search-grey-sidebar.png" alt="" />
                  </li>
                </ul>

                {/* filter by color */}
                <div className="flex flex-col gap-[8px]">
                  <h3
                    className={`${josefinSans.className} text-[#151875] underline underline-offset-4`}
                  >
                    Filter By Color
                  </h3>
                  <ul className="grid grid-cols-3 gap-[5px]">
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#5E37FF]"></div>
                      Blue
                    </li>
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#FF9437]"></div>
                      Orange
                    </li>
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#FFBF95]"></div>
                      Brown
                    </li>
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#33D221]"></div>
                      Green
                    </li>
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#E248FF]"></div>
                      Purple
                    </li>
                    <li>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#26CBFF]"></div>
                      Sky
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main content */}
            <ul className="grid grid-cols-1 gap-[35px] mt-[40px] mx-[20px] w-fit">
              {/* Existing product list content... */}
            </ul>
          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>

        <ul
          id="cards"
          className="grid grid-cols-1 gap-[35px] mt-[40px] w-fit place-items-center"
        >
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-01.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-02.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-03.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-04.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-05.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-06.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
          <li className="flex items-center justify-center gap-[10px] shadow-sm p-[10px] m-0 max-h-[150px]">
            <img
              src="/shop-left-sidebar/shop-left-sidebar-img-07.png"
              alt=""
              className="w-[150px]"
            />
            <ul className="flex flex-col justify-center gap-[5px] w-full">
              <li className="flex flex-wrap">
                <h3
                  className={`${josefinSans.className} text-[#151875] text-nowrap font-bold text-center mr-[15px]`}
                >
                  Accumsan tincidunt
                </h3>
                <ul
                  id="colors"
                  className="flex  flex-wrap gap-x-2 items-center"
                >
                  <li className="w-[7px] h-[7px] rounded-full bg-[#DE9034]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#F701A8]"></li>
                  <li className="w-[7px] h-[7px] rounded-full bg-[#8568FF]"></li>
                </ul>
              </li>
              <div className="flex flex-wrap items-center justify-start mr-[15px] gap-x-[10px]">
                <p className={`${josefinSans.className} text-[#151875]`}>
                  $26.00
                </p>
                <p
                  className={`${josefinSans.className} line-through text-[#F701A8]`}
                >
                  $42.00
                </p>
                <ul id="colors" className="flex items-center">
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-filled.png" alt="" />
                  </li>
                  <li>
                    <img src="/star-empty.png" alt="" />
                  </li>
                </ul>
              </div>
              <p className="text-[#9295AA] text-[10px] hidden md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-[30px] mt-[5px]">
                <img
                  className="w-[20px]"
                  src="/fluent_cart-24-regular.png"
                  alt=""
                />
                <img className="w-[18px]" src="/uil_search-plus.png" alt="" />
                <img className="w-[18px]" src="/uil_heart-alt.png" alt="" />
              </div>
            </ul>
          </li>
        </ul>
      </div>
        </div>


      <img src="/grid-default/image 1174.png" alt="" className="mt-[50px] justify-self-center" />
    </div>
  );
}
