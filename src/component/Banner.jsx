import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";

import { FaLongArrowAltRight } from "react-icons/fa";

import bannerImg from "../assets/images/banner.png";
import Button from "./layer/Button";

const Banner = () => {
  return (
    <>
      <div className="bg-[#1C1E53]">
        <Container className="flex py-[50px] sm:py-[192px] px-3 sm:px-0 gap-x-[74px] ">
          {/* Left Area */}
          <div className="sm:max-w-[50%]">
            <h1 className="text-white text-[28px] sm:text-[54px] text-center sm:text-start sm:max-w-[582px] font-Poppins font-semibold">
              Building stellar websites for early startups
            </h1>
            <p className="text-white text-base text-center sm:text-start opacity-70 max-w-[562px] font-Poppins font-medium mt-5 mb-9">
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies nec dolor sit amet, scelerisque cursus purus.
            </p>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-10">
              <Button
                ButtonInnerContent="View our work"
                className="py-3 px-14 text-[#1B1C2B] "
                iClassName="sm:opacity-0 group-hover:opacity-100"
              />
              <Button
                ButtonInnerContent="View Pricing"
                className="py-3 px-14 text-[#1B1C2B] "
                iClassName="sm:opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
          {/* Right Area */}
          <div className="max-w-[50%] hidden sm:block">
            <div className="flex items-center h-full">
              <Image imgSrc={bannerImg} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
