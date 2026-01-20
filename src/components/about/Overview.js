import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiAward, FiUsers } from 'react-icons/fi';
import EnquireModal from '../EnquireModal';

const Overview = () => {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  const missionData = [
    {
      icon: <FiTarget className="text-4xl text-yellow-500" />,
      title: "Our Mission",
      description: "Every step in developing a dream home should be effortless and rewarding. We aim to create a dynamic real estate ecosystem through innovation and collaboration."
    },
    {
      icon: <FiEye className="text-4xl text-yellow-500" />,
      title: "Our Vision",
      description: "We believe in transparency and professionalism — helping every client's vision turn into reality."
    },
    {
      icon: <FiAward className="text-4xl text-yellow-500" />,
      title: "Our Goal",
      description: "To empower clients to \"build value\" through unique and personalized real estate solutions."
    },
    {
      icon: <FiUsers className="text-4xl text-yellow-500" />,
      title: "Our Strength",
      description: "We're committed to long-term contributions to the real estate industry through collaborative, meaningful development."
    }
  ];

  const services = [
    "Market research on new residential & luxury projects",
    "Locality insights for upcoming Pune areas",
    "Legal consultancy & documentation",
    "Property purchase guidance",
    "Project development updates",
    "Channel partnerships with top builders"
  ];

  const partners = [
    { name: "LODHA", logo: "L" },
    { name: "Godrej Properties", logo: "G" },
    { name: "Kalpataru Ltd.", logo: "K" },
    { name: "Kolte Patil Developers", logo: "K" },
    { name: "VTP Realty", logo: "V" },
    { name: "Kasturi Housing", logo: "K" },
    { name: "Mahindra Lifespaces", logo: "M" },
    { name: "SOBHA Limited", logo: "S" },
    { name: "Kumar Properties", logo: "K" },
    { name: "Nyati", logo: "N" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm mb-4">Home / Overview</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">About Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              At Vansh Realty Pune, our comprehensive real estate solutions cater to diverse client needs. Whether it's resale properties, rentals, under-construction projects, or commercial spaces, we leverage our industry expertise to help you make informed decisions. With a focus on delivering exceptional client service, our tailored investment guidance and personalized insights help you find properties perfectly aligned with your objectives. Established in 2012, Vansh Realty continues to deliver unparalleled property solutions with trust and transparency.
            </p>
            <motion.button 
              className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEnquireModalOpen(true)}
            >
              Inquire Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-playfair">Who We Are</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                PuneRealty.in is Pune's biggest property platform committed to making the home-buying process easier. We are a RERA-registered company (RERA No. A52100039728), founded in 2020 by experienced realtors with over 14 years of expertise.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                As trusted partners for leading developers, we offer a smooth, transparent, and enjoyable property-buying experience.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Luxury Office" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Goal/Strength */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-900 font-playfair">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our All-Inclusive Services
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p 
              className="text-gray-700 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We offer a wide range of real estate consultancy and support services designed to help you make informed property decisions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-800 text-lg">{service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Real Estate Services" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Esteemed Partnerships
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p 
              className="text-gray-700 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're proud to collaborate with India's top real estate brands.
            </motion.p>
          </div>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                  {partner.logo}
                </div>
                <p className="text-gray-800 text-center font-medium text-sm">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-yellow-500 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">Ready to Find Your Dream Property?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Let Pune Realty help you with expert guidance and personalized real estate solutions.
            </p>
            <motion.button 
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEnquireModalOpen(true)}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enquire Modal */}
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
};

export default Overview;