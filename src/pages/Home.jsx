import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Recipes from '../components/FeaturedRecipes';
import Testimonials from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='font-sans'>
      <Navbar />
      <Hero />
      <About />
      <Recipes />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
