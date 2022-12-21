
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { simpleAddress } from "../../util";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { FlashLogoSvg } from '../../assets/svg/svg';
import "./header.scss";
import RequestModal from '../RequestModal';

const Header = () => {
	const [requestModal, setRequestModal] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	return (
		<header className='white'>
			<div className='container dis-f'>
				<div className='flex items-center justify-between mobile-just-start flex4 row-reverse-991'>
					<div className='flex items-center justify-between w-full sm:w-0'>
						<div onClick={() => setIsMobile(true)} className='hamburger-icon-container'>
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '0%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '20%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '40%' }} fontSize={'25px'} />
						</div>
						<Link to='/'>
							<div className="flex items-center justify-start gap-2" style={{ width: '230px' }} >
								{/* <img src="/flash-logo.svg" style={{ maxHeight: '100%', width: '100%' }} alt="flash-logo" className="" /> */}
								<FlashLogoSvg />
								{/* <div className='text-center leading-4'>
									<h5 className='' style={{ margin: '0!important' }}>FLASH</h5>
									<span style={{ fontSize: '10px' }}>
										<span className='primary-color'>AU</span>DIT
									</span>
								</div> */}
							</div>
						</Link>
					</div>

					<div className={`${isMobile ? 'hamburger-box' : ''} justify`}>
						<div className={`${isMobile ? 'hamburger-cancel-container' : ''} dis-n`}>
							<AiOutlineClose onClick={() => setIsMobile(false)} className='cu-po hamburger-cancel-btn' fontSize={'35px'} color="white-color" />
						</div>
						<ul className='hamburger justify li-none-style'>
							<li className='hamburger-list'>
								<a href='https://flash-swap.com/' target="_blink">Flash Coin</a>
							</li>
							<li className='hamburger-list' onClick={() => setRequestModal(true)}>
								<Link to='/create-wallet'>
									Sign Up
								</Link>
							</li>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</ul>

					</div>
					<div onClick={() => setIsMobile(false)} className={`${isMobile ? 'hamburger-bg' : ''} dis-n`}></div>
				</div>
				<div className='dis-f ai-c'>
					<div className='justify jc-e flex2'>
						<button className=' btn primary-bg w10 gap-2'>
							<div className='justify gap-2'>
								<img src='/assets/images/wallet.png' />
								<span className='black-color'>Connect Wallet</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			{requestModal &&
				<RequestModal setRequestModal={setRequestModal} />
			}
		</header>
	);
};

export default Header;
