import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`w-full px-4 py-3 shadow-md sticky top-0 z-50 transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-wide text-black dark:text-white no-underline hover:text-inherit cursor-pointer">
          <img
            src="/rails_img.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-gray-300 dark:border-white"
          />
          Karthikeyan
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-blue-500 transition-colors">Experience</Link></li>
          <li><Link to="/certifications" className="hover:text-blue-500 transition-colors">Certificates</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl focus:outline-none transition-transform transform hover:scale-110">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none text-2xl transition-transform transform hover:scale-110"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-60 py-2' : 'max-h-0'
          }`}
      >
        <ul className={`flex flex-col space-y-4 px-4 pt-2 text-lg font-medium ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <li><Link to="/" onClick={toggleMenu} className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/experience" onClick={toggleMenu} className="hover:text-blue-400">Experience</Link></li>
          <li><Link to="/certifications" onClick={toggleMenu} className="hover:text-blue-400">Certificate</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
