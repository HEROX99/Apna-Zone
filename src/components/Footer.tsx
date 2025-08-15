import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Apna Zone</h3>
            <p className="text-gray-300 mb-4">Your one-stop shop for all B.Tech needs. Quality products at affordable prices for Indian engineering students.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@apnazone.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-300 hover:text-white transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/electronics" className="text-gray-300 hover:text-white transition-colors">Electronics</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Asansol Engineering Collage</p>
              <p className="mb-2">Kanyapur, Asansol</p>
              <p className="mb-2">Phone: +91 98765 43210</p>
              <p className="mb-2">Email: info@apnazone.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Apna Zone. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;