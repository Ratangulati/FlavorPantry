import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const testimonials = [
  {
    img: user1,
    text: 'FlavorPantry makes cooking fun again! I used to dread meal prep, but now I actually look forward to opening my fridge and seeing what I can whip up.”',
  },
  {
    img: user2,
    text: '“It’s like having a chef in your pocket! I’ve saved so much time and money by using the ingredients I already have.”',
  },
  {
    img: user3,
    text: '“I feel like a pro in the kitchen! The suggestions are spot on and the instructions are super easy to follow.”',
  },
];

const Testimonials = () => {
  return (
    <section className='bg-white py-20 px-6'>
      <h2 className='text-4xl font-bold text-green-600 text-center mb-12'>
        What People Say
      </h2>
      <div className='flex flex-col md:flex-row justify-center gap-8'>
        {testimonials.map(({ img, text }, i) => (
          <div
            key={i}
            className='bg-gray-100 p-6 rounded-xl shadow-lg text-left flex-1'
          >
            <img
              src={img}
              alt='testimonial'
              className='w-28 h-28 object-cover rounded-full mx-auto mb-4'
            />
            <p className='italic text-gray-600 text-lg text-center'>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
