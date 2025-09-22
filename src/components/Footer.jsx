import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='bg-green-800 text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center gap-4 mb-4 md:mb-0'>
        {/* <img src={} alt="College Logo" className="w-20 h-20 rounded-full object-cover" /> */}
        <div>
          <p>© All rights reserved</p>
        </div>
      </div>

      <div className='flex gap-6 text-2xl'>
        <a
          href='https://github.com/Ratangulati/FlavorPantry'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300 transition'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>

        <a
          href='mailto:ratangulati.dev@gmail.com'
          className='hover:text-gray-300 transition'
          aria-label='Email'
        >
          <MdEmail />
        </a>

        <a
          href='https://x.com/ratanstwt'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition'
          aria-label='Twitter'
        >
          <FaTwitter />
        </a>

        <a
          href='https://www.linkedin.com/in/ratangulati/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-600 transition'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
