import ViewsIcon from "../assets/icons/views.svg?react";
import LikesIcon from "../assets/icons/likes.svg?react";

const PosterCard = ({ img, watches, likes }) => {
  return (
    <>
      <div
        className="group bg-white h-[231px] w-[156px] relative border rounded-sm border-zinc-500 hover:outline-2 hover:outline-[#23ff23] transition duration-100 ease-in-out hover:border-color: transparent;
"
      >
        <img
          src={img}
          alt=""
          className="absolute z-0 h-full w-full rounded-sm object-cover"
        />
        <div className=" group-hover:visible  invisible flex flex-col items-center justify-center absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[105px] h-[177px] pointer-events-none bg-[#000000bb] gap-3 rounded-sm">
          <div className="flex flex-col items-center">
            <ViewsIcon className="w-10 h-10 fill-green-500" />
            <p className="text-white text-xl">{watches}</p>
          </div>
          <div className="flex flex-col items-center">
            <LikesIcon className="w-10 h-10 fill-amber-500" />
            <p className="text-white text-xl">{likes}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosterCard;
