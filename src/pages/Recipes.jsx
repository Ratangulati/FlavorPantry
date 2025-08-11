import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Recipes = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [addingIngredient, setAddingIngredient] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const addIngredient = () => {
    const item = query.trim();
    if (item && !ingredients.includes(item)) {
      setAddingIngredient(true);
      setTimeout(() => {
        setIngredients(prev => [...prev, item]);
        setAddingIngredient(false);
      }, 150);
    }
    setQuery('');
  };

  const removeIngredient = (index) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addIngredient();
    }
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
        // Scroll to recipes section after loading
        setTimeout(() => {
          const recipesSection = document.querySelector('section:last-child');
          if (recipesSection) {
            recipesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />
      <main className="max-w-[1200px] mx-auto mt-20 mb-10 p-5">
        <div 
          className={`text-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-green-600 text-4xl md:text-5xl font-bold mb-4">
            Cook It Now
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Find recipes with ingredients you already have in your pantry
          </p>
        </div>

        <section className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* My Pantry Section */}
          <div 
            className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 flex-1 transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-green-600 text-2xl mb-6 font-semibold flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              My Pantry
            </h2>
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={query}
                placeholder="Add ingredient (chicken, rice, ...)"
                onChange={e => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 p-3 border border-gray-300 rounded-lg text-base text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
              <button 
                onClick={addIngredient} 
                disabled={addingIngredient}
                className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  addingIngredient ? 'animate-pulse' : ''
                }`}
              >
                {addingIngredient ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Add'
                )}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 min-h-[40px]">
              {ingredients.map((ing, idx) => (
                <div 
                  key={idx} 
                  className="group bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span className="font-medium">{ing}</span>
                  <button 
                    onClick={() => removeIngredient(idx)}
                    className="ml-1 w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold hover:bg-red-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Filters Section */}
          <div 
            className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 flex-1 transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-green-600 text-2xl mb-6 font-semibold flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Find Recipes
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-2">Ready to discover delicious recipes?</p>
                <p className="text-xs text-gray-500">Add ingredients above and click the button below</p>
              </div>
              <button 
                onClick={findRecipes} 
                disabled={!ingredients.length || loading}
                className={`w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Finding Recipes...
                  </div>
                ) : (
                  'Find Recipes'
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12" id="recipes-section">
          <h2 
            className={`text-green-600 text-2xl mb-8 font-semibold transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Recipes You Can Make
          </h2>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-green-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-lg text-center animate-fade-in-up">
              <svg className="w-8 h-8 mx-auto mb-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {!loading && !meals.length && !error && (
              <div className="col-span-full text-center py-12">
                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Search for recipes with your ingredients!</p>
                  <p className="text-gray-400 text-sm mt-2">Add some ingredients to your pantry to get started</p>
                </div>
              </div>
            )}
            
            {meals.map((meal, index) => (
              <div 
                key={meal.idMeal} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={meal.strMealThumb} 
                    alt={meal.strMeal} 
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    Recipe
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg text-gray-800 font-semibold group-hover:text-green-600 transition-colors duration-300 mb-4 flex-1">
                    {meal.strMeal}
                  </h3>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                    View Details
                  </button>
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