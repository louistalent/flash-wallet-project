import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

const FlashHomeModal = ({ setStatusModal }: any) => {

    const [otherChain, setOtherChain] = useState<boolean>(false);

    const [createNFT, setCreateNFT] = useState<boolean>(false);
    const [design, setDesign] = useState<boolean>(false);

    const [height, setHeight] = useState<number>(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, [window.innerHeight])

    return (
        <>

            <div className="status-modal-container">
                <div
                    className="status-modal-bg"
                    onClick={() => setStatusModal(false)}
                ></div>
                <div className="status-modal-body" style={{ maxHeight: `${height - 150}px` }}>
                    <div className="status-modal-header w-full m-auto pt-10 px-10 ">
                        <div className="flex items-center text-center justify-between w-full">
                            <div onClick={() => setStatusModal(false)} className="status-close p-2 rounded-full border border-gray-600 cursor-pointer">
                                <AiOutlineClose color="black" fontSize={'25px'} />
                            </div>
                            <h3 className="black-color w-full">
                                Received BNB
                            </h3>
                        </div>
                    </div>
                    <div className="p-10 w-full modal-content">
                        <div className="mt-6 w-full flex items-center justify-between flex-col">
                            <div className="w-full flex items-center justify-between grey-color text-sm">
                                <p className="">Status</p>
                                <p className="">Date</p>
                            </div>
                            <div className="mt-2 w-full flex items-center justify-between black-color">
                                <p className="success-color">Confirm</p>
                                <p className="">Mar 3 at 10:04am</p>
                            </div>
                        </div>
                        <div className="mt-6 w-full flex items-center justify-between flex-col">
                            <div className="w-full flex items-center justify-between grey-color text-sm">
                                <p className="">From</p>
                                <p className="">To</p>
                            </div>
                            <div className="mt-2 w-full flex items-center justify-between black-color">
                                <h5 className="">0x3Dc6...DfCE</h5>
                                <p className="">0x3Dc6...DfF9</p>
                            </div>
                        </div>
                        <div className="mt-6 w-full flex items-center justify-between flex-col">
                            <div className="mt-2 w-full flex items-center justify-between black-color">
                                <h5 className="">Total Amount</h5>
                                <h5 className="">0.04 BNB</h5>
                            </div>
                            <div className="flex items-center justify-end grey-color text-sm w-full">
                                <p className="">$9.58799</p>
                            </div>
                        </div>
                        <div className="mt-6 w-full flex items-center justify-between flex-col">
                            <div className="mt-2 w-full flex items-center justify-between grey-color">
                                <p className="">Nonce</p>
                            </div>
                            <div className="flex items-center grey-color text-sm w-full">
                                <p className="">#0</p>
                            </div>
                        </div>

                        <div className="mt-6 w-full flex justify-end">
                            <button className="btn bg-[#191727] primary-color font-bold text-lg text-black">
                                <span className="px-16">View on Mainnet</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FlashHomeModal;
