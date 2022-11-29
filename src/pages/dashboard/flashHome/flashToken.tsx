

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

const FlashToken = () => {
    const [statusModal, setStatusModal] = useState(false);
    return (
        <Layout>
            <div className="flash-section">
                <div className="mt-2">
                    <h1>Token</h1>
                    <br />
                </div>
                <div className="">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="token-row">
                                <div className="flex items-start gap-4">
                                    <div className=" rounded-full p-4 bg-[#44485F]"></div>
                                    <div className="">
                                        <h5>BNB</h5>
                                    </div>
                                </div>
                                <div className="h-full flex justify-between flex-col gap-3 text-right">
                                    <h5 className="">19.2371 BNB</h5>
                                    <span className="grey-color">$4,498.56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="token-row">
                                <div className="flex items-start gap-4">
                                    <div className=" rounded-full p-4 bg-[#44485F]"></div>
                                    <div className="">
                                        <h5>BNB</h5>
                                    </div>
                                </div>
                                <div className="h-full flex justify-between flex-col gap-3 text-right">
                                    <h5 className="">92,3 USDC</h5>
                                    <span className="grey-color">$92,3.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="token-row">
                                <div className="flex items-start gap-4">
                                    <div className=" rounded-full p-4 bg-[#44485F]"></div>
                                    <div className="">
                                        <h5>Synthetix</h5>
                                    </div>
                                </div>
                                <div className="h-full flex justify-between flex-col gap-3 text-right">
                                    <h5 className="">42.74 SNX</h5>
                                    <span className="grey-color">$902.06</span>
                                </div>
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

            {
                statusModal && <FlashHomeModal setStatusModal={setStatusModal} />
            }

        </Layout>
    )
}

export default FlashToken;
