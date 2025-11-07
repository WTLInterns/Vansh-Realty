import React, { useState, useEffect, useRef } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './assest/logo.jpeg';
import EnquireModal from './EnquireModal';
import CompactSearch from './CompactSearch';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const handleLogoClick = () => {
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    setIsAboutUsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutUsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="mr-3">
              <img 
                src={logo}
                alt="Vansh Realty Logo" 
                className="w-16 h-16 object-contain cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-blue-800">Vansh Realty</h1>
              <p className="text-sm text-gray-500 italic">Here you don't just search, You Find.</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={() => navigate('/')}
              className={`${
                isActive('/') ? 'text-blue-800 font-bold' : 'text-gray-700'
              } hover:text-amber-500 font-medium transition-colors duration-300`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={handleAboutUsClick}
                className={`${
                  location.pathname.startsWith('/about') ? 'text-blue-800 font-bold' : 'text-gray-700'
                } hover:text-amber-500 font-medium flex items-center transition-colors duration-300`}
              >
                About Us
                <span className="ml-1">{isAboutUsDropdownOpen ? '⬆️' : '⬇️'}</span>
              </button>

              {isAboutUsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  style={{ animation: 'fadeInDown 0.3s ease-out forwards' }}
                >
                  <button 
                    onClick={() => { navigate('/about/overview'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => { navigate('/about/online-presence'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    Online Presence
                  </button>
                  <button 
                    onClick={() => { navigate('/about/offline-presence'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    Offline Presence
                  </button>
                  <button 
                    onClick={() => { navigate('/about/nri-services'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    NRI Services
                  </button>
                  <button 
                    onClick={() => { navigate('/about/testimonials'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    Testimonials
                  </button>
                  <button 
                    onClick={() => { navigate('/about/blogs'); setIsAboutUsDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                  >
                    Blogs
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/services')}
              className={`${
                location.pathname.startsWith('/services') ? 'text-blue-800 font-bold' : 'text-gray-700'
              } hover:text-amber-500 font-medium transition-colors duration-300`}
            >
              Residential
            </button>

            <button 
              onClick={() => navigate('/projects')}
              className={`${
                isActive('/projects') ? 'text-blue-800 font-bold' : 'text-gray-700'
              } hover:text-amber-500 font-medium transition-colors duration-300`}
            >
              Media
            </button>

            <button 
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md transform hover:scale-105 duration-300 flex items-center"
              onClick={() => setIsEnquireModalOpen(true)}
            >
              <FiPhone className="mr-2" /> Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-slideDown">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <button 
                onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
                className={`${
                  isActive('/') ? 'text-blue-800 font-bold' : 'text-gray-700'
                } hover:text-amber-500 font-medium py-2 text-left`}
              >
                Home
              </button>

              {/* Mobile About Us Dropdown */}
              <div>
                <button 
                  className={`${
                    location.pathname.startsWith('/about') ? 'text-blue-800 font-bold' : 'text-gray-700'
                  } hover:text-amber-500 font-medium py-2 flex justify-between w-full`}
                  onClick={handleAboutUsClick}
                >
                  <span>About Us</span>
                  <span>{isAboutUsDropdownOpen ? '⬆️' : '⬇️'}</span>
                </button>

                {isAboutUsDropdownOpen && (
                  <div className="pl-4 py-2 space-y-2" style={{ animation: 'fadeIn 0.3s ease-out forwards' }}>
                    <button onClick={() => { navigate('/about/overview'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      Overview
                    </button>
                    <button onClick={() => { navigate('/about/online-presence'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      Online Presence
                    </button>
                    <button onClick={() => { navigate('/about/offline-presence'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      Offline Presence
                    </button>
                    <button onClick={() => { navigate('/about/nri-services'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      NRI Services
                    </button>
                    <button onClick={() => { navigate('/about/testimonials'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      Testimonials
                    </button>
                    <button onClick={() => { navigate('/about/blogs'); setIsAboutUsDropdownOpen(false); setIsMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-amber-500">
                      Blogs
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => { navigate('/services'); setIsMobileMenuOpen(false); }}
                className={`${
                  location.pathname.startsWith('/services') ? 'text-blue-800 font-bold' : 'text-gray-700'
                } hover:text-amber-500 font-medium py-2 text-left`}
              >
                Residential
              </button>

              <button 
                onClick={() => { navigate('/projects'); setIsMobileMenuOpen(false); }}
                className={`${
                  isActive('/projects') ? 'text-blue-800 font-bold' : 'text-gray-700'
                } hover:text-amber-500 font-medium py-2 text-left`}
              >
                Media
              </button>

              <button 
                className="flex bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all w-full justify-center transform hover:scale-105 duration-300"
                onClick={() => { setIsMobileMenuOpen(false); setIsEnquireModalOpen(true); }}
              >
                <FiPhone className="mr-2" /> Enquire Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Compact Search - Display below header only on home page */}
      {isActive('/') && (
        <div className="pt-20">
          <CompactSearch />
        </div>
      )}

      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </>
  );
};

export default Header;