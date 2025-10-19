const ContactForm = () => {
  return (
    <section
      id='contact'
      className='bg-gradient-to-t from-green-500 to-white-600 py-20 px-6'
    >
      <div className='relative flex flex-col items-center mb-8'>
        <h1 className='text-4xl font-bold text-green-600 text-center'>
          Contact Us
        </h1>
        <h1
          className='absolute top-full -translate-y-2 
               text-4xl font-bold text-green-600 text-center 
               transform scale-y-[-1] skew-x-6 opacity-35 
               bg-gradient-to-t from-green-600/40 to-transparent bg-clip-text text-transparent select-none'
          aria-hidden='true'
        >
          Contact Us
        </h1>
      </div>
      <form className='bg-[#ffffff80] text-black max-w-lg mx-auto p-8 rounded-xl shadow-lg space-y-4 border-1 border-solid border-white backdrop-blur-xl'>
    <section id='contact' className='bg-gray-100 py-20 px-6'>
      <h1 className='text-4xl font-bold text-green-600 text-center mb-8'>
        Contact Us
      </h1>
      <form className='bg-white text-black max-w-lg mx-auto p-8 rounded-xl shadow-lg space-y-4'>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          className='w-full border border-white p-3 rounded-md focus:outline-none placeholder-black'
          className='w-full border p-3 rounded-md'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          className='w-full border border-white p-3 rounded-md focus:outline-none placeholder-black'
          className='w-full border p-3 rounded-md'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='5'
          required
          className='w-full border border-white  p-3 rounded-md focus:outline-none placeholder-black'
          className='w-full border p-3 rounded-md'
        ></textarea>
        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded'
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
