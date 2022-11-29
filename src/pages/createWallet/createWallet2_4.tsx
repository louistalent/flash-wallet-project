import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet5 = () => {
    const [selectedSeed, setSelectedSeed] = useState('');
    const [matchSeed, setMatchSeed] = useState('abuse');
    const navigate = useNavigate();
    const NextPage = () => {
        if (matchSeed === selectedSeed) {
            navigate('/create-wallet6')
        } else {
            console.log('No match')
        }
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
            <div className="flex-1 black-bg white-color h-auto sm:h-full w-full pt-32 pb-4 mobile-container overflow-y-auto">
                <div className="w-full flex-col sm:flex items-center justify-center gap-4">
                    <div className=" max-w-sm w-full m-auto flex flex-col items-center justify-center gap-6">

                        <div className="w-full flex items-center justify-between gap-2">
                            <div className="process-bar process-bar-active"></div>
                            <div className="process-bar process-bar-active"></div>
                            <div className="process-bar process-bar-active"></div>
                            <div className="grey-color opacity-75">2/3</div>

                        </div>

                        <div className="w-full">
                            <Link to='/'>
                                <BsArrowLeft className="hover:text-[#FFC000]" />
                            </Link>
                        </div>
                        <div className="w-full mt-4">
                            <h3>Confirm Seed Phrase</h3>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                Select each word in the order it was <br />
                                presented to you
                            </p>
                        </div>
                        <div className="w-full text-4xl">
                            <div className={`${matchSeed === selectedSeed ? 'success-color ' : ''}`}>
                                3. {selectedSeed}
                            </div>
                            <div className="confirm-line mt-4"></div>
                        </div>
                        <div className="w-full confirm-seed-btn-group">
                            <div className="row">
                                <div className="col-sm-12 ">
                                    <div className="flex justify-center items-center gap-6">
                                        <button onClick={() => setSelectedSeed('future')} className="">future</button>
                                        <button onClick={() => setSelectedSeed('use')} className="">use</button>
                                        <button onClick={() => setSelectedSeed('abuse')} className="">abuse</button>
                                        <button onClick={() => setSelectedSeed('bubble')} className="">bubble</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={NextPage} className={`btn w-full primary-bg black-color font-bold mt-4`}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateWallet5;
