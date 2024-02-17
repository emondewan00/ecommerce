"use client";
import ThumbsGallery from "./ThumbsGallery";
import PdDetails from "@/components/molecules/pdDetails/PdDetails";

const Product = () => {
  return (
    <div className="shadow-lg bg-white mt-5 grid grid-cols-1 md:grid-cols-pdDetails gap-6 py-4 px-6">
      {/* flex flex-col-reverse md:flex-row gap-4 */}
      <ThumbsGallery />
      <PdDetails />
    </div>
  );
};

export default Product;
