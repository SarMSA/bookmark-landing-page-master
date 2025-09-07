import React from "react";

const DivImg = ({ bgSide, headerSrc, headerAlt, style }) => {
  return (
    <div
      className={`flex-1 flex relative illustration-wrapper ${bgSide} md:w-1/2 mb-10 md:mb-0  `}
    >
      <img src={headerSrc} alt={headerAlt} className={style} />
    </div>
  );
};

export default DivImg;
