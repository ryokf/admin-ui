/* eslint-disable react/prop-types */
import Header from '../fragments/Header';
import Navbar from '../fragments/Navbar';

const MainLayout = ({ children }) => {


    return (
        <div className="flex bg-special-mainBg w-full min-h-screen max-w-full">
            {/* Navbar start */}
            <Navbar></Navbar>
            {/* Navbar end */}
            <div className="w-full">
                {/* Header start */}
                <Header></Header>
                {/* Header end */}
                {/* Content start */}
                {children}
                {/* Content end */}
            </div>
        </div>
    );
};

export default MainLayout;