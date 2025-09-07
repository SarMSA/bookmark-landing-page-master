import React from "react";
import LogoBookmark from "../../assets/images/logo-bookmark.svg?react";
import { navLinks } from "../data";
import { iconFacebook, iconTwitter } from "../../assets/images";

const Footer = () => {
  return (
    <section className="w-screen py-5 sm:px-10 px-5 lg:py-10 bg-blue-950 ">
      <div className="flex flex-col md:flex-row md:justify-between flex-center md:gap-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <LogoBookmark className="text-white " />
          <ul className="mb-10 md:mb-0 flex flex-col md:flex-row gap-9 md:gap-14 justify-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className=" uppercase text-gray-50 tracking-widest text-md"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex-center gap-6 ">
          <img src={iconFacebook} alt="facebook" />
          <img src={iconTwitter} alt="twitter" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
