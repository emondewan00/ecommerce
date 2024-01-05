import FilterHead from "@/components/atoms/filterHead/FilterHead";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";

const Color = () => {
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead title={"Color"} />
      <div className="mt-4 px-4 pb-3">
        <FilterCheckBox label={"Black"} name={"black"} />
        <FilterCheckBox label={"Blue"} name={"blue"} />
        <FilterCheckBox label={"Brown"} name={"brown"} />
        <FilterCheckBox label={"Green"} name={"green"} />
      </div>
    </div>
  );
};

export default Color;
