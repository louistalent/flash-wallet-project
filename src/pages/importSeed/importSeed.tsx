import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import './importSeed.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const ImportSeed = () => {
    const [allIsGood, setAllisGood] = useState(false);
    const [seedText, setSeedText] = useState('');
    const [seedText2, setSeedText2] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [atleast8, setAtleast8] = useState(false);

    useEffect(() => {
        if (newPass.length >= 8) {
            setAtleast8(true)
        } else {
            setAtleast8(false)
        }

        if (newPass === confirmPass && seedText.length > 0) {
            setAllisGood(true);
        } else {
            setAllisGood(false);
        }

    }, [seedText, newPass, confirmPass])

    const Seed1 = (e: any) => {
        setTimeout(() => {
            setSeedText(e.target.innerText);
            console.log(e.target.innerText)
        }, 100)
    }
    const Seed2 = (e: any) => {
        setTimeout(() => {
            setSeedText2(e.target.innerText);
            console.log(e.target.innerText)
        }, 100)
    }

    return (
        <section className="import-seed-section flex flex-col md:flex-row justify-between items-center h-screen">
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
            {/* <div className="flex-1 black-bg white-color h-full w-full mobile-container"> */}
            <div className="flex-1 black-bg white-color relative  h-auto sm:h-full w-full pt-32 mobile-container overflow-y-auto">

                <div className="sm:absolute relative w-full left-0 right-0 top-0 bottom-0 flex-col sm:flex items-center justify-center gap-4">
                    <div className=" max-w-sm w-full m-auto flex flex-col items-center justify-center gap-6">
                        <div className="w-full">
                            <Link to='/home'>
                                <BsArrowLeft className="hover:text-[#FFC000]" />
                            </Link>
                        </div>
                        <div className="w-full">
                            <h2>Import From Seed</h2>
                        </div>
                        <div className="flex gap-8 items-center justify-between w-full">
                            <div className="seed-input">
                                <div className="">
                                    <p className="title">
                                        Seed Phrase
                                    </p>
                                    <div onKeyDown={(e: any) => Seed1(e)} contentEditable="true" className="textarea"></div>
                                </div>
                                <div className="">
                                    <BsEye fontSize={'25px'} className="primary-hover" />
                                </div>
                            </div>
                            <div className="">
                                <img src="/assets/images/import/btn.png" width={'100px'} alt="" className="" />
                            </div>
                        </div>

                        {
                            seedText ? <></> :
                                <div className="seed-input">
                                    <div className="">
                                        <p className="title">
                                            Seed Phrase
                                        </p>
                                        {/* setSeedText(e.target.context) */}
                                        <div onKeyDown={(e: any) => Seed2(e)} contentEditable="true" className="textarea"></div>
                                    </div>
                                    <div className="">
                                        <BsEye fontSize={'25px'} className="primary-hover" />
                                    </div>
                                </div>
                        }

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
                            <span className={`${atleast8 ? 'success-color' : 'grey-color'} ml-4 text-xs`}>
                                Must be at least 8 characters
                            </span>
                        </div>
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
                        <div className=" flex w-full items-center justify-between">
                            <h5 className="">Sign in with Face ID?</h5>
                            <div className="face-id-btn">
                                <div className="face-id-toggle"></div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:absolute flex-col items-center justify-center relative max-w-sm m-auto text-center" style={{ bottom: '10%' }}>
                        <p className="mt-8 grey-color">
                            By proceeding, you agree to these <span className="underline primary-hover ">Term and Conditions.</span>
                        </p>
                        <br />
                        <button className={`btn w-full ${allIsGood ? 'primary-bg black-color' : 'grey2-bg grey-color opacity-50'} `}>
                            Import
                        </button>
                    </div>
                    <p className="m-6 flex sm:hidden"></p>
                </div>
            </div>
        </section>
    );
};
export default ImportSeed;
