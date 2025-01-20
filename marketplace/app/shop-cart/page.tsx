import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});
import Link from "next/link";

export default function ShopCart() {
  return (

    <div>

      <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
          Shopping Cart
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">Shopping Cart</p>
        </li>
      </div>

      <div className="container mx-auto flex flex-col bg-white p-6 rounded-lg mt-[40px] lg:flex-row">
        <div className="flex flex-col gap-[60px] lg:flex-row">
          <div className="main-container-table">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`${josefinSans.className} text-[#1D3178] text-[14px]`}>
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 flex  items-center space-x-4 mr-[30px]">
                      <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                        <img src="/shopping-cart/img1.png" alt="Product 1" />
                        <button className="text-white bg-black rounded-full -top-1 -right-1 absolute w-[20px] leading-none h-[20px] font-extrabold flex items-center justify-center text-[10px]">&times;</button>
                      </div>
                      <div>
                        <p className="font-semibold">Lorem ipsum camera</p>
                        <p className="text-sm text-gray-500">Color: Black</p>
                      </div>
                    </td>
                    <td className="p-4">$120.00</td>
                    <td className="p-4">
                      <input type="number" className="w-16 border rounded-md px-2 py-1" defaultValue="1" />
                    </td>
                    <td className="p-4">$120.00</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 flex items-center space-x-4 mr-[30px]">
                      <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                        <img src="/shopping-cart/img2.png" alt="Product 1" />
                        <button className="text-white bg-black rounded-full -top-1 -right-1 absolute w-[20px] leading-none h-[20px] font-extrabold flex items-center justify-center text-[10px]">&times;</button>
                      </div>
                      <div>
                        <p className="font-semibold">Vel fascinus purse</p>
                        <p className="text-sm text-gray-500">Color: Red</p>
                      </div>
                    </td>
                    <td className="p-4">$85.00</td>
                    <td className="p-4">
                      <input type="number" className="w-16 border rounded-md px-2 py-1" defaultValue="1" />
                    </td>
                    <td className="p-4">$85.00</td>
                  </tr>
                  <tr className="border-t ">
                    <td className="p-4 flex items-center space-x-4 mr-[30px]">
                      <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                        <img src="/shopping-cart/img3.png" alt="Product 1" />
                        <button className="text-white bg-black rounded-full -top-1 -right-1 absolute w-[20px] leading-none h-[20px] font-extrabold flex items-center justify-center text-[10px]">&times;</button>
                      </div>
                      <div>
                        <p className="font-semibold">Ac wrap watches</p>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-gray-500">Size: XL</p>
                      </div>
                    </td>
                    <td className="p-4">$100.00</td>
                    <td className="p-4">
                      <input type="number" className="w-16 border rounded-md px-2 py-1" defaultValue="1" />
                    </td>
                    <td className="p-4">$100.00</td>
                  </tr>
                  <tr className="border-t ">
                    <td className="p-4 flex items-center space-x-4 mr-[30px]">
                      <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                        <img src="/shopping-cart/img4.png" alt="Product 1" />
                        <button className="text-white bg-black rounded-full -top-1 -right-1 absolute w-[20px] leading-none h-[20px] font-extrabold flex items-center justify-center text-[10px]">&times;</button>
                      </div>
                      <div>
                        <p className="font-semibold">Ac wrap watches</p>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-gray-500">Size: XL</p>
                      </div>
                    </td>
                    <td className="p-4">$100.00</td>
                    <td className="p-4">
                      <input type="number" className="w-16 border rounded-md px-2 py-1" defaultValue="1" />
                    </td>
                    <td className="p-4">$100.00</td>
                  </tr>
                  <tr className="border-t ">
                    <td className="p-4 flex items-center space-x-4 mr-[30px]">
                      <div className="relative min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-md">
                        <img src="/shopping-cart/img5.png" alt="Product 1" />
                        <button className="text-white bg-black rounded-full -top-1 -right-1 absolute w-[20px] leading-none h-[20px] font-extrabold flex items-center justify-center text-[10px]">&times;</button>
                      </div>
                      <div>
                        <p className="font-semibold">Ac wrap watches</p>
                        <p className="text-sm text-gray-500">Color: Black</p>
                        <p className="text-sm text-gray-500">Size: XL</p>
                      </div>
                    </td>
                    <td className="p-4">$100.00</td>
                    <td className="p-4">
                      <input type="number" className="w-16 border rounded-md px-2 py-1" defaultValue="1" />
                    </td>
                    <td className="p-4">$100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-6">
              <button className={`${josefinSans.className} text-[14px] px-6 py-2 bg-[#FB2E86] text-white`}>Update Cart</button>
              <button className={`${josefinSans.className} text-[14px] px-6 py-2 bg-[#FB2E86] text-white`}>Clear Cart</button>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] max-w-[400px] items-center justify-center mt-10 mx-[20px]">
            <h3 className={`${josefinSans.className} text-[#1D3178] font-bold text-lg mb-4 text-center`}>Cart Totals</h3>
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
                <span className="text-green-500 text-lg">●</span>
                <p>Shipping & taxes calculated at checkout</p>
              </div>


              <button className="w-full bg-green-500 text-white text-center py-3 hover:bg-green-600">
                <Link href={'/hekto-demo'}>Proceed To Checkout</Link>
              </button>
            </div>

            <div className="w-full">
            <h3 className={`${josefinSans.className} text-[#1D3178] font-bold text-lg mb-4 text-center`}>Calculate Shipping</h3>
              <div className="bg-[#F4F4FC] p-[20px] ">
                <input type="text" placeholder="Bangladesh" className={`${josefinSans.className} bg-[#F4F4FC] text-[14px] w-full h-[40px] outline-none `}/>
                <hr className="border-gray-300 mb-4" />

                <input type="text" placeholder="Mirpur Dhaka - 1200" className={`${josefinSans.className} bg-[#F4F4FC] text-[14px] w-full h-[40px] outline-none `}/>
                <hr className="border-gray-300 mb-4" />

                <input type="text" placeholder="Postal Code" className={`${josefinSans.className} bg-[#F4F4FC] text-[14px] w-full h-[40px] outline-none `}/>
                <hr className="border-gray-300 mb-4" />

                <button className="w-[60%] bg-[#FB2E86] text-white text-center py-3">
                Calculate Shiping
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

  );
}
