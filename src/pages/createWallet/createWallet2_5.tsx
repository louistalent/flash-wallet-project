import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet6 = () => {

    return (
        <section className="create-wallet-section flex flex-col md:flex-row justify-between items-center h-screen">
            <div className="flex-1 black-bg white-color h-auto sm:h-full w-full pt-32 pb-4 mobile-container overflow-y-auto">
                <div className="w-full container m-auto flex-col sm:flex items-center justify-center gap-4">
                    <div className="w-full mt-4">
                        <Link to='/'>
                            <BsArrowLeft className="hover:text-[#FFC000]" />
                        </Link>
                    </div>
                    <div className="max-w-xl w-full m-auto flex flex-col items-center justify-center text-center gap-6">
                        <div className=" mt-20"></div>
                        <div className="w-full">
                            <img src="/assets/images/create/success.png" alt="" className="m-auto" />
                        </div>
                        <div className="w-full mt-4">
                            <h2>success</h2>
                        </div>
                        <div className="w-full">
                            <p className="">
                                You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your responsibility!
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                DefiSquid cannot recover your wallet should you lose it. You can find your seedphrase in Setings {'>'} Security & Privacy
                            </p>
                        </div>
                        <div className="w-full confirm-seed-btn-group">

                        </div>
                        <Link to='/dashboard' className="w-full">
                            <button className={`btn w-full primary-bg black-color font-bold mt-4`}>
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateWallet6;
