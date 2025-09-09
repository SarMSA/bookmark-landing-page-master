import React from "react";
import LogoBookmark from "../../assets/images/logo-bookmark.svg?react";
import { navLinks } from "../data";
import { iconFacebook, iconTwitter } from "../../assets/images";

const Footer = () => {
  return (
    <footer
      className="w-screen py-5 sm:px-10 px-5 lg:py-10 bg-blue-950"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
          <LogoBookmark className="text-white" aria-hidden="true" />
          <nav aria-label="Footer navigation">
            <ul className="mb-10 md:mb-0 flex flex-col md:flex-row gap-9 md:gap-14 justify-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="uppercase text-gray-50 tracking-widest text-md hover:text-red-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://facebook.com" aria-label="Facebook">
            <img src={iconFacebook} alt="" aria-hidden="true" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src={iconTwitter} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
