"use client";
import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb";
import WishTable from "@/components/organisms/wishTable/WishTable";
import { useSession } from "next-auth/react";

const Wishlist = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <WishTable />
      </div>
    </div>
  );
};

export default Wishlist;
