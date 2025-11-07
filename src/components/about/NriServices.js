import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiVideo, FiFileText, FiHome, FiBriefcase, FiCheckCircle, FiPhone, FiMapPin, FiUser } from 'react-icons/fi';

const NriServices = () => {
  const services = [
    { icon: <FiHome className="text-3xl text-yellow-500" />, title: "Residential Properties", description: "Under construction & ready possession flats" },
    { icon: <FiBriefcase className="text-3xl text-yellow-500" />, title: "Commercial Spaces", description: "Premium offices and business centers" },
    { icon: <FiBriefcase className="text-3xl text-yellow-500" />, title: "Office Spaces", description: "Flexible and modern setups for global businesses" },
    { icon: <FiHome className="text-3xl text-yellow-500" />, title: "Villas & Row Houses", description: "Elegant, luxury living spaces in Pune's top localities" },
    { icon: <FiHome className="text-3xl text-yellow-500" />, title: "Bungalows", description: "Independent, high-end homes for exclusive buyers" },
    { icon: <FiFileText className="text-3xl text-yellow-500" />, title: "End-to-End Documentation", description: "Hassle-free legal and paperwork management" }
  ];

  const virtualAssistance = [
    { icon: <FiVideo className="text-2xl text-yellow-500" />, title: "Virtual Tours & Video Calls", description: "Explore properties through immersive virtual experiences" },
    { icon: <FiFileText className="text-2xl text-yellow-500" />, title: "Digital Paperwork & Legal Guidance", description: "Complete documentation process handled digitally" },
    { icon: <FiUser className="text-2xl text-yellow-500" />, title: "Family-Assisted Site Visits", description: "Coordinate with family members for physical property visits" }
  ];

  const properties = [
    { title: "Luxury 2BHK Apartments — Baner", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" },
    { title: "Premium Villa — Kharadi", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" },
    { title: "Commercial Office Space — Hinjewadi", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" },
    { title: "Luxury Row House — Balewadi", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" }
  ];

  const steps = [
    "Browse Properties Online",
    "Schedule a Virtual Consultation",
    "Take an e-Tour via Video Call",
    "Complete Documentation Remotely",
    "Authorize Family for Site Visits (if needed)",
    "Own Your Property Hassle-Free"
  ];

  const testimonials = [
    { name: "Rajesh N.", country: "Dubai", text: "Pune Realty made buying my Baner flat from Dubai completely stress-free!" },
    { name: "Priya S.", country: "Singapore", text: "The virtual tour experience was so detailed, I felt like I was there in person." },
    { name: "Amit P.", country: "London", text: "Their documentation support saved me countless hours and made the process seamless." },
    { name: "Sneha M.", country: "Toronto", text: "As a first-time NRI investor, I appreciated their patient guidance throughout." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm mb-4">Home / NRI Services</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">NRI Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              "Exclusive Real Estate Solutions for Our Global Clients."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGlobe className="mr-2" />
                Explore Properties
              </motion.button>
              <motion.button 
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiVideo className="mr-2" />
                Watch Virtual Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="NRI Client Video Call" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Your Trusted Real Estate Partner in Pune — No Matter Where You Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Buying or selling property from abroad has never been this effortless. Pune Realty offers a complete digital real estate experience for NRIs — from virtual tours and e-brochures to online documentation and site visits coordinated with family members.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800">Virtual property tours from anywhere in the world</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800">End-to-end digital documentation process</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800">Family-assisted site visits when needed</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800">Legal support and compliance guidance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Exclusive NRI Services Section */}
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
              What We Offer
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
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

      {/* Virtual Assistance Section */}
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
              Buy or Sell Property — Without Leaving Your Home
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
              Through our fully digital service platform, NRIs can explore properties, request virtual tours, and finalize deals seamlessly.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {virtualAssistance.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
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
              Discover the Best Investment Opportunities in Pune
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-64">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-bold text-sm">{property.title}</h3>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <button className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Our NRI Service Works
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-yellow-500 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our NRI Clients Say
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-blue-200 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-blue-100 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Pune Property, Just a Click Away.</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our NRI experts for a guided virtual experience today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFileText className="mr-2" />
                Send Enquiry
              </motion.button>
              <motion.button
                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiVideo className="mr-2" />
                Book Video Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NriServices;