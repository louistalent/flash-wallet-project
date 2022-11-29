

import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashCustodialSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './nonCustodialWallet.scss';

const NonCustodialWallet = () => {
    return (
        <Layout>
            <div className="non-custodial-wallet-section">
                <div className="w-full flex items-end justify-center sm:justify-end mb-4">
                    <Link to='/non-custodial-wallet-edit'>
                        <button className="non-custodial-btn flex items-center justify-center">
                            <div className="plus-icon">
                                <AiOutlinePlus />
                            </div>
                            <span className="">Register New Non-custodial Wallet</span>
                        </button>
                    </Link>
                </div>
                <h1 className="">Non-custodial Wallets</h1>
                <p className="non-custodial-desciption mt-3">Register and manage your non-custodial wallets and assign beneficiaries to them. Each Registered wallet can have one primary beneficiary and one backup beneficiary assigned.</p>
                <div className="mt-16">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="non-custodial-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="">
                                            <img src="/assets/images/wallet/trust.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>Trust Wallet</h4>
                                            <p className="grey-color text-xs">Trust Wallet-non-custodial Wallet</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className=" mt-14">
                                    <h5 className="">
                                        Beneficiaries
                                    </h5>
                                </div>
                                <div className="mt-10">
                                    <div className="wallet-user">
                                        <div className="flex items-center gap-2">
                                            <div className=" text-xl"><AiOutlineUser /></div>
                                            <span className="text-xs grey-color">Numan Zafar</span>
                                        </div>
                                        <div className="wallet-user-close">
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                    <div className="mt-2"></div>
                                    <span className="primary-color text-xs">
                                        Last Updated: Aug 12, 2022 11:06 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="non-custodial-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="metamask-container">
                                            <img src="/assets/images/wallet/metamask.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>MetaMask Wallet</h4>
                                            <p className="grey-color text-xs">Metamask-non-custodial Wallet</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className=" mt-14">
                                    <h5 className="">
                                        Beneficiaries
                                    </h5>
                                </div>
                                <div className="mt-10">
                                    <div className="wallet-user">
                                        <div className="flex items-center gap-2">
                                            <div className=" text-xl"><AiOutlineUser /></div>
                                            <span className="text-xs grey-color">Numan Zafar</span>
                                        </div>
                                        <div className="wallet-user-close">
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                    <div className="mt-2"></div>
                                    <span className="primary-color text-xs">
                                        Last Updated: Aug 12, 2022 11:06 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="non-custodial-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="">
                                            <img src="/assets/images/wallet/trust.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>Trust Wallet</h4>
                                            <p className="grey-color text-xs">Trust Wallet-non-custodial Wallet</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className=" mt-14">
                                    <h5 className="">
                                        Beneficiaries
                                    </h5>
                                </div>
                                <div className="mt-10">
                                    <div className="wallet-user">
                                        <div className="flex items-center gap-2">
                                            <div className=" text-xl"><AiOutlineUser /></div>
                                            <span className="text-xs grey-color">Numan Zafar</span>
                                        </div>
                                        <div className="wallet-user-close">
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                    <div className="mt-2"></div>
                                    <span className="primary-color text-xs">
                                        Last Updated: Aug 12, 2022 11:06 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NonCustodialWallet;
