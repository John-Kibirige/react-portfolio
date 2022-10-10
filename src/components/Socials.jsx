import React from 'react';
import {
  VscGithub,
  FaLinkedinIn,
  FaAngellist,
  BsTwitter,
  FaMediumM,
  BsArrowDown,
} from 'react-icons/all';

const Socials = () => {
  return (
    <section
      className="socials-work flex flex-col justify-center items-center
    space-y-8 mb-8 sm:flex-row sm:items-center sm:space-x-[23.79vw]">
      <div className="work-arrow  items-center hidden sm:flex sm:space-x-3 mt-8">
        <BsArrowDown className="text-2xl text-gray-400" />
        <p className="work text-xl text-gray-400">Work</p>
      </div>
      <div className="socials flex space-x-4 items-center justify-center">
        <VscGithub className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
        <FaLinkedinIn className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
        <FaAngellist className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
        <BsTwitter className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
        <FaMediumM className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
      </div>
      <div className="work-arrow flex items-center space-x-3">
        <BsArrowDown className="text-2xl text-gray-400" />
        <p className="work text-xl text-gray-400">Work</p>
      </div>
    </section>
  );
};

export default Socials;
