import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";

import tsImg from "../assets/images/tsImg.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="border border-[#000]/50">
        <Container className="flex flex-col sm:flex-row justify-between gap-y-4 py-[100px] sm:pt-[130px] sm:pb-[106px] ">
          {/* Left Area */}
          <div className="sm:w-[327px] text-center sm:text-start">
            <h2 className="text-[#282938] text-[38px] font-Poppins font-semibold leading-[56px] mb-4">
              What our clients say about us
            </h2>
            <p className="text-[#282938] opacity-70 text-[16px] font-Poppins leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>
          {/* Right Area */}
          <div className="sm:w-[843px] text-center sm:text-start">
            <p className="text-[#282938] text-[20px] sm:text-[32px] font-Poppins font-medium leading-[24px] sm:leading-[48px] mb-[43px]">
              "The best agency we've worked with so far. They understand our
              product and are able to add new features with a great focus."
            </p>
            {/* Testimonials Profile */}
            <div className="flex gap-x-[14px] justify-center sm:justify-start">
              <Image
                imgSrc={tsImg}
                className="!w-[52px] h-[52px] object-cover rounded-full"
              />
              <div className="">
                <h4 className="text-[#282938] text-[18px] font-Poppins font-medium leading-[32px] mt-[-5px]">
                  Jenny Wilson
                </h4>
                <p className="text-[#282938] text-[12px] font-Poppins font-medium leading-[28px]">
                  Vice President
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
