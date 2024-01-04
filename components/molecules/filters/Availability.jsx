"use client";
import { FaAngleDown } from "react-icons/fa";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
import { useState } from "react";

const Availability = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <div className="p-4 border-b flex items-center  justify-between">
        <p className="text-gray-700 ">Availability</p>
        <FaAngleDown
          className={`cursor-pointer ${accordion ? "rotate-12" : "rotate-0"}}`}
          onClick={() => setAccordion(!accordion)}
        />
      </div>
      <div className="mt-4 px-4 pb-3">
        <FilterCheckBox />
        <FilterCheckBox />
        <FilterCheckBox />
      </div>
    </div>
  );
};

export default Availability;
