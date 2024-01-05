"use client";
import FilterHead from "@/components/atoms/filterHead/FilterHead";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
import { useState } from "react";

const Brand = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead
        title={"Brand"}
        accordionFn={setAccordion}
        accordionState={accordion}
      />
      <div
        className={`accordion-box mt-4 px-4 pb-3 transition-all duration-1000 delay-1000 ease-linear ${
          accordion ? "hidden h-0 overflow-hidden" : "h-auto "
        }`}
      >
        <FilterCheckBox label={"Nike"} name={"nike"} />
        <FilterCheckBox label={"Adidas"} name={"adidas"} />
        <FilterCheckBox label={"Gucci"} name={"Gucci"} />
      </div>
    </div>
  );
};

export default Brand;
