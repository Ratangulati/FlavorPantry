import React, { useState, useEffect } from 'react';
import pasta from '../assets/pasta.jpg';
import salad from '../assets/salad.jpg';
import paneer from '../assets/paneer.jpg';
import dosa from '../assets/dosa.jpg';

const recipeData = [
  { img: pasta, title: 'Creamy Tomato Pasta', info: '⏱️ 20 mins | 🥬 Vegetarian' },
  { img: salad, title: 'Fresh Summer Salad', info: '⏱️ 10 mins | 🥗 Vegan' },
  { img: paneer, title: 'Spicy Paneer Curry', info: '⏱️ 30 mins | 🌶️ Medium Spice' },
  { img: dosa, title: 'Masala Dosa', info: '⏱️ 35 mins | 🥔 Savory & Crispy' },
];

const FeaturedRecipes = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-green-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-green-300 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-300 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-green-600 mb-4 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Most Loved Recipes
        </h2>
        <p 
          className={`text-lg text-gray-600 mb-12 transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Discover delicious dishes that our community loves to cook
        </p>
        
        <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {recipeData.map(({ img, title, info }, index) => (
            <div 
              key={title} 
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
                animationDelay: `${300 + index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img} 
                  alt={title} 
                  className="h-52 w-full object-cover transition-all duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {info}
                </p>
                <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`mt-12 transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transform active:scale-95">
            <span className="flex items-center gap-2">
              Explore More Recipes
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;