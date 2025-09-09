import React, { useState } from "react";
import { headers } from "./data";
import DivImg from "./layouts/DivImg";
const Features = () => {
  const [activeContent, setActiveContent] = useState("simple bookmarking");
  const proposedContent = headers[1].btns.find(
    (btn) => btn.btnName === activeContent
  );

  return (
    <section className="w-screen common-padding text-center">
      <div className=" pt-20 pb-10 lg:py-0 border-b-[1px] flex-center flex-col border-gray-400 md:border-none">
        <h2 className="section-heading mb-">{headers[1].title}</h2>
        <p className="md:w-3/4 text-gray-400 text-base leading-relaxed tracking-wider mb-5">
          {" "}
          {headers[1].desc}
        </p>
      </div>
      <ul className="inline-flex flex-col md:flex-row justify-center  md:border-b-[1px] border-gray-400 mb-10">
        {headers[1].btns.map((item, index) => (
          <li
            className="  border-b-[1px] border-gray-400 md:border-none"
            key={index}
          >
            <button
              type="button"
              className={`py-5 h-full text-blue-950 capitalize px-10 font-normal  border-b-4  ${
                activeContent === item.btnName
                  ? "border-red-400 "
                  : "border-transparent"
              }`}
              onClick={() => setActiveContent(item.btnName)}
            >
              {item.btnName}
            </button>
          </li>
        ))}
      </ul>
      <div className="screen-max-width  flex-center flex-col-reverse md:flex-row md:text-left md:gap-20">
        {/* image */}
        <DivImg
          bgSide="bg-side-left"
          headerSrc={proposedContent?.img.src}
          headerAlt={proposedContent?.img.alt}
        />
        {/* content */}
        <div className="flex flex-col align-center flex-1 mb-10 md:mb-0 ">
          <h2 className=" section-heading">{proposedContent?.title}</h2>
          <p className="text-gray-400 text-base leading-relaxed tracking-wider mb-5">
            {proposedContent?.desc}
          </p>
          <div className="flex flex-wrap tracking-wider justify-center md:justify-start gap-4 text-sm">
            <a className="button" href={proposedContent?.link}>
              more info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
