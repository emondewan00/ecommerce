const FeatureText = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default FeatureText;
