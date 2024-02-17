import PDCard from "@/components/molecules/card/PDCard";
import Product from "@/components/organisms/product/Product";
import ThumbsGallery from "@/components/organisms/product/ThumbsGallery";
import ProductDetails from "@/components/organisms/productDetails/ProductDetails";
import TopSell from "@/components/organisms/topsell/TopSell";

const ProductPage = () => {
  return (
    <div className="max-w-5xl mx-auto my-4 px-4 md:px-0">
      <Product />
      <ProductDetails />
      <div className="my-10 shadow-lg p-4 bg-slate-50">
        <h1>Related Products </h1>
        <div className="related-product grid gap-4 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
            <PDCard />
          </div>
          <div>
            <TopSell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
