"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
import Image from "next/image";

const SliderTwo = () => {
 
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, Autoplay, Zoom]}
      autoplay={{
        delay: 3000,
        waitForTransition: true,
      }}
      zoom={{
        minRatio:5,
        maxRatio: 10,
        containerClass:"swiper-zoom-container"
      }}
      speed={2000}
      loop={true}
      autoHeight={true}
      slidesPerView={1}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={"/images/slide-1.jpg"}
          className="rounded relative block slide-image swiper-zoom-container"
          width={300}
          height={500}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/slide-1.jpg"}
          className="rounded relative block slide-image swiper-zoom-container"
          width={300}
          height={500}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/slide-1.jpg"}
          className="rounded relative block slide-image swiper-zoom-container"
          width={300}
          height={500}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderTwo;
