import { FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";

const ProductHover = () => {
  return (
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
  );
};

export default ProductHover;
