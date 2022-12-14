import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <section
      className='footer border-t border-gray-500 pt-8 sm:flex sm:flex-col space-x-5 sm:items-center pb-7'
      id='email'>
      <SocialIcons />
      <div className='email text-center mt-3 sm:text-xl sm:mt-0'>
        kibirigejohn005@gmail.com
      </div>
      <div className='black-div w-2/5 h-1 block bg-black mx-auto mt-8 sm:hidden'></div>
    </section>
  );
};

export default Footer;
