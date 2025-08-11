import React, { useState, useEffect } from 'react';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const testimonials = [
  {
    img: user1,
    name: "Sarah Johnson",
    role: "Home Chef",
    text: 'FlavorPantry makes cooking fun again! I used to dread meal prep, but now I actually look forward to opening my fridge and seeing what I can whip up.',
    rating: 5
  },
  {
    img: user2,
    name: "Mike Chen",
    role: "Busy Parent",
    text: 'It\'s like having a chef in your pocket! I\'ve saved so much time and money by using the ingredients I already have.',
    rating: 5
  },
  {
    img: user3,
    name: "Emma Rodriguez",
    role: "Food Enthusiast",
    text: 'I feel like a pro in the kitchen! The suggestions are spot on and the instructions are super easy to follow.',
    rating: 5
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-green-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-green-300 rounded-full animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy home chefs who have transformed their cooking experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-16 h-16 object-cover rounded-full ring-4 ring-green-100 shadow-lg" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-green-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-800 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Recipes Found</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
