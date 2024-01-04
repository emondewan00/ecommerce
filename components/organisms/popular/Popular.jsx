import ButtonOutline from "@/components/atoms/Button/ButtonOutline";
import PDCard from "@/components/molecules/card/PDCard";

const PopularDepartments = () => {
  return (
    <div className="my-20">
      <h3 className="text-xl font-bold text-center">Popular Departments</h3>
      <div className="flex flex-wrap gap-2 justify-center mt-4 mb-6">
        <ButtonOutline
          style={"border-blue-400 text-blue-500"}
          text={"new arrivals"}
        />
        <ButtonOutline text={"best sellers"} />
        <ButtonOutline text={"most popular"} />
        <ButtonOutline text={"featured"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
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
  );
};

export default PopularDepartments;

{
  /* <button className="uppercase text-sm border rounded py-2 px-4 text-blue-500 border-blue-400">
  new arrivals
</button>; */
}
