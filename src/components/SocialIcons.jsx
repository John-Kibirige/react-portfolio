import React from 'react';
import {
  VscGithub,
  FaLinkedinIn,
  FaAngellist,
  BsTwitter,
  FaMediumM,
} from 'react-icons/all';

const SocialIcons = () => {
  return (
    <div className="socials flex space-x-4 items-center justify-center">
      <VscGithub className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
      <FaLinkedinIn className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
      <FaAngellist className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
      <BsTwitter className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
      <FaMediumM className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" />
    </div>
  );
};

export default SocialIcons;
