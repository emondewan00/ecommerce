"use client";
import PDCard from "@/components/molecules/card/PDCard";
import TopBar from "@/components/molecules/filters/TopBar";
import FilterContainer from "@/components/organisms/filter/FilterContainer";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Category = () => {
  const [poenFilter, setOpenFilter] = useState(false);
  const className = `h-full bg-gray-100 p-4 shadow-lg shadow-purple-400 overflow-y-scroll min-w-64 md:hidden left-0`;
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="md:flex  gap-4 px-4 md:px-0">
        <div
          className={`fixed md:static transition-all z-30 duration-500 delay-150 ease-linear top-0 ${
            poenFilter ? className : "-left-96  md:block md:basis-72 "
          }`}
        >
          <div className="absolute md:hidden top-2 right-3 bg-rose-500 rounded ">
            <AiOutlineClose
              onClick={() => setOpenFilter(false)}
              className="text-3xl"
            />
          </div>
          <h4 className="text-gray-600 mb-4">Filter:</h4>
          <FilterContainer />
        </div>
        <div className="full">
          <TopBar setOpenFilter={setOpenFilter} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
