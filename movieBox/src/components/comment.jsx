import LikesIcon from "../assets/icons/likes.svg?react";

const Comments = ({ image, title, year, user_name, rate, comment, like }) => {
  return (
    <>
      <div className="flex">
        <img src={image} alt="" className="w-[75px] h-[111px]" />
        <div className="flex flex-col">
          <div className="flex">
            <h1>{title}</h1>
            <p>{year}</p>
          </div>
          <div className="flex">
            <span>{user_name}</span>
            <svg src={rate} alt="" />
            <LikesIcon className="w-10 h-10" />
          </div>
          <p>{comment}</p>
          <div className="flex">
            <LikesIcon className="w-8 h-8" />
            <span>{like} likes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
