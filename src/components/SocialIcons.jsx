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
      <a href="https://github.com/John-Kibirige" className="social-link"><VscGithub className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" /></a>
      <a href="https://www.linkedin.com/in/kibirigejohn/" className="social-link"><FaLinkedinIn className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" /></a>
      <a href="https://angel.co/u/kibirige-john" className="social-link"><FaAngellist className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" /></a>
      <a href="https://twitter.com/kibirigejohn005" className="social-link"><BsTwitter className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" /></a>
      <a href="https://medium.com/@kibirigejohn005" className="social-link"><FaMediumM className="w-5 h-5 hover:text-zei-400 transition-all cursor-pointer" /></a>
    </div>
  );
};

export default SocialIcons;
