import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import Button from "./layer/Button";

import ourBlogImg from "../assets/images/ourBlogImg.jpg";
import ourBlogImg2 from "../assets/images/ourBlogImg_2.jpg";

const OurBlog = () => {
  return (
    <>
      <div className="sm:py-32 px-3 sm:px-0">
        <Container className="flex flex-col sm:flex-row justify-between gap-y-6">
          <div className="sm:w-[405px]">
            <div className="overflow-hidden">
              <Image
                imgSrc={ourBlogImg}
                className="scale-100 hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="mt-10 mb-8 text-center sm:text-start">
              <span className="text-[#282938] opacity-70 text-base font-Poppins font-medium leading-7">
                19 Jan 2022
              </span>
              <h6 className="text-[#282938] text-2xl font-Poppins font-medium leading-9 my-4">
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p className="text-[#282938] opacity-70 text-base font-Poppins leading-7">
                See how pivoting to Webflow changed one person's sales strategy
                and allowed him to attract
              </p>
            </div>
            <div className="text-center sm:text-start">
              <Button
                ButtonInnerContent="Read More"
                className="!bg-transparent text-[#282938] text-lg font-Manrope font-medium leading-8"
                iClassName="!-right-7 group-hover:!-right-10 "
              />
            </div>
          </div>
          <div className="sm:w-[405px]">
            <div className="overflow-hidden">
              <Image
                imgSrc={ourBlogImg}
                className="scale-100 hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="mt-10 mb-8 text-center sm:text-start">
              <span className="text-[#282938] opacity-70 text-base font-Poppins font-medium leading-7">
                19 Jan 2022
              </span>
              <h6 className="text-[#282938] text-2xl font-Poppins font-medium leading-9 my-4">
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p className="text-[#282938] opacity-70 text-base font-Poppins leading-7">
                See how pivoting to Webflow changed one person's sales strategy
                and allowed him to attract
              </p>
            </div>
            <div className="text-center sm:text-start">
              <Button
                ButtonInnerContent="Read More"
                className="!bg-transparent text-[#282938] text-lg font-Manrope font-medium leading-8"
                iClassName="!-right-7 group-hover:!-right-10 "
              />
            </div>
          </div>
          <div className="sm:w-[405px]">
            <div className="overflow-hidden">
              <Image
                imgSrc={ourBlogImg2}
                className="scale-100 hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="mt-10 mb-8 text-center sm:text-start">
              <span className="text-[#282938] opacity-70 text-base font-Poppins font-medium leading-7">
                19 Jan 2022
              </span>
              <h6 className="text-[#282938] text-2xl font-Poppins font-medium leading-9 my-4">
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p className="text-[#282938] opacity-70 text-base font-Poppins leading-7">
                See how pivoting to Webflow changed one person's sales strategy
                and allowed him to attract
              </p>
            </div>
            <div className="text-center sm:text-start">
              <Button
                ButtonInnerContent="Read More"
                className="!bg-transparent text-[#282938] text-lg font-Manrope font-medium leading-8"
                iClassName="!-right-7 group-hover:!-right-10 "
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurBlog;
