import React from 'react';
import { motion } from 'framer-motion';

const PropertyCollection = () => {
  // Property data
  const properties = [
    {
      id: 1,
      name: "Skyline Towers",
      location: "Baner, Pune",
      price: "₹1.5 Cr - ₹4.2 Cr",
      featured: true,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Palm Vista",
      location: "Wakad, Pune",
      price: "₹95 Lakhs - ₹2.8 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Emerald Greens",
      location: "Hinjewadi, Pune",
      price: "₹85 Lakhs - ₹2.5 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Blue Ridge",
      location: "Balewadi, Pune",
      price: "₹1.2 Cr - ₹3.5 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Elite Residences",
      location: "Kharadi, Pune",
      price: "₹1.8 Cr - ₹4.0 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Tranquil Homes",
      location: "Bavdhan, Pune",
      price: "₹75 Lakhs - ₹2.2 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Crescent Villas",
      location: "Pimple Saudagar, Pune",
      price: "₹2.5 Cr - ₹5.5 Cr",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of luxury properties in prime locations across Pune
          </p>
        </div>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: [0, -320 * 7] }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear"
              }}
            >
              {[...properties, ...properties].map((property, index) => (
                <motion.div
                  key={`${property.id}-${index}`}
                  className="flex-shrink-0 w-80 mx-3"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                    <div className="relative">
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className="w-full h-48 object-cover"
                      />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${property.featured ? 'bg-amber-500 text-gray-900' : 'bg-blue-500 text-white'}`}>
                        {property.featured ? 'Featured' : 'New'}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{property.name}</h3>
                      <p className="text-gray-600 mb-3">{property.location}</p>
                      <p className="text-blue-800 font-bold mb-4">{property.price}</p>
                      <motion.button
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCollection;