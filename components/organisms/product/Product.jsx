"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaRegHeart,
  FaShoppingBag,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Rating from "react-rating";

const Product = () => {
  return (
    <div className="  mt-5 flex gap-x-6">
      <div className="relative">
        <Image
          src={"/images/1-1-600x675.jpg"}
          className="min-w-[425px] h-[425px] object-cover relative"
          width={600}
          height={600}
          alt=""
        />
        <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
          7% OFF
        </span>
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
          <span className="ml-2 text-gray-400">(1 Reviews)</span>
        </div>
        <h3 className="font-extrabold text-xl">$53.00 - $180.00</h3>
        <ul className="list-image-[url(/images/done.png)] list-inside features">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <div className="flex gap-x-4 text-gray-600">
          <p>Size:</p>
          <div className="space-x-2">
            <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
              Extra Large
            </button>
            <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
              Large
            </button>
            <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
              Medium
            </button>
            <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
              Small
            </button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex  gap-x-4">
          <input
            type="number"
            name=""
            className="outline-none border-gray-400 border py-2 px-2 rounded-[2px] w-32"
            id=""
            defaultValue={1}
          />
          <button className="uppercase text-sm text-gray-500 bg-gray-100 py-2 px-3 rounded flex gap-x-2 items-center grow justify-center">
            <FaShoppingBag />
            add to cart
          </button>
        </div>
        <div className="flex gap-x-2 items-center mt-3">
          <div className="border text-gray-500 p-2 rounded-full">
            <FaFacebook />
          </div>
          <div className="border text-gray-500 p-2 rounded-full">
            <FaTwitter />
          </div>
          <div className="border text-gray-500 p-2 rounded-full">
            <FaPinterest />
          </div>
          <div className="border text-gray-500 p-2 rounded-full">
            <FaWhatsapp />
          </div>
          <div className="border text-gray-500 p-2 rounded-full">
            <FaLinkedinIn />
          </div>
          <span className="border mx-3 h-6"></span>
          <FaRegHeart className="text-xl text-gray-500" />
          <MdCompareArrows className="text-xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Product;
