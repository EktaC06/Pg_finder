import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">PG</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PG Finder
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 hover:bg-blue-50"
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 hover:bg-blue-50"
            >
              Browse PGs
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 hover:bg-blue-50"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 hover:bg-blue-50"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-xl hover:bg-gray-50 transition duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/listings" 
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse PGs
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2 border-t border-gray-100">
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white block px-4 py-3 rounded-xl text-base font-semibold transition duration-300 text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;