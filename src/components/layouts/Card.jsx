import React from "react";
import { bgDots } from "../../assets/images";
const Card = ({ src, alt, title, ex, link }) => {
  return (
    <div className="flex-center flex-col  pt-10 px-5 shadow-[0_10px_12px_#f7f7f7] shadow-gray-200 rounded-lg">
      <img src={src} alt={alt} />
      <div className="my-8">
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-gray-400 ">{ex}</p>
      </div>
      <img src={bgDots} alt="background Dots" />
      <a className="button my-6" href={link}>
        Add & install Extension
      </a>
    </div>
  );
};

export default Card;
