import PDCard from "@/components/molecules/card/PDCard";
import Availability from "@/components/molecules/filters/Availability";
import RangeFilter from "@/components/molecules/filters/RangeFilter";
import TopBar from "@/components/molecules/filters/TopBar";

const Category = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="md:flex  gap-4 px-4 md:px-0">
        <div className="basis-72">
          {/* filters */}
          <RangeFilter />
          <Availability />
        </div>
        <div className="full">
          <TopBar />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
    </div>
  );
};

export default Category;
