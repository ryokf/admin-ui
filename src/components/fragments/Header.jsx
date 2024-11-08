import { FaBell } from 'react-icons/fa'

const Header = () => {
    return (
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
    )
}

export default Header