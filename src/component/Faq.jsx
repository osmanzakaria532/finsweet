import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import Container from "./layer/Container";
import Button from "./layer/Button";

import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Test = () => {
    const [show, setShow] = useState({
        collapse1: false,
        collapse2: false,
        collapse3: false,
        collapse4: false,
        collapse5: false,
    });

    const toggleShow = (value, object) => {
        setShow({ ...show, ...value });
    };

    return (
        <>
            <div className="py-[50px] sm:py-32">
                <Container className="flex flex-col sm:flex-row justify-between gap-y-6 px-3 sm:px-0">
                    {/* Faq left area */}
                    <div className="sm:w-[328px] text-center sm:text-start">
                        <h2 className="text-[#282938] text-[38px] font-Poppins font-semibold leading-[56px] mb-4">
                            Frequently asked questions
                        </h2>
                        <div>
                            <Button
                                ButtonInnerContent="Contact us for more info"
                                className="!p-0 bg-transparent text-[#2405F2]/80 text-lg font-Poppins font-medium leading-9 relative"
                                iClassName="-right-4 sm:left-full sm:group-hover:left-[110%] opacity-0 sm:group-hover:opacity-100"
                            />
                        </div>
                    </div>
                    {/* Faq right area */}
                    <div className="sm:w-[846px] h-[500px] overflow-hidden">
                        <div id="accordionExample">
                            {/* accordion_1 */}
                            <div className="border-y bg-white dark:border-neutral-600 dark:bg-neutral-800 cursor-pointer ">
                                <h2 className="mb-0 flex " id="headingOne">
                                    <div
                                        className={`${
                                            show.collapse1 &&
                                            `text-[#282938] dark:!text-primary-400 `
                                        } group relative flex items-center gap-x-[10px] sm:gap-x-[53px] w-full rounded-t-[15px] border-0 bg-white py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-Poppins font-medium sm:text-2xl mr-[3px]`}
                                        type="button"
                                        onClick={() =>
                                            toggleShow({
                                                ...show,
                                                collapse1: !show.collapse1,
                                            })
                                        }
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="w-9 sm:ml-[27px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9">
                                            01
                                        </div>
                                        {/*  [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] */}
                                        <button className="flex justify-center items-center w-full">
                                            How much time does it take?
                                            <span
                                                className={`${
                                                    show.collapse1
                                                        ? ``
                                                        : `hidden rotate-0 fill-[#212529]  dark:fill-white`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                            <span
                                                className={`${
                                                    show.collapse1
                                                        ? `hidden`
                                                        : `rotate-0 fill-[#212529]  dark:fill-white transition-all duration-300`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                        </button>
                                    </div>
                                </h2>
                                <TECollapse
                                    show={show.collapse1}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="sm:w-[624px] text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                </TECollapse>
                            </div>
                            {/* accordion_2 */}
                            <div className="border-b bg-white dark:border-neutral-600 dark:bg-neutral-800 cursor-pointer ">
                                <h2 className="mb-0 flex " id="headingTwo">
                                    <div
                                        className={`${
                                            show.collapse2 &&
                                            `text-[#282938] dark:!text-primary-400 `
                                        } group relative flex items-center gap-x-[10px] sm:gap-x-[53px] w-full rounded-t-[15px] border-0 bg-white py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-Poppins font-medium sm:text-2xl mr-[3px]`}
                                        type="button"
                                        onClick={() =>
                                            toggleShow({
                                                ...show,
                                                collapse2: !show.collapse2,
                                            })
                                        }
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="w-9 sm:ml-[27px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9">
                                            02
                                        </div>
                                        {/*  [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] */}
                                        <button className="flex justify-center items-center w-full">
                                            How much time does it take?
                                            <span
                                                className={`${
                                                    show.collapse2
                                                        ? ``
                                                        : `hidden rotate-0 fill-[#212529]  dark:fill-white`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                            <span
                                                className={`${
                                                    show.collapse2
                                                        ? `hidden`
                                                        : `rotate-0 fill-[#212529]  dark:fill-white transition-all duration-300`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                        </button>
                                    </div>
                                </h2>
                                <TECollapse
                                    show={show.collapse2}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="sm:w-[624px] text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                </TECollapse>
                            </div>
                            {/* accordion_3 */}
                            <div className="border-b bg-white dark:border-neutral-600 dark:bg-neutral-800 cursor-pointer ">
                                <h2 className="mb-0 flex " id="headingThree">
                                    <div
                                        className={`${
                                            show.collapse3 &&
                                            `text-[#282938] dark:!text-primary-400 `
                                        } group relative flex items-center gap-x-[10px] sm:gap-x-[53px] w-full rounded-t-[15px] border-0 bg-white py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-Poppins font-medium sm:text-2xl mr-[3px]`}
                                        type="button"
                                        onClick={() =>
                                            toggleShow({
                                                ...show,
                                                collapse3: !show.collapse3,
                                            })
                                        }
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="w-9 sm:ml-[27px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9">
                                            03
                                        </div>
                                        {/*  [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] */}
                                        <button className="flex justify-center items-center w-full">
                                            How do you communicate?
                                            <span
                                                className={`${
                                                    show.collapse3
                                                        ? ``
                                                        : `hidden rotate-0 fill-[#212529]  dark:fill-white`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                            <span
                                                className={`${
                                                    show.collapse3
                                                        ? `hidden`
                                                        : `rotate-0 fill-[#212529]  dark:fill-white transition-all duration-300`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                        </button>
                                    </div>
                                </h2>
                                <TECollapse
                                    show={show.collapse3}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="sm:w-[624px] text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                </TECollapse>
                            </div>
                            {/* accordion_4 */}
                            <div className="border-b bg-white dark:border-neutral-600 dark:bg-neutral-800 cursor-pointer ">
                                <h2 className="mb-0 flex " id="headingFour">
                                    <div
                                        className={`${
                                            show.collapse4 &&
                                            `text-[#282938] dark:!text-primary-400 `
                                        } group relative flex items-center gap-x-[10px] sm:gap-x-[53px] w-full rounded-t-[15px] border-0 bg-white py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-Poppins font-medium sm:text-2xl mr-[3px]`}
                                        type="button"
                                        onClick={() =>
                                            toggleShow({
                                                ...show,
                                                collapse4: !show.collapse4,
                                            })
                                        }
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="w-9 sm:ml-[27px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9">
                                            04
                                        </div>
                                        {/*  [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] */}
                                        <button className="flex justify-center items-center w-full">
                                            Can you handle bigger project?
                                            <span
                                                className={`${
                                                    show.collapse4
                                                        ? ``
                                                        : `hidden rotate-0 fill-[#212529]  dark:fill-white`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                            <span
                                                className={`${
                                                    show.collapse4
                                                        ? `hidden`
                                                        : `rotate-0 fill-[#212529]  dark:fill-white transition-all duration-300`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                        </button>
                                    </div>
                                </h2>
                                <TECollapse
                                    show={show.collapse4}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="sm:w-[624px] text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                </TECollapse>
                            </div>
                            {/* accordion_5 */}
                            <div className="border-b bg-white dark:border-neutral-600 dark:bg-neutral-800 cursor-pointer ">
                                <h2 className="mb-0 flex " id="headingFive">
                                    <div
                                        className={`${
                                            show.collapse5 &&
                                            `text-[#282938] dark:!text-primary-400 `
                                        } group relative flex items-center gap-x-[10px] sm:gap-x-[53px] w-full rounded-t-[15px] border-0 bg-white py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-Poppins font-medium sm:text-2xl mr-[3px]`}
                                        type="button"
                                        onClick={() =>
                                            toggleShow({
                                                ...show,
                                                collapse5: !show.collapse5,
                                            })
                                        }
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <div className="w-9 sm:ml-[27px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9">
                                            05
                                        </div>
                                        {/*  [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] */}
                                        <button className="flex justify-center items-center w-full">
                                            How do you communicate?
                                            <span
                                                className={`${
                                                    show.collapse5
                                                        ? ``
                                                        : `hidden rotate-0 fill-[#212529]  dark:fill-white`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                            <span
                                                className={`${
                                                    show.collapse5
                                                        ? `hidden`
                                                        : `rotate-0 fill-[#212529]  dark:fill-white transition-all duration-300`
                                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </span>
                                        </button>
                                    </div>
                                </h2>
                                <TECollapse
                                    show={show.collapse5}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="sm:w-[624px] text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </div>
                                </TECollapse>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Test;
