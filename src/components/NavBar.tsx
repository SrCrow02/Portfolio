// src/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg p-4 rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold">
          Guilherme Portfolio
        </div>

        {/* Menu Hambúrguer */}
        <button
          className="text-white lg:hidden block"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Links de Navegação */}
        <div className={`lg:flex lg:items-center lg:space-x-6 transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <a href="#home" className="block text-white hover:bg-gray-700 hover:rounded-lg px-4 py-2 transition duration-300">Home</a>
          <a href="#about" className="block text-white hover:bg-gray-700 hover:rounded-lg px-4 py-2 transition duration-300">Sobre</a>
          <a href="#portfolio" className="block text-white hover:bg-gray-700 hover:rounded-lg px-4 py-2 transition duration-300">Portfólio</a>
          <a href="#contact" className="block text-white hover:bg-gray-700 hover:rounded-lg px-4 py-2 transition duration-300">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;