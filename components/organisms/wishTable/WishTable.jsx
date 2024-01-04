import CartRow from "@/components/molecules/cartRow/CartRow";
import WishRow from "@/components/molecules/wishRow/WishRow";

const WishTable = () => {
  return (
    <table className="w-full">
      <thead className="w-full">
        <tr className="hidden md:table-row border-b *:pb-2">
          <th className="text-start w-1/3">Product</th>
          <th className="text-start w-1/6">Price</th>
          <th className="text-start w-1/6">Stock Status</th>
          <th className="text-start w-1/4">Action</th>
        </tr>
      </thead>
      <tbody className=" md:*:!border-b">
        <WishRow />
        <WishRow />
        <WishRow />
      </tbody>
    </table>
  );
};

export default WishTable;
