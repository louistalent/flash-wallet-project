import React from 'react';
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";
import "./footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='res-pt6 res-pb6 white-color text-center'>
            <section className='container'>
                <div className='row'>

                    <div className="col-sm-12 col-md-12 col-lg-12 mb-6 flex flex-col gap-8">
                        <div className="flex items-center justify-start gap-2 m-auto" style={{ width: '70px' }}>
                            <img src="/logo2.png" style={{ width: '100%', maxHeight: '100%' }} alt="" className="" />
                        </div>
                        <p className="grey-color">
                            Follow us
                        </p>
                        <div className="flex items-center justify-center gap-8">
                            <img src="/assets/images/footer/facebook.png" className='' width={'22px'} alt="" />
                            <img src="/assets/images/footer/twitter.png" className='' width={'22px'} alt="" />
                            <img src="/assets/images/footer/instagram.png" className='' width={'22px'} alt="" />
                            <img src="/assets/images/footer/dribbble.png" className='' width={'22px'} alt="" />
                            <img src="/assets/images/footer/behance.png" className='' width={'22px'} alt="" />
                        </div>

                    </div>
                </div>
                <div className='res-mt3' style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
                <div className="mt-4 text-center">
                    <h6 className="grey-color">
                        Copyright ©FLashWallet. All rights reserved
                    </h6>
                </div>
            </section>
        </footer>
    )
};

export default Footer; 