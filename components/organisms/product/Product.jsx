"use client";
import ThumbsGallery from "./ThumbsGallery";
import PdDetails from "@/components/molecules/pdDetails/PdDetails";

const Product = () => {
  return (
    <div className="shadow-lg bg-white mt-5 grid grid-cols-1  product-details gap-6 p-4">
      {/* flex flex-col-reverse md:flex-row gap-4 */}
      <div className=" w-full space-y-2">
        <ThumbsGallery />
      </div>
      <PdDetails />
    </div>
  );
};

export default Product;
