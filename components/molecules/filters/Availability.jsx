import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
import FilterHead from "@/components/atoms/filterHead/FilterHead";

const Availability = () => {
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead title={"Availability"} />
      <div className="mt-4 px-4 pb-3">
        <FilterCheckBox label={"In Stock"} name={"inStock"} />
        <FilterCheckBox label={"Pre Order"} name={"preOrder"} />
        <FilterCheckBox label={"Up Coming"} name={"upComing"} />
      </div>
    </div>
  );
};

export default Availability;
