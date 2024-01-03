import Image from "next/image";

const CategoryCard = () => {
  return (
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
  );
};

export default CategoryCard;
