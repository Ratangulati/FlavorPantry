import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is FlavorPantry?",
      answer: "FlavorPantry is a smart recipe finder that suggests meals you can cook using the ingredients you already have at home."
    },
    {
      question: "How do I use FlavorPantry?",
      answer: "Enter the ingredients you have in your pantry or fridge. Our tool instantly shows you recipes that match, reducing waste and saving money."
    },
    {
      question: "Is FlavorPantry free?",
      answer: "Yes, it's completely free to use. No hidden charges or premium subscriptions required."
    },
    {
      question: "Can I filter recipes by diet type?",
      answer: "Yes, you can filter results based on preferences like vegan, vegetarian, gluten-free, or quick meals."
    },
    {
      question: "Does FlavorPantry support multiple cuisines?",
      answer: "Absolutely! You can discover recipes from Indian, Italian, Chinese, Mexican, and many more cuisines."
    },
    {
      question: "Can I save my favorite recipes?",
      answer: "Yes, you can bookmark your favorite recipes for quick access anytime."
    },
    {
      question: "Do I need an account to use FlavorPantry?",
      answer: "No account is needed for basic recipe search. However, creating an account lets you save favorites, create meal plans, and share recipes."
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes! FlavorPantry works smoothly on both desktop and mobile devices."
    },
    {
      question: "How does FlavorPantry help reduce food waste?",
      answer: "By suggesting recipes with the ingredients you already own, FlavorPantry ensures you use food before it spoils, reducing kitchen waste."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-green-800 text-lg">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-90' : ''
                }`}>
                  ▶
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
