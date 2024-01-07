"use client";
import MidNavIcons from "@/components/atoms/icons/MidNavIcons";
import Logo from "@/components/atoms/logo/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else if (window.scrollY < 80) {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={` shadow transition-all duration-300 delay-75 scroll-smooth text-[16px] hidden md:block ${
        scroll ? "bg-blue-500 fixed z-50 top-0 w-full text-white" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center">
        <div className={`${scroll ? "block" : "hidden"}`}>
          <Logo />
        </div>
        <div className=" grow justify-between hidden items-center md:flex">
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
          <ul className={`${scroll ? "hidden" : "flex"} menu-item`}>
            <li>
              <Link href={"/"}>SPECIAL OFFER</Link>
            </li>
            <li>
              <Link href={"/"}>BUY NOW</Link>
            </li>
          </ul>
          <div className={`${scroll ? "block" : "hidden"}`}>
            <MidNavIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
