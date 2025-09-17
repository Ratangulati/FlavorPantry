import heroBg from '../assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id='home'
      className='h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <h1 className='text-7xl font-bold font-sans'>
        Find Recipes With What You Have!
      </h1>
      <p className='text-3xl mt-4 font-bold font-[Dancing_Script]'>
        Enter ingredients from your pantry & get delicious suggestions
        instantly!
      </p>
      <button
        onClick={() => navigate('/recipes')}
        className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded mt-6'
      >
        Check Recipes
      </button>
    </section>
  );
};

export default Hero;
