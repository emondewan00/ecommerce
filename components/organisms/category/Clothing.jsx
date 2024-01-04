import PDCard from "@/components/molecules/card/PDCard";
import BannerVertical from "../banner/BannerVertical";
import SectionHeaderOne from "@/components/molecules/header/SectionHeaderOne";

const Clothing = () => {
  return (
    <div>
      <SectionHeaderOne />
      <div className="flex flex-col md:flex-row gap-4 my-8 items-center">
        <BannerVertical />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 self-start">
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
        </div>
      </div>
    </div>
  );
};

export default Clothing;
