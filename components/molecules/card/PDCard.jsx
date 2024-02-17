"use client";
import ProductHover from "@/components/atoms/icons/ProductHover";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
const PDCard = ({
  image = "/images/3-1-1.jpg",
  discount = "7%",
  name = "Classic Hat",
  price = "$53.00",
  rating = 4.5,
  review = "1 Reviews",
}) => {
  return (
    <div className="text-center w-fit group bg-white hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <Link href={"/product"}>
          <Image
            src={image}
            className="w-[200px] h-[180px] object-cover relative"
            width={200}
            height={200}
            alt={name}
          />
        </Link>
        <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
          {discount} OFF
        </span>
        <ProductHover />
      </div>
      <div className="p-1">
        <Link href={"/product"} className=" mt-2 inline-block">
          {name}
        </Link>
        <div className="text-sm my-1">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaStar className="text-gray-400 " />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          <span className="ml-2 text-gray-400">({review})</span>
        </div>
        <h3 className="font-bold ">{price}</h3>
      </div>
    </div>
  );
};

export default PDCard;
