import React, { useState, useEffect } from 'react';
import cookingImg from '../assets/cooking.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: "🍽️",
      title: "Smart Recipe Matching",
      description: "Find recipes that perfectly match your available ingredients"
    },
    {
      icon: "⏰",
      title: "Save Time & Money",
      description: "No more last-minute grocery runs or wasted ingredients"
    },
    {
      icon: "🌱",
      title: "Reduce Food Waste",
      description: "Use what you have and discover new ways to cook"
    }
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-green-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-green-300 rounded-full animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div 
            className={`flex-1 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <img 
                src={cookingImg} 
                alt="Cooking ingredients" 
                className="rounded-2xl shadow-2xl w-full transition-all duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={`flex-1 transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
              Find Your Recipe with What You Have
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              No need to rush to the store! Just enter the ingredients already in your pantry, and FlavorPantry will whip up tailored recipes you'll love. Save time, reduce food waste, and cook creatively.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg border border-white/20 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl bg-green-100 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div 
              className={`mt-8 transition-all duration-800 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transform active:scale-95">
                <span className="flex items-center gap-2">
                  Start Cooking Now
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
