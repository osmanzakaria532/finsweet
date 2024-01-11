import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";

import footerLogo from "../assets/images/logo.png";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Ul from "./layer/Ul";
import Li from "./layer/Li";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-[50px] sm:py-0">
        {/* Footer top */}
        <div className="bg-[#1C1E53]">
          <Container className="py-[50px] sm:pt-[100px] sm:pb-0 px-3 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-y-5 text-center sm:text-start">
              {/* footer top left */}
              <div className="sm:w-[640px]">
                <div className="flex justify-center sm:justify-start">
                  <Image imgSrc={footerLogo} className="!w-auto" />
                </div>
                <div className="pt-[22px] pb-[43px] sm:pb-[86px]">
                  <p className="sm:w-[399px] text-white text-base font-Poppins font-medium leading-7">
                    We are always open to discuss your project and improve your
                    online presence.
                  </p>
                </div>
                <div className="bg-[#FCD980] flex flex-col sm:flex-row gap-x-[30px] sm:w-[517px] py-4 px-9">
                  <div className="">
                    <h6 className="text-[#282938] text-lg font-Poppins font-medium leading-8">
                      Email me at
                    </h6>
                    <p className="text-[#282938] text-base font-Poppins leading-7">
                      contact@website.com
                    </p>
                  </div>
                  <div className="">
                    <h6 className="text-[#282938] text-lg font-Poppins font-medium leading-8">
                      Call Us
                    </h6>
                    <p className="text-[#282938] text-base font-Poppins leading-7">
                      0927 6277 28525
                    </p>
                  </div>
                </div>
              </div>
              {/* footer top right */}
              <div className="sm:w-[640px] text-white">
                <div>
                  <h2 className="text-[48px] font-Poppins font-semibold leading-[64px]">
                    Lets Talk!
                  </h2>
                </div>
                <div className="mt-[14px] mb-7">
                  <p className="sm:w-[399px] text-[#F4F6FC]/80 text-base font-Poppins leading-7">
                    We are always open to discuss your project, improve your
                    online presence and help with your UX/UI design challenges.
                  </p>
                </div>
                <div className="flex gap-x-[26px] justify-center sm:justify-start text-xl sm:text-base">
                  <Link>
                    <FaFacebook />
                  </Link>
                  <Link>
                    <FaTwitter />
                  </Link>
                  <Link>
                    <IoLogoInstagram />
                  </Link>
                  <Link>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* Footer bottom */}
        <div className="bg-white py-8">
          <Container className="flex flex-col justify-between sm:flex-row gap-y-5  px-3 sm:px-0">
            <div className="text-center order-2 sm:order-1">
              <p className="text-[#282938] text-base font-Poppins font-medium leading-7">
                Copyright 2022, Finsweet.com
              </p>
            </div>
            <div className="order-1 sm:order-2">
              <div>
                <Ul className="flex-row flex-wrap justify-center gap-x-8">
                  <Li
                    liContent="Home"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                  <Li
                    liContent="About us"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                  <Li
                    liContent="Features"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                  <Li
                    liContent="Pricing"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                  <Li
                    liContent="FAQ"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                  <Li
                    liContent="Blog"
                    className="!text-[#282938] hover:text-black text-base font-Poppins font-medium leading-7"
                  />
                </Ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
