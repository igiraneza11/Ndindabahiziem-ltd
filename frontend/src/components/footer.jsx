import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded mr-3" />
              <h3 className="text-xl font-bold">NDINDABAHIZIEM LTD</h3>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              Your trusted partner for comprehensive maintenance and construction services. 
              We specialize in electrical installations, refrigeration, construction, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/home?lang=en" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.facebook.com/bahizi11" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/bahizi_11/?next=%2F" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="/service" className="hover:text-white transition-colors">Electrical Installations</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Refrigeration & AC</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Construction Projects</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">CCTV Installation</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Plumbing Services</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Machinery Repair</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Medical Equipment Maintenance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/certificate" className="hover:text-white transition-colors">Certification</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Faq</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center space-x-3">
                                 <FaPhone className="text-gray-400" />
                 <span>+250 782 177 952</span>
               </div>
               <div className="flex items-center space-x-3">
                 <FaEnvelope className="text-gray-400" />
                 <span>bahizem@gmail.com</span>
               </div>
               <div className="flex items-start space-x-3">
                 <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* Bottom Bar */}
       <div className="border-t border-gray-600">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-300">
            <div>
              © 2026 NDINDABAHIZIEM LTD. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
