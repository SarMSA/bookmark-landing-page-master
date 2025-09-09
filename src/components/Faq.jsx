import React, { useState, useRef, useEffect } from "react";
import { headers } from "./data";
import IconArrow from "../assets/images/icon-arrow.svg?react";
const Faq = () => {
  const [openQues, setOpenQues] = useState(null);
  const toggleQustion = (index) => {
    setOpenQues(openQues === index ? null : index);
  };
  const [heights, setHeights] = useState({});
  const answeerRefs = useRef({});
  useEffect(() => {
    const newHeights = {};
    Object.keys(answeerRefs.current).forEach((key) => {
      if (answeerRefs.current[key]) {
        newHeights[key] = `${answeerRefs.current[key].scrollHeight}px`;
      }
    });
    setHeights(newHeights);
    console.log(heights);
  }, [headers[3].fags]);
  return (
    <section className="w-screen common-padding ">
      <div className=" pt-20 pb-10 lg:py-0 text-center  border-b-[1px] flex-center flex-col border-gray-400 md:border-none">
        <h2 className="section-heading ">{headers[3].title}</h2>
        <p className="md:w-3/4 text-gray-400 text-base leading-relaxed tracking-wider mb-5">
          {" "}
          {headers[3].desc}
        </p>
      </div>
      <div className="flex-center  flex-col gap-6 screen-max-width  ">
        {headers[3].fags.map((item, i) => (
          <div
            className="text-left cursor-pointer w-full md:w-3/4 border-b-[1px] border-gray-300 py-5"
            key={i}
            onClick={() => toggleQustion(i)}
          >
            <div
              className={`flex items-center justify-between ${
                openQues === i ? "text-red-400" : ""
              }`}
            >
              <h3 className=" capitalize ">{item.question}</h3>
              <span>
                <IconArrow
                  className={`${
                    openQues === i
                      ? "rotate-180 text-red-400"
                      : "rotate-0 text-[#5267DF]"
                  } `}
                />
              </span>
            </div>
            <div
              ref={(el) => (answeerRefs.current[i] = el)}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openQues === i ? "mt-4" : "mt-0"
              }`}
              style={{
                maxHeight: openQues === i ? heights[i] || "auto" : "0",
                opacity: openQues === i ? 1 : 0,
              }}
            >
              <p className="text-gray-400 text-base leading-relaxed tracking-wider ">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
        <button type="button" className="button mt-10 capitalize">
          {headers[3].cta.title}
        </button>
      </div>
    </section>
  );
};

export default Faq;
