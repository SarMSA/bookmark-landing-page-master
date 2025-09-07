import React from "react";
import { iconFacebook, iconTwitter } from "../../assets/images";

const MenuMobile = ({ navLinks }) => {
  return (
    <ul className=" sm:px-10  menuMobile transition-colors duration-100 uppercase flex flex-col flex-center  tracking-widest  items-center cursor-pointer text-gray-50 ">
      <div className="w-full">
        {navLinks.map((link, index) => (
          <div key={index} className="w-full flex-center flex-col">
            <hr className="w-full border-[0.5px] transform scale-y-50" />
            <li className="hover:text-red-400 p-6 text-2xl">{link}</li>
          </div>
        ))}
        <hr className="w-full" />
        <button className="px-8 py-2 mt-10 uppercase rounded-lg w-full text-white  border-2 border-gray-50 transition-colors duration-100">
          login
        </button>
      </div>
      <div className="flex-center gap-6 mt-auto">
        <img src={iconFacebook} alt="facebook" />
        <img src={iconTwitter} alt="twitter" />
      </div>
    </ul>
  );
};

export default MenuMobile;
