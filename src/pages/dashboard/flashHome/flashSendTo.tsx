

import react, { useState } from "react";
import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashBefefitSvg,
    DashNFTSvg,
    QrScanSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineClose, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare, BsWallet2, BsChevronRight } from 'react-icons/bs';
import { MdOutlineSentimentVeryDissatisfied } from 'react-icons/md';
import FlashHomeModal from "../../../component/flashHomeModal";
import { IoIosQrScanner, IoIosRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './flashHome.scss';

const FlashSendTo = () => {
    const [statusModal, setStatusModal] = useState(false);
    return (
        <Layout>
            <div className="flash-section">
                <div className="mt-2">
                    <h1>Send to</h1>
                    <br />
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="flash-status">
                                <div className="w-full">
                                    <span className="w-full">
                                        From
                                    </span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/flash-avatar.png" alt="" className=" rounded-full" />
                                        <div className="h-full flex justify-between flex-col gap-3">
                                            <h5>Account 1</h5>
                                            <p className="">9.3729 ETH</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="flash-status">
                                <div className="w-full">
                                    <span className="w-full">
                                        Send To <span className="red-color">*</span>
                                    </span>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="dashboard-frame w-full px-5 py-4">
                                        <div className="flex items-center justify-between w-full">
                                            <input type="text" className="w-full" placeholder="Search, Public Address (0x), or ENS" />
                                            <div className="relative">
                                                <IoIosQrScanner fontSize={23} className="primary-color" />
                                                <IoIosRemove className="primary-color absolute" style={{ top: '3.4px', left: '15.3%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="w-full flex justify-end">
                                <button className="transfer-account">
                                    Transfer Between My Accounts
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p className="">Recents</p>
                            <div className="flex items-center justify-between w-full mt-4 border-b-[1px] border-solid border-b-[#252333] pb-3">
                                <div className="flex items-center gap-8">
                                    <img src="/assets/images/flash-home/1.png" alt="" className=" rounded-full" />
                                    <div className="h-full flex justify-between flex-col gap-3">
                                        <h5>Account 1</h5>
                                        <p className="">9.3729 ETH</p>
                                    </div>
                                </div>
                                <div className="">
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="flex items-center justify-between w-full mt-4 border-b-[1px] border-solid border-b-[#252333] pb-3">
                                <div className="flex items-center gap-8">
                                    <img src="/assets/images/flash-home/1.png" alt="" className=" rounded-full" />
                                    <div className="h-full flex justify-between flex-col gap-3">
                                        <h5>Account 1</h5>
                                        <p className="">9.3729 ETH</p>
                                    </div>
                                </div>
                                <div className="">
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="flex items-center justify-between w-full mt-4 pb-3">
                                <div className="flex items-center gap-8">
                                    <img src="/assets/images/flash-home/1.png" alt="" className=" rounded-full" />
                                    <div className="h-full flex justify-between flex-col gap-3">
                                        <h5>Account 1</h5>
                                        <p className="">9.3729 ETH</p>
                                    </div>
                                </div>
                                <div className="">
                                    <BsChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                statusModal && <FlashHomeModal setStatusModal={setStatusModal} />
            }

        </Layout>
    )
}

export default FlashSendTo;
