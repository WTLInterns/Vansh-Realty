import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHome, FiSmile, FiPhone } from 'react-icons/fi';

const Statistics = () => {
  const stats = [
    { 
      number: '862', 
      title: 'Builder & Developers', 
      description: 'Leading construction companies and developers working with us to deliver quality projects.',
      icon: <FiUsers className="text-2xl" /> 
    },
    { 
      number: '562', 
      title: 'Properties', 
      description: 'Residential and commercial properties available for your dream home or business space.',
      icon: <FiHome className="text-2xl" /> 
    },
    { 
      number: '2100', 
      title: 'Happy Clients', 
      description: 'Satisfied customers who found their perfect property through our platform.',
      icon: <FiSmile className="text-2xl" /> 
    },
    { 
      number: '+91 98900 55558', 
      title: 'Contact Us', 
      description: 'Get in touch with our experts for personalized property consultation.',
      icon: <FiPhone className="text-2xl" />
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md transition-all duration-300 w-full max-w-[250px] min-h-[300px] mx-auto hover:bg-gradient-to-b hover:from-white hover:to-gray-100"
            >
              <div className="mb-4 text-blue-600">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{stat.title}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{stat.description}</p>
              <div className="text-2xl font-bold text-blue-600 mt-auto">{stat.number}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;