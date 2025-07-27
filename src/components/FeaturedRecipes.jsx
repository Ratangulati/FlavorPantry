import React from 'react';
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
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-10">Our Most Loved Recipes</h2>
      <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {recipeData.map(({ img, title, info }) => (
          <div key={title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
            <img src={img} alt={title} className="h-52 w-full object-cover" />
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mb-4">{info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;