import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const TopBuilders = () => {
  // Builder data
  const builders = [
    { id: 1, name: "Lodha", initial: "L", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 2, name: "Godrej", initial: "G", image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 3, name: "Shapoorji Pallonji", initial: "S", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 4, name: "Kolte Patil", initial: "K", image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 5, name: "VTP Realty", initial: "V", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 6, name: "Prestige", initial: "P", image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { id: 7, name: "Brigade", initial: "B", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <section className="py-10 md:py-14 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted Builders & Developers
        </motion.h2>
        
        <Marquee 
          gradient={false} 
          speed={25}
          pauseOnHover={true}
        >
          <div className="flex space-x-8 py-4">
            {builders.map((builder) => (
              <motion.div
                key={builder.id}
                className="bg-white shadow-md rounded-lg px-8 py-4 flex items-center hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  <img 
                    src={builder.image} 
                    alt={builder.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-gray-800 text-lg font-semibold font-montserrat">
                  {builder.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TopBuilders;