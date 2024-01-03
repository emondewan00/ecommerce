import { FaArrowRight } from "react-icons/fa";

const TextButton = () => {
  return (
    <button className="uppercase text-white mt-2 text-sm h-fit flex items-center gap-x-2">
      shop now <FaArrowRight />
    </button>
  );
};

export default TextButton;
