

import react, { useState } from "react";
import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashBefefitSvg,
    DashNFTSvg,
    QrScanSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineClose, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare, BsWallet2 } from 'react-icons/bs';
import { MdOutlineSentimentVeryDissatisfied } from 'react-icons/md';
import FlashHomeModal from "../../../component/flashHomeModal";

import { Link } from 'react-router-dom';

import './flashHome.scss';

const FlashHome = () => {
    const [statusModal, setStatusModal] = useState(false);
    return (
        <Layout>
            <div className="flash-section">
                <div className="mt-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 mb-6">
                            <div className="flash-card">
                                <div className="flex-1 mt-2">
                                    <BsWallet2 fontSize={30} />
                                    <div className=" flex gap-2 mt-4">
                                        <p className="">
                                            FLASH WALLET
                                        </p>
                                        <AiOutlineDown />
                                    </div>
                                    <div className="mt-6">
                                        <span className="primary-color text-2xl">
                                            7500$
                                        </span>
                                    </div>
                                    <div className="dead-function">
                                        <div className="flex items-center gap-2">
                                            <div className=" text-xl">
                                                <MdOutlineSentimentVeryDissatisfied />
                                            </div>
                                            <span className="text-xs grey-color">Dead function</span>
                                        </div>
                                    </div>
                                    <div className="mt-2"></div>

                                </div>
                                <div className="flex-1 flex flex-col items-center">
                                    <QrScanSvg className="mt-2" />
                                    <br />
                                    <span className=" text-2xl">Scan & Pay</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 mb-6">
                            <div className="flash-functions">
                                <div className="function" onClick={() => setStatusModal(true)}>
                                    <img src="/assets/images/flash-home/send.png" alt="" className="" />
                                    <p className="">Send</p>
                                </div>
                                <div className="function" onClick={() => setStatusModal(true)}>
                                    <img src="/assets/images/flash-home/recieve.png" alt="" className="" />
                                    <p className="">Recieve</p>
                                </div>
                                <div className="function" onClick={() => setStatusModal(true)}>
                                    <img src="/assets/images/flash-home/buy.png" alt="" className="" />
                                    <p className="">Buy</p>
                                </div>
                                <div className="function" onClick={() => setStatusModal(true)}>
                                    <img src="/assets/images/flash-home/cash.png" alt="" className="" />
                                    <p className="">Cash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="flash-status">
                                <div className="w-full">
                                    <span className="w-full text-sm">
                                        Sep 5, 2022 at 10:38 AM
                                    </span>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/received.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="success-color text-sm">Confirmed</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/received.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="red-color text-sm">Canceled</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="w-full text-sm">
                                        Sep 5, 2022 at 10:38 AM
                                    </span>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/send-filled.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="success-color text-sm">Confirmed</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="flash-status">
                                <div className="w-full">
                                    <span className="w-full text-sm">
                                        Sep 5, 2022 at 10:38 AM
                                    </span>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/received.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="success-color text-sm">Confirmed</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/received.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="red-color text-sm">Canceled</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="w-full text-sm">
                                        Sep 5, 2022 at 10:38 AM
                                    </span>
                                </div>
                                <div className="flex pl-4 items-center justify-between w-full">
                                    <div className="flex items-center gap-8">
                                        <img src="/assets/images/flash-home/send-filled.png" alt="" className="" />
                                        <div className="">
                                            <h5>Received BNB</h5>
                                            <p className="success-color text-sm">Confirmed</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="">
                                            4.66 BNB
                                        </h5>
                                        <p className=" text-xs mt-2">
                                            $ 121.123
                                        </p>
                                    </div>
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

export default FlashHome;
