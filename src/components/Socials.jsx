import React from 'react';
import { BsArrowDown } from 'react-icons/all';
import SocialIcons from './SocialIcons';

const Socials = () => {
  return (
    <section
      className="socials-work flex flex-col justify-center items-center
    space-y-8 mb-8 sm:flex-row sm:items-center sm:space-x-[23.79vw]">
      <div className="work-arrow  items-center hidden sm:flex sm:space-x-3 mt-8">
        <BsArrowDown className="text-2xl text-gray-400" />
        <p className="work text-xl text-gray-400">Work</p>
      </div>
      <SocialIcons />
      <div className="work-arrow flex items-center space-x-3">
        <BsArrowDown className="text-2xl text-gray-400" />
        <p className="work text-xl text-gray-400">Work</p>
      </div>
    </section>
  );
};

export default Socials;
