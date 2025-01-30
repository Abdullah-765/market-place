'use client'

import { client } from '@/sanity/lib/client'
import { Josefin_Sans } from 'next/font/google'
import { urlFor } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
})
import Image from 'next/image'
import Link from 'next/link'
import Loader from './loader'

interface MarketingPanelItem {
  description: string;
  smallText: string;
  largeText: string;
  buttonText: string;
  image: any; // Update this if you have a specific type for the image
}

export default function MarketingPanel(){
const [data, setData] = useState<MarketingPanelItem[] | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "marketingPanel"] {description, smallText, largeText, buttonText, image}`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);
  
  if (!data) {
    return <Loader/>;
  }
  
   return (
    <div id="marketing-panel-main-div" className="lg:px-[200px] overflow-hidden box-border flex gap-[5px] w-[100%] justify-evenly bg-[#F1F0FF] relative items-center p-[30px] h-[50vh] sm:h-[60vh] ">
        <div className='max-w-[500px]'>
        <h3 className="text-[#FB2E86] text-[12px]">{data[0].smallText}</h3>
        <h1 className={josefinSans.className}><span className="text-[24px] font-bold lg:text-[36px]">{data[0].largeText}</span></h1>
        <p className="hidden  sm:block">{data[0].description}</p>
        <Link href={"/products-list"} ><button className="bg-[#FB2E86] text-white py-[8px] px-[20px] cursor-pointer text-[12px] mt-[30px]"><span className={josefinSans.className}>{data[0].buttonText}</span></button></Link>  
        </div>
        <Image src={"/lamp-main-page.png"} 
  alt="marketing" 
  width={250} height={250} className='hidden lg:block lg:absolute top-0 left-1' />
        <Image src={urlFor(data[0].image).url()} alt="marketing" width={450} height={450} layout='responsive' className="w-[60%] max-w-[450px] " />
      </div>
   )    
}
