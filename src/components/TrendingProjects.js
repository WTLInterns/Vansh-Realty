import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrendingProjects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Property data for the grid
  const properties = [
    {
      id: 1,
      name: "Skyline Towers",
      location: "Baner, Pune",
      price: "₹98 Lakhs",
      description: "Luxurious 2 BHK apartment with premium amenities",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Palm Vista",
      location: "Wakad, Pune",
      price: "₹85 Lakhs",
      description: "Modern 3 BHK villa with spacious living areas",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Emerald Greens",
      location: "Hinjewadi, Pune",
      price: "₹1.2 Cr",
      description: "Eco-friendly residency with green surroundings",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Blue Ridge",
      location: "Balewadi, Pune",
      price: "₹95 Lakhs",
      description: "Contemporary design with smart home features",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Elite Residences",
      location: "Kharadi, Pune",
      price: "₹1.1 Cr",
      description: "Premium apartments with top-notch security",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Tranquil Homes",
      location: "Bavdhan, Pune",
      price: "₹78 Lakhs",
      description: "Peaceful living with excellent connectivity",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trending Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            You are welcome to check out our house gallery to make sure that all apartments are in prime condition which makes them a perfect living space. 
            As one of the top 10 real estate brokers in Pune, we offer a diverse range of flats in Pune, including 2 BHK and 3 BHK options. 
            Our apartments are meticulously designed to provide comfort, style, and functionality. 
            Take a virtual tour of our house gallery and discover your dream home today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Image - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Featured Project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Property Cards Grid - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div 
                  key={property.id}
                  className="relative h-48 cursor-pointer"
                  onClick={() => handleFlip(property.id)}
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={false}
                    animate={{ rotateY: flippedCards[property.id] ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side - Property Image */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-md"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Back Side - Property Details */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl bg-white shadow-md p-4 flex flex-col justify-between"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{property.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{property.location}</p>
                      </div>
                      <div>
                        <p className="text-amber-500 font-bold">{property.price}</p>
                        <p className="text-gray-500 text-xs mt-1">{property.description}</p>
                      </div>
                      <motion.button
                        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full py-1 px-3 text-sm mt-2 self-start"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;