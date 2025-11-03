import { useState } from "react";
import Form from "./form";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/icons/search.svg?react";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <header
        className="flex items-center py-4 gap-25 group"
        // style={{ backgroundImage: `url(${bugonia})` }}
      >
        <div className="flex flex-row items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 130 50"
            fill="none"
            xmlSpace="http://www.w3.org/2000/svg"
          >
            <rect width="130" height="50" fill="" />
            <rect width="50" height="50" rx="25" fill="#FE7F03" />
            <g clipPath="url(#clip0_0_1)">
              <rect x="40" width="50" height="50" rx="25" fill="#00E053" />
              <rect
                width="42.5981"
                height="45.3029"
                rx="21.299"
                transform="matrix(-0.998709 0.0507976 0.0507976 0.998709 49.1209 1.52879)"
                fill="white"
              />
            </g>
            <g clipPath="url(#clip1_0_1)">
              <rect x="80" width="50" height="50" rx="25" fill="#41BDF3" />
              <rect
                width="50"
                height="50"
                rx="25"
                transform="matrix(-1 0 0 1 90 0)"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect x="40" width="50" height="50" rx="25" fill="white" />
              </clipPath>
              <clipPath id="clip1_0_1">
                <rect x="80" width="50" height="50" rx="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Link to="/">
            <h1 className="text-white text-[2rem] font-bold">Letterboxd</h1>
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <nav className="">
            <ul className="flex gap-5 text-white font-bold text-[12px] uppercase">
              <li className="hover:text-[#c6c6c6] pointer-events-none ">
                sign in
              </li>
              <li
                className="hover:text-[#c6c6c6] cursor-pointer"
                onClick={() => setShowForm(!showForm)}
              >
                create account
              </li>
              {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-999 bg-black/50">
                  <Form />
                </div>
              )}

              <li className="hover:text-[#c6c6c6] pointer-events-none ">
                films
              </li>
              <li className="hover:text-[#c6c6c6] pointer-events-none ">
                lists
              </li>
              <li className="hover:text-[#c6c6c6] pointer-events-none ">
                members
              </li>
              <li className="hover:text-[#c6c6c6] pointer-events-none ">
                journal
              </li>
            </ul>
          </nav>

          <div className="relative flex items-center w-[150px] h-[30px]">
            <input
              id="search"
              name="search"
              type="text"
              className="absolute px-2.5 z-0 bg-[#676767] w-full h-full rounded-3xl transition delay-150 duration-200 group-hover:bg-[#c5c5c5]"
            />

            <SearchIcon className="absolute right-2 w-5 h-5 text-white transition delay-150 duration-200 group-hover:text-black " />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
