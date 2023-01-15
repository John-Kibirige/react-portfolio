import React from 'react';
import { useSelector } from 'react-redux';

const Introduction = () => {
  const { menuClicked } = useSelector((state) => state.menu);
  return (
    <div className='intro-container px-6 relative' id='about'>
      <div className=' my-8 pb-8 border-b border-gray-500 sm:w-[493px] mx-auto'>
        <h1 className='title text-zei-600 text-5xl font-bold text-center sm:text-[5.114vw] min-w-[48px]'>
          Kibirige John
        </h1>
        <h2 className='job-title text-3xl font-medium text-center text-gray-200 mt-7 mb-11 sm:text-[2.84vw min-w-[30px]'>
          Software developer
        </h2>
        <p className='description text-gray-300 text-center text-lg px-5 sm:px-0 sm:text-[1.42vw]min-w-[18px]'>
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don't hesitate to contact me.
        </p>
      </div>
      {!menuClicked && (
        <div className='absolute rounded-full w-24 h-24 bg-white top-[2px] left-[-60px] filter blur-xl md:left-24 md:top-[20%] md:w-28 md:h-28 opacity-40'></div>
      )}
    </div>
  );
};

export default Introduction;
