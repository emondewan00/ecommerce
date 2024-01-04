import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

const MidNav = () => {
  return (
    <div className="py-6 flex items-center px-4 md:px-0">
      <div>
        
        <Image
          src={"/images/logo-white.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-between gap-x-12 ml-auto">
        <div className="relative hidden md:block">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-80 py-2 pl-4 pr-[50px] rounded-full text-sm relative"
          />
          <span className="border-l border-gray-200 px-4 absolute right-0 py-2 top-1 ">
            <FaSearch className="text-gray-300" />
          </span>
        </div>
        <div className="md:flex items-center hidden">
          <FaPhoneAlt className="text-2xl text-gray-100 mr-2" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-50 font-medium">
              Call Us Now
            </span>
            <Link href={"/"} className="text-white font-semibold">
              +880174123522
            </Link>
          </div>
        </div>
        <div className="flex gap-x-4">
          <FaRegUser className="text-2xl text-white" />
          <FaRegHeart className="text-2xl text-white" />
          <FaShoppingBag className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default MidNav;
