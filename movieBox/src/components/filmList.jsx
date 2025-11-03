const FilmList = ({ image }) => {
  return (
    <>
      <li>
        <img
          src={image}
          alt=""
          className="w-[76px] h-[111px] rounded-xs text-[#969696] hover:outline-2 outline-green-500"
        />
      </li>
    </>
  );
};

export default FilmList;
