import BottomNav from "@/components/organisms/bottomnav/BottomNav";
import Features from "@/components/organisms/features/Features";
import HotDeals from "@/components/organisms/hotdeals/HotDeals";
import MidNav from "@/components/organisms/midnav/MidNav";
import PopularDepartments from "@/components/organisms/popular/Popular";
import SideBar from "@/components/organisms/sidebar/SideBar";
import Slider from "@/components/organisms/slider/Slider";
import Sponsors from "@/components/organisms/sponsors/Sponsors";
import TopCategories from "@/components/organisms/topcategories/TopCategories";
import TopNav from "@/components/organisms/topnav/TopNav";
import TopSell from "@/components/organisms/topsell/TopSell";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-500">
        <div className="max-w-5xl mx-auto ">
          <TopNav />
          <MidNav />
          <BottomNav />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="my-4 flex gap-x-4">
          <SideBar />
          <Slider />
        </div>
        <Features />
        <Sponsors />
        <div className="flex gap-x-4">
          <HotDeals />
          <TopSell />
        </div>
        <TopCategories />
        <PopularDepartments />
        <Sponsors />
      </div>
    </div>
  );
}
