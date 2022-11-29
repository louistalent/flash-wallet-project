import {
    HomeSvg,
    BeneficiarySvg,
    ReferralSVG,
    StakingSvg,
    CopyAddressSvg,
    DeadSvg,
    DashboardSvg,
    WalletSvg,
    SettingSvg,
    NFTSvg
} from '../../../assets/svg/svg';

import { FaTelegramPlane, FaTwitter, FaAngleDown, FaAngleUp, FaRegCheckCircle, FaFeatherAlt } from 'react-icons/fa';
import { AiOutlineAudit, AiFillDollarCircle, AiOutlineSwap } from 'react-icons/ai';
import { BsFillFlagFill, BsGlobe2, BsCart4, BsCurrencyExchange } from "react-icons/bs";

import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import Slice from "../../../reducer";

import './dashSiderbar.scss';



function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState('');

    const global = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const update = (payload: { [key: string]: any }) => {
        dispatch(Slice.actions.update(payload));
    };

    const minSidebar = global.minSidebar;
    const noneSidebar = global.noneSidebar;
    const [drowList, setDrowList] = useState(false);
    const [settingDrowList, setSettingDrowList] = useState(false);
    useEffect(() => {
        let path_ = location.pathname.replaceAll('/', '');
        setPath(path_);
        console.log(path_);

    }, [location.pathname])

    useEffect(() => {
        setDrowList(false);
    }, [minSidebar])

    const dropdownClick = () => {
        if (window.innerWidth < 1200) {
            setDrowList(!drowList);
        } else {
            update({ minSidebar: false })
            setDrowList(!drowList);
        }

    }

    const settingDropdownClick = () => {
        if (window.innerWidth < 1200) {
            setSettingDrowList(!settingDrowList);
        } else {
            update({ minSidebar: false })
            setSettingDrowList(!settingDrowList);
        }

    }

    const SidebarClick = () => {
        // update({ noneSidebar: true })
    }
    const subClass = "flex cursor-pointer items-center justify-between duration-200 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 dark:text-gray-400 dark:hover:text-gray-100 text-gray-500 hover:text-gray-900";

    const linkTagIconClass = 'text-gray-300 hover:opacity-70 dark:hover:opacity-100 dark:text-gray-400 dark:hover:text-white transition-all duration-300 fill-current h-5 w-5';

    const sidebarCSS = "flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg router-link-exact-active router-link-active dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900";

    return (
        <div className='' style={{ display: noneSidebar ? 'none' : 'flex' }}>
            <div className={`dash-sidebar flex fixed justify-between duration-200 overflow-y-auto overflow-x-hidden flex-col z-index9 inset-y-0 left-0 xl:static inset-0 pb-4 ${minSidebar ? 'w-16' : 'w-72'}`}>
                <nav className="select-none pt-20 xl:pt-4">

                    <div onClick={() => SidebarClick()} className="mx-2">
                        <Link to="/flash-home" className={`${sidebarCSS} ${path === 'flash-home' ? 'active-color' : ''}`}>
                            <HomeSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Flash Home
                            </span>
                        </Link>
                    </div>
                    <div onClick={() => SidebarClick()} className="mx-2">
                        <Link to='/dashboard' className={`flex items-center duration-200 mt-2 sm:mt-4 p-3 rounded-lg justify-between dark:text-gray-400 dark:hover:bg-opacity-10 hover:bg-opacity-40 hover:bg-gray-100 dark:hover:text-gray-100 text-gray-500 dark:hover:bg-gray-300 hover:text-gray-900 ${path === 'dashboard' ? 'active-color' : ''}`}>
                            <span className="flex flex-row items-center">
                                <DashboardSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                                <span className={`mx-4 whitespace-nowrap  duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Dashboard
                                </span>
                            </span>

                        </Link>
                    </div>
                    <div className={`mx-2 duration-100 ${drowList ? '' : 'h-12'}`}>
                        <div onClick={() => dropdownClick()} className={`flex cursor-pointer items-center justify-between duration-200 mt-2 sm:mt-4 p-3 rounded-lg border-gray-900 dark:text-gray-400 hover:bg-opacity-40 dark:hover:bg-gray-300 dark:hover:bg-opacity-10 dark:hover:text-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-900`}>
                            <div className="flex flex-row">
                                <WalletSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />

                                <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    My Wallet
                                </span>
                            </div>
                            {drowList
                                ?
                                <FaAngleUp className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                                :
                                <FaAngleDown className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                            }
                        </div>
                        <div className={`rounded-md overflow-hidden transition-all duration-300 mt-2
                        opacity-${drowList ? 100 : 0}, ${drowList ? '' : 'dis-n'}`} style={{ minWidth: '271px' }}>
                            <Link to="/non-custodial-wallet" onClick={() => SidebarClick()} className={`${subClass} ${path === 'non-custodial-wallet' ? 'active-color' : ''}`}>
                                <span className={`ml-10  duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Non-Custodial Wallet
                                </span>
                            </Link>
                            <Link to="/custodial-wallet" onClick={() => SidebarClick()} className={`${subClass} ${path === 'custodial-wallet' ? 'active-color' : ''}`}>
                                <span className={`ml-10  duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Custodial Wallet
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div onClick={() => SidebarClick()} className="mx-2">
                        <Link to="/swap" className={`${sidebarCSS} ${path === 'swap' ? 'active-color' : ''}`}>
                            <HomeSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Swap
                            </span>
                        </Link>
                    </div>
                    <div onClick={() => SidebarClick()} className="mx-2">
                        <Link to="/dead-wallet" className={`${sidebarCSS} ${path === 'dead-wallet' ? 'active-color' : ''}`}>
                            <DeadSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Dead Wallet
                            </span>
                        </Link>
                    </div>
                    <div onClick={() => SidebarClick()} className="mx-2">
                        <Link to="/staking" className={`${sidebarCSS} ${path === 'staking' ? 'active-color' : ''}`}>
                            <StakingSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Staking
                            </span>
                        </Link>
                    </div>
                    <div className="mx-2">
                        <Link to="/beneficiary" className={`${sidebarCSS} ${path === 'beneficiary' ? 'active-color' : ''}`}>
                            <BeneficiarySvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Beneficiary
                            </span>
                        </Link>
                    </div>
                    <div className="mx-2">
                        <Link to="/nft" className={`${sidebarCSS} ${path === 'nft' ? 'active-color' : ''}`}>
                            <NFTSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                NFT
                            </span>
                        </Link>
                    </div>
                    <div className={`mx-2 duration-100 ${settingDrowList ? '' : 'h-12'}`}>
                        <div onClick={() => settingDropdownClick()} className={`flex cursor-pointer items-center justify-between duration-200 mt-2 sm:mt-4 p-3 rounded-lg border-gray-900 dark:text-gray-400 hover:bg-opacity-40 dark:hover:bg-gray-300 dark:hover:bg-opacity-10 dark:hover:text-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-900`}>
                            <div className="flex flex-row">
                                <SettingSvg className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                                <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Setting
                                </span>
                            </div>
                            {settingDrowList
                                ?
                                <FaAngleUp className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                                :
                                <FaAngleDown className={`${minSidebar ? 'opacity-0' : 'opacity-100'}`} />
                            }
                        </div>
                        <div className={`rounded-md overflow-hidden transition-all duration-300 mt-2
                        opacity-${settingDrowList ? 100 : 0}, ${settingDrowList ? '' : 'dis-n'}`} style={{ minWidth: '271px' }}>
                            <Link to="/wallet-setting" onClick={() => SidebarClick()} className={`${subClass} ${path === 'wallet-setting' ? 'active-color' : ''}`}>
                                <span className={`ml-10  duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Wallet Setting
                                </span>
                            </Link>
                            <Link to="/profile-setting" onClick={() => SidebarClick()} className={`${subClass} ${path === 'profile-setting' ? 'active-color' : ''}`}>
                                <span className={`ml-10  duration-100 ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                    Profile Setting
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-2">
                        <Link to="/referral" className={`${sidebarCSS} ${path === 'referral' ? 'active-color' : ''}`}>
                            <ReferralSVG className="w-6 h-6 flex-shrink-0 text-primary-dark dark:text-primary" />
                            <span className={`mx-4  duration-100 whitespace-nowrap ${minSidebar ? 'opacity-0' : 'opacity-100'}`}>
                                Referral
                            </span>
                        </Link>
                    </div>
                </nav>

                <div className={`px-5 mt-6 block duration-75 ease-in-out ${minSidebar ? 'opacity-0' : 'opacity-100'}`} style={{ minWidth: '288px' }}>
                    <div className="sidebar-footer">
                        <div className="circle">
                            <div className="yellow-circle">
                                ?
                            </div>
                        </div>
                        <h4>Help Center</h4>
                        <button className='sidebar-footer-btn'>
                            Go To Help Center
                        </button>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;