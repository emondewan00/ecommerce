"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FilterHead = ({ title, accordionState, accordionFn }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="p-4 border-b flex items-center  justify-between">
      <p className="text-gray-700 ">{title}</p>
      <FaAngleDown
        className={`cursor-pointer  transition-all duration-300 delay-75 ease-linear ${
          accordionState ? "rotate-180 " : "rotate-0"
        }}`}
        onClick={() => accordionFn(!accordionState)}
      />
    </div>
  );
};

export default FilterHead;
