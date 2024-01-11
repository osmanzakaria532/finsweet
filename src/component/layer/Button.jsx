import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ className, ButtonInnerContent, iClassName }) => {
  return (
    <>
      <button
        className={` bg-[#FCD980] font-Manrope font-semibold text-[25px] sm:text-lg sm:leading-8 sm:rounded-full relative group transition-all duration-300 ${className}`}
      >
        {ButtonInnerContent}
        <FaLongArrowAltRight
          className={`text-[22px] sm:text-xl absolute right-10 sm:group-hover:right-5 top-1/2 -translate-y-1/2 transition-all duration-500 leading-8 ${iClassName}`}
        />
      </button>
    </>
  );
};

export default Button;
