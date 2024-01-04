"use client";
import Image from "next/image";
import { FaRegHeart, FaSearch, FaShoppingBag, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const PDCard = () => {
  return (
    <div className="text-center w-fit group">
      <div className="relative">
        <Image
          src={"/images/3-1-1.jpg"}
          className="w-[200px] h-[200px] object-cover relative"
          width={200}
          height={200}
          alt=""
        />
        <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
          7% OFF
        </span>
        <div className="absolute top-4 right-4 space-y-2 opacity-0 transition-opacity delay-100 duration-300 ease-linear group-hover:opacity-100">
          <div className="bg-white text-gray-400 p-2 rounded-full">
            <FaShoppingBag />
          </div>
          <div className="bg-white text-gray-400 p-2 rounded-full">
            <FaRegHeart />
          </div>
          <div className="bg-white text-gray-400 p-2 rounded-full">
            <FaSearch />
          </div>
        </div>
      </div>
      <div>
        <p className=" mt-2">Classic Hat</p>
        <div className="text-sm my-1">
          <Rating
            readonly
            placeholderRating={4.5}
            emptySymbol={<FaStar className="text-gray-400 " />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          <span className="ml-2 text-gray-400">(1 Reviews)</span>
        </div>
        <h3 className="font-bold ">$53.00</h3>
      </div>
    </div>
  );
};

export default PDCard;
