const VerticalText = ({ content, children }) => {
  const { subTitle, percentage, title, titleAfterBR, textSm, amount, button } =
    content;
  return (
    <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
      <p className="text-gray-400">
        {subTitle}{" "}
        <span className="text-orange-400 font-bold">{percentage}</span>
      </p>
      <h3 className="font-bold md:font-extrabold text-white text-lg md:text-2xl">
        {title}
        <br />
        <span className="font-light md:font-normal">{titleAfterBR}</span>
      </h3>
      {!button ? (
        <p className="text-sm mt-3 text-white">
          {textSm} <span className="text-orange-400">{amount}</span>
        </p>
      ) : (
        children
      )}
    </div>
  );
};

export default VerticalText;
