import Availability from "@/components/molecules/filters/Availability";
import Brand from "@/components/molecules/filters/Brand";
import Color from "@/components/molecules/filters/Color";
import RangeFilter from "@/components/molecules/filters/RangeFilter";
import Size from "@/components/molecules/filters/Size";

const FilterContainer = () => {
  return (
    <div >
      {/* filters */}
      <RangeFilter />
      <Availability />
      <Brand />
      <Color />
      <Size />
    </div>
  );
};

export default FilterContainer;
