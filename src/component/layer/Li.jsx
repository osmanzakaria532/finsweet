import React from "react";
import { Link } from "react-router-dom";

const Li = ({ LiClassName, className, liContent }) => {
  return (
    <div>
      <li className={` ${LiClassName}`}>
        <Link
          className={`text-[#BBBBCB] hover:text-white text-[25px] sm:text-base font-[500] leading-7 font-Poppins transition-all duration-300 ${className}`}
        >
          {liContent}
        </Link>
      </li>
    </div>
  );
};

export default Li;
