import React from "react";

import Container from "../component/layer/Container";
import Button from "./layer/Button";
import Image from "./layer/Image/";

import workImg from "../assets/images/workImg.png";

import { FaArrowDown } from "react-icons/fa";

const Work = () => {
  return (
    <>
      <div className="bg-[#F4F6FC] py-16 ms:py-32">
        <Container className="flex flex-col gap-y-12 sm:flex-row justify-between text-center sm:text-start">
          {/* left area */}
          <div className="sm:w-[405px]">
            <h2 className="text-[#282938] text-5xl font-Poppins font-semibold leading-[64px]">
              How we work
            </h2>
            <p className="sm:w-[399px] font-Poppins text-base text-[#282938] opacity-70 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="">
              <Button
                ButtonInnerContent="Get in touch with us"
                className="!p-0 bg-transparent text-[#2405F2] text-lg font-Poppins font-medium relative"
                iClassName="-right-4 sm:left-full sm:group-hover:left-[110%] opacity-0 sm:group-hover:opacity-100"
              />
              <FaArrowDown className="block sm:hidden text-[#2405F2] text-lg absolute left-1/2 -translate-x-1/2" />
            </div>
          </div>
          {/* right area */}
          <div className="sm:w-[656px] flex sm:flex flex-wrap justify-between gap-y-12 gap-x-6 sm:gap-x-0">
            <div className="sm:w-[328px]">
              <div className="inline-block relative after:content-['01'] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:flex after:justify-center after:items-center after:text-white after:text-lg after:leading-8 after:font-Poppins after:font-medium">
                <Image imgSrc={workImg} className="" />
              </div>
              <h2 className="text-[#282938] text-[32px] leading-[48px] font-Poppins font-medium mt-4 mb-2">
                Strategy
              </h2>
              <p className="sm:w-[303px] text-[#282938] opacity-70 text-base leading-7 font-Poppins">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="sm:w-[328px]">
              <div className="inline-block relative after:content-['02'] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:flex after:justify-center after:items-center after:text-white after:text-lg after:leading-8 after:font-Poppins after:font-medium">
                <Image imgSrc={workImg} className="" />
              </div>
              <h2 className="text-[#282938] text-[32px] leading-[48px] font-Poppins font-medium mt-4 mb-2">
                Wireframing
              </h2>
              <p className="sm:w-[303px] text-[#282938] opacity-70 text-base leading-7 font-Poppins">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="sm:w-[328px]">
              <div className="inline-block relative after:content-['03'] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:flex after:justify-center after:items-center after:text-white after:text-lg after:leading-8 after:font-Poppins after:font-medium">
                <Image imgSrc={workImg} className="" />
              </div>
              <h2 className="text-[#282938] text-[32px] leading-[48px] font-Poppins font-medium mt-4 mb-2">
                Design
              </h2>
              <p className="sm:w-[303px] text-[#282938] opacity-70 text-base leading-7 font-Poppins">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="sm:w-[328px]">
              <div className="inline-block relative after:content-['04'] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:flex after:justify-center after:items-center after:text-white after:text-lg after:leading-8 after:font-Poppins after:font-medium">
                <Image imgSrc={workImg} className="" />
              </div>
              <h2 className="text-[#282938] text-[32px] leading-[48px] font-Poppins font-medium mt-4 mb-2">
                Development
              </h2>
              <p className="sm:w-[303px] text-[#282938] opacity-70 text-base leading-7 font-Poppins">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Work;
