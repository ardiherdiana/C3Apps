import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  UserCircleIcon, 
  ChevronDownIcon, 
  HeartIcon,
  AcademicCapIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`${
        scrolled 
          ? 'bg-gray-900/95 shadow-lg backdrop-blur-md' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      } fixed w-full z-50 border-b border-gray-800/50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300">C3Academy</span>
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link 
              to="/courses" 
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/courses')
                  ? 'text-white bg-gray-800/60'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              <BookOpenIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Browse Courses</span>
            </Link>
            <Link 
              to="/my-learning" 
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/my-learning')
                  ? 'text-white bg-gray-800/60'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              <AcademicCapIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">My Learning</span>
            </Link>
            <Link 
              to="/wishlist" 
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/wishlist')
                  ? 'text-white bg-gray-800/60'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              <HeartIcon className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Course List</span>
            </Link>
            <Link 
              to="/admin/dashboard" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/admin/dashboard')
                  ? 'text-white bg-gray-800/60'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
              }`}
            >
              Admin
            </Link>
            
            {/* User Menu Dropdown */}
            <div className="relative user-menu-container">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-800/40"
              >
                <UserCircleIcon className="h-5 w-5" />
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-xl py-2 ring-1 ring-black ring-opacity-5 border border-gray-700/50 backdrop-blur-md">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>Your Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/70 hover:text-white transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Settings</span>
                  </Link>
                  <div className="border-t border-gray-700 my-1"></div>
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-150 flex items-center space-x-2"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign out</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;