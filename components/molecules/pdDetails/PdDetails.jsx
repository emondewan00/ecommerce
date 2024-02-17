import { FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PdDetails = () => {
  return (
    <div className="w-full ">
      <h4 className="mt-2 text-xl">Coat Pool Comfort Jacket</h4>
      <div className="text-sm my-2">
        <Rating
          readonly
          placeholderRating={4.5}
          emptySymbol={<FaStar className="text-gray-400 " />}
          placeholderSymbol={<FaStar className="text-yellow-400 " />}
          fullSymbol={<FaStar />}
        />
        <span className="ml-2 text-gray-400">156 Ratings | 1 Reviews</span>
      </div>
      <p className="text-gray-500 my-2">Brand:hello</p>
      <p className="text-gray-500 my-2">Category:hello</p>
      <h3 className="font-extrabold text-xl">$53.00 - $180.00</h3>

      <div className="flex  gap-4">
        <button className="uppercase w-fit text-sm text-white bg-yellow-400 py-3 my-2 px-6 rounded flex gap-2 items-center  justify-center">
          <FaShoppingCart />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default PdDetails;
