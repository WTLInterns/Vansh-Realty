import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiUsers, FiTrendingUp, FiHome, FiAward, FiBriefcase, FiBarChart2, FiFileText, FiPhone, FiClock } from 'react-icons/fi';
import { FEATURE_FLAGS } from '../../config/featureFlags';

const OfflinePresence = () => {
  // Return null if the page is disabled
  if (!FEATURE_FLAGS.OFFLINE_PRESENCE_PAGE) {
    return null;
  }
  
  const serviceAreas = [
    { name: "Bavdhan", label: "Under Construction Hotspot" },
    { name: "Pashan", label: "Upcoming Locality" },
    { name: "Baner", label: "Prime Investment Zone" },
    { name: "Balewadi", label: "Developing Area" },
    { name: "Aundh", label: "Established Locality" },
    { name: "Wakad", label: "IT Hub Growth" },
    { name: "Hinjewadi", label: "Commercial Center" },
    { name: "Pimple Saudagar", label: "Residential Boom" },
    { name: "Tathwade", label: "Infrastructure Growth" },
    { name: "Punewale", label: "Emerging Zone" },
    { name: "Ravet", label: "Metro Connectivity" },
    { name: "Kiwale", label: "Affordable Housing" }
  ];

  const services = [
    { icon: <FiHome className="text-3xl text-yellow-500" />, title: "Property Management", description: "End-to-end property management services for residential and commercial properties" },
    { icon: <FiTrendingUp className="text-3xl text-yellow-500" />, title: "Investment Advisory", description: "Expert guidance for profitable real estate investments" },
    { icon: <FiBarChart2 className="text-3xl text-yellow-500" />, title: "Valuation & Market Analysis", description: "Accurate property valuations and market trend analysis" },
    { icon: <FiBriefcase className="text-3xl text-yellow-500" />, title: "Development & Consulting", description: "Strategic consulting for property development projects" }
  ];

  const benefits = [
    { icon: <FiMapPin className="text-2xl text-yellow-500" />, title: "Local Market Expertise", description: "Deep understanding of Pune's diverse neighborhoods" },
    { icon: <FiFileText className="text-2xl text-yellow-500" />, title: "Transparent Documentation", description: "Clear and honest paperwork processes" },
    { icon: <FiUsers className="text-2xl text-yellow-500" />, title: "Personalized Consultancy", description: "Tailored solutions for your specific needs" },
    { icon: <FiTrendingUp className="text-2xl text-yellow-500" />, title: "Investment Optimization", description: "Maximize returns with strategic investments" },
    { icon: <FiBriefcase className="text-2xl text-yellow-500" />, title: "Access to Trusted Builders", description: "Partnerships with Pune's top developers" },
    { icon: <FiClock className="text-2xl text-yellow-500" />, title: "24/7 Customer Support", description: "Round-the-clock assistance for all queries" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
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
            <div className="text-sm mb-4">Home / Offline Presence</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Offline Presence</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              "Expert Real Estate Services — In Person, On Ground, Across Pune."
            </p>
            <motion.button 
              className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Offices
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Our Offline Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Real Estate Team" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Core Strength — Our Expert Team</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our team of experts forms the backbone of Pune Realty.
                They combine market knowledge, personalized service, and years of experience to help clients find ideal real estate options.
                From consultation to final purchase, our professionals ensure every decision is informed and rewarding.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">Market Analysis</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">Client Consultation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">Project Recommendations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">Feasibility Surveys</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Service Reach Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Offline Presence Across Pune
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
              We cover the entire city, with a focus on the rapidly developing western zones.
            </motion.p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
            ></div>
            <div className="relative z-10 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-90 p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex justify-center mb-2">
                      <FiMapPin className="text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-blue-900 mb-1">{area.name}</h3>
                    <p className="text-xs text-gray-600">{area.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Real Estate Solutions
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
              Pune Realty offers a full range of services to meet all your real estate needs — from property management and development consulting to valuation and investments.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Consultation Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Personalized Service, Every Step of the Way</h2>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Before choosing a property, our experts help you evaluate critical factors like location, budget, construction quality, and long-term ROI.
                We provide tailored suggestions that match your goals and financial plan — ensuring comfort and confidence in every transaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <motion.div 
                    className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FiMapPin className="text-blue-900 text-xs" />
                  </motion.div>
                  <p className="text-blue-100">Location analysis and connectivity evaluation</p>
                </div>
                <div className="flex items-start">
                  <motion.div 
                    className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
                  >
                    <FiAward className="text-blue-900 text-xs" />
                  </motion.div>
                  <p className="text-blue-100">Budget planning and financial feasibility</p>
                </div>
                <div className="flex items-start">
                  <motion.div 
                    className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
                  >
                    <FiHome className="text-blue-900 text-xs" />
                  </motion.div>
                  <p className="text-blue-100">Construction quality and builder reputation</p>
                </div>
                <div className="flex items-start">
                  <motion.div 
                    className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                  >
                    <FiTrendingUp className="text-blue-900 text-xs" />
                  </motion.div>
                  <p className="text-blue-100">Long-term investment returns and appreciation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Client Consultation" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Pune Realty's Offline Expertise?
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-900">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience Our Work On Ground
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={image} 
                  alt={`Real Estate ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-yellow-500 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Meet & Explore Your Next Investment</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Visit our Pune office or schedule an offline consultation with our expert team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone className="mr-2" />
                Schedule a Visit
              </motion.button>
              <motion.button
                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMapPin className="mr-2" />
                Locate Us on Map
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfflinePresence;