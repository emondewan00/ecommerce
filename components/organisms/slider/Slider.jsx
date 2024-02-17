"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import LinkButton from "@/components/atoms/Button/LinkButton";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
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
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
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
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
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
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// "use client";

// // import Swiper core and required modules
// import { Autoplay, Pagination } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";
// import Image from "next/image";
// import LinkButton from "@/components/atoms/Button/LinkButton";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         autoplay={{
//           delay: 1200,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination]}
//         slidesPerView={1}
//         pagination={{ clickable: true, dynamicBullets: true }}
//         className="mySwiper"
//       >
//         <SwiperSlide className="">
//           <Image
//             src={"/images/slide-1.jpg"}
//             className="rounded  relative hidden md:block"
//             width={1000}
//             height={700}
//             alt=""
//           />
//           <Image
//             src={"/images/slide-1.jpg"}
//             className="rounded relative block slide-image md:hidden"
//             width={300}
//             height={500}
//             alt=""
//           />
//           <div className="absolute top-0 flex flex-col justify-center h-full ml-4 md:ml-14 text-gray-900">
//             <p className="text-[12px] text-white uppercase">
//               Find the boundaries .Push through
//             </p>
//             <h1 className="text-2xl md:text-5xl font-bold uppercase">
//               Great Deals
//             </h1>
//             <div className="flex gap-x-4 mt-2">
//               <h5 className="uppercase text-lg mt-2">
//                 <sup>starting at $</sup>
//                 <em className="text-2xl">299</em>
//                 <sup>99</sup>
//               </h5>
//               <LinkButton url={"/"} text={"GET YOURS!"} />
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
