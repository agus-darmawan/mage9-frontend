"use client"
import Image from "next/image";
import Button from "../utils/Button";

import React, { useState } from "react";
import avatarGirls from "../../assets/images/avatar/girls.svg"
import avatarMan from "../../assets/images/avatar/man.svg"

const Faq1 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                    <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p>
                </div>
            </div>
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full">
                    <div className=" justify-between items-center cursor-pointer">
                        <h1 className=" font-semibold text-xl leading-5 text-gray-800 text-center"> Contact Person </h1>
                        <div className="flex flex-row items-center">
                            <h1 className=""></h1>
                            <div className="flex flex-col items-center mx-10 justify-center mt-10">
                                <Image 
                                        width={100}
                                        height={100}
                                        className="w-13  rounded-full" 
                                        src={avatarMan}  
                                        alt="avatar"
                                    />
                                <p className="text-base font-semibold leading-4 my-2 text-gray-800">Contact Person 1 </p>
                                <p className="text-base leading-4 text-center text-gray-600">Nomor Whatsapp</p>
                            </div>
                            <div className="flex flex-col items-center mx-10 justify-center mt-10">
                                <Image 
                                        width={100}
                                        height={100}
                                        className="w-13 rounded-full" 
                                        src={avatarMan}  
                                        alt="avatar"
                                    />
                                <p className="text-base font-semibold leading-4 my-2 text-gray-800">Contatc Person 2</p>
                                <p className="text-base leading-4 text-center text-gray-600">Nomor Whatsapp</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {/* <!-- Shipping Section --> */}
                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Shipping</h3>
                            <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow(!show)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Returns Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Returns</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow2(!show2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Exchange Section --> */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Exchange</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow3(!show3)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />

                    {/* Tracking Section */}

                    <div>
                        <div className=" flex justify-between items-center cursor-pointer">
                            <h3 className=" font-semibold text-xl leading-5 text-gray-800">Tracking</h3>
                            <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow4(!show4)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </div>

                    <hr className=" my-7 bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default Faq1;
