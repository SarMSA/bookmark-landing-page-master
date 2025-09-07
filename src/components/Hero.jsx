import React from "react";
import { headers } from "./data";
import DivImg from "./layouts/DivImg";

const Hero = () => {
  return (
    // <div className="relative ">
    <section className="w-screen common-padding ">
      <div className="screen-max-width  flex-center flex-col-reverse md:flex-row md:text-left md:gap-6">
        {/* content */}
        <div className="flex flex-col align-center flex-1  ">
          <h2 className=" section-heading">{headers[0].title}</h2>
          <p className="text-gray-400 text-base leading-relaxed tracking-wider mb-5">
            {headers[0].desc}
          </p>
          <div className="flex flex-wrap tracking-wider justify-center md:justify-start gap-4 text-sm">
            {headers[0].cta.map((item, index) => (
              <a
                className={` ${
                  item.title === "Get it on Firefox"
                    ? "buttonFirefox"
                    : "button"
                } `}
                key={index}
                href={item.url}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        {/* image */}
        <DivImg
          bgSide="bg-side-right"
          headerSrc={headers[0].img.src}
          headerAlt={headers[0].img.alt}
          style=" relative z-10 w-full h-auto object-contain md:scale-[1.2] md:translate-x-[18px] md:translate-y-[30px] lg:scale-[1.1] lg:translate-x-[22px] lg:translate-y-[0] xl:scale-[1] xl:translate-x-0 xl:translate-y-0"
        />
      </div>
    </section>
    // </div>
  );
};

export default Hero;
