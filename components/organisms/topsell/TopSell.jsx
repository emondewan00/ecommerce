"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const TopSell = () => {
  return (
    <div className="rounded border  w-full">
      <h3 className="text-xl border-b p-4">Top 20 Sell Product</h3>
      <div className="flex flex-col gap-4 p-4">
        <div className=" w-fit flex gap-4">
          <div className="relative">
            <Image
              src={"/images/3-1-1.jpg"}
              className="w-[100px] h-[100px] object-cover relative"
              width={200}
              height={200}
              alt=""
            />
            {/* <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
              7% OFF
            </span> */}
          </div>
          <div className="self-center">
            <p className=" mt-2">Classic Hat</p>
            <div className="text-sm my-1">
              <Rating
                readonly
                placeholderRating={4.5}
                emptySymbol={<FaStar className="text-gray-400 " />}
                placeholderSymbol={<FaStar className="text-yellow-400 " />}
                fullSymbol={<FaStar />}
              />
              {/* <span className="ml-2 text-gray-400">(1 Reviews)</span> */}
            </div>
            <h3 className="font-bold ">$53.00</h3>
          </div>
        </div>
        <div className=" w-fit flex gap-4">
          <div className="relative">
            <Image
              src={"/images/3-1-1.jpg"}
              className="w-[100px] h-[100px] object-cover relative"
              width={200}
              height={200}
              alt=""
            />
            {/* <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
              7% OFF
            </span> */}
          </div>
          <div className="self-center">
            <p className=" mt-2">Classic Hat</p>
            <div className="text-sm my-1">
              <Rating
                readonly
                placeholderRating={4.5}
                emptySymbol={<FaStar className="text-gray-400 " />}
                placeholderSymbol={<FaStar className="text-yellow-400 " />}
                fullSymbol={<FaStar />}
              />
              {/* <span className="ml-2 text-gray-400">(1 Reviews)</span> */}
            </div>
            <h3 className="font-bold ">$53.00</h3>
          </div>
        </div>
        <div className=" w-fit flex gap-4">
          <div className="relative">
            <Image
              src={"/images/3-1-1.jpg"}
              className="w-[100px] h-[100px] object-cover relative"
              width={200}
              height={200}
              alt=""
            />
            {/* <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
              7% OFF
            </span> */}
          </div>
          <div className="self-center">
            <p className=" mt-2">Classic Hat</p>
            <div className="text-sm my-1">
              <Rating
                readonly
                placeholderRating={4.5}
                emptySymbol={<FaStar className="text-gray-400 " />}
                placeholderSymbol={<FaStar className="text-yellow-400 " />}
                fullSymbol={<FaStar />}
              />
              {/* <span className="ml-2 text-gray-400">(1 Reviews)</span> */}
            </div>
            <h3 className="font-bold ">$53.00</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TopSell;
