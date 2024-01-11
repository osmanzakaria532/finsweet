import React from "react";
import Container from "./layer/Container";
import Button from "./layer/Button";

const Contact = () => {
  return (
    <>
      <div className="py-[50px] sm:py-32 ">
        <Container className="flex ">
          {/* Left area */}
          <div className="sm:w-[656px] bg-[url('../src/assets/images/inquiry_bg.jpg')] bg-cover bg-center relative after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-black/50 z-50 after:-z-50 pt-24 pl-24 hidden sm:block">
            <div className="sm:w-[465px]">
              <h2 className="text-white text-[54px] font-Poppins font-semibold leading-[74px] mb-6">
                Building stellar websites for early startups
              </h2>
              <p className="text-white text-base font-Poppins font-medium leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
          {/* Right Area */}
          <div className="sm:w-[624px] bg-[#1C1E53] text-center sm:text-start">
            <div className="sm:w-[432px] mx-auto pt-24 pb-[48px] px-3 sm:px-0">
              <h2 className="text-white text-[32px] font-Poppins font-medium leading-[48px]">
                Send inquiry
              </h2>
              <p className="text-[#F4F6FC] text-base font-Poppins font-medium leading-7 mt-4 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <form className="flex flex-col gap-y-4 mb-[48px]">
                <input
                  placeholder="Your Name"
                  className="py-[18px] px-8 rounded-[8px] bg-[#1C1E53] border border-[rgba(255,255,255,0.05)] focus:outline-none text-white placeholder:text-[#F4F6FC]/50 placeholder:text-base placeholder:font-Poppins placeholder:leading-7"
                />
                <input
                  placeholder="Email"
                  className="py-[18px] px-8 rounded-[8px] bg-[#1C1E53] border border-[rgba(255,255,255,0.05)] focus:outline-none text-white placeholder:text-[#F4F6FC]/50 placeholder:text-base placeholder:font-Poppins placeholder:leading-7"
                />
                <input
                  placeholder="Paste your Figma design URL"
                  className="py-[18px] px-8 rounded-[8px] bg-[#1C1E53] border border-[rgba(255,255,255,0.05)] focus:outline-none text-white placeholder:text-[#F4F6FC]/50 placeholder:text-base placeholder:font-Poppins placeholder:leading-7"
                />
              </form>
              <div className="flex flex-col gap-y-7 items-center">
                <div className="w-full">
                  <Button
                    ButtonInnerContent="Send an Inquiry"
                    className="py-4 text-[#1B1C2B] text-lg font-Manrope font-semibold leading-8 w-full"
                    iClassName="!right-[70px] sm:!right-[125px] group-hover:!right-[55px] sm:group-hover:!right-[110px] opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="w-[244px] sm:ml-[-30px]">
                  <Button
                    ButtonInnerContent="Get in touch with us"
                    className="!bg-transparent text-white text-lg font-Manrope font-medium leading-8 w-full"
                    iClassName="!right-2 group-hover:!-right-3 "
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
