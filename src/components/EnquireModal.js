import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPhone, FiMail, FiGlobe } from 'react-icons/fi';
import logo from './assest/logo.jpeg';

const SlideButton = ({ onSuccess }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const startX = useRef(0);
  const trackWidth = useRef(0);

  useEffect(() => {
    if (trackRef.current) {
      trackWidth.current = trackRef.current.offsetWidth - (thumbRef.current?.offsetWidth || 0);
    }
  }, []);

  const handleStart = (clientX) => {
    if (isSuccess) return;
    setIsDragging(true);
    startX.current = clientX - position;
  };

  const handleMove = (clientX) => {
    if (!isDragging || isSuccess) return;
    
    const newPosition = clientX - startX.current;
    const boundedPosition = Math.max(0, Math.min(newPosition, trackWidth.current));
    
    setPosition(boundedPosition);
    
    // Check if slider is at the end
    if (boundedPosition >= trackWidth.current - 5) {
      handleSuccess();
    }
  };

  const handleEnd = () => {
    if (isSuccess) return;
    setIsDragging(false);
    
    // If not at the end, snap back to start
    if (position < trackWidth.current - 5) {
      setPosition(0);
    }
  };

  const handleSuccess = () => {
    setIsDragging(false);
    setIsSuccess(true);
    setShowSuccess(true);
    onSuccess();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleMouseUp = () => handleEnd();

  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div className="w-full">
      <div 
        ref={trackRef}
        className="relative w-full h-14 bg-gray-200 rounded-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2647] to-blue-900 flex items-center justify-center">
          <span className="text-white font-medium">Slide to Submit</span>
        </div>
        
        <motion.div
          ref={thumbRef}
          className={`absolute top-1 h-12 w-12 rounded-full flex items-center justify-center cursor-grab ${
            isSuccess ? 'bg-green-500' : 'bg-[#FFD700]'
          } shadow-lg`}
          style={{ left: position }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          whileTap={{ scale: 1.1 }}
        >
          {isSuccess ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#0A2647]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          )}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 text-center text-green-600 font-medium"
          >
            Thank you! We'll contact you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const EnquireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSuccess = () => {
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        message: ''
      });
      // Close modal after submission
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 font-poppins"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row font-poppins border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side - Image/Illustration */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0A2647] to-blue-900 p-8 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center">
                  <img 
                    src={logo}
                    alt="Company Logo" 
                    className="w-64 h-64 object-contain rounded-none"
                  />
                </div>
                <h3 className="text-white text-2xl font-bold mt-6">Find Your Dream Home</h3>
                <p className="text-blue-100 mt-2">Contact us for exclusive property listings</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-b from-white to-gray-50 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-3xl font-bold text-[#0A2647] mb-2">Enquire Now</h2>
              <p className="text-gray-600 mb-6">Get in touch with our real estate experts</p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2647] focus:border-[#0A2647] transition-all font-poppins"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2647] focus:border-[#0A2647] transition-all font-poppins"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2647] focus:border-[#0A2647] transition-all font-poppins"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2647] focus:border-[#0A2647] transition-all font-poppins"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <SlideButton onSuccess={handleSuccess} />
                </div>
              </form>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="bg-[#F5F5F5] p-2 rounded-full mr-3">
                      <FiPhone className="text-[#0A2647]" />
                    </div>
                    <span className="text-gray-700">+91 9890055558</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#F5F5F5] p-2 rounded-full mr-3">
                      <FiMail className="text-[#0A2647]" />
                    </div>
                    <span className="text-gray-700">inquiry@punerealty.in</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#F5F5F5] p-2 rounded-full mr-3">
                      <FiGlobe className="text-[#0A2647]" />
                    </div>
                    <span className="text-gray-700">www.punerealty.in</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquireModal;