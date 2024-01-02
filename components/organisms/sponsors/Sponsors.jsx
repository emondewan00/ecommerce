import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="my-10 flex gap-x-4">
      <div className="relative w-1/2">
        <Image
          src={"/images/1-1.jpg"}
          className="relative rounded w-full"
          width={562}
          height={200}
          alt=""
        />
        <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
          <p>
            Get up to{" "}
            <span className="text-orange-400 font-bold">20 % OFF</span>
          </p>
          <h3 className="font-extrabold text-gray-800 text-2xl">
            SPORTS OUTFITS <br />
            <span className="font-normal">Collection</span>
          </h3>
          <p className="text-sm mt-3">
            Starting at <span className="text-orange-400">$170.00</span>
          </p>
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          src={"/images/1-2.jpg"}
          className="relative rounded w-full"
          width={560}
          height={200}
          alt=""
        />
        <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
          <p className="text-gray-400">
            New Arrivals{" "}
            <span className="text-orange-400 font-bold">20 % OFF</span>
          </p>
          <h3 className="font-extrabold text-white text-2xl">
            ACCESSORIES
            <br />
            <span className="font-normal">Collection</span>
          </h3>
          <p className="text-sm mt-3 text-white">
            Only From <span className="text-orange-400">$170.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
