import { AiOutlineAppstore } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { FaSignOutAlt } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { MdOutlineAccountBalanceWallet, MdOutlineAddchart } from 'react-icons/md';
import { TbReceipt2 } from 'react-icons/tb';
import { TfiTarget } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        { icon: AiOutlineAppstore, name: "Overview", link: "/" },
        { icon: MdOutlineAccountBalanceWallet, name: "Balances", link: "/balances" },
        { icon: GrTransaction, name: "Transactions", link: "/transactions" },
        { icon: TbReceipt2, name: "Bills", link: "/bills" },
        { icon: MdOutlineAddchart, name: "Expenses", link: "/expenses" },
        { icon: TfiTarget, name: "Goals", link: "/goals" },
        { icon: GoGear, name: "Setting", link: "/setting" },
    ];
    return (
        <nav className="bg-defaultBlack text-special-bg2 w-20 h-screen px-4 py-6 flex flex-col justify-between lg:w-80">
            <div className="flex-col items-start w-full">
                <div className="flex justify-center items-center w-full text-center text-2xl mb-10">FINEbank.IO</div>
                {
                    menuItems.map((menuItem, index) => {
                        return (
                            <Link to={menuItem.link} key={index} className={`block px-4 py-3 rounded-md w-full ${ window.location.pathname === menuItem.link ? "bg-primary !hover:bg-primary" : "" }`}>
                                <div className="flex items-center">
                                    <menuItem.icon style={{ color: "#FFFFFF" }} />
                                    <span className="ml-3 hidden lg:block">{menuItem.name}</span>
                                </div>
                            </Link>
                        );
                    })
                }
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
    )
}

export default Navbar