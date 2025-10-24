import React from 'react';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Description */}
          <div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl mb-4">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Shri Shankaracharya Swaroopanand Foundation
            </h3>
            <p className="text-blue-200 text-sm mb-4">
              Transforming Lives Through Service
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to spiritual growth, education, and community welfare through 
              sustainable initiatives and compassionate service.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300 text-sm">
                Old Dhamtari Road, Sejbahar, Raipur – 492015, Chhattisgarh
              </span>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm">
                +91 9993561514 <br /> +91 8763695269
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 text-sm">
                info@shrishankaracharya.org
              </span>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates about our initiatives and events.
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 text-sm"
              />
              <button className="px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-800 rounded-xl px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-xs">80G Certified Organization</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Column 4: Developer / Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Info</h4>
            <ul className="text-gray-300 text-sm space-y-3">
              <li>About the Foundation</li>
              <li>Our Mission</li>
              <li>Events & Activities</li>
              <li>Community Outreach</li>
              <li>Support & Donations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shri Shankaracharya Swaroopanand Foundation
            </div>
          
           <div className="text-gray-400 text-sm">
  Designed & Developed by{' '}
  <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
  Krishna   Software   Solutions
  </span>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
