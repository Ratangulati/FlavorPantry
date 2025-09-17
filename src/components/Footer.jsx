import React from "react";

const Footer = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // Add functionality for each button here
    switch(buttonName) {
      case "About":
        window.location.href = "/about";
        break;
      case "Contact":
        window.location.href = "/contact";
        break;
      case "Privacy":
        window.location.href = "/privacy";
        break;
      case "Terms":
        window.location.href = "/terms";
        break;
      case "Cookies":
        window.location.href = "/cookies";
        break;
      case "FAQ":
        window.location.href = "/faq";
        break;
      default:
        break;
    }
  };

  return (
    <footer className="bg-green-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Logo and Brand */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-white p-2 rounded-full mr-4">
              <img 
                src="/src/assets/logo.png" 
                alt="FlavorPantry Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">FlavorPantry</h3>
              <p className="text-green-200 text-sm">
                Cook Smarter, Waste Less, Eat Better
              </p>
            </div>
          </div>

          {/* Left side buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-0">
            <button 
              onClick={() => handleButtonClick("About")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => handleButtonClick("Contact")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => handleButtonClick("Privacy")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              Privacy
            </button>
            <button 
              onClick={() => handleButtonClick("Terms")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              Terms
            </button>
            <button 
              onClick={() => handleButtonClick("Cookies")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              Cookies
            </button>
            <button 
              onClick={() => handleButtonClick("FAQ")}
              className="text-left hover:text-green-300 transition-colors duration-200"
            >
              FAQ
            </button>
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-green-200 text-sm">
              © {new Date().getFullYear()} FlavorPantry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
