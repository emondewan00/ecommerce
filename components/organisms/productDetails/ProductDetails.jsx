const ProductDetails = () => {
  return (
    <div className="my-10 shadow-lg bg-white p-4">
      <h3 className="text-gray-600 text-lg ">Product Summary & Specification</h3>
      <h4 className="font-semibold text-[16px] ">Summary:</h4>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque rem
        officiis quo mollitia quidem dolores architecto, cupiditate harum
        veniam!
      </p>
      {/* <table className="w-full">
        <thead>
          <tr className="">
            <th className="text-left py-2 text-blue-500">Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/5 bg-gray-50 pl-4 py-1 my-5">material:</td>
            <td className="w-full bg-gray-100 pl-4 py-1 my-5">Cotton</td>
          </tr>
          <tr>
            <td className="w-1/5 bg-gray-50 pl-4 py-1 my-5">material:</td>
            <td className="w-full bg-gray-100 pl-4 py-1 my-5">Cotton</td>
          </tr>
        </tbody>
      </table> */}
      <h4 className="font-semibold text-[16px] ">Specification:</h4>
      <div>
        <div className="flex my-2 text-sm md:text-[15px] ">
          <p className="w-1/5 bg-[#f7f7f7] pl-4 text-gray-700 p-1">Title</p>
          <p className="w-full bg-[#f0f0f0] pl-4 text-gray-700 p-1">Title</p>
        </div>
        <div className="flex my-2 text-sm md:text-[15px] ">
          <p className="w-1/5 bg-[#f7f7f7] pl-4 text-gray-700 p-1">Title</p>
          <p className="w-full bg-[#f0f0f0] pl-4 text-gray-700 p-1">Title</p>
        </div>
        <div className="flex my-2 text-sm md:text-[15px] ">
          <p className="w-1/5 bg-[#f7f7f7] pl-4 text-gray-700 p-1">Title</p>
          <p className="w-full bg-[#f0f0f0] pl-4 text-gray-700 p-1">Title</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
