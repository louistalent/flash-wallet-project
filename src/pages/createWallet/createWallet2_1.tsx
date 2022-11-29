import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet2 = () => {
    const [allIsGood, setAllisGood] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    const Import = () => {
        navigate('/create-wallet3')
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
                            <div className="process-bar process-bar-active"></div>
                            <div className="process-bar"></div>
                            <div className="grey-color opacity-75">2/3</div>

                        </div>

                        <div className="w-full">
                            <Link to='/'>
                                <BsArrowLeft className="hover:text-[#FFC000]" />
                            </Link>
                        </div>
                        <div className="w-full">
                            <img src="/assets/images/create/wallet.png" alt="" className="m-auto" />
                        </div>
                        <div className="w-full">
                            <h2>Secure Your Wallet</h2>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                Don't risk losing your funds. protect your wallet by saving your <span className="blue-color primary-hover">Seed phrase</span> in a place
                                you trust.
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                It's the only way to recover your wallet if you get locked out of the app or get a new device.
                            </p>
                        </div>
                        <br />
                        <button className={`btn w-full remind-btn`}>
                            Remind Me Later
                        </button>
                        <button onClick={Import} className={`btn w-full primary-bg black-color `}>
                            Import
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateWallet2;
