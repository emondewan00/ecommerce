import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
import FilterHead from "@/components/atoms/Button/filterHead/FilterHead";

const Availability = () => {
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead title={"Availability"} />
      <div className="mt-4 px-4 pb-3">
        <FilterCheckBox name={"In Stock"} id={"inStock"} />
        <FilterCheckBox name={"Pre Order"} id={"preOrder"} />
        <FilterCheckBox name={"Up Coming"} id={"upComing"} />
      </div>
    </div>
  );
};

export default Availability;
