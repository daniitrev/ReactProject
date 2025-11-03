const FeatureCard = ({ img, description, className = "" }) => {
  return (
    <>
      <div
        className={`flex w-full h-full min-h-[102px] p-4 gap-3 items-start
                  rounded-md bg-gray-600 ${className}`}
      >
        <img src={img} alt="" className="w-7" />
        <p className="w-auto text-[rgb(212,218,234)]">{description}</p>
      </div>
    </>
  );
};

export default FeatureCard;
