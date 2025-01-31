import LatestProducts from "@/components/latest-products";
import FeaturedProducts from "@/components/featured-products";
import MarketingPanel from "@/components/marketing-panel";
import WhatWeOffer from "@/components/what-offer";
import UniqueFeaturesTrendingProducts from "@/components/unique-features-trending-products";
import TrendingProducts from "@/components/trending-products";
import DiscountItem from "@/components/Discount-Item";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";


export default async function Home() {

  const data = await fetchUniqueFeatursData();
  const marketingPanelData = await fetchMarketingPanelData();
  const featuredProductsData = await fetchFeaturedProductsData();
  const latestProductsData = await fetchLatestProductsData();
  const trendingProductsData = await fetchTrendingProductsData();
  const discountItemData = await fetchDiscountProductsData();

  return (
    <div className="flex flex-col gap-[50px]">
      <MarketingPanel data={marketingPanelData}/>
      <FeaturedProducts data={featuredProductsData}/>
      <LatestProducts data={latestProductsData}/>
      <WhatWeOffer/>
      <UniqueFeaturesTrendingProducts data={data} />
      <TrendingProducts data={trendingProductsData}/>
      <DiscountItem data={discountItemData}/> 
    </div>
  );
}


// fetching data of components used directly in paget.tsx

async function fetchUniqueFeatursData() {
  const query = defineQuery(`*[_type == "uniqueFeatures"] {slug, id, description, descriptionPoint1, descriptionPoint2, descriptionPoint3, image, price, discountPercentage, name, stockLevel, category}`)
  let uniqueFeaturesData = []
  
  try {
    return uniqueFeaturesData = await client.fetch(query)
  } catch (error) {
    return console.log(`No unique features Data found on fetch`, error);
  }
}

async function fetchMarketingPanelData() {
  const query = defineQuery(`*[_type == "marketingPanel"] {description, smallText, largeText, buttonText, image}`)
  let marketingPanelData = []
  
  try {
    return marketingPanelData = await client.fetch(query)
  } catch (error) {
    return console.log(`No marketing panel Data found on fetch`, error);
  }
}

async function fetchFeaturedProductsData() {
  const query = defineQuery(`*[_type == "featuredProducts"] {id, slug, description, image, price, discountPercentage, name, stockLevel, category}`)
  let featuredProductsData = []
  
  try {
    return featuredProductsData = await client.fetch(query)
  } catch (error) {
    return console.log(`No Featured Products Data found on fetch`, error);
  }
}


async function fetchLatestProductsData() {
  const query = defineQuery(`*[_type == "latestProducts"] {id, slug, description, image, price, discountPercentage, name, stockLevel, category}`)
  let latestProductsData = []
  
  try {
    return latestProductsData = await client.fetch(query)
  } catch (error) {
    return console.log(`No Latest Products Data found on fetch`, error);
  }
}

async function fetchTrendingProductsData() {
  const query = defineQuery(`*[_type == "trendingProducts"] {id, slug, description, image, price, discountPercentage, name, stockLevel, category}`)
  let trendingProductsData = []
  
  try {
    return trendingProductsData = await client.fetch(query)
  } catch (error) {
    return console.log(`No trending Products Data found on fetch`, error);
  }
}

async function fetchDiscountProductsData() {
  const query = defineQuery(`*[_type == "discountedItem"][0] {id, descriptionPoint1, descriptionPoint2, descriptionPoint3, descriptionPoint4, slug, mainHeading, description, image, price, discountPercentage, name, stockLevel, category}`)
  let discountedItemData = await client.fetch(query) 
  
  try {
    return discountedItemData = await client.fetch(query)
  } catch (error) {
    return console.log(`No trending Products Data found on fetch`, error);
  }
}