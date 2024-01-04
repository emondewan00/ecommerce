const FilterCheckBox = ({ id, name }) => {
  return (
    <label
      htmlFor={id}
      className="flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer"
    >
      <input type="checkbox" id={id} />
      <p>{name}</p>
      {/* <label htmlFor={id}>{name}</label> */}
    </label>
  );
};

export default FilterCheckBox;
