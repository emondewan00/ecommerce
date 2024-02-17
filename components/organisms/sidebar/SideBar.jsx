import Link from "next/link";

const SideBar = () => {
  return (
    <div className="border rounded md:min-w-60 h-fit">
      <h2 className="text-lg font-semibold py-[14px] px-5 bg-gray-100">
        TOP CATEGORIES
      </h2>
      <div className="px-4 mb-4">
        <ul className="sidebar">
          <li>
            <Link href={"/category"}>Fashion</Link>
          </li>
          <li>
            <Link href={"/category"}>Electronics</Link>
          </li>
          <li>
            <Link href={"/category"}>Gifts</Link>
          </li>
          <li>
            <Link href={"/category"}>Home & Garden</Link>
          </li>
          <li>
            <Link href={"/category"}>Music</Link>
          </li>
          <li>
            <Link href={"/category"}>Sports</Link>
          </li>
        </ul>
        <Link
          href={"/"}
          className="bg-black px-6 py-3 text-white inline-block mt-4"
        >
          HUG SALE -70% OFF
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
