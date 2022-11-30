import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import './createWallet.scss';
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs';

const CreateWallet4 = () => {
    const [seedPhrase, setSeedPhrase] = useState(true);

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
                        <br />
                        <div className="w-full seed-btn-group">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 mb-6">
                                    <div className="flex justify-center items-center flex-col gap-6">
                                        <button className="">1. future</button>
                                        <button className="">2. use</button>
                                        <button className="">3. abuse</button>
                                        <button className="">4. bubble</button>
                                        <button className="">5. disagree</button>
                                        <button className="">6. yard</button>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className=" flex justify-center items-center flex-col gap-6">
                                        <button className="">7. exit</button>
                                        <button className="">8. enact</button>
                                        <button className="">9. drum</button>
                                        <button className="">10. frequent</button>
                                        <button className="">11. target</button>
                                        <button className="">12. organ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/create-wallet5'} className="w-full">
                            <button className={`btn w-full primary-bg black-color font-bold mt-4`}>
                                Start
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateWallet4;
