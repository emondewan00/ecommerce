const FilterCheckBox = ({ name, label }) => {
  console.log(name, label);
  return (
    <label
      htmlFor={name}
      className="flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer"
    >
      <input type="checkbox" id={name} />
      <p>{label}</p>
      {/* <label htmlFor={id}>{name}</label> */}
    </label>
  );
};

export default FilterCheckBox;
