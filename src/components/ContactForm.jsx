import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  // Get env variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Check for env variables
  const envError = !serviceId || !templateId || !publicKey;

  const sendEmail = e => {
    e.preventDefault();
    setStatus('');
    if (envError) {
      setStatus('Email service is not configured. Please contact site admin.');
      return;
    }
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      _result => {
        setStatus('Message sent successfully!');
        toast.success('Message Sent Successfully', {
          position: 'top-right',
          autoClose: 3000,
        });
        form.current.reset();
      },
      _error => {
        setStatus('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section id='contact' className='bg-gray-100 py-20 px-6'>
      <h1 className='text-4xl font-bold text-green-600 text-center mb-8'>
        Contact Us
      </h1>
      <form
        ref={form}
        className='bg-white text-black max-w-lg mx-auto p-8 rounded-xl shadow-lg space-y-4'
        onSubmit={sendEmail}
      >
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          className='w-full border p-3 rounded-md'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          className='w-full border p-3 rounded-md'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='5'
          required
          className='w-full border p-3 rounded-md'
        ></textarea>
        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded'
          disabled={envError}
        >
          Send Message
        </button>
        {status && (
          <div
            className={`text-center mt-2 ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}
          >
            {status}
          </div>
        )}
        {envError && (
          <div className='text-red-600 text-center mt-2'>
            Email service is not configured. Please contact site admin.
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
