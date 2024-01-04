import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb";
import ShoppingCartList from "@/components/organisms/shoppingCartList/ShoppingCartList";
import WishTable from "@/components/organisms/wishTable/WishTable";

const Wishlist = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <WishTable />
      </div>
    </div>
  );
};

export default Wishlist;
