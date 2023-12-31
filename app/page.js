import BottomNav from "@/components/organisms/bottomnav/BottomNav";
import Features from "@/components/organisms/features/Features";
import MidNav from "@/components/organisms/midnav/MidNav";
import SideBar from "@/components/organisms/sidebar/SideBar";
import Slider from "@/components/organisms/slider/Slider";
import Sponsor from "@/components/organisms/sponsor/Sponsor";
import TopNav from "@/components/organisms/topnav/TopNav";

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
      <div className="max-w-5xl mx-auto">
        <div className="my-4 flex gap-x-4">
          <SideBar />
          <Slider />
        </div>
        <Features />
        <Sponsor />
      </div>
    </div>
  );
}
