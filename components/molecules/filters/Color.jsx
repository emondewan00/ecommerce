import FilterHead from "@/components/atoms/Button/filterHead/FilterHead";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";

const Color = () => {
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead title={"Color"} />
      <div className="mt-4 px-4 pb-3">
        <FilterCheckBox name={"Black"} id={"black"} />
        <FilterCheckBox name={"Blue"} id={"blue"} />
        <FilterCheckBox name={"Brown"} id={"brown"} />
        <FilterCheckBox name={"Green"} id={"green"} />
      </div>
    </div>
  );
};

export default Color;
