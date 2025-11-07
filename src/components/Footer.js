import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp 
} from 'react-icons/fa';
import { Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Residential', href: '#' },
    { name: 'Testimonials', href: '/about/testimonials' },
    { name: 'Project Videos', href: '#' }
  ];

  const otherLinks = [
    { name: 'Latest News', href: '#' },
    { name: 'Blog', href: '/about/blogs' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Disclaimer', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Column 1 - About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-amber-500">About Us</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              At Vansh Realty Pune, our comprehensive real estate solutions cater to diverse client needs. Whether it's resale properties, rentals, under-construction projects, or commercial spaces, we leverage our industry expertise to help you make informed decisions. With a focus on delivering exceptional client service, our tailored investment guidance and personalized insights help you find properties perfectly aligned with your objectives. Established in 2012, Vansh Realty continues to deliver unparalleled property solutions with trust and transparency.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => link.href.startsWith('/') ? navigate(link.href) : window.location.href = link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Other Links */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-amber-500">Other Links</h4>
            <ul className="space-y-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => link.href.startsWith('/') ? navigate(link.href) : window.location.href = link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-amber-500">Contact Us</h4>
            <address className="text-gray-400 not-italic space-y-2">
              <p className="flex items-start text-sm">
                <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                <span>Visit Vansh Realty, located at 703, Gera's Imperium Alpha, Kharadi, Pune - 411014</span>
              </p>
              <p className="flex items-center text-sm">
                <Phone className="mr-2 flex-shrink-0" size={14} />
                <span>+91 9595969262</span>
              </p>
              <p className="flex items-center text-sm">
                <Globe className="mr-2 flex-shrink-0" size={14} />
                <span>www.versalrealty.in</span>
              </p>
            </address>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p className="text-xs">© Vansh Realty. All Rights Reserved. Designed & Developed by Prop Innovations & Solutions Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;