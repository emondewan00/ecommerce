import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="border-y border-gray-50/50  justify-between hidden md:flex">
      <ul className="flex menu-item">
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
      <ul className="flex menu-item">
        <li>
          <Link href={"/"}>SPECIAL OFFER</Link>
        </li>
        <li>
          <Link href={"/"}>BUY NOW</Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
