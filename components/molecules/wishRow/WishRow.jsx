import ButtonOutline from "@/components/atoms/Button/ButtonOutline";
import Image from "next/image";

const WishRow = () => {
  return (
    <tr className="flex flex-col items-center justify-center border  p-4 md:!border-x-0 md:p-0 md:table-row md:*:my-2">
      <td className="md:flex items-center">
        <Image
          src={"/images/2-2.jpg"}
          width={120}
          height={120}
          className="object-cover hidden md:block"
          alt="product image"
        />
        {/* mobile image  */}
        <Image
          src={"/images/2-2.jpg"}
          width={250}
          height={250}
          className="object-cover h-72 min-w-72 block md:hidden"
          alt="product image"
        />
        <h3 className="text-xl md:text-lg text-center my-2 md:my-0">Cooker</h3>
      </td>
      <td> $40.00</td>
      <td>In Stock</td>
      <td>
        <div className="space-x-2 flex  h-full">
          <ButtonOutline text={"quick view"} style="py-[6px]" />
          <button className="bg-gray-800 px-3 py-[6px] text-white inline-block uppercase rounded text-sm ">
            Add to Cart
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishRow;
