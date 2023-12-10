import React from "react";
import { Link } from "react-router-dom";

const Image = ({ className, imgSrc, imgAlt }) => {
  return (
    <>
      <Link to="/">
        <picture>
          <img className={`w-full ${className}`} src={imgSrc} alt={imgAlt} />
        </picture>
      </Link>
    </>
  );
};

export default Image;
