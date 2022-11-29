

import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineEye, AiOutlineClose, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

import './beneficiary.scss';

const BeneficiaryEdit = () => {
    return (
        <Layout>
            <div className="beneficiary-section">
                <h1 className="">Register a new beneficiary</h1>
                <p className="beneficiary-desciption mt-3"></p>
                <div className="mt-16">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Beneficiary Name
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Enter Name" onChange={() => { }} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Beneficiary Relation
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Select Relationr" onChange={() => { }} />
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
                                Beneficiary Nationality
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="USA" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-6">
                            <h5 className="">
                                Beneficiary Gender
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Male" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <h5 className="">
                            Beneficiary Date of birth
                        </h5>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="USA" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Month" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Year" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <h5 className="">
                            Beneficiary Email
                        </h5>
                        <div className="col-sm-12 col-md-12 mb-6">
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Enter Email" onChange={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <h5 className="">
                            Beneficiary Security Question <span className=" text-sm">( In which country did you first meet?)</span>
                        </h5>
                        <div className="col-sm-12 col-md-12 mb-6">
                            <div className="dashboard-frame py-4 px-3 mt-4">
                                <input type="text" className="" placeholder="Select Country" onChange={() => { }} />
                                <div className=" text-2xl">
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h5 className="">
                                Note <span className=" text-xs grey-color">(Optional)</span>
                            </h5>
                            <div className="dashboard-frame py-4 px-3 mt-4 grey-color">
                                <textarea defaultValue="type any note here..." name="" id="" rows={7}>

                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 mt-2">
                        <div className="toggle-btn">
                            <div className="active"></div>
                        </div>
                        <div className="">I understand the terms and conditions...</div>
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
                <br />
                <br />
            </div>
        </Layout>
    )
}

export default BeneficiaryEdit;
