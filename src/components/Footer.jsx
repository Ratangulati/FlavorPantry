import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        {/* <img src={} alt="College Logo" className="w-20 h-20 rounded-full object-cover" /> */}
        <div>
      
          <p>© All rights reserved</p>
        </div>
      </div>
      <div className="text-center md:text-right">
        <a href="https://github.com/Ratangulati/FlavorPantry" className="hover:underline mx-2">GitHub</a> | <a href="#" className="hover:underline mx-2">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
