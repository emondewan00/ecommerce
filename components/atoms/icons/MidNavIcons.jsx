import { FaRegHeart, FaRegUser, FaShoppingBag } from "react-icons/fa";

const MidNavIcons = () => {
  return (
    <div className="flex gap-x-4">
      <FaRegUser className="text-2xl text-white" />
      <FaRegHeart className="text-2xl text-white" />
      <FaShoppingBag className="text-2xl text-white" />
    </div>
  );
};

export default MidNavIcons;
