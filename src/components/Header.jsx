"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MyImage1 from '../../public/images/setting-icon.png';
import MyImage2 from '../../public/images/text-icon.png';
import MyImage3 from '../../public/images/user-icon.png';
import MyImage4 from '../../public/images/macan-logo.png';

import icon1 from '../../public/images/dashboard.png';
import icon2 from '../../public/images/startworking.png';
import icon3 from '../../public/images/mytask.png';
import icon4 from '../../public/images/deadlocks.png';
import icon5 from '../../public/images/reports.png';
import icon6 from '../../public/images/explore.png';
import icon7 from '../../public/images/model.png';
import icon8 from '../../public/images/category.png';
import icon9 from '../../public/images/addpost.png';
import icon10 from '../../public/images/setting.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="fixed top-0 z-30 w-full bg-white shadow py-3 ">
                <div className="">
                    <div className="grid grid-cols-[15%_45%_auto] sm:grid-cols-[260px_30%_auto]">
                        <div className="">
                            <button
                                onClick={toggleSidebar}
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <select name="customer-support" id="customer-support" className="mt-2 block font-gilory sm:w-60 sm:ms-8  p-2 bg-[#e3ecff] text-black rounded border  border-solid border-[#e3ecff] focus:outline-none focus:ring-2 focus:ring-[#e3ecff] focus:border-transparent">
                                <option value="">Customer Support</option>
                                <option value="faq">FAQ</option>
                                <option value="contact">Contact Us</option>
                                <option value="live-chat">Live Chat</option>
                            </select>
                        </div>

                        <div className="ms-auto flex items-center">
                            <Image src={MyImage1} width={50} height={50} />
                            <Image src={MyImage2} width={50} height={50} />
                            <Image src={MyImage3} width={50} height={50} />
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-[265px] h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full  sm:py-0 px-3 pb-4 overflow-y-auto bg-[#030A1A]">
                    <div className="flex justify-between items-center mb-5">
                        <Image src={MyImage4} className="ms-[15%] my-[10%]" alt="FlowBite Logo" />
                        <button
                            onClick={toggleSidebar}
                            aria-label="Close sidebar"
                            className="text-white hover:bg-blue-600 rounded-full p-1 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6 block sm:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9.293l-4.646-4.647a.5.5 0 00-.708.708L9.293 10l-4.647 4.646a.5.5 0 00.708.708L10 10.707l4.646 4.646a.5.5 0 00.708-.708L10.707 10l4.646-4.646a.5.5 0 00-.708-.708L10 9.293z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="space-y-2 font-medium text-white font-gilory ms-[0] leading-10 text-[14px] ">
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon1} alt="Dashboard" className="w-4 h-4" /> Dashboard
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon2} alt="Start Working" className="w-4 h-4" /> Start Working
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon3} alt="My Task" className="w-4 h-4" /> My Task
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon4} alt="Dead Locks" className="w-4 h-4" /> Dead Locks
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon5} alt="Work Reports" className="w-4 h-4" /> Work Reports
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon6} alt="Explore" className="w-4 h-4" /> Explore
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon7} alt="Model" className="w-4 h-4" /> Model
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon8} alt="Category/Manufacturer" className="w-4 h-4" /> Category/ Manufacturer
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon9} alt="Add Parts" className="w-4 h-4" /> Add Parts
                        </li>
                        <li className='flex items-center gap-5 ps-5 transition-colors duration-300 hover:bg-blue-600 rounded'>
                            <Image src={icon10} alt="Setting" className="w-4 h-4" /> Setting
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
