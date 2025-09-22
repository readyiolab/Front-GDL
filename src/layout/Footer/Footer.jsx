import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GETDREAMLIFE.COM</h3>
            <p className="text-gray-400 mb-4">
              Your path to financial freedom and wellness through NHT Global's proven business model.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
                { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
                { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
                { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-500 transition-colors p-2 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Compensation Plan', 'Events', 'Contact', 'FAQs'].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                123 Business Avenue
              </p>
              <p className="mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 invisible" />
                Suite 200
              </p>
              <p className="mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 invisible" />
                New York, NY 10001
              </p>
              <p className="mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email: info@getdreamlife.com
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Phone: (555) 123-4567
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GETDREAMLIFE.COM. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-orange-500 transition-colors">
              Terms of Use
            </Link>
            <Link to="/earning-disclaimer" className="hover:text-orange-500 transition-colors">
              Earning Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;