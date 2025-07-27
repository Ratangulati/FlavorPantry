import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xs px-6 py-4 shadow-md z-50 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="FlavorPantry Logo" className="w-15" />
        <span className="text-4xl font-bold text-green-800 font-[poppins]">FlavorPantry</span>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer">
        <span className="w-6 h-[3px] bg-gray-700 mb-1"></span>
        <span className="w-6 h-[3px] bg-gray-700 mb-1"></span>
        <span className="w-6 h-[3px] bg-gray-700"></span>
      </div>
    </nav>
  );
};

export default Navbar;
