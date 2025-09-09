// This is the footer at the bottom of the site.
// To change contact info or social links, edit the lines below.
// To update the call-to-action or branding, look for the text and links at the end.

// FOOTER COMPONENT
// Section for site footer, contact info, social links, and call-to-action
// To change contact info or social links, edit lines below

'use client';

import { Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme(); // Use global theme context
  
  return (
    <footer className={`py-20 border-t transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white border-gray-800' : 'bg-gray-100 text-gray-900 border-gray-300'}`}>
      <div className="max-w-full mx-auto px-8">
        {/* Section title and intro */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Innovate?
          </h2>
          <p className={`text-xl max-w-4xl mx-auto mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join Patent-a-thon 1.0 at Chandigarh University and turn your
            innovative ideas into protected intellectual property. Register now
            and be part of this groundbreaking innovation event!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Register Now
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
                href="tel:+919835483030"
                className={`flex items-center gap-4 hover:text-green-400 transition-colors group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 98354 83030</span>
              </a>
            </div>
          </div>

          <div>
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
