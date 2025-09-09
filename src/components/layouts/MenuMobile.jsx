import React from "react";
import { iconFacebook, iconTwitter } from "../../assets/images";

const MenuMobile = ({ navLinks }) => {
  return (
    <div className="menuMobile flex flex-col h-full">
      <ul className="sm:px-10 transition-colors duration-100 uppercase flex flex-col items-center cursor-pointer text-gray-50 flex-grow">
        {navLinks.map((link, index) => (
          <li key={index} className="w-full flex-center flex-col">
            <hr className="w-full border-[0.5px] transform scale-y-50" />
            <div className="hover:text-red-400 p-6 text-2xl w-full text-center">
              {link}
            </div>
          </li>
        ))}
        <li className="w-full">
          <hr className="w-full" />
          <button
            type="button"
            className="px-8 py-2 mt-10 uppercase rounded-lg w-full text-white border-2 border-gray-50 transition-colors duration-100"
          >
            login
          </button>
        </li>
      </ul>
      <div className="flex-center gap-6 p-4">
        <img src={iconFacebook} alt="facebook" />
        <img src={iconTwitter} alt="twitter" />
      </div>
    </div>
  );
};

export default MenuMobile;
