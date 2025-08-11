import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-green-50 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-green-300 rounded-full animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">hello@flavorpantry.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name" 
                  required 
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email" 
                  required 
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what's on your mind..." 
                  rows="5" 
                  required 
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 resize-none" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-600 p-4 rounded-lg text-center animate-fade-in-up">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! We'll get back to you soon.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
