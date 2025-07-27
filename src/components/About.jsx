import React from 'react';
import cookingImg from '../assets/cooking.jpg';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-15 m-20 gap-25 max-w-6xl mx-auto bg-white">
      <div className="flex-1">
        <img src={cookingImg} alt="Cooking ingredients" className="rounded-xl shadow-xl w-full" />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Find Your Recipe with What You Have</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          No need to rush to the store! Just enter the ingredients already in your pantry, and FlavorPantry will whip up tailored recipes you’ll love. Save time, reduce food waste, and cook creatively.
        </p>
      </div>
    </section>
  );
};

export default About;
