import CancelIcon from "../assets/icons/cancel.svg?react";
import PrivacyIcon from "../assets/icons/privacy.svg?react";

const Form = () => {
  return (
    <>
      <div className="bg-[rgb(84,114,136)] flex flex-col justify-between items-start text-white w-[428px] h-[557px] p-7">
        <div className="flex items-center w-full justify-between">
          <h1 className="">Join Letterboxd</h1>
          <CancelIcon className="stroke-white w-5 h-5" />
        </div>
        <div className="w-full">
          <p>Email address</p>
          <input
            className="bg-[rgb(196,219,234)] rounded-xs p-1 w-[90%]"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <p>Username</p>
          <input
            className="bg-[rgb(196,219,234)] rounded-xs p-1"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className="bg-[rgb(196,219,234)] rounded-xs p-1"
            type="text"
            name="password"
            id="password"
          />
        </div>

        <div className="flex gap-3 items-start">
          <input
            className="bg-[rgb(196,219,234)]"
            type="checkbox"
            name="agreement"
            id="agreement"
          />
          <p>I'm at least 16 years old and accept the Terms of Use.</p>
        </div>
        <div className="flex gap-3 items-start">
          <input
            className="bg-[rgb(196,219,234)] hover:bg-white"
            type="checkbox"
            name="confirmation"
            id="confirmation"
          />
          <p>
            I accept the Privace Policy and consent to the processing of my
            personal information in accordance with it
          </p>
        </div>

        <div className="bg-white rounded-[5px] w-[80%] px-4 flex items-center justify-between h-18 gap-4">
          <div className="flex gap-2">
            <input type="checkbox" name="examination" id="examination" />
            <p className="text-black text-[14px]">I am human</p>
          </div>

          <PrivacyIcon className="w-10 h-10" />
        </div>
        <button className="bg-[rgb(73,157,34)] px-4 py-1 uppercase rounded-[5px] mt-9 font-bold text-[14px]">
          sign up
        </button>
      </div>
    </>
  );
};

export default Form;
