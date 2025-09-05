'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16 min-h-screen flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mt-10">
            Patent-A-Thon 1.0
          </h1>
          {/* Mobile only: Ideate • Innovate • Patent */}
          <div className="flex md:hidden justify-center">
            <span className="text-base font-semibold text-white bg-black bg-transparent px-4 py-2 rounded-lg shadow">
              Ideate &bull; Innovate &bull; Patent
            </span>
          </div>
         
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join Chandigarh University&apos;s premier patent-focused innovation
            event where groundbreaking ideas transform into protected
            intellectual property.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 mb-12">
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-semibold">17 October 2025</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-semibold">Full Day Event</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
              <a 
                href="https://maps.app.goo.gl/gN7rDhjEsALJ4TAz8" 
                className="font-semibold hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chandigarh University
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://docs.google.com/forms/d/1fIqW1_lN9XV0re2l6G4Bc79yFwbj9kM5YzNckMkMbzc/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Register Now
            </a>
            <a
              href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 hover:border-green-500 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm lg:text-base">Participants</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm lg:text-base">Ideas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">9</div>
              <div className="text-gray-400 text-sm lg:text-base">Tracks</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm lg:text-base">Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
