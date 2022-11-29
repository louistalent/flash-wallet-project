import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

import Layout from './component/layout/layout';

import Home from './pages/home/home';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import ImportSeed from './pages/importSeed/importSeed';
import CreateWallet from './pages/createWallet/createWallet';
import CreateWallet2 from './pages/createWallet/createWallet2_1';
import CreateWallet3 from './pages/createWallet/createWallet2_2';
import CreateWallet4 from './pages/createWallet/createWallet2_3';
import CreateWallet5 from './pages/createWallet/createWallet2_4';
import CreateWallet6 from './pages/createWallet/createWallet2_5';

import Dashboard from './pages/dashboard/dashboard';

import FlashHome from './pages/dashboard/flashHome/flashHome';
import FlashSendTo from './pages/dashboard/flashHome/flashSendTo';
import FlashAccount from './pages/dashboard/flashHome/flashAccount';
import FlashToken from './pages/dashboard/flashHome/flashToken';
import FlashConfirm from './pages/dashboard/flashHome/flashConfirm';

import NonCustodialWallet from './pages/dashboard/nonCustodialWallet/nonCustodialWallet';
import NonCustodialWalletEdit from './pages/dashboard/nonCustodialWallet/nonCustodialWalletEdit';
import CustodialWallet from './pages/dashboard/custodialWallet/custodialWallet';
import CustodialWalletEdit from './pages/dashboard/custodialWallet/custodialWalletEdit';
import Beneficiary from './pages/dashboard/beneficiary/beneficiary';
import BeneficiaryEdit from './pages/dashboard/beneficiary/beneficiaryEdit';
import Swap from './pages/dashboard/swap/swap';
import NFT from './pages/dashboard/nft/nft';

// require('dotenv').config();
// import WebContext from './context';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element=<PageNotFound /> />
        <Route path="/" element=<Home /> />
        <Route path="/import-seed" element=<ImportSeed /> />

        <Route path="/create-wallet" element=<CreateWallet /> />
        <Route path="/create-wallet2" element=<CreateWallet2 /> />
        <Route path="/create-wallet3" element=<CreateWallet3 /> />
        <Route path="/create-wallet4" element=<CreateWallet4 /> />
        <Route path="/create-wallet5" element=<CreateWallet5 /> />
        <Route path="/create-wallet6" element=<CreateWallet6 /> />

        <Route path="/dashboard" element=<Dashboard /> />
        <Route path="/flash-home" element=<FlashHome /> />
        <Route path="/flash-send-to" element=<FlashSendTo /> />
        <Route path="/flash-account" element=<FlashAccount /> />
        <Route path="/flash-token" element=<FlashToken /> />
        <Route path="/flash-confirm" element=<FlashConfirm /> />

        <Route path="/non-custodial-wallet" element=<NonCustodialWallet /> />
        <Route path="/non-custodial-wallet-edit" element=<NonCustodialWalletEdit /> />
        <Route path="/custodial-wallet" element=<CustodialWallet /> />
        <Route path="/custodial-wallet-edit" element=<CustodialWalletEdit /> />
        <Route path="/beneficiary" element=<Beneficiary /> />
        <Route path="/beneficiary-edit" element=<BeneficiaryEdit /> />
        <Route path="/swap" element=<Swap /> />
        <Route path="/nft" element=<NFT /> />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
