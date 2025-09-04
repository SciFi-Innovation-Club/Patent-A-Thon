import { Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join Patent-a-thon 1.0 at Chandigarh University and turn your innovative ideas
            into protected intellectual property. Register now and be part of this
            groundbreaking innovation event!
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
              className="border-2 border-gray-600 hover:border-green-500 text-gray-300 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:scifiinnovationclub@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>scifiinnovationclub@gmail.com</span>
              </a>
              <a
                href="tel:+919835483030"
                className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
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
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/sci-fi-innovation-club/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://chat.whatsapp.com/CXnEqBAZlSIC3Msbv8017a?mode=ems_qr_c"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500/20 hover:text-green-400 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-400">Patent-A-Thon 1.0</h2>
          <p className="text-gray-400">Built with innovation in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
