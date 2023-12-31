import Image from "next/image";

const Features = () => {
  return (
    <div className="border grid grid-cols-3 py-4 shadow">
      <div className="flex gap-x-4 px-6 border-r">
        <Image src={"/images/delivery.png"} width={40} height={40} alt="" />
        <div>
          <h3 className="text-md font-bold">FREE SHIPPING & RETURN</h3>
          <p className="text-sm">Free shipping on all orders over $99.</p>
        </div>
      </div>
      <div className="flex gap-x-4 px-6 border-r">
        <Image src={"/images/cashback.png"} width={40} height={40} alt="" />
        <div>
          <h3 className="text-md font-bold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">100% money back guarantee</p>
        </div>
      </div>
      <div className="flex gap-x-4 px-6">
        <Image src={"/images/support.png"} width={40} height={40} alt="" />
        <div>
          <h3 className="text-md font-bold">FREE SHIPPING & RETURN</h3>
          <p className="text-sm">Free shipping on all orders over $99.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
