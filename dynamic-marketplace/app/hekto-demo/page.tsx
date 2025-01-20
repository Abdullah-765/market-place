
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


export default function HektoDemo() {
  return (

    <div>

      <div className="h-[20vh] px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Hekto Demo
        </h1>
      </div>

      <div className="mx-[10px] mt-[40px]">
        <h1 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}>Hekto Demo</h1>
        <p className="text-[#1D3178]">Cart/ Information/ Shipping/ Payment</p>
      </div>

      <div className="flex flex-col items-center mt-[40px] justify-start gap-[50px] lg:flex-row lg:items-start lg:justify-center">

        <div className="max-w-[700px] mx-[20px] flex-1 ">
          <div className="bg-[#F4F4FC] p-[20px] pt-[40px]">

            <div className="flex items-center justify-between flex-wrap gap-[5px] pb-[30px]">
              <h1 className={`${josefinSans.className} text-[#101750] text-[16px] font-bold`}>Contact Information</h1>
              <p className="text-[#C1C8E1] text-[10px]">Already have an account? <span className="underline">Log in</span></p>
            </div>
            <input type="text" placeholder="Email or mobile phone number" className={`${josefinSans.className} border-gray-300 mb-2 border-b bg-[#F4F4FC] text-[14px] w-full h-[40px] outline-none `} />

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="checkbox"
                className="peer hidden"
              />
              <label
                htmlFor="checkbox"
                className="flex items-center justify-center w-3 h-3 bg-[#19D16F] text-white text-[8px] border font-bold peer-checked:bg-white cursor-pointer"
              >
                {/* The checkmark */}
                &#10003;
              </label>

              <p className="text-[#8A91AB] text-[10px]">Keep me up to date on news and excluive offers</p>
            </div>

            {/* Shipping Adress */}
            <h1 className={`${josefinSans.className} mt-[40px] text-[#101750] text-[16px] font-bold`}>Shipping address</h1>
            <div className="flex flex-col gap-[25px] py-[20px] pb-[30px]">
              <div className="flex flex-wrap gap-x-[30px]">
                <input type="text" placeholder="First name (optional)" className={`${josefinSans.className} border-gray-300 mb-2 border-b bg-[#F4F4FC] pb-[5px] text-[14px] flex-1 h-[40px] outline-none `} />
                <input type="text" placeholder="Last name" className={`${josefinSans.className} bg-[#F4F4FC] pb-[5px] border-gray-300 mb-2 border-b text-[14px] flex-1 h-[40px] outline-none `} /> 
              </div>
              <input type="text" placeholder="Address" className={`${josefinSans.className} border-gray-300 mb-2 border-b bg-[#F4F4FC] pb-[5px] text-[14px] flex-1 h-[40px] outline-none `} />
                <input type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" className={`${josefinSans.className} bg-[#F4F4FC] pb-[5px] border-gray-300 mb-2 border-b text-[14px] flex-1 h-[40px] outline-none `} /> 
                <input type="text" placeholder="City" className={`${josefinSans.className} border-gray-300 mb-2 border-b bg-[#F4F4FC] pb-[5px] text-[14px] flex-1 h-[40px] outline-none `} />
                <div className="flex flex-wrap gap-x-[30px]">
                <input type="text" placeholder="Bangladesh" className={`${josefinSans.className} border-gray-300 mb-2 border-b bg-[#F4F4FC] pb-[5px] text-[14px] flex-1 h-[40px] outline-none `} />
                <input type="text" placeholder="Postal Code" className={`${josefinSans.className} bg-[#F4F4FC] pb-[5px] border-gray-300 mb-2 border-b text-[14px] flex-1 h-[40px] outline-none `} /> 
              </div>
            </div>


            <button className="w-[60%] bg-[#FB2E86] text-white text-center py-3">
            <Link href="/order-completed">Continue Shiping</Link>
            </button>
          </div>
        </div>

        <div className="main-container-table">
          <table className="w-fit border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-4 flex  items-center space-x-4">
                  <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                    <img src="/shopping-cart/img1.png" alt="Product 1" />                      </div>
                  <div>
                    <p className="font-semibold">Lorem ipsum camera</p>
                    <p className="text-sm text-gray-500">Color: Black</p>
                  </div>
                </td>
                <td className="p-4">$120.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 flex items-center space-x-4 mr-[30px]">
                  <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                    <img src="/shopping-cart/img2.png" alt="Product 1" />                      </div>
                  <div>
                    <p className="font-semibold">Vel fascinus purse</p>
                    <p className="text-sm text-gray-500">Color: Red</p>
                  </div>
                </td>
                <td className="p-4">$85.00</td>
              </tr>
              <tr className="border-b ">
                <td className="p-4 flex items-center space-x-4 mr-[30px]">
                  <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                    <img src="/shopping-cart/img3.png" alt="Product 1" />                      </div>
                  <div>
                    <p className="font-semibold">Ac wrap watches</p>
                    <p className="text-sm text-gray-500">Color: Black</p>
                    <p className="text-sm text-gray-500">Size: XL</p>
                  </div>
                </td>
                <td className="p-4">$100.00</td>
              </tr>
              <tr className="border-b ">
                <td className="p-4 flex items-center space-x-4 mr-[30px]">
                  <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                    <img src="/shopping-cart/img4.png" alt="Product 1" />                      </div>
                  <div>
                    <p className="font-semibold">Ac wrap watches</p>
                    <p className="text-sm text-gray-500">Color: Black</p>
                    <p className="text-sm text-gray-500">Size: XL</p>
                  </div>
                </td>
                <td className="p-4">$100.00</td>
              </tr>
              <tr className="border-b ">
                <td className="p-4 flex items-center space-x-4 mr-[30px]">
                  <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                    <img src="/shopping-cart/img5.png" alt="Product 1" />                      </div>
                  <div>
                    <p className="font-semibold">Ac wrap watches</p>
                    <p className="text-sm text-gray-500">Color: Black</p>
                    <p className="text-sm text-gray-500">Size: XL</p>
                  </div>
                </td>
                <td className="p-4">$100.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col gap-[40px] max-w-[400px] items-center justify-center mt-10 mx-[20px]">
            <h3 className={`${josefinSans.className} text-[#1D3178] font-bold text-lg text-center`}>Cart Totals</h3>
            <div className="bg-[#F4F4FC] p-[20px] w-full">
              <div className="flex justify-between items-center mb-4">
                <p className={`${josefinSans.className} font-[600] text-[16px] text-[#1D3178]`}>Subtotals:</p>
                <p className={`${josefinSans.className} font-[600] text-[16px] text-[#1D3178]`}>£219.00</p>
              </div>
              <hr className="border-gray-300 mb-4" />


              <div className="flex justify-between items-center mb-4">
                <p className={`${josefinSans.className} font-[600] text-[16px] text-[#1D3178]`}>Totals:</p>
                <p className={`${josefinSans.className} font-[600] text-[16px] text-[#1D3178]`}>£325.00</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <div className="flex gap-2 items-center">
              <input
                type="checkbox1"
                id="checkbox1"
                className="peer hidden"
              />
              <label
                htmlFor="checkbox1"
                className="flex items-center justify-center w-3 h-3 bg-[#19D16F] text-white text-[8px] border font-bold peer-checked:bg-white cursor-pointer"
              >
                {/* The checkmark */}
                &#10003;
              </label>

              <p className="text-[#8A91AB] text-[10px]">Keep me up to date on news and excluive offers</p>
            </div>

              </div>
              <button className="w-full bg-green-500 text-white text-center py-3 hover:bg-green-600">
                <Link href="/order-completed">Proceed To Checkout</Link>
              </button>
            </div>

          </div>
        </div>



      </div>
    </div>


  );
}
