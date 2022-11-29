

import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashCustodialSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineEye, AiOutlineClose, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

import './nonCustodialWallet.scss';

const NonCustodialWalletEdit = () => {
    return (
        <Layout>
            <div className="non-custodial-wallet-section">
                <h1 className="">Non-custodial Wallets</h1>
                <p className="non-custodial-desciption mt-3"></p>
                <div className="mt-16">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Wallet Name
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Name your wallet i.e (my flashwallet 1)" onChange={() => { }} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Wallet Provider
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Select provider" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Wallet Seed Phrase
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4 grey-color">
                                <textarea defaultValue="Type or paste your wallet seed phrase is typically 12, words separated by single spaces" name="" id="" rows={7}>

                                </textarea>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Note <span className=" text-xs grey-color">(Optional)</span>
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4 grey-color">
                                <textarea defaultValue="type any note here..." name="" id="" rows={7}>

                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Wallet Passcode <span className="text-xs grey-color">(Optional)</span>
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="" onChange={() => { }} />
                                <AiOutlineEye fontSize={25} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Approcimate value at reg <span className="text-xs grey-color">(Optional)</span>
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Select provider" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 mb-6">
                            <h5 className="">
                                Assets in the wallet at reg <span className="text-xs grey-color">(Optional)</span>
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Select or type assets" onChange={() => { }} />
                                <AiOutlineDown />
                            </div>
                            <div className="flex items-center gap-6 mt-2">
                                <div className="toggle-btn">
                                    <div className="active"></div>
                                </div>
                                <div className="">I understand the terms and conditions...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 mb-6">
                            <button className="btn primary-bg text-black text-lg font-bold max-w-xs w-full float-right">
                                Save Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NonCustodialWalletEdit;
