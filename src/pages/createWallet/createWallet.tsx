import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet = () => {
    const navigate = useNavigate();
    const [allIsGood, setAllisGood] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [atleast8, setAtleast8] = useState(false);
    const [strongPass, setStrongPass] = useState(false);
    const [acceptToPolicy, setAcceptToPolicy] = useState(false);


    useEffect(() => {
        if (newPass.length >= 8) {
            setAtleast8(true)
        } else {
            setAtleast8(false)
        }

        if (newPass === confirmPass && acceptToPolicy) {
            setAllisGood(true);
        } else {
            setAllisGood(false);
        }


    }, [newPass, confirmPass, acceptToPolicy, strongPass])

    const Import = () => {
        if (allIsGood)
            navigate('/create-wallet2')
    }

    return (
        <section className="create-wallet-section flex flex-col md:flex-row justify-between items-center h-screen">
            <div className="flex-[0] sm:flex-1 primary-bg black-color h-full w-full relative">
                <div className="sm:absolute relative w-full left-0 right-0 top-0 bottom-0 flex-col sm:flex items-center justify-center">
                    <img src="/assets/images/import/flash.png" alt="" className="m-auto create-flash-logo" />
                    <div className="sm:absolute relative text-center" style={{ bottom: '10%' }}>
                        <h4 className="">Import From Seed</h4>
                        <p className="mt-2 sm:mt-8">
                            Lorem Ipsum is simply dummy text of the
                            <br />
                            printing and typesetting industry
                        </p>
                        <br />
                        <p className="line-icon"></p>
                    </div>
                    {/* <p className="m-6 flex sm:hidden"></p> */}
                </div>
            </div>
            <div className="flex-1 black-bg white-color h-auto sm:h-full w-full pt-32 mobile-container overflow-y-auto">

                <div className="w-full flex-col sm:flex items-center justify-center gap-4">
                    <div className=" max-w-sm w-full m-auto flex flex-col items-center justify-center gap-6">

                        <div className="w-full flex items-center justify-between gap-2">
                            <div className="process-bar process-bar-active"></div>
                            <div className="process-bar"></div>
                            <div className="process-bar"></div>
                            <div className="grey-color opacity-75">1/3</div>

                        </div>

                        <div className="w-full">
                            <Link to='/'>
                                <BsArrowLeft className="hover:text-[#FFC000]" />
                            </Link>
                        </div>
                        <div className="w-full">
                            <h2>Create Password</h2>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                This password will unlock your Metamask wallet only on this service
                            </p>
                        </div>

                        <div className="w-full">
                            <div className="seed-input">
                                <div className="">
                                    <p className="title">
                                        New Password
                                    </p>
                                    <input type="password" className="" defaultValue={newPass} onChange={(e: any) => setNewPass(e.target.value)} />
                                </div>
                                <div className="">
                                    <BsEye fontSize={'25px'} className="primary-hover" />
                                </div>
                            </div>
                            <span className={`grey-color ml-4 text-xs`}>
                                Password strength: <span className={`${strongPass ? 'success-color' : 'grey-color'}`}>
                                    Good
                                </span>
                            </span>
                        </div>
                        <div className="w-full">
                            <div className="seed-input">
                                <div className="">
                                    <p className="title">
                                        Confirm Password
                                    </p>
                                    <input type="password" className="" defaultValue={confirmPass} onChange={(e: any) => setConfirmPass(e.target.value)} />
                                </div>
                                <div className="">
                                    <BsEye fontSize={'25px'} className="primary-hover" />
                                </div>
                            </div>
                            <span className={`${atleast8 ? 'success-color' : 'grey-color'} ml-4 text-xs`}>
                                Must be at least 8 characters
                            </span>
                        </div>
                        <div className=" flex w-full items-center justify-between">
                            <h5 className="">Sign in with Face ID?</h5>
                            <div className="face-id-btn">
                                <div className="face-id-toggle"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div className="">
                                <input onChange={(e: any) => { setAcceptToPolicy(e.target.checked) }} className="create-pass-policy" id="styled-checkbox-2" type="checkbox" />
                                <label htmlFor="styled-checkbox-2">I understand that DeGe cannot recover this password for me.
                                </label>
                                <span className="blue-color primary-hover">Learn more</span>
                            </div>
                        </div>
                        <button onClick={Import} className={`btn w-full ${allIsGood ? 'primary-bg black-color' : 'grey2-bg grey-color opacity-50'} `}>
                            Import
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CreateWallet;
