import LikesIcon from "../assets/icons/likes.svg?react";
import AccountIcon from "../assets/icons/account.svg?react";
const Comments = ({ image, title, year, user_name, rate, comment, like }) => {
  return (
    <>
      <div className="flex gap-5 text-[rgb(195,201,214)] border-t border-t-gray-500/30 pt-6">
        <div className="bg-white w-[75px] h-[111px] rounded-xs overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl text-white">{title}</h1>
            <p className="text-[16px]">{year}</p>
          </div>

          <div className="flex items-center gap-2">
            <AccountIcon className="w-10 h-10 fill-gray-600" />
            <span className="inline font-bold">{user_name}</span>
            <svg src={rate} alt="" className="w-10 h-10" />
            <LikesIcon className="w-7 h-7 fill-amber-500" />
          </div>

          <p>{comment}</p>

          <div className="flex gap-2 items-center">
            <LikesIcon className="w-4 h-4 fill-white" />
            <span className="inline">{like} likes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
