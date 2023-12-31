import Image from "next/image";

const Sponsor = () => {
  return (
    <div className="my-10 flex gap-x-4">
      <div>
        <Image src={"/images/1-1.jpg"} width={505} height={200} alt="" />
      </div>
      <div>
        <Image src={"/images/1-2.jpg"} width={505} height={200} alt="" />
      </div>
    </div>
  );
};

export default Sponsor;
