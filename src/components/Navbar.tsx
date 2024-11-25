import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-pink-200 p-4 shadow-md w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Personal Web</h1>
                <div>
                    <Link to="about" smooth={true} className="text-white mx-4 cursor-pointer">Tentang Saya</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;