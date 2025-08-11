import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md px-6 py-4 shadow-lg z-50 transition-all duration-300 hover:bg-white/90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group transition-all duration-300 hover:scale-105"
          onClick={handleLogoClick}
        >
          <img 
            src={logo} 
            alt="FlavorPantry Logo" 
            className="w-12 h-12 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
          />
          <span className="text-3xl font-bold text-green-800 font-[poppins] transition-all duration-300 group-hover:text-green-600">
            FlavorPantry
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => navigate('/')}
            className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
              location.pathname === '/' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/recipes')}
            className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
              location.pathname === '/recipes' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Recipes
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={handleMenuToggle}
            className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <span className={`w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md mt-4 rounded-lg shadow-lg p-4 space-y-3">
          <button 
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-4 rounded-md transition-all duration-300 hover:bg-green-50 hover:scale-105 ${
              location.pathname === '/' ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => {
              navigate('/recipes');
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-4 rounded-md transition-all duration-300 hover:bg-green-50 hover:scale-105 ${
              location.pathname === '/recipes' ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-700'
            }`}
          >
            Recipes
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
