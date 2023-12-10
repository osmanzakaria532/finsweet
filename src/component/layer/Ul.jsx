import React from "react";

const Ul = ({ className, children }) => {
  return (
    <>
      <ul className={`flex ${className}`}>{children}</ul>
    </>
  );
};

export default Ul;
