"use client";
import Image from "next/image";
import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const Product = () => {
  return (
    <div className="shadow-lg bg-white mt-5 flex flex-col md:flex-row gap-6 p-4">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="md:order-[0]">
          <div className=" md:space-y-4 order-1  flex items-center md:block gap-4">
            <Image
              src={"/images/1-1-600x675.jpg"}
              className="min-w-[100px] h-[100px] object-cover relative"
              width={100}
              height={100}
              alt=""
            />
            <Image
              src={"/images/1-1-600x675.jpg"}
              className="min-w-[100px] h-[100px] object-cover relative"
              width={100}
              height={100}
              alt=""
            />
            <Image
              src={"/images/1-1-600x675.jpg"}
              className="min-w-[100px] h-[100px] object-cover relative"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/images/1-1-600x675.jpg"}
            className="min-w-[350px] h-[350px] object-cover relative hidden md:block"
            width={400}
            height={400}
            alt=""
          />
          <Image
            src={"/images/1-1-600x675.jpg"}
            className="w-[350px] h-[300px] object-cover relative block md:hidden"
            width={300}
            height={300}
            alt=""
          />
          <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
            7% OFF
          </span>
        </div>
      </div>
      <div className="w-full "> 
        <h4 className="mt-2 text-xl">Coat Pool Comfort Jacket</h4>
        <div className="text-sm my-2">
          <Rating
            readonly
            placeholderRating={4.5}
            emptySymbol={<FaStar className="text-gray-400 " />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          <span className="ml-2 text-gray-400">156 Ratings | 1 Reviews</span>
        </div>
        <p className="text-gray-500 my-2">Brand:hello</p>
        <p className="text-gray-500 my-2">Category:hello</p>
        <h3 className="font-extrabold text-xl">$53.00 - $180.00</h3>

        <div className="flex  gap-4">
          <button className="uppercase w-fit text-sm text-white bg-yellow-400 py-3 my-2 px-6 rounded flex gap-2 items-center  justify-center">
            <FaShoppingCart />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
