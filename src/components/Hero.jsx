import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-green-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400 rounded-full animate-pulse opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 
            className={`text-5xl md:text-7xl font-bold font-sans mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Find Recipes
            </span>
            <br />
            <span className="text-white">With What You Have!</span>
          </h1>
          
          <p 
            className={`text-xl md:text-3xl mt-4 font-bold font-[Dancing_Script] mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Enter ingredients from your pantry & get delicious suggestions instantly!
          </p>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button 
              onClick={() => navigate('/recipes')} 
              className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transform active:scale-95"
            >
              <span className="relative z-10">Check Recipes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned outside main content */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white rounded-full animate-spin-slow-reverse"></div>
      </div>
    </section>
  );
};

export default Hero;
