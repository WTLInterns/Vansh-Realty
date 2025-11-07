import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ganesh W.",
      location: "Pune",
      project: "Project: VTP Bellissimo Hinjewadi, 2BHK",
      text: "Vansh Realty made our property investment in Pune seamless. Their team's expertise and attention to detail were impressive. Highly recommended for both NRIs and local buyers!"
    },
    {
      name: "Sanjay M.",
      location: "Mumbai",
      project: "Project: Lodha World Crest, Kharadi 3BHK",
      text: "As a first-time homebuyer, I was overwhelmed with choices. The team at Vansh Realty guided me through every step, ensuring I found the perfect home within my budget."
    },
    {
      name: "Somesh G.",
      location: "Hyderabad",
      project: "Project: Kolte Patil Crimson, Balewadi 2BHK",
      text: "I've worked with several real estate consultants, but none matched the professionalism and market knowledge of Vansh Realty. They truly understand Pune's property landscape."
    },
    {
      name: "Mandar M.",
      location: "USA",
      project: "Project: Godrej Imperium, Wakad 4BHK",
      text: "Being based in the US, investing in Indian real estate seemed daunting. Vansh Realty's NRI services made the entire process smooth. Their virtual tours were incredibly helpful."
    },
    {
      name: "Anup S.",
      location: "Canada",
      project: "Project: Shapoorji Pallonji, Hinjewadi 3BHK",
      text: "The documentation support provided by Vansh Realty was exceptional. They handled all the legal complexities, allowing me to focus on other aspects of my relocation."
    },
    {
      name: "Priya K.",
      location: "Bangalore",
      project: "Project: Brigade Exotica, Viman Nagar 4BHK",
      text: "Their investment advice proved invaluable. I've seen significant returns on properties they recommended. Their market insights are second to none."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TESTIMONIALS</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "Real Stories from Happy Homeowners and Investors"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 relative z-10">
        <nav className="text-sm">
          <a href="/" className="text-blue-600 hover:text-blue-800">Home</a> / 
          <span className="text-gray-500 ml-1">Testimonials</span>
        </nav>
      </div>

      {/* Testimonials Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real stories from happy homeowners and investors who trusted Pune Realty
            </motion.p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-yellow-500 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current text-lg" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Project name */}
                <p className="text-blue-800 font-medium text-sm mb-3">{testimonial.project}</p>
                
                {/* Client info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <div className="flex items-center text-gray-600 text-xs">
                      <FiMapPin className="mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-3">
            <button className="w-10 h-10 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all">
              <FiChevronLeft />
            </button>
            <button className="w-10 h-10 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all">
              <FiChevronRight />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-blue-900 mb-1">2100+</div>
              <p className="text-gray-700">Happy Clients</p>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-900 mb-1">562+</div>
              <p className="text-gray-700">Properties Sold</p>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-blue-900 mb-1">862+</div>
              <p className="text-gray-700">Projects Completed</p>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
              <p className="text-gray-700">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
              Have you worked with us? We'd love to hear about your experience and feature it here 
              to help others make informed decisions.
            </p>
            <motion.button 
              className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Testimonial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;