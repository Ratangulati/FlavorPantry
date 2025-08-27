import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#fffaf2] flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
          Terms
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            1. What FlavorPantry is all about?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            FlavorPantry is your kitchen buddy. It helps you find recipes based on
            what's already in your fridge or pantry—so you can cook smarter, waste
            less food, and avoid those last-minute grocery runs. It's all about
            making cooking fun, easy, and resourceful.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            2. Using FlavorPantry means you agree
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you use FlavorPantry, you're saying "yes" to these terms. You also
            confirm that you're old enough (at least 13) to use the site
            responsibly. If you don't agree with what's written here, it's best not
            to use the service.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            3. Your Account, Your Responsibility
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you create an account, make sure your info is accurate and your
            password is kept safe. If someone else uses your account without
            permission, let us know right away. We want to keep your experience
            secure and smooth.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            4. Who owns the content
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            All the recipes, images, and tech behind FlavorPantry belong to us or
            our partners. You're welcome to use the site for personal cooking
            adventures, but please don't copy or sell our content without asking
            first.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            5. Recipe accuracy and health safety
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We do our best to give you great recipes based on your ingredients, but
            we're not nutritionists or doctors. So if you have allergies, dietary
            restrictions, or health concerns, double-check before cooking.
            FlavorPantry is here to inspire—not prescribe.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            6. What you shouldn't do
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Please don't use FlavorPantry to do anything shady—like hacking,
            spamming, or uploading harmful stuff. If you misuse the site, we may
            have to block your access to keep things safe for everyone.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            7. We're not liable for Kitchen Disasters
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We hope your meals turn out amazing, but if something goes wrong—like a
            recipe flops or an ingredient doesn't mix well—we're not responsible.
            Same goes for any tech hiccups or temporary outages.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            8. We might update these terms
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            As FlavorPantry grows, we may tweak these terms to keep things up to
            date. If we do, we'll post the changes here. By continuing to use the
            site, you're agreeing to the latest version.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            9. External tools and services
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sometimes we use third-party tools (like nutrition databases or login
            providers). If you interact with those, you'll also need to follow their
            rules. We're not in control of what those services do.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-green-800">
            10. Got Questions? Reach Out
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you've got a question, a suggestion, a bug to report, or just
            want to share how your recipe turned out we'd love to hear from you!
            Head over to our <a href="/contact" className="text-green-800 hover:underline">Contact Us</a> page, where you
            can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-6">
            <li>Drop us a message</li>
            <li>Report a problem</li>
            <li>Suggest a new feature</li>
            <li>Share your FlavorPantry experience</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
            We're all about making FlavorPantry better, friendlier and more useful
            so your voice truly matters. Let's keep the kitchen conversation going!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Terms;
