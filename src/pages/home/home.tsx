import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { roulettes } from "../../config/global.const";
import axios from "axios";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";

import FAQ from '../../component/fap/fap';
import Layout from "../../component/layout/layout";
import RequestModal from "../../component/RequestModal";
import "./home.scss";

const Home = () => {
	const [requestModal, setRequestModal] = useState(false);

	return (
		<Layout>
			<section className="first-section overflow-hidden">
				<div className="flex flex-col text-center sm:text-left">
					<div className="row items-center justify-center">
						<div className="col-sm-12 col-md-6 mb-9 items-center
						 justify-center">
							<div className="watch-video">
								<h5 className="primary-color">Why Us</h5>
								<br />
								<h1 className="font-bold">
									<div className="">
										DeFi solves a Billion $ <br /> problem Lost crypto.
									</div>
								</h1>
								<br />
								<h5 className="grey-color">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
								</h5>
								<div className="flex items-center justify-center sm:justify-start gap-8 mt-8">
									<button onClick={() => setRequestModal(true)} className="btn primary-bg gap-2 text-black">
										<span>
											Watch Video
										</span>
									</button>
									<div className="">
										Get Started
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 mb-9">
							<img className="home-img" src="/assets/images/home.png" alt="" />
						</div>
					</div>
					<div className="container mt-6">
						<h2 className="white-color">Flash Wallet Features</h2>
						<h5 className="grey-color">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
						</h5>
						<div className="p-5"></div>
						<div className="row">
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="feature-card">
									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>Store any crypto Info</h5>
									</div>
									<div className="">
										<p className="grey-color">
											Store all your crypto credentials in one safe place. Cold storage devices, ledgers, custodial, non-custodial wallets and trading account details. All is E2E-encrypted.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4 ">
								<div className="feature-card">
									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>Manage NFTs</h5>
									</div>
									<div className="">
										<p className="grey-color">
											Manage, organize and display your NFT portfolios across multiple blockchains. Enjoy the view of your collection at any time.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4 ">
								<div className="feature-card">
									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>Crypto beneficiaries & testament</h5>
									</div>
									<div className="">
										<p className="grey-color">
											We make sure your family, friends, lawyer or anybody you wish, can access your digital assets, when you are not able to anymore.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="feature-card">
									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>Dead Man's Switch Timer</h5>
									</div>
									<div className="">
										<p className="grey-color">
											Only you control when your beneficiaries are contacted. Default is 12 months after your last log-in. you can edit the timer as you wish.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="feature-card">

									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>Beneficiary ID verification</h5>
									</div>
									<div className="">
										<p className="grey-color">
											Your beneficiaries will undergo strict real-time ID & face recognition scans incl. 100s of security checks. We use AI & machine learning to eliminate fraud.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="feature-card">
									<div className="icon-section">
										<img src="/assets/images/card-icon.png" alt="" />
									</div>
									<div className="">
										<h5>File storage</h5>
									</div>
									<div className="">
										<p className="grey-color">
											Store all your confidential crypto notes, documents and much more. Store separate folders to be accessed in the future by beneficiaries. All folders are segregated.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="story-section pt-4 ">
				<div className="container mx-auto flex flex-col py-8 sm:py-16">
					<div className="row m-auto text-center">
						<h2>The best way to tell a story</h2>
						<div className="">
							<br />
							<p className="max-w-3xl text-xl m-auto">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</p>
						</div>
					</div>
					<br />
					<br />
					<div className="row relative">
						<img src="/assets/images/story.png" alt="" className="" />
						<div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
							<img src="/assets/images/story-btn.png" width={'150px'} alt="" className="hover:scale-110 hover:cursor-pointer" />
						</div>
					</div>

				</div>
			</section>

			<section className="trustpilot-section">
				<div className="container mx-auto flex flex-col py-8 sm:py-16 z-10 relative">
					<div className="flex gap-4 m-auto">
						<img src="/assets/images/testimonial/trustpilot.png" alt="" className="" />
						<h4>Trustpilot</h4>
					</div>
					<div className="mt-10 text-center">
						<div className="max-w-3xl w-full m-auto">
							<h4 className="">
								“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
							</h4>
						</div>
						<div className="mt-12 "></div>
						<div className="flex items-center justify-center gap-3 m-auto">
							<img src="/assets/images/testimonial/avatar.png" alt="" className="" />
							<p className=" text-xl">
								Amita
							</p>
							<img src="/assets/images/testimonial/path.png" style={{ height: '20px' }} alt="" className="" />
							<p className="text-xl grey-color">
								CEO, Workcation
							</p>
						</div>
					</div>
				</div>
				<img src="/assets/images/testimonial/pattern.png" alt="" className="pattern" />

			</section>

			<section className="common-section">
				<div className="container mx-auto flex flex-col py-8 sm:py-16">
					<div className="flex gap-4">
						<h3>Common Questions</h3>
					</div>
					<div className="mt-12"></div>
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-8">
							<h5>Why Trust Diefi?</h5>
							<br />
							<p className="grey-color text-xl">
								DieFi is built by cybersecurity experts and has been audited by 3rd party security researchers and specialists. FortKnoxster, nor any of its staff.
							</p>
						</div>
						<div className="col-sm-12 col-md-6 mb-8">
							<h5>
								Do I need a credit card to sign up?
							</h5>
							<br />
							<p className="grey-color text-xl">
								Believe it or not! - This one is definatly worth the read. I am a placeholder for some text Believe it or not! - This one is definatly worth the read. I am a placeholder for
							</p>
						</div>
						<div className="col-sm-12 col-md-6 mb-8">
							<h5>
								Do I need a credit card to sign up?
							</h5>
							<br />
							<p className="grey-color text-xl">
								Believe it or not! - This one is definatly worth the read. I am a placeholder for some text Believe it or not! - This one is definatly worth the read. I am a placeholder for
							</p>
						</div>
						<div className="col-sm-12 col-md-6 mb-8">
							<h5>
								Do I need a credit card to sign up?
							</h5>
							<br />
							<p className="grey-color text-xl">
								Believe it or not! - This one is definatly worth the read. I am a placeholder for some text Believe it or not! - This one is definatly worth the read. I am a placeholder for
							</p>
						</div>
					</div>
				</div>
			</section>

			{requestModal &&
				<RequestModal setRequestModal={setRequestModal} />
			}

		</Layout>
	);
};
export default Home;
