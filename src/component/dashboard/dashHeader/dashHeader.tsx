
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


import { useSelector, useDispatch } from "react-redux";
import Slice from "../../../reducer";
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { FaChevronDown, FaRegBell, FaLayerGroup } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


import { SearchSvg, FlashLogoSvg } from '../../../assets/svg/svg';
import './dashHeader.scss';



export default function Header() {
    const global = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const update = (payload: { [key: string]: any }) => {
        dispatch(Slice.actions.update(payload));
    };

    const [isHamburger, setIsHamburger] = useState(false);

    const isDark = global.isDark;

    const noneSidebar = global.noneSidebar
    const minSidebar = global.minSidebar
    const isTokenSearchBar = global.isTokenSearchBar

    useEffect(() => {
        update({ isDark: true })
        window.document.body.classList.add('dark');
    }, [])

    // Dark Switch
    const darkSwitch = () => {
        if (window.document.body.classList.value === 'dark') {
            window.document.body.classList.remove('dark');
            window.document.body.classList.add('light');
            update({ isDark: false })
        } else {
            window.document.body.classList.remove('light');
            window.document.body.classList.add('dark');
            update({ isDark: true })
        }
    }

    useEffect(() => {
        if (window.innerWidth < 567) {
            update({ noneSidebar: true })
        }
    }, [window.innerWidth]);

    const minSidebarFunc = () => {
        if (window.innerWidth > 1200) {
            update({ noneSidebar: false })
            update({ minSidebar: !minSidebar })
        } else {
            update({ minSidebar: false })
            update({ noneSidebar: !noneSidebar })
        }
    }


    return (
        <header className="dash-header h-16 flex justify-between items-center py-1 md:pl-0 pl-0 pr-4 dark:bg-gray-800 bg-white gap-10">
            <div className="flex flex-1 items-center justify-between w-full">
                <div className="flex items-center">
                    <div onClick={() => minSidebarFunc()} className="hover:text-opacity-70 duration-300 text-primary cursor-pointer transition-all w-16 h-16 flex items-center place-content-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="fill-current">
                            <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z"></path>
                        </svg>
                    </div>
                    <Link to="/" aria-current="page" className=" lg:block ml-4 router-link-exact-active router-link-active" aria-hidden="true">
                        <div className="flex items-center justify-center gap-2">
                            <FlashLogoSvg />
                            {/* <img src={'./logo2.png'} style={{ width: '45px', height: '45px' }} alt='LOGO' /> */}
                            {/* <span className='font-bold'>FLASH WALLET</span> */}
                        </div>
                    </Link>
                </div>
                <div className={`hidden sm:flex w-full sm:w-auto`} style={{ height: '50px' }} >
                    <div className="header-search-container">
                        <SearchSvg />
                        <input placeholder='Search Blockchain' type="text" className="" />
                    </div>
                </div>
            </div>


            <div className={`header-list ${isHamburger ? 'header-list-show' : ''}`}>
                <div className="w-full flex justify-end">
                    {isHamburger ?
                        <div className="w-full">
                            <AiOutlineClose onClick={() => setIsHamburger(false)} className='text-4xl primary-hover float-right' />
                        </div>
                        : <></>}
                </div>
                <div className="flex flex-1 items-center justify-end gap-4 pr-0 sm:pr-8 ">
                    <div className={`flex sm:hidden`} style={{ height: '50px' }} >
                        <div className="header-search-container">
                            <SearchSvg />
                            <input placeholder='Search Blockchain' type="text" className="" />
                        </div>
                    </div>

                    <div className="dark-container">
                        <button className={`${isDark ? 'dark-active' : ''}`} onClick={() => { darkSwitch() }} aria-hidden="true">
                            <BsFillMoonFill />
                        </button>
                        <button className={`${isDark ? '' : 'dark-active'}`} onClick={() => { darkSwitch() }} aria-hidden="true">
                            <BsSun />
                        </button>
                    </div>

                    <button className={`flex items-center justify-center gap-2 dash-black-bg rounded-2xl h-full p-4`} onClick={() => { darkSwitch() }} aria-hidden="true">
                        <img src="/assets/images/token/ethereum.png" alt="" className="" />
                        <div className="">
                            <span>ETH</span>
                        </div>
                        <div className="">
                            <FaChevronDown />
                        </div>
                    </button>

                    <button className={`flex items-center justify-center gap-2 dash-black-bg rounded-2xl h-full p-4 relative`} aria-hidden="true">
                        <span className='text-xl'>
                            <FaRegBell />
                        </span>
                        <div className="alert-display"></div>
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="">
                            <img src="/assets/images/user.png" alt="" className="" style={{ height: '50px', minWidth: '50px' }} />
                        </div>
                        <div className="h-full flex justify-between items-center flex-col">
                            <p className="">Numan Zafare</p>
                            <p className="grey-color">#32648723</p>
                        </div>
                    </div>
                    <button className={`flex items-center justify-center gap-2 dash-black-bg rounded-2xl h-full p-3`} onClick={() => { darkSwitch() }} aria-hidden="true">
                        <img src="/assets/images/flags/united-states.png" alt="" className="flag-icon" />
                        <div className="">
                            <span>ENG</span>
                        </div>
                        <div className="">
                            <FaChevronDown />
                        </div>
                    </button>
                </div>
            </div>
            <div className="header-list-hamburger">
                <FaLayerGroup onClick={() => setIsHamburger(true)} className='primary-hover' />
            </div>
        </header>
    );
}