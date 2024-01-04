import ButtonOutline from "@/components/atoms/Button/ButtonOutline";
import LinkButton from "@/components/atoms/Button/LinkButton";

const CartBottom = () => {
  return (
    <div className="flex flex-wrap  justify-center gap-4 md:justify-between my-6">
      <LinkButton url={"/"} text={"continue shopping"} />
      <div className="space-x-4">
        <ButtonOutline text={"clear cart"} />
        <ButtonOutline text={"update"} />
      </div>
    </div>
  );
};

export default CartBottom;
