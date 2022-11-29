import react, { useState } from 'react';
import Layout from "../../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../../assets/svg/svg';
import { AiOutlinePlus, AiOutlineClose, AiOutlineUser, AiOutlineMail, AiFillFolder, AiFillPlusCircle, AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { BiFlag, BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsGenderFemale } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './nft.scss';

const NFT = () => {
    const [nftList, setNftList] = useState([
        {
            img: '1.png',
            title: 'Udemyuuy 1'
        },
        {
            img: '2.png',
            title: 'Udemyuuy 2'
        },
        {
            img: '3.png',
            title: 'Udemyuuy 3'
        },
        {
            img: '4.png',
            title: 'Udemyuuy 4'
        },
        {
            img: '5.png',
            title: 'Udemyuuy 5'
        },
        {
            img: '6.png',
            title: 'Udemyuuy 6'
        },
        {
            img: '7.png',
            title: 'Udemyuuy 7'
        },
        {
            img: '8.png',
            title: 'Udemyuuy 8'
        },
        {
            img: '1.png',
            title: 'Udemyuuy 1'
        },
        {
            img: '2.png',
            title: 'Udemyuuy 2'
        },
        {
            img: '3.png',
            title: 'Udemyuuy 3'
        },
        {
            img: '4.png',
            title: 'Udemyuuy 4'
        },
        {
            img: '5.png',
            title: 'Udemyuuy 5'
        },
        {
            img: '6.png',
            title: 'Udemyuuy 6'
        },
        {
            img: '7.png',
            title: 'Udemyuuy 7'
        },
        {
            img: '8.png',
            title: 'Udemyuuy 8'
        }
    ])
    return (
        <Layout>
            <div className="nft-section">
                <div className="w-full flex items-end justify-center sm:justify-end mb-4">
                    <Link to='/nft-edit'>
                        <button className="nft-btn flex items-center justify-center">
                            <div className="plus-icon">
                                <AiOutlinePlus />
                            </div>
                            <span className="">Connect Wallet</span>
                        </button>
                    </Link>
                </div>
                <h1 className="">NFT</h1>
                <p className="nft-desciption mt-3">
                    To view your NFTs, please connect to your preferred wallet and blockchain
                </p>
                <div className="mt-16">
                    <div className="nft-search">
                        <div className="flex items-center gap-2">
                            <img src="/logo2.png" alt="" className="" style={{ width: '35px', height: '35px' }} />
                            <p className="">Wallet 0x...........................</p>
                        </div>
                        <AiOutlineDown fontSize={25} />
                    </div>
                </div>
                <div className="mt-14">
                    <div className="nft-group">
                        {nftList.map((item: any, index: number) => (
                            <div className="nft-list">
                                <div className="">
                                    <img src={`/assets/images/nft/${item.img}`} alt={item.img} className="" />
                                </div>
                                <div className="title">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <br />
            </div>
        </Layout>
    )
}

export default NFT;



