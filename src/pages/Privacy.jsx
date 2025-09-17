import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
          Privacy
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-green-800">FlavorPantry</strong>! Your trust means the world to us, and we want you to feel confident
            and comfortable while using our smart recipe finder. This Privacy page explains how we collect, use, and
            protect your information when you explore delicious recipes with us. At FlavorPantry, we believe in simplicity,
            transparency, and respect for your privacy. Our goal is to help you make the most out of your ingredients, while
            keeping your personal data safe and secure.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            1. Information We Collect
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">When you use FlavorPantry, we may collect:</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Basic Information:</strong> Such as your name, email address, or account details (if you choose to sign up).</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Usage Data:</strong> Information about how you use our site—like the recipes you search for or save.</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Device Information:</strong> Such as your browser type, operating system, and general location (country/city level only).</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Optional Data:</strong> If you choose to provide preferences (like vegetarian, vegan, or dietary restrictions), we'll use that only to personalize your recipe suggestions.</p>
          <p className="text-lg text-gray-700 leading-relaxed">We do not collect sensitive personal information like financial details or precise location without your consent.</p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            2. How We Use Your Information
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">Your data helps us make FlavorPantry smarter and more useful. We use it to:</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Suggest recipes that match your taste and available ingredients.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Improve our app performance, design, and usability.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Send you updates, new recipe ideas, or notifications (only if you've opted in).</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Prevent misuse and keep the platform secure.</p>
          <p className="text-lg text-gray-700 leading-relaxed">We will never sell your data to third parties.</p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            3. Sharing Your Information
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">We respect your privacy. Your data will only be shared in these cases:</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Service Providers:</strong> With trusted partners who help us run the website (like hosting services or analytics).</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• Legal Requirements:</strong> If required by law or to protect against fraud and security threats.</p>
          <p className="text-lg text-gray-700 leading-relaxed"><strong>• With Your Consent:</strong> For example, if you connect FlavorPantry to social platforms or third-party services.</p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            4. Cookies & Tracking
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">We use cookies to:</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Remember your preferences.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Track anonymous usage patterns to improve the app.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• Provide a smoother browsing experience.</p>
          <p className="text-lg text-gray-700 leading-relaxed">You can always manage or disable cookies in your browser settings.</p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            5. Your Choices & Control
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">We put you in charge of your information:</p>
          <p className="text-lg text-gray-700 leading-relaxed">• You can update or delete your account anytime.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• You can opt out of marketing emails with one click.</p>
          <p className="text-lg text-gray-700 leading-relaxed">• You can request a copy of the data we hold about you.</p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            6. Data Security
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We take security seriously. Your data is stored using secure servers and encryption technologies to prevent
            unauthorized access, loss, or misuse. While no system is 100% hack-proof, we are committed to keeping your
            information as safe as possible.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            7. Children's Privacy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our website is designed for general audiences, but not for children under 13. We do not knowingly collect personal
            information from kids. If you believe we've collected information from a child, please contact us so we can delete it.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            8. Updates to This Page
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Just like recipes evolve, our Privacy content may change from time to time. When we make updates, we'll post the revised
            version here with the updated date.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            9. Contact Us
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Got questions about your privacy? We're here to help! View our <a href="/contact" className="text-green-800 hover:underline">Contact Us</a> page and drop your
            problem. We will try our best to find an alternative solution as quickly as we can.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
