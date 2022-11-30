import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet3 = () => {
    const [seedPhrase, setSeedPhrase] = useState(false);
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
                            <div className="process-bar"></div>
                            <div className="grey-color opacity-75">2/3</div>

                        </div>

                        <div className="w-full">
                            <Link to='/'>
                                <BsArrowLeft className="hover:text-[#FFC000]" />
                            </Link>
                        </div>
                        <div className="w-full">
                            {seedPhrase ?
                                <h2>Write Down Your Seed Phrase</h2>
                                :
                                <h2>Secure Your Wallet</h2>
                            }
                        </div>
                        <div className="w-full">
                            {
                                seedPhrase ?
                                    <p className="grey-color">
                                        This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll be asked to re-enter this phrase (in order) on the next step.
                                    </p>
                                    :
                                    <p className="grey-color">
                                        Secure your wallet's "<span onClick={() => setSeedPhrase(true)} className="blue-color primary-hover">Seed Phrase</span>"
                                    </p>
                            }
                        </div>
                        <div className="w-full">
                            <br />
                            <p className="">Manual</p>
                        </div>
                        <div className="w-full">
                            <p className="grey-color">
                                Write down your seed phrase on a piece of paper and store in a safe place.
                            </p>
                        </div>

                        <div className="w-full">
                            <p className="grey-color">
                                Security lever: Very strong
                            </p>
                            <br />
                            <div className="flex items-center justify-start gap-2">
                                <div className="success-bar"></div>
                                <div className="success-bar"></div>
                                <div className="success-bar"></div>
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <ul className="">
                                <li className="">Risks are:</li>
                                <li className="grey-color">
                                    <ul className="">
                                        <li className="">You lose it</li>
                                        <li className="">You forget where you put it</li>
                                        <li className="">Someone else finds it</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-6">
                            <ul className="">
                                <li className="">Tips:</li>
                                <li className="grey-color">
                                    <ul className="">
                                        <li className="">Store in bank vault</li>
                                        <li className="">Store in a safe</li>
                                        <li className="">Store in multiple secret places</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full">
                            <p className="grey-color">
                                Other options: Doesn't have to be paper!
                            </p>
                        </div>

                        <button className={`btn w-full primary-bg black-color font-bold`}>
                            <Link to={'/create-wallet4'}>
                                Start
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateWallet3;
