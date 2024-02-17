import Clothing from "@/components/organisms/category/Clothing";
import Features from "@/components/organisms/features/Features";
import HotDeals from "@/components/organisms/hotdeals/HotDeals";
import Offer from "@/components/organisms/offer/OfferFullWidthOneCard";
import PopularDepartments from "@/components/organisms/popular/Popular";
import RecentViews from "@/components/organisms/recentviews/RecentViews";
import SideBar from "@/components/organisms/sidebar/SideBar";
import Slider from "@/components/organisms/slider/Slider";
import Sponsors from "@/components/organisms/offer/OfferTwoCard";
import TopCategories from "@/components/organisms/topcategories/TopCategories";
import TopSell from "@/components/organisms/topsell/TopSell";
import SliderTwo from "@/components/organisms/slider/SliderTwo";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <div className="my-4 flex flex-col-reverse md:flex-row gap-4">
        <SideBar />
        <Slider />
        {/* <SliderTwo /> */}
      </div>
      <Features />
      <Sponsors />
      <div className="flex flex-col md:flex-row gap-4">
        <HotDeals />
        <TopSell />
      </div>
      <TopCategories />
      <PopularDepartments />
      <Sponsors />
      <Clothing />
      <Clothing />
      <Offer />
      <Clothing />
      <RecentViews />
    </div>
  );
}
