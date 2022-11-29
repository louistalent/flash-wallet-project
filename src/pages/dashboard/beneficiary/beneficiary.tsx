import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineClose, AiOutlineUser, AiOutlineMail, AiFillFolder, AiFillPlusCircle } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { BiFlag, BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsGenderFemale } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './beneficiary.scss';

const Beneficiary = () => {
    return (
        <Layout>
            <div className="beneficiary-section">
                <div className="w-full flex items-end justify-center sm:justify-end mb-4">
                    <Link to='/beneficiary-edit'>
                        <button className="beneficiary-btn flex items-center justify-center">
                            <div className="plus-icon">
                                <AiOutlinePlus />
                            </div>
                            <span className="">Register New beneficiary</span>
                        </button>
                    </Link>
                </div>
                <h1 className="">beneficiary</h1>
                <p className="beneficiary-desciption mt-3">
                    Register and manage your beneficiaries
                </p>
                <div className="mt-16">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="beneficiary-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="">
                                            <img src="/assets/images/beneficiary/1.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>Numan Zafar</h4>
                                            <p className="grey-color text-xs">Friend</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <div className="info">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiFlag fontSize={22} />
                                                <p className="">Nationality:</p>
                                            </div>
                                            <div className="">Pakistan</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiBriefcaseAlt2 fontSize={22} />
                                                <p className="">DOB:</p>
                                            </div>
                                            <div className="">Jan 12,2000</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <AiOutlineMail fontSize={22} />
                                                <p className="">Email:</p>
                                            </div>
                                            <div className="">numanzafar994@gmail.com</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BsGenderFemale fontSize={22} />
                                                <p className="">Gender:</p>
                                            </div>
                                            <div className="">Male</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-1 mt-4">
                                        <div className="wallets">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Wallets:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Coinbase</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Assign Wallet</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="folders">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Folders:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Upload File</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="beneficiary-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="">
                                            <img src="/assets/images/beneficiary/1.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>Numan Zafar</h4>
                                            <p className="grey-color text-xs">Friend</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <div className="info">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiFlag fontSize={22} />
                                                <p className="">Nationality:</p>
                                            </div>
                                            <div className="">Pakistan</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiBriefcaseAlt2 fontSize={22} />
                                                <p className="">DOB:</p>
                                            </div>
                                            <div className="">Jan 12,2000</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <AiOutlineMail fontSize={22} />
                                                <p className="">Email:</p>
                                            </div>
                                            <div className="">numanzafar994@gmail.com</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BsGenderFemale fontSize={22} />
                                                <p className="">Gender:</p>
                                            </div>
                                            <div className="">Male</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-1 mt-4">
                                        <div className="wallets">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Wallets:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Coinbase</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Assign Wallet</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="folders">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Folders:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Upload File</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="beneficiary-card">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex items-center justify-start gap-3">
                                        <div className="">
                                            <img src="/assets/images/beneficiary/1.png" alt="" className="" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <h4>Numan Zafar</h4>
                                            <p className="grey-color text-xs">Friend</p>
                                        </div>
                                    </div>
                                    <div className=" text-2xl">
                                        <BsPencilSquare />
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <div className="info">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiFlag fontSize={22} />
                                                <p className="">Nationality:</p>
                                            </div>
                                            <div className="">Pakistan</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BiBriefcaseAlt2 fontSize={22} />
                                                <p className="">DOB:</p>
                                            </div>
                                            <div className="">Jan 12,2000</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <AiOutlineMail fontSize={22} />
                                                <p className="">Email:</p>
                                            </div>
                                            <div className="">numanzafar994@gmail.com</div>
                                        </div>
                                        <div className="border"></div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-2">
                                                <BsGenderFemale fontSize={22} />
                                                <p className="">Gender:</p>
                                            </div>
                                            <div className="">Male</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-1 mt-4">
                                        <div className="wallets">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Wallets:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Coinbase</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Trustwallet</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Assign Wallet</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="folders">
                                            <div className="flex flex-col flex-1 w-full">
                                                <p>Folders:</p>
                                                <div className="border mt-2"></div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-2 w-full">
                                                    <div className="flex items-center gap-2">
                                                        <AiFillFolder className="primary-color" />
                                                        <p className="text-xs">Document</p>
                                                    </div>
                                                    <div className="flex-1 flex w-full justify-end">
                                                        <AiOutlineClose className="mr-6" fontSize={14} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-12">
                                                <div className="flex items-center gap-2">
                                                    <div className=" bg-[#7B61FF] p-1 rounded-full">
                                                        <AiOutlinePlus fontSize={10} className="" />
                                                    </div>
                                                    <p className="text-xs">Upload File</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Beneficiary;



