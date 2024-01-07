import SearchBox from "@/components/atoms/searchInput/SearchBox";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const MenuMobile = ({ sideBar, setSideBar }) => {
  console.log(sideBar)
  return (
    <div
      className={`absolute z-20 w-64 h-full top-0 bg-gray-900 text-white p-4 transition-all duration-300 delay-75 ease-linear  md:hidden ${
        sideBar ? "left-0" : "-left-96"
      }`}
    >
      <SearchBox boxStyle={"relative block md:hidden my-4"} />
      <ul className="nav-link">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/"}>CATEGORY</Link>
        </li>
        <li>
          <Link href={"/"}>PRODUCTS</Link>
        </li>
        <li>
          <Link href={"/"}>PAGES</Link>
        </li>
        <li>
          <Link href={"/"}>BLOG</Link>
        </li>
        <li>
          <Link href={"/"}>CONTACT US</Link>
        </li>
      </ul>
      <div className="absolute top-1 -right-3 bg-rose-500 rounded ">
        <AiOutlineClose
          onClick={() => setSideBar(false)}
          className="text-3xl"
        />
      </div>
    </div>
  );
};

export default MenuMobile;
