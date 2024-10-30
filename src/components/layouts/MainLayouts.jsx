import { CiMenuKebab } from "react-icons/ci";
import { FaTachometerAlt, FaWallet, FaReceipt, FaFileInvoiceDollar, FaSignOutAlt, FaBell } from "react-icons/fa";

const MainLayout = () => {
    return (
        <div className="flex bg-special-mainBg w-full min-h-screen max-w-full">
            {/* Navbar start */}
            <nav className="bg-defaultBlack text-special-bg2 w-20 h-screen px-4 py-6 flex flex-col justify-between lg:w-80">
                <div className="flex-col items-start w-full">
                    <div className="flex justify-center items-center w-full text-center text-2xl mb-10">FINEbank.IO</div>
                    <div className="bg-primary text-white px-4 py-3 rounded-md w-full">
                        <div className="flex items-center">
                            <FaTachometerAlt style={{ color: "white" }} />
                            <span className="ml-3 hidden lg:block">Overview</span>
                        </div>
                    </div>
                    <div className="hover:bg-special-bg3 px-4 py-3 rounded-md w-full">
                        <div className="flex items-center">
                            <FaWallet style={{ color: "#FFFFFF" }} />
                            <span className="ml-3 hidden lg:block">Balances</span>
                        </div>
                    </div>
                    <div className="hover:bg-special-bg3 px-4 py-3 rounded-md w-full">
                        <div className="flex items-center">
                            <FaReceipt style={{ color: "#FFFFFF" }} />
                            <span className="ml-3 hidden lg:block">Transactions</span>
                        </div>
                    </div>
                    <div className="hover:bg-special-bg3 px-4 py-3 rounded-md w-full">
                        <div className="flex items-center">
                            <FaFileInvoiceDollar style={{ color: "#FFFFFF" }} />
                            <span className="ml-3 hidden lg:block">Bills</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-special-bg3 px-4 py-3 rounded-md w-full cursor-pointer">
                        <div className="flex items-center">
                            <FaSignOutAlt style={{ color: "#FFFFFF" }} />
                            <span className="ml-3 hidden lg:block">Logout</span>
                        </div>
                    </div>
                    <div className="border-b my-10 border-b-special-bg"></div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex items-center justify-center">
                            <img src="https://img.icons8.com/color/48/000000/user.png" className="w-14 rounded-full overflow-hidden bg-white" alt="" />
                        </div>
                        <div className="hidden lg:block col-span-2">
                            Username
                            <br />
                            <span className="text-xs text-gray-400">View Profile</span>
                        </div>
                        <div className="flex justify-center items-center">
                        <CiMenuKebab style={{ color: "#FFFFFF" }} className="hidden lg:block " size={20} />
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar end */}
            <div className="w-full">
                {/* Header start */}
                <header className="border-b-2 p-4 lg:p-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="font-bold text-lg">Username</div>
                        <div className="ml-4 text-gray-03 text-sm lg:ml-6">Oct 23, 2024</div>
                    </div>
                    <div className="flex items-center">
                        <FaBell style={{ color: "#3A3A3A" }} />
                        <input className="ml-4 lg:ml-6 p-2 border rounded-md" type="text" placeholder="Search" />
                    </div>
                </header>
                {/* Header end */}
                {/* Content start */}
                <main className="px-4 py-4 lg:px-6 lg:py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title1</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 1</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title2</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 2</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title3</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 3</div>
                    </div>
                    <div>
                        <div className="text-lg text-gray-02 mb-2">Title4</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 4</div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">Title5</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 5</div>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div className="lg:col-span-2">
                        <div className="text-lg text-gray-02 mb-2">Title6</div>
                        <div className="bg-white rounded-lg px-6 py-5 shadow-lg">widget 6</div>
                    </div>
                </main>
                {/* Content end */}
            </div>
        </div>
    );
};

export default MainLayout;