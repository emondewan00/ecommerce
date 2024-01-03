import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const SectionHeaderOne = () => {
  return (
    <div className="py-2 border-b flex items-center justify-between">
      <h3 className="text-xl text-gray-700 font-bold ">Clothing & Apparel</h3>
      <Link href={"/"} className="flex items-center gap-x-2 text-sm">
        More Products <BsArrowRight />
      </Link>
    </div>
  );
};

export default SectionHeaderOne;
