"use client";
import FilterHead from "@/components/atoms/Button/filterHead/FilterHead";
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
        className={`accordion-box mt-4 px-4 pb-3 transition-all duration-300 delay-75 ease-linear ${
          accordion ? "hidden max-h-0 overflow-hidden" : "h-auto block"
        }`}
      >
        <FilterCheckBox name={"Nike"} id={"nike"} />
        <FilterCheckBox name={"Adidas"} id={"adidas"} />
        <FilterCheckBox name={"Gucci"} id={"Gucci"} />
      </div>
    </div>
  );
};

export default Brand;
