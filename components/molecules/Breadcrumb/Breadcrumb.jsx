import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 h-36 flex flex-col justify-center items-center text-gray-800">
      <div>
        <Link href={"/"}>HOME</Link>
        <span className="mx-2">/</span>
        <Link href={"/cart"}>CART</Link>
      </div>
      <h1 className="text-3xl font-bold ">Cart</h1>
    </div>
  );
};

export default Breadcrumb;
