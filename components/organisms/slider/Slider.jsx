"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
        autoHeight={true}
        autoplay={{
          delay: 3000,
          waitForTransition: true,
        }}
        speed={2000}
        loop={true}
      >
        <SwiperSlide className="">
          <Image src={"/images/slide-1.jpg"} className="rounded" width={1000} height={700} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={"/images/slide-2.jpg"} className="rounded" width={1000} height={700} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={"/images/slide-3.jpg"} className="rounded" width={1000} height={700} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
