const TopBar = () => {
  return (
    <div className="shadow mb-3 rounded-[1px] flex justify-between px-4 py-2">
      <p>Product</p>
      <div className="flex gap-2">
        <div>
          <label htmlFor="show" className="text-gray-700">
            Show:
          </label>
          <select
            id="show"
            className="bg-gray-100 p-1 rounded text-gray-700 ml-1 outline-none"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortBy" className="text-gray-700">Sort By:</label>
          <select
            id="sortBy"
            className="bg-gray-100 p-1 rounded text-gray-700 ml-1 outline-none w-28 "
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Default
            </option>
            <option value="lowToHigh">Price (Low {">"} High)</option>
            <option value="highToLow">Price (High {">"} Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
