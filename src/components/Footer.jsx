import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img src="https://horizons-cdn.hostinger.com/63db1438-0f99-4796-8907-07a55503d107/f463dc6df16a0667d2d809fcd9c47bbd.png" alt="Green Hub Logo" className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Green Hub</span>
                <p className="text-xs text-gray-400">EMPAKTOR Fertilizers</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Manufacturer of plant-based organic liquid fertilizers, committed to sustainable agricultural solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Mustafa Kemal Mah. 2137 SK. No:5, Çankaya, Ankara/Türkiye</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+90 (546) 215-4701</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">greenhub.tarim@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Green Hub Gıda Tarım Dış Tic. Ltd. Şti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
