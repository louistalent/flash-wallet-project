
import { useEffect, useState } from 'react';
import Sidebar from '../dashSiderbar/dashSiderbar';
import Header from '../dashHeader/dashHeader';
import './dashLayout.scss';
import '../../../assets/css/main.css'
// import {
//     BrowserView,
//     MobileView,
// } from "react-device-detect";

function Layout(props: any) {

    return (
        <div className='layout-section flex fixed w-screen h-full'>
            <div className=" flex relative pt-20 h-full">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="left-0 absolute w-screen z-10 h-16">
                    <Header />
                </div>

                <main style={{ overflow: 'auto auto' }} className=" h-full mt-24 pl-3 sm:pl-10 pr-3 sm:pr-10 z-index8">
                    {props.children}
                </main>
            </div>
        </div>
    )
}
export default Layout;