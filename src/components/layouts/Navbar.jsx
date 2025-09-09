import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import React from "react";
import { iconClose, iconHamburger } from "../../assets/images";
import MenuMobile from "./MenuMobile";
import LogoBookmark from "../../assets/images/logo-bookmark.svg?react";
import LogoBookmark2 from "../../assets/images/logo-bookmark2.svg?react";
import { navLinks } from "../data";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isMd) {
      setActive(false);
      setShowMenu(false);
    } else {
      setActive(true);
    }
  }, [isMd]);
  return (
    <>
      <section className="w-full pt-10  pb-5 sm:px-10 px-5 flex justify-between items-baseline ">
        <nav className="screen-max-width  flex w-full justify-between items-center mx-auto text-xs z-[101]">
          {/* logo */}
          <div>
            {showMenu ? (
              <LogoBookmark2 />
            ) : (
              <LogoBookmark className="text-blue-950" />
            )}
          </div>

          {/* menu of small screen (mobile) */}
          {!isMd ? (
            <img
              src={showMenu ? iconClose : iconHamburger}
              alt="menu"
              onClick={() => setShowMenu((prev) => !prev)}
            />
          ) : (
            <div>
              <ul className=" transition-colors duration-100 uppercase flex gap-8 tracking-widest font-medium items-center cursor-pointer text-blue-950">
                {navLinks.map((link, index) => (
                  <li className="hover:text-red-400 " key={index}>
                    {link}
                  </li>
                ))}
                <button
                  type="button"
                  className="px-8 py-2 uppercase rounded-lg bg-red-400 text-white hover:bg-white hover:text-red-400 border-2 border-red-400 transition-colors duration-100"
                >
                  login
                </button>
              </ul>
            </div>
          )}
        </nav>
      </section>
      {showMenu ? <MenuMobile navLinks={navLinks} /> : null}
    </>
  );
};

export default Navbar;
