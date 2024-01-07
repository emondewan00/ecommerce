"use client";
import MidNavIcons from "@/components/atoms/icons/MidNavIcons";
import Logo from "@/components/atoms/logo/Logo";
import Phone from "@/components/atoms/phone/Phone";
import SearchBox from "@/components/atoms/searchInput/SearchBox";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuMobile from "../sidebar/MenuMobile";

const MidNav = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="py-6 flex items-center px-4 md:px-0">
        <div className="flex gap-4">
          <FaBars
            className="text-white text-2xl block md:hidden cursor-pointer"
            onClick={() => setSideBar(true)}
          />
          <Logo />
        </div>
        <div className="flex items-center justify-between gap-x-12 ml-auto">
          <SearchBox boxStyle={"relative hidden md:block"} />
          <Phone />
          <MidNavIcons />
        </div>
      </div>
      {/* mobile side navbar */}
      <MenuMobile sideBar={sideBar} setSideBar={setSideBar} />
      
    </>
  );
};

export default MidNav;
