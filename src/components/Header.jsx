import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinks from './SocialLinks';

const roles = [
  'Full Stack Developer',
  'Flutter Developer',
  'Tech Enthusiast'
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div>
      {/* Navbar */}
      <header className="text-fuchsia-800 px-4 py-3 flex justify-between items-center absolute bg-gray-100 shadow-md rounded-lg w-full top-0 z-50">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <button
          className="sm:hidden focus:outline-none z-50 bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-md transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden sm:flex text-md space-x-6 text-indigo-900">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-violet-500/40 backdrop-blur-sm z-40" onClick={closeMenu} />
      )}

      <div className={`sm:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-y-18 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 py-6 text-indigo-900 text-lg">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-r from-violet-500 to-blue-500 p-8 pt-28 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-around">
        <div className="flex flex-col text-white pr-0 lg:pr-10 w-full max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Hi, I am <span className="font-bold">Hisham K H</span>
          </h1>

          {/* Animated Role */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h3
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                I am a <span className="font-bold">{roles[index]}</span>
              </motion.h3>
            </AnimatePresence>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-lg mx-auto lg:mx-0 w-max">
            <SocialLinks />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 lg:mt-0 w-48 sm:w-64 md:w-72 lg:w-96">
          <img
            src="https://avatars.githubusercontent.com/u/182793013?v=4"
            alt="Profile"
            className="rounded-full shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
