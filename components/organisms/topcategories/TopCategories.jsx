import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="my-10">
      <div className="bg-gray-100 py-10">
        <h2 className="text-lg text-center font-semibold mb-4">
          Top Categories Of The Month{" "}
        </h2>
        <div className="flex gap-x-6 w-full justify-center">
          <div className=" relative overflow-hidden">
            <Image
              src={"/images/2-12.jpg"}
              className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear"
              width={170}
              height={170}
              alt=""
            />
            <div className="absolute bottom-3 w-full ">
              <p className=" text-center threeD">Fashion</p>
            </div>
          </div>
          <div className=" relative overflow-hidden">
            <Image
              src={"/images/2-22.jpg"}
              className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear"
              width={170}
              height={170}
              alt=""
            />
            <div className="absolute bottom-4 w-full ">
              <p className=" text-center ">Furniture</p>
            </div>
          </div>
          <div className=" relative overflow-hidden">
            <Image
              src={"/images/2-3.jpg"}
              className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear"
              width={170}
              height={170}
              alt=""
            />
            <div className="absolute bottom-4 w-full ">
              <p className=" text-center ">Shoes</p>
            </div>
          </div>
          <div className=" relative overflow-hidden">
            <Image
              src={"/images/2-4.jpg"}
              className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear"
              width={170}
              height={170}
              alt=""
            />
            <div className="absolute bottom-4 w-full ">
              <p className=" text-center ">Sports</p>
            </div>
          </div>
          <div className=" relative overflow-hidden">
            <Image
              src={"/images/2-5.jpg"}
              className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear"
              width={170}
              height={170}
              alt=""
            />
            <div className="absolute bottom-4 w-full ">
              <p className=" text-center ">Games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
