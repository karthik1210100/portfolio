// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../ThemeContext';
// import './Navbar.css';

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className={`navbar ${theme}`}>
//       <h1 className="logo">Karthikeyan</h1>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <button onClick={toggleTheme} className="theme-btn">{theme === 'light' ? '🌙' : '☀️'}</button>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`w-full px-4 py-3 shadow-md sticky top-0 z-50 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Karthikeyan</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl focus:outline-none">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button onClick={toggleMenu} className="md:hidden focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className={`md:hidden mt-2 flex flex-col space-y-3 px-4 font-medium ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
