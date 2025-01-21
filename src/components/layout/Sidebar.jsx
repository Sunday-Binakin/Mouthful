import { House, SquareMenu, ListOrdered, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation(); // Get the current location

    const isActive = (path) => location.pathname === path; // Check if the path matches the current URL

    return (
        <div className="flex">
            <div className="md:m-4 md:w-[5.5rem] md:h-[27rem]">
                <Link
                    to="/"
                    className={`md:m-10 md:flex md:flex-col md:items-center ${isActive('/') ? 'text-[#D79F64] font-bold' : ''}`}
                >
                    <House size={30} /> HOME
                </Link>
                <Link
                    to="/menu"
                    className={`md:m-10 md:flex md:flex-col md:items-center ${isActive('/menu') ? 'text-[#D79F64] font-bold' : ''}`}
                >
                    <SquareMenu size={30} /> MENU
                </Link>
                <Link
                    to="/orders"
                    className={`md:m-10 md:flex md:flex-col md:items-center ${isActive('/orders') ? 'text-[#D79F64] font-bold' : ''}`}
                >
                    <ListOrdered size={30} /> ORDERS
                </Link>
                <Link
                    to="/settings"
                    className={`md:m-10 md:flex md:flex-col md:items-center ${isActive('/settings') ? 'text-[#D79F64] font-bold' : ''}`}
                >
                    <Settings size={30} /> SETTINGS
                </Link>
                <p className="md:m-10">V.1.0</p>
            </div>
        </div>
    );
};

export default Sidebar;