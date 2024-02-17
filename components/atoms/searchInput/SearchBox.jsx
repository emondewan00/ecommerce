import { FaSearch } from "react-icons/fa";

const SearchBox = ({ boxStyle }) => {
  return (
    <div className={boxStyle}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-auto md:w-80 py-2 pl-4 pr-12 md:pr-[50px] rounded-full text-sm relative"
      />
      <span className="border-l border-gray-200 px-4 absolute right-0 py-2 top-1 ">
        <FaSearch className="text-gray-300" />
      </span>
    </div>
  );
};

export default SearchBox;
