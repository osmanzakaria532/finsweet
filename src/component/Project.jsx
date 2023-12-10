import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import Button from "./layer/Button";
import { FaArrowDown } from "react-icons/fa";

import projectImg1 from "../assets/images/card.jpg";
import projectImg2 from "../assets/images/card2.jpg";
import projectImg3 from "../assets/images/card3.jpg";

const Project = () => {
  return (
    <>
      <div className="py-16 sm:py-32">
        <Container className="flex flex-col gap-y-8 gap-x-8">
          {/* top area */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-4 sm:pb-0">
            <div>
              <h2 className="text-[#282938] text-[32px] sm:text-5xl leading-[64px] font-semibold">
                View our projects
              </h2>
            </div>
            <div className="sm:pr-[30px]">
              <Button
                ButtonInnerContent="View More"
                className="!p-0 bg-transparent text-[#282938] text-base font-Poppins font-medium relative "
                iClassName="!right-[-32px] opacity-0 sm:opacity-100"
              />
              <FaArrowDown className="block sm:hidden text-[#282938] text-lg absolute left-1/2 -translate-x-1/2 cursor-pointer" />
            </div>
          </div>
          {/* bottom area */}
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-8">
            {/* left area */}
            <div className="sm:w-[843px] relative group overflow-hidden">
              <Image imgSrc={projectImg1} />
              {/* overlay div */}
              <div className="w-full sm:w-[396px] h-[100px] sm:h-full absolute left-0 bottom-0 sm:top-0 flex items-end bg-gradient-to-t sm:bg-gradient-to-r from-[rgba(28,30,83,.42)] to-[#1C1E53] sm:-translate-x-full sm:group-hover:translate-x-0 transition-all duration-700">
                <div className="w-full pb-2 sm:pb-[76px] sm:pt-[76px] sm:pl-12 sm:pr-9 text-center sm:text-start">
                  <h3 className="text-white text-lg sm:text-2xl font-Poppins font-semibold leading-6 sm:leading-9 w-56 sm:w-auto mx-auto">
                    Workhub office Webflow Webflow Design
                  </h3>
                  <p className="font-Poppins text-base text-white opacity-80 mt-4 mb-10 hidden sm:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                  <Button
                    ButtonInnerContent="View project"
                    className="!p-0 bg-transparent text-[#FCD980] text-lg font-Poppins font-medium -ml-5 sm:ml-0"
                    iClassName="!-right-7  opacity-100 sm:group-hover:-right-8"
                  />
                </div>
              </div>
            </div>
            {/* right area */}
            <div className="sm:w-[405px] flex flex-col gap-y-8 justify-between">
              <div className="relative group overflow-hidden text-center sm:text-start">
                <Image imgSrc={projectImg2} />
                {/* overlay div */}
                <div className="absolute w-full h-[100px] sm:h-full left-0 bottom-0 sm:top-0 bg-gradient-to-t sm:bg-gradient-to-b from-[rgba(28,30,83,.42)] to-[#1C1E53] flex items-end sm:-translate-y-full sm:group-hover:translate-y-0 transition-all duration-700">
                  <div className="sm:pl-14 sm:pb-11 pb-2 w-full">
                    <h3 className="text-white text-lg sm:text-2xl font-Poppins font-semibold leading-6 smL:leading-9 w-48 mx-auto sm:mx-0 sm:w-[290px] sm:mb-[10px]">
                      Unisaas Website Design
                    </h3>
                    <Button
                      ButtonInnerContent="View project"
                      className="!p-0 bg-transparent text-[#FCD980] text-lg font-Poppins font-medium relative -ml-5 sm:ml-0"
                      iClassName="!-right-7 opacity-100 sm:group-hover:-right-8"
                    />
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden text-center sm:text-start">
                <Image imgSrc={projectImg3} />
                {/* overlay div */}
                <div className="absolute w-full h-[100px] sm:h-full left-0 bottom-0 bg-gradient-to-b from-[rgba(28,30,83,.42)] to-[#1C1E53] flex items-end sm:translate-y-full group-hover:translate-y-0 transition-all duration-700">
                  <div className="sm:pl-14 pb-2 sm:pb-11 w-full">
                    <h3 className="text-white text-lg sm:text-2xl font-Poppins font-semibold leading-6 smL:leading-9 w-48 mx-auto sm:mx-0 sm:w-[290px] sm:mb-[10px]">
                      Unisaas Website Design
                    </h3>
                    <Button
                      ButtonInnerContent="View project"
                      className="!p-0 bg-transparent text-[#FCD980] text-lg font-Poppins font-medium relative -ml-5 sm:ml-0"
                      iClassName="!-right-7 opacity-100 sm:group-hover:-right-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Project;
