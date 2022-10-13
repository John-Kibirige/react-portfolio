import React, { useEffect, useState } from 'react';
import { HiOutlineMail, FiChevronRight } from 'react-icons/all';

const Header = () => {
  const [menuClicked, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  });

  useEffect(() => {
    if (windowSize >= 640) {
      setMenu(false);
    }
  });

  return (
    <header className="header flex justify-between items-center pl-4 pr-6 py-6 relative">
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
              ? 'block absolute top-24 left-0 w-full h-[100vh] z-50  bg-zei-800'
              : 'hidden'
          } sm:block sm:static`}>
          <ul className="lists flex flex-col px-8 sm:flex-row sm:items-center">
            <li className="item mr-2 sm:mr-8">
              {' '}
              <a
                href="#portfolio"
                className="portfolio text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center sm:text-base sm:hover:underline">
                Portfolio{' '}
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border sm:hidden" />
              </a>
            </li>
            <li className="item mr-2 my-4 sm:mr-8">
              {' '}
              <a
                href="#about"
                className="about  text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center sm:text-base sm:hover:underline">
                About
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border sm:hidden " />
              </a>
            </li>
            <li className="item mr-2 mb-4 sm:mb-0 sm:mr-8">
              <a
                href="#contact"
                className="contact text-lg font-medium transition-all hover:text-zei-400 flex justify-between items-center sm:text-base sm:hover:underline">
                Contact
                <FiChevronRight className="text-zei-400 text-xl transition-all cursor-pointer hover:border  sm:hidden" />
              </a>
            </li>
            <li className="item hidden sm:block">
              {' '}
              <a href="#email">
                <HiOutlineMail className="hover:text-zei-400 text-xl" />
              </a>
            </li>
          </ul>

          <div
            className={`shape-one ${
              menuClicked && windowSize < 640
                ? 'h-[400px] w-[226px] bg-gray-300 rounded-[50%] rotate-[25deg] absolute top-5 left-[-80px] filter blur-3xl -z-40 opacity-60'
                : ''
            } `}></div>

          <div
            className={`shape-two ${
              menuClicked && windowSize
                ? 'h-[420px] w-[244px] bg-gray-200 rotate-[-40deg] absolute bottom-0 right-[-90px] rounded-[50%] filter blur-2xl'
                : ''
            }`}></div>
        </div>

        <div
          className="humbugger-menu cursor-pointer sm:hidden"
          onClick={toggleMenu}>
          <span
            className={`bar w-6 h-0.5 block transition-all bg-white rounded ${
              menuClicked && ' rotate-45 translate-y-[10px]'
            }`}></span>
          <span
            className={`bar w-6 h-0.5 block transition-all bg-white my-2 rounded ${
              menuClicked && 'translate-x-[500px]  '
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
