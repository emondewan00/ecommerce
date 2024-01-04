const FilterCheckBox = ({ id, name }) => {
  return (
    <div className="flex gap-x-4 mt-2">
      <input type="checkbox" id="inStock" />
      <label htmlFor="inStock">In Stock</label>
    </div>
  );
};

export default FilterCheckBox;
