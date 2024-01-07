import PDCard from "@/components/molecules/card/PDCard";
import Product from "@/components/organisms/product/Product";
import ProductDetails from "@/components/organisms/productDetails/ProductDetails";

const ProductPage = () => {
  return (
    <div className="max-w-5xl mx-auto my-4 px-4 md:px-0">
      <Product />
      <ProductDetails />
      <div className="my-10 shadow p-4 bg-slate-50">
        <h1>Related Products </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
          <PDCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
