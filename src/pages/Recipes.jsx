import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Recipes = () => {
  const [ingredients, setIngredients] = useState([]);
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addIngredient = () => {
    const item = query.trim();
    if (item && !ingredients.includes(item)) {
      setIngredients(prev => [...prev, item]);
    }
    setQuery('');
  };

  const findRecipes = async () => {
    if (!ingredients.length) return;
    setLoading(true);
    setError('');
    try {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients.join(',')}`
      );
      const data = await resp.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No recipes found.');
      }
    } catch {
      setError('Failed to fetch recipes.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-[1200px] mx-auto mt-20 mb-10 p-5">
        <h1 className="text-green-600 text-4xl text-center mt-5 font-bold">Cook It Now</h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Find recipes with ingredients you already have
        </p>

        <section className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-green-600 text-2xl mb-4 font-semibold">My Pantry</h2>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={query}
                placeholder="Add ingredient (chicken, rice, ...)"
                onChange={e => setQuery(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md text-base text-black"
              />
              <button onClick={addIngredient} className="bg-green-600 text-white px-4 py-2 rounded-md">
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 min-h-[40px]">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center">
                  {ing}
                  <button className="ml-2 font-bold" onClick={() => setIngredients(prev => prev.filter((_, i) => i !== idx))}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-green-600 text-2xl mb-4 font-semibold">Filters</h2>
            <button onClick={findRecipes} className="w-full mt-5 bg-green-600 text-white py-3 rounded-md font-medium">
              Find Recipes
            </button>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-green-600 text-2xl mb-5 font-semibold">Recipes You Can Make</h2>

          {loading && <div className="flex justify-center"><div className="border-4 border-gray-100 border-t-green-600 rounded-full w-10 h-10 animate-spin"></div></div>}
          {error && <div className="text-red-600 bg-red-100 p-4 rounded-md">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {!loading && !meals.length && !error && (
              <p className="text-gray-500 col-span-full text-center">Search for recipes with your ingredients!</p>
            )}
            {meals.map(meal => (
              <div key={meal.idMeal} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg text-black font-semibold">{meal.strMeal}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Recipes;