import React, { useState } from 'react';
import { HiOutlineMail, FiChevronRight } from 'react-icons/all';

const Header = () => {
  const [menuClicked, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className="header flex justify-between items-center border pl-4 pr-6 py-6 relative">
      <a
        href="#"
        className={`logo font-medium tracking-wide text-[18px] ${
          menuClicked && 'invisible'
        }`}>
        John Kibirige
      </a>

      <nav className={`nav-bar block`}>
        <div
          className={`nav-items ${
            menuClicked
              ? 'block absolute top-24 border left-0 w-full h-[100vh]'
              : 'hidden'
          }`}>
          <ul className="lists flex flex-col px-8">
            <li className="item ">
              {' '}
              <a
                href="#portfolio"
                className="portfolio block text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center">
                Portfolio{' '}
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border " />
              </a>
            </li>
            <li className="item my-4 ">
              {' '}
              <a
                href="#about"
                className="about  text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center">
                About
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border " />
              </a>
            </li>
            <li className="item mb-4 ">
              <a
                href="#contact"
                className="contact text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center">
                Contact
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border " />
              </a>
            </li>
            <li className="item hidden">
              {' '}
              <a href="#contact">
                <HiOutlineMail className="text-zei-400 text-xl" />
              </a>
            </li>
          </ul>
        </div>

        <div
          className="humbugger-menu cursor-pointer border"
          onClick={toggleMenu}>
          <span
            className={`bar w-6 h-0.5 block transition-all bg-white rounded ${
              menuClicked && ' rotate-45 translate-y-[10px]'
            }`}></span>
          <span
            className={`bar w-6 h-0.5 block transition-all bg-white my-2 rounded ${
              menuClicked && 'translate-x-16  '
            }`}></span>
          <span
            className={`bar w-6 h-0.5 block transition-all bg-white rounded  ${
              menuClicked && '-rotate-45 -translate-y-[10px]'
            }`}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
