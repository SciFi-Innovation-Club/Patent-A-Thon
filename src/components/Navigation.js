'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-col sm:flex-row">
            <h1 className="text-xl font-bold text-white">Patent-A-Thon 1.0</h1>
            <span className="ml-3 text-sm text-gray-400 hidden sm:block">Ideate • Innovate • Patent</span>
            <span className="block sm:hidden text-sm text-gray-400 mt-1 mr-4">Ideate • Innovate • Patent</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tracks" className="text-gray-300 hover:text-white transition-colors">
              Tracks
            </a>
            <a href="#timeline" className="text-gray-300 hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#mentors" className="text-gray-300 hover:text-white transition-colors">
              Mentors
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Register Now
            </a>
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#tracks"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Tracks
              </a>
              <a
                href="#timeline"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Timeline
              </a>
              <a
                href="#mentors"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Mentors
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <div className="pt-4 space-y-2">
                <a
                  href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full font-medium transition-colors text-center"
                >
                  Register Now
                </a>
                <a
                  href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-3 py-2 rounded-full font-medium transition-colors text-center"
                >
                  Join WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
