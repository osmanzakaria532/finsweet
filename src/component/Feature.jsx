import React from "react";
import Container from "./layer/Container";

import fIcon1 from "../assets/images/f_icon_1.png";
import fIcon2 from "../assets/images/f_icon_2.png";
import fIcon3 from "../assets/images/f_icon_3.png";
import fIcon4 from "../assets/images/f_icon_4.png";
import fIcon5 from "../assets/images/f_icon_5.png";
import fIcon6 from "../assets/images/f_icon_6.png";

const Feature = () => {
  return (
    <>
      <div className="bg-[#CFDBFF] py-32 ">
        <div className="sm:w-[630px] mx-auto text-center mb-[47px]">
          <h4 className="text-[#282938] text-[16px] font-Poppins font-medium leading-7 mb-3">
            Features
          </h4>
          <h2 className="text-[#282938] text-2xl sm:text-[48px] font-Poppins font-semibold sm:leading-[64px] w-[300px] sm:w-auto mx-auto">
            Design that solves problems, one product at a time
          </h2>
        </div>
        <Container className="flex flex-wrap justify-between gap-y-6 px-3 sm:px-0">
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon1} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon2} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon3} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon4} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon5} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
          <div className="sm:w-[405px] bg-white pt-[29px] sm:pt-[58px] pr-[18px] sm:pr-[35px] pb-6 sm:pb-[48px] pl-6 sm:pl-[48px] text-center sm:text-start">
            <img src={fIcon6} className="inline" />
            <h3 className="text-[#282938] text-2xl font-Poppins font-medium leading-8 mt-[22px] mb-3">
              Uses Client First
            </h3>
            <p className="text-[#282938] opacity-70 text-sm sm:text-base font-Poppins sm:leading-7">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Feature;
