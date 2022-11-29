

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
import { IoSwapVerticalOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import './flashHome.scss';

const FlashAccount = () => {

    return (
        <Layout>
            <div className="flash-section">
                <div className="mt-2">
                    <h1>Account</h1>
                    <br />
                </div>
                <div className="">
                    <div className="flex justify-end">
                        <p className="">Balance: 19.2371 BNB</p>
                    </div>
                    <div className="flex justify-end mt-8 mb-2">
                        <span className="primary-color text-xs">Use Max</span>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="dashboard-frame px-3 py-4">
                                <input type="text" placeholder="BNB" className="" />
                                <AiOutlineDown fontSize={20} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="dashboard-frame px-3 py-6 text-center">
                                <p className="w-full text-4xl font-bold primary-color" >
                                    0.2405
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-6">
                            <div className="w-full flex justify-end">
                                <button className="account-value">
                                    <p className="">$55.99312</p>
                                    <IoSwapVerticalOutline fontSize={18} />
                                </button>
                            </div>
                        </div>
                    </div>
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
        </Layout>
    )
}

export default FlashAccount;
