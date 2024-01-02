"use client";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularDepartments = () => {
  return (
    <div className="my-20">
      <h3 className="text-xl font-bold text-center">Popular Departments</h3>
      <div className="flex gap-x-2 justify-center mt-4 mb-6">
        <button className="uppercase text-sm border rounded py-2 px-4 text-blue-500 border-blue-400">
          new arrivals
        </button>
        <button className="uppercase text-sm border rounded py-2 px-4 text-gray-700">
          best sellers
        </button>
        <button className="uppercase text-sm border rounded py-2 px-4 text-gray-700">
          most popular
        </button>
        <button className="uppercase text-sm border rounded py-2 px-4 text-gray-700">
          featured
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <div className="text-center w-fit">
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-3.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-4-1.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-5.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-6-1.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-3.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-4-1.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-5.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
        <div className="text-center w-fit">
          <Image
            src={"/images/3-6-1.jpg"}
            className="w-[200px] h-[200px] object-cover"
            width={200}
            height={200}
            alt=""
          />
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
      </div>
    </div>
  );
};

export default PopularDepartments;
