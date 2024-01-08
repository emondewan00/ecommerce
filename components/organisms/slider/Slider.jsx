"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LinkButton from "@/components/atoms/Button/LinkButton";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        autoHeight={true}
        autoplay={{
          delay: 3000,
          waitForTransition: true,
        }}
        speed={2000}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide className="">
          <div className="relative overflow-hidden ">
            <Image
              src={"/images/slide-1.jpg"}
              className="rounded relative hidden md:block"
              width={1000}
              height={700}
              alt=""
            />
            <Image
              src={"/images/slide-1.jpg"}
              className="rounded relative block slider-image md:hidden"
              width={300}
              height={500}
              alt=""
            />
            <div className="absolute top-0 flex flex-col justify-center h-full ml-4 md:ml-14 text-gray-900">
              <p className="text-[12px] text-white uppercase">
                Find the boundaries .Push through
              </p>
              <h1 className="text-2xl md:text-5xl font-bold uppercase">
                Great Deals
              </h1>
              <div className="flex gap-x-4 mt-2">
                <h5 className="uppercase text-lg mt-2">
                  <sup>starting at $</sup>
                  <em className="text-2xl">299</em>
                  <sup>99</sup>
                </h5>
                <LinkButton url={"/"} text={"GET YOURS!"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/images/slide-2.jpg"}
              className="rounded relative hidden md:block"
              width={1000}
              height={700}
              alt=""
            />
            <Image
              src={"/images/slide-3.jpg"}
              className="rounded relative block slider-image md:hidden"
              width={300}
              height={500}
              alt=""
            />
            <div className="absolute top-0 flex flex-col justify-center h-full ml-14 text-gray-900">
              <p className="text-white uppercase">
                Over 200 products with discounts
              </p>
              <h1 className="text-5xl font-bold uppercase">Great Deals</h1>
              <div className="flex gap-x-4 mt-2">
                <h5 className="uppercase text-lg mt-2">
                  <sup>starting at $</sup>
                  <em className="text-2xl">299</em>
                  <sup>99</sup>
                </h5>
                <LinkButton url={"/"} text={"GET YOURS!"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/images/slide-3.jpg"}
              className="rounded relative hidden md:block"
              width={1000}
              height={700}
              alt=""
            />
            <Image
              src={"/images/slide-3.jpg"}
              className="rounded relative block slider-image md:hidden"
              width={300}
              height={500}
              alt=""
            />
            <div className="absolute top-0 flex flex-col justify-center h-full ml-14 text-gray-900">
              <p className="text-white uppercase">
                Over 200 products with discounts
              </p>
              <h1 className="text-5xl font-bold uppercase">Great Deals</h1>
              <div className="flex gap-x-4 mt-2">
                <h5 className="uppercase text-lg mt-2">
                  <sup>starting at $</sup>
                  <em className="text-2xl">299</em>
                  <sup>99</sup>
                </h5>
                <LinkButton url={"/"} text={"GET YOURS!"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
