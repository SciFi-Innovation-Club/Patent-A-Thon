// This is the footer at the bottom of the site.
// To change contact info or social links, edit the lines below.
// To update the call-to-action or branding, look for the text and links at the end.

// FOOTER COMPONENT
// Section for site footer, contact info, social links, and call-to-action
// To change contact info or social links, edit lines below

'use client';

import { Instagram, Linkedin, MessageCircle, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const { isDarkMode } = useTheme(); // Use global theme context
  
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery images
  const galleryImages = [
    {
      src: "https://sficcu.vercel.app/assets/gallery1-1b0UnlhH.jpg",
      alt: "Club Innovation Workshop"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery2-BgfdLor_.jpg",
      alt: "Team Collaboration Session"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery3-D88p1lDU.jpg",
      alt: "Technology Presentation"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery4-DtrMrnVd.jpg",
      alt: "Innovation Showcase"
    },
    {
      src: "https://sficcu.vercel.app/assets/gallery5-DmnOxHaz.png",
      alt: "Club Meeting"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <footer className={`py-20 border-t transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white border-gray-800' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>
      <div className="max-w-full mx-auto px-8">
        {/* Section title and intro */}
        <div className="text-center">
          <h2 className={`text-4xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Join Now
          </h2>
        </div>

        {/* Sci-Fi Innovation Club Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sci-Fi Innovation Club
          </h2>
          <p className={`text-xl font-bold max-w-4xl mx-auto mb-2 leading-relaxed text-purple-600`}>
            &ldquo;Innovation at Heart, Excellence in Action&rdquo;
          </p>
          <p className={`text-xl max-w-4xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pioneering the future through innovation and technology
            <br />
            Where imagination meets implementation
          </p>

          {/* Photo Gallery and YouTube Video Row - Full Width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Photo Gallery Carousel */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
              <div className="relative max-w-md mx-auto">
                {/* Main carousel image */}
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/80 hover:bg-white text-gray-900'} shadow-lg hover:shadow-xl`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/80 hover:bg-white text-gray-900'} shadow-lg hover:shadow-xl`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-green-400 w-6' 
                          : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* YouTube Video - Full Size */}
            <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wXIax8Zqcm8"
                  title="Sci-Fi Innovation Club Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Action Buttons - moved below club section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://cuintranet.in/clubs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Apply Now
            </a>
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 hover:border-green-500 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:text-white' : 'border-gray-400 text-gray-600 hover:text-gray-900'}`}
            >
              Join WhatsApp
            </a>
          </div>
        </div>

        {/* Contact info and social links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:scifiinnovationclub@gmail.com"
                className={`flex items-center gap-4 hover:text-green-400 transition-colors group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <span>scifiinnovationclub@gmail.com</span>
              </a>
              <a
                href="tel:+919234408229"
                className={`flex items-center gap-4 hover:text-green-400 transition-colors group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 92344 08229</span>
              </a>
              <a
                href="tel:+919390218260"
                className={`flex items-center gap-4 hover:text-green-400 transition-colors group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 93902 18260</span>
              </a>
              <a
                href="tel:+917015567105"
                className={`flex items-center gap-4 hover:text-green-400 transition-colors group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 70155 67105</span>
              </a>
            </div>
          </div>

          <div className='ml-auto'>
            <h3 className="text-2xl font-bold mb-6 text-green-400">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/scifiinnovationclub?igsh=NDVtamhnOXZsdGpk"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/sci-fi-innovation-club/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-500/20 hover:text-green-400 transition-all duration-300 group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer branding and copyright */}
        <div className={`border-t pt-10 text-center ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-green-500">
            Patent-A-Thon 1.0
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Built with innovation in mind | Sci-Fi Innovation Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// End FOOTER COMPONENT
