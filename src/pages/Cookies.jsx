import React from "react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
          Cookies
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong className="text-green-800">FlavorPantry</strong>, we use cookies to improve your browsing
            experience, personalize recipe recommendations, and understand how our
            platform is used. This explains what cookies are, how we use them, and
            your choices regarding cookies.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            1. What are Cookies?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cookies are small text files placed on your device when you visit a
            website. They help us remember your preferences, analyze site traffic,
            and provide you with a smoother, more personalized experience.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            2. How We Use Cookies
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>To remember your login and session preferences</li>
            <li>To save your favorite recipes and search history</li>
            <li>To provide personalized recipe recommendations</li>
            <li>To track and improve website performance</li>
            <li>To understand user behavior and enhance usability</li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            3. Types of Cookies We Use
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>
              <strong>Essential Cookies:</strong> Required for basic functionality
              like login and navigation.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us analyze traffic and
              improve site performance.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your choices, like saved
              preferences.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Provide insights into how our users
              interact with FlavorPantry.
            </li>
          </ul>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            4. Managing Cookies
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            You can control or delete cookies through your browser settings. However,
            disabling certain cookies may affect your ability to use some features of
            FlavorPantry.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            5. Updates
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We may update this Cookies section from time to time to reflect changes
            in technology, legal requirements, or our practices. Any updates will be
            posted on this page with the updated date.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            6. Contact Us
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions about our use of cookies, please reach out
            through our <a href="/contact" className="text-green-800 hover:underline">Contact Page</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Cookies;
