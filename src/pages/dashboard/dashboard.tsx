
import Layout from "../../component/dashboard/dashLayout/dashLayout";
import {
    DashWalletSvg,
    DashCustodialSvg,
    DashBefefitSvg,
    DashNFTSvg
} from '../../assets/svg/svg';
import './dashboard.scss';

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard-section">
                <h1 className="">Defi Dashboard</h1>
                <div className="mt-16">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashWalletSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        Non-custodial Wallets
                                    </h3>
                                    <p className="primary-color">
                                        3 Non Custodial Wallets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashCustodialSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        Custodial Wallets
                                    </h3>
                                    <p className="primary-color">
                                        3 Non Custodial Wallets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashBefefitSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        Benificiaries
                                    </h3>
                                    <p className="primary-color">
                                        3 Non Custodial Wallets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashNFTSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        NFTs
                                    </h3>
                                    <p className="primary-color">
                                        13 NFTs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashWalletSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        Dead Man’s Switch
                                    </h3>
                                    <p className="primary-color">
                                        12 Months
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-6">
                            <div className="dashboard-card">
                                <div className="">
                                    <DashWalletSvg className="flex-shrink-0 text-primary-dark dark:text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="">
                                        Files
                                    </h3>
                                    <p className="primary-color">
                                        Storege (0.1%) 105.7MB /100 Gb
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;