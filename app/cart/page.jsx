import CartBottom from "@/components/molecules/cartBottom/CartBottom";
import ShoppingCartList from "@/components/organisms/shoppingCartList/ShoppingCartList";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="">
      <div className="bg-gray-100 h-36 flex flex-col justify-center items-center text-gray-800">
        <div>
          <Link href={"/"}>HOME</Link>
          <span className="mx-2">/</span>
          <Link href={"/cart"}>CART</Link>
        </div>
        <h1 className="text-3xl font-bold ">Cart</h1>
      </div>
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <div className="md:grid table-grid flex flex-col items-center mx-auto">
          <div>
            <ShoppingCartList />
            <CartBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
