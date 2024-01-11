import React, { useState } from "react";
import Container from "./layer/Container";
import List from "./layer/List";
import Button from "./layer/Button";

import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const TestFaq = () => {
    const [count, setCount] = useState(0);
    const [a, setA] = useState([
        {
            title: "How much time does it take?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "How much time does it take?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "How do you communicate?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "  Can you handle bigger project?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "How do you communicate?",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]);

    const handleClick = (index) => {
        setCount(index);
    };
    return (
        <>
            <div className="py-[50px] sm:py-32">
                <Container className="flex justify-between">
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
                    {/* Faq left area */}
                    <div className="sm:w-[846px]">
                        <ul>
                            {a.length != 0 &&
                                a.map((value, index) => (
                                    <>
                                        <div className="border-t">
                                            <List
                                                className="flex items-center"
                                                key={index}
                                            >
                                                <p className="w-9 sm:ml-[27px] sm:mr-[53px] text-[#2405F2] text-lg sm:text-2xl text-center font-Poppins font-medium leading-9 ">
                                                    {index >= 9 ? "" : 0}
                                                    {index + 1}
                                                </p>
                                                <div className="w-full">
                                                    <h2
                                                        onClick={() =>
                                                            handleClick(index)
                                                        }
                                                        className={`text-[#282938] text-2xl font-Poppins font-medium cursor-pointer py-8 ${
                                                            count === index
                                                                ? ""
                                                                : ""
                                                        }`}
                                                    >
                                                        {value.title}
                                                    </h2>
                                                </div>
                                                <div>
                                                    {count == index ? (
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() =>
                                                                handleClick(
                                                                    a.length + 1
                                                                )
                                                            }
                                                        >
                                                            <IoMdClose className="h-5 w-5 sm:h-6 sm:w-6" />
                                                        </p>
                                                    ) : (
                                                        <p
                                                            className="cursor-pointer"
                                                            onClick={() =>
                                                                handleClick(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <FaPlus className="h-5 w-5 sm:h-6 sm:w-6" />
                                                        </p>
                                                    )}
                                                    {/* <span
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
                                                    </span> */}
                                                </div>
                                            </List>
                                            <div
                                                className={`sm:w-[624px] sm:text-center py-4 sm:ml-[113px] text-[#282938] text-lg font-Poppins font-medium ${
                                                    count == index
                                                        ? ""
                                                        : "hidden"
                                                }`}
                                            >
                                                <p
                                                    className={`text-start ${
                                                        count === index
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ))}
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TestFaq;
