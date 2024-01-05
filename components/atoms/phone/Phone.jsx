import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="md:flex items-center hidden">
      <FaPhoneAlt className="text-2xl text-gray-100 mr-2" />
      <div className="flex flex-col">
        <span className="text-sm text-gray-50 font-medium">Call Us Now</span>
        <Link href={"/"} className="text-white font-semibold">
          +880174123522
        </Link>
      </div>
    </div>
  );
};

export default Phone;
