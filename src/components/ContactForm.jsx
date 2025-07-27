import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-8">Contact Us</h1>
      <form className="bg-white text-black max-w-lg mx-auto p-8 rounded-xl shadow-lg space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded-md" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded-md" />
        <textarea name="message" placeholder="Your Message" rows="5" required className="w-full border p-3 rounded-md"></textarea>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
