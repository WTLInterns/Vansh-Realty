import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHome, FaCalendarAlt, FaUsers, FaHammer, FaTree, FaCouch } from 'react-icons/fa';

const PropertyTypes = () => {
  const propertyTypes = [
    {
      id: 1,
      name: "Upcoming Launches",
      icon: <FaCalendarAlt className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "New Launch",
      icon: <FaHome className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Under Construction",
      icon: <FaHammer className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Ongoing Projects",
      icon: <FaBuilding className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "NA Villa Plots",
      icon: <FaTree className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Studios",
      icon: <FaCouch className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Top 10 Real Estate Brokers in Pune",
      icon: <FaUsers className="text-blue-800 text-xl mr-2" />,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Types</h2>
          <p className="text-gray-600">Explore projects by category and development stage.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <motion.div
              key={type.id}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl hover:from-amber-50 hover:to-white transition-all duration-300 ease-in-out text-center py-6 px-4 cursor-pointer shadow-sm hover:shadow-md border border-gray-100"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                {type.icon}
                <span className="text-gray-800 font-semibold text-lg">{type.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;