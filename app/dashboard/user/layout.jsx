import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb";
import Link from "next/link";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-5xl mx-auto md:flex my-10 px-4 md:px-0 gap-4">
        <div className="basis-64 ">
          <h3 className="text-lg font-semibold uppercase my-2">My Account</h3>
          <ul className="dashboard-menu text-slate-700 nav-link ">
            <li>
              <Link href={"/"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/"}>Orders</Link>
            </li>
            <li>
              <Link href={"/"}>Downloads</Link>
            </li>
            <li>
              <Link href={"/"}>Address</Link>
            </li>
            <li>
              <Link href={"/"}>Account Details</Link>
            </li>
            <li>
              <Link href={"/"}>Cart</Link>
            </li>
            <li>
              <Link href={"/"}>Wish List</Link>
            </li>
            <li>
              <Link href={"/"}>Log Out</Link>
            </li>
          </ul>
        </div>
        <div className="w-full bg-green-600"> {children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
