import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Muhammed Mujthaba</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
