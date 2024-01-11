import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import logoImg from "../assets/images/logo.png";
import Ul from "./layer/Ul";
import Li from "./layer/Li";

import { useState, useEffect } from "react";

import { TiThMenu } from "react-icons/ti"; //<TiThMenu />
import { IoMdClose } from "react-icons/io"; // <IoMdClose />
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 640) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    resize();
    window.addEventListener("resize", resize);
  }, []);

  let handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="bg-[#1C1E53] py-4">
        <Container className="flex justify-between items-center relative px-3 sm:px-0">
          <Image imgSrc={logoImg} imgAlt="Logo Image" />
          <div className="block sm:hidden">
            <TiThMenu
              className="block sm:hidden cursor-pointer text-white text-2xl"
              onClick={handleClick}
            />
          </div>
          {/*  */}
          <div
            className={`absolute sm:static -top-4 right-0 bg-[#1C1E53] sm:bg-transparent w-full sm:w-fit text-center py-12 sm:py-0 h-screen sm:h-auto opacity-0 invisible z-50 ${
              show
                ? "opacity-100 !visible transition-all duration-500"
                : "transition-all duration-500"
            }`}
          >
            <div className="mt-[-33px] sm:mt-0">
              {/* this div only for responsive device */}
              <div className="block sm:hidden w-full px-3 mb-20">
                <div className="flex justify-between items-center">
                  <Image imgSrc={logoImg} imgAlt="Logo Image" />
                  <div className="mr-[-3px] sm:mr-0">
                    <Link>
                      <IoMdClose
                        onClick={handleClick}
                        className="text-white text-3xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* menu items */}
              <div className="flex flex-col sm:flex-row gap-y-24 sm:gap-x-12 items-center ">
                <Ul className="flex-col sm:flex-row gap-y-6 sm:gap-x-8">
                  <Li className="text-white" liContent="Home" />
                  <Li liContent="About us" />
                  <Li liContent="Features" />
                  <Li liContent="Pricing" />
                  <Li liContent="FAQ" />
                  <Li liContent="Blog" />
                </Ul>
                <button className="text-white text-[25px] sm:text-base font-[500] leading-7 font-Poppins border-2 border-[#F4F6FC] py-4 px-12 rounded-full capitalize">
                  contact
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
