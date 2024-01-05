import Image from "next/image";
import Link from "next/link";

const RecentViewCard = ({image,pdId,name}) => {
  return (
    <div className="relative group">
      <Image
        src={"/images/2-42.jpg"}
        className=" object-cover w-[190px] h-[150px] relative rounded"
        width={190}
        height={150}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full text-white bg-gray-700/50  group-hover:flex justify-center items-center group-hover:h-full transition-all ease-in-out duration-500 h-0 rounded">
        <Link
          href={"/"}
          className="text-sm group-hover:block hidden  after:transition-all after:ease-linear after:duration-200 after:delay-100 after:[] after:w-0 after:h-1 after:bg-white after:rounded after:absolute after:bottom-[60px] after:left-11 hover:after:w-[68px] "
        >
          Clothing
        </Link>
      </div>
    </div>
  );
};

export default RecentViewCard;
