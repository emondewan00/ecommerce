import Image from "next/image";
import VerticalText from "../offer/VerticalText";
import TextButton from "@/components/atoms/Button/TextButton";

const OfferCardVertical = ({ offerData }) => {
  const content = {
    subTitle: "New Arrival",
    percentage: "20 % OFF",
    title: "ACCESSORIES",
    titleAfterBR: "Collection",
    textSm: "Only From",
    amount: "$100.00",
  };
  return (
    <div className="relative md:w-1/2">
      <Image
        src={"/images/1-2.jpg"}
        className="relative rounded w-full h-[160px] md:h-[200px]"
        width={560}
        height={200}
        alt=""
      />
      {/* <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
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
      </div> */}
      <VerticalText content={content}></VerticalText>
    </div>
  );
};

export default OfferCardVertical;
