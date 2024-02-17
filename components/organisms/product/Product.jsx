"use client";
import ThumbsGallery from "./ThumbsGallery";
import PdDetails from "@/components/molecules/pdDetails/PdDetails";

const Product = () => {
  return (
    <div className="shadow-lg bg-white mt-5 grid grid-cols-1  product-details gap-6 p-4">
      {/* flex flex-col-reverse md:flex-row gap-4 */}
      <div className=" w-full space-y-2">
        {/* <div className="md:order-[0]">
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
        </div> */}
        <ThumbsGallery />
      </div>
      <PdDetails />
    </div>
  );
};

export default Product;
