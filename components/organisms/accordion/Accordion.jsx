"use client";
import FilterHead from "@/components/atoms/filterHead/FilterHead";
import FilterCheckBox from "@/components/molecules/filterCheckBox/FilterCheckBox";
import { useState } from "react";

const Accordion = ({ title, items = [] }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead
        title={title}
        accordionFn={setAccordionOpen}
        accordionState={accordionOpen}
      />
      <div
        className={`accordion-box accordion-transition grid ${
          accordionOpen
            ? "grid-rows-[1fr] mt-4 px-4 pb-3  overflow-y-hidden"
            : "grid-rows-[0fr] overflow-hidden"
        }`}
      >
        <div className="row-span-2">
          {items?.map((item, indx) => (
            <FilterCheckBox key={indx} label={item.label} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
