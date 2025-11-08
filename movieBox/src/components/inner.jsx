const Inner = ({ image, icon, title, news, description, year }) => {
  return (
    <>
      <div className="flex flex-1 flex-col w-[296px] h-auto rounded-[5px] overflow-hidden text-[rgb(195,201,214)] bg-[rgb(38,41,50)]">
        <div className="w-full h-full">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col p-3 gap-2.5">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={icon} />
            <span className="text-xs">{title}</span>
          </div>
          <h1 className="text-white text-2xl font-bold">{news}</h1>
          <span className="text-[rgb(195,201,214)] text-xs">{description}</span>
          <span>©{year} TIFF</span>
          <a href="#" className="text-white hover:text-blue-400">
            Read story
          </a>
        </div>
      </div>
    </>
  );
};

export default Inner;
