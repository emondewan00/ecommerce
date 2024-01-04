import CartBottom from "@/components/molecules/cartBottom/CartBottom";
import CartRow from "@/components/molecules/cartRow/CartRow";
import Image from "next/image";

const ShoppingCartList = () => {
  return (
    <table className="w-full">
      <thead className="">
        <tr className="hidden md:table-row border-b *:pb-2">
          <th className="text-start">Product</th>
          <th className="text-start">Price</th>
          <th className="text-start">Quantity</th>
          <th className="text-start">Total</th>
        </tr>
      </thead>
      <tbody className=" md:*:!border-b">
        <CartRow />
        <CartRow />
        <CartRow />
        <CartRow />
      </tbody>
    </table>
  );
};

export default ShoppingCartList;
