"use client";
import FilterHead from "@/components/atoms/filterHead/FilterHead";
import FilterCheckBox from "@/components/molecules/filterCheckBox/FilterCheckBox";
import { useState } from "react";

const Accordion = ({ title, items=[] }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  console.log(items);
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead
        title={title}
        accordionFn={setAccordionOpen}
        accordionState={accordionOpen}
      />
      <div
        className={`accordion-box mt-4 px-4 pb-3 transition-all duration-1000 delay-1000 ease-linear ${
          accordionOpen ? "hidden h-0 overflow-hidden" : "h-auto "
        }`}
      >
        {items?.map((item, indx) => (
          <FilterCheckBox key={indx} label={item.label} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
