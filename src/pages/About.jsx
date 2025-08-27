import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
          About FlavorPantry
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-green-800">FlavorPantry</strong> – your smart kitchen buddy!  
            Our goal is simple: to help you discover amazing recipes using the
            ingredients you already have at home. No more last-minute grocery runs
            or wasted food – just smarter, easier, and more enjoyable cooking.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mt-10">
            Why FlavorPantry?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Reduce food waste by making the most of what you already own.</li>
            <li>Get personalized recipe suggestions in seconds.</li>
            <li>Explore multiple cuisines from Indian to Italian and beyond.</li>
            <li>Save your favorites and create meal plans effortlessly.</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mt-10">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that cooking should be fun, stress-free, and sustainable.
            FlavorPantry is designed to bring convenience and creativity into your
            kitchen while making sure nothing goes to waste.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
