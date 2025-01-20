import LatestProducts from "@/components/latest-products";
import FeaturedProducts from "@/components/featured-products";
import MarketingPanel from "@/components/marketing-panel";
import WhatWeOffer from "@/components/what-offer";
import UniqueFeaturesTrendingProducts from "@/components/unique-features-trending-products";
import TrendingProducts from "@/components/trending-products";
import DiscountItem from "@/components/Discount-Item";
import TopCategories from "@/components/top-categories";
import SubscribeToBlog from "@/components/subscribe-to-blog";
import LatestBlog from "@/components/latest-blog";

export default function Home() {
  
  return (
    <div className="flex flex-col gap-[50px]">
      <MarketingPanel/>
      <FeaturedProducts/>
      <LatestProducts/>
      <WhatWeOffer/>
      <UniqueFeaturesTrendingProducts/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <SubscribeToBlog/>
      <LatestBlog/>
    </div>
  );
}