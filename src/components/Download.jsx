import React from "react";
import { headers } from "./data";
import Card from "./layouts/Card";
import { useMediaQuery } from "react-responsive";
const Download = () => {
  const isMd = useMediaQuery({ minWidth: 768 });
  return (
    <section className="w-screen common-padding text-center">
      <div className=" pt-20 pb-10 lg:py-0 flex-center flex-col">
        <h2 className="section-heading mb-">{headers[2].title}</h2>
        <p className="md:w-3/4 text-gray-400 text-base leading-relaxed tracking-wider mb-5">
          {" "}
          {headers[2].desc}
        </p>
      </div>
      <ul className="inline-flex flex-col md:flex-row justify-center gap-20 md:gap-6 mb-10 md:mt-10">
        {headers[2].browsers.map((item, index) => (
          <li
            key={index}
            style={{
              marginTop: isMd ? `${index * 2}rem` : `0rem`,
            }}
          >
            <Card
              src={item.src}
              alt={item.alt}
              title={item.title}
              ex={item.ex}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Download;
// src, alt, title, ex, link
