

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

const FlashConfirm = () => {
    const [statusModal, setStatusModal] = useState(false);
    return (
        <Layout>
            <div className="flash-section">
                <div className="mt-2">
                    <h1>Confirm</h1>
                    <br />
                </div>
                <div className="">
                    <br />
                    <br />
                    <br />
                    <div className="w-full text-center">
                        <p className="w-full">Amount</p>
                        <p className="primary-color font-extrabold text-6xl mt-2">
                            0.2405 BNB
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p className="">From</p>
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

                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p className="">To</p>
                            <div className="flex items-center justify-between w-full mt-4 pb-3">
                                <div className="flex items-center gap-8">
                                    <img src="/assets/images/flash-home/1.png" alt="" className=" rounded-full" />
                                    <div className="h-full flex justify-between flex-col gap-3">
                                        <h5>Smart Gevan</h5>
                                        <p className="grey-color">9.0x3R2E...DxR9</p>
                                    </div>
                                </div>
                                <div className="">
                                    <AiOutlineClose />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-frame px-4 py-3 flex items-center justify-between flex-col" style={{ background: 'transparent' }}>
                        <div className="w-full flex items-center justify-between">
                            <p>Amount</p>
                            <p>0.2405 BNB</p>
                        </div>
                        <div className="w-full flex items-center justify-between mt-2">
                            <p>Network fee <span className="primary-color font-bold">&nbsp;&nbsp; Edit</span></p>
                            <p>0.12 BNB</p>
                        </div>
                    </div>
                    <br />
                    <div className="dashboard-frame px-4 py-3 flex items-center justify-between flex-col" style={{ background: 'transparent' }}>
                        <div className="w-full flex items-center justify-between">
                            <p>Total Amount</p>
                            <p>0.2405 BNB</p>
                        </div>
                        <div className="w-full flex items-center justify-end mt-2">
                            <p className="grey-color">$84.43</p>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="w-full flex justify-end">
                                <button className="btn primary-bg black-color font-bold w-[250px]">
                                    Next
                                </button>
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

export default FlashConfirm;
