import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const TopNav = () => {
  return (
    <div className="flex justify-between text-gray-50 py-2 border-b border-gray-50/20">
      <div></div>
      <div className="flex gap-x-6">
        <ul className="flex text-sm items-center gap-x-4">
          <li>
            <Link href={"/#"}>My Account</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"}>My Wishlist</Link>
          </li>
          <li>
            <Link href={"/"}>Cart</Link>
          </li>
          <li>
            <Link href={"/"}>Log In</Link>
          </li>
        </ul>
        <span className="border-[1px]"></span>
        <div className="relative group">
          <Link href={"/"} className="peer">
            Eng
          </Link>
          <div className="group-hover:block absolute text-black p-1 top-6 bg-gray-100 hidden rounded-sm ">
            <ul>
              <li>Eng</li>
              <li>Fra</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <Link href={"/"} className="peer">
            Eng
          </Link>
          <div className="group-hover:block absolute text-black p-1 top-6 bg-gray-100 hidden rounded-sm ">
            <ul>
              <li>Eng</li>
              <li>Fra</li>
            </ul>
          </div>
        </div>
        <span className="border-[1px]"></span>
        <div className="flex items-center gap-x-2">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
