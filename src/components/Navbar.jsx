import React from 'react';
import logo from '../assets/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { FaSignInAlt, FaSignOutAlt } from'react-icons/fa';

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
         <SignedOut>
           <SignInButton>
             <button style={{ display: 'flex', alignItems: 'center', gap: '5px', border: 'none', backgroundColor: '#016630', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>            <FaSignInAlt style={{ width: '20px', height: '20px' }} />
            Sign In
            </button>
         </SignInButton>
          </SignedOut>
         <SignedIn>
            <UserButton>
             <button style={{ display: 'flex', alignItems: 'center', gap: '5px', border: 'none', backgroundColor: '#006400', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                <FaSignOutAlt style={{ width: '20px', height: '20px' }} />
                 Sign Out
               </button>
             </UserButton>
           </SignedIn>

    </nav>
  );
};

export default Navbar;
