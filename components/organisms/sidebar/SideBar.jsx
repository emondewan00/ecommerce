import Link from "next/link";

const SideBar = () => {
  return (
    <div className="border rounded md:min-w-60 h-fit">
      <h2 className="text-lg font-semibold py-[14px] px-5 bg-gray-100">
        TOP CATEGORIES
      </h2>
      <div className="px-4 mb-4 mt-2">
        <ul className="sidebar">
          <li>
            <Link href={"/"}>Fashion</Link>
          </li>
          <li>
            <Link href={"/"}>Electronics</Link>
          </li>
          <li>
            <Link href={"/"}>Gifts</Link>
          </li>
          <li>
            <Link href={"/"}>Home & Garden</Link>
          </li>
          <li>
            <Link href={"/"}>Music</Link>
          </li>
          <li>
            <Link href={"/"}>Sports</Link>
          </li>
          <li>
            <Link href={"/"}>Toy & Games</Link>
          </li>
        </ul>
        <Link href={"/"} className="bg-black px-6 py-3 text-white inline-block mt-4">
          HUG SALE -70% OFF
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
