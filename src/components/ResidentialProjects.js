import React, { useState } from 'react';
import { FiPhone, FiHeart, FiMapPin, FiHome } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import EnquireModal from './EnquireModal';

const ResidentialProjects = () => {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      id: 1,
      name: "ANP Privado",
      location: "Baner",
      description: "Luxury residential project offering premium amenities and contemporary living spaces designed for modern families.",
      configuration: "2, 3, 4 BHK",
      area: "1250 SqFt – 2300 SqFt",
      price: "₹2.7 Crore – ₹5.0 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Birla Evam",
      location: "Kharadi",
      description: "Eco-friendly residential development with sustainable architecture and green living solutions.",
      configuration: "2, 3 BHK",
      area: "1100 SqFt – 1800 SqFt",
      price: "₹1.8 Crore – ₹3.5 Crore",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Sun Valley",
      location: "Hinjewadi",
      description: "Modern residential complex with panoramic views and state-of-the-art facilities for comfortable living.",
      configuration: "1, 2, 3 BHK",
      area: "850 SqFt – 1650 SqFt",
      price: "₹1.2 Crore – ₹3.0 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Sommet",
      location: "Wakad",
      description: "Contemporary residential project with smart home features and premium amenities for urban lifestyle.",
      configuration: "2, 3, 4 BHK",
      area: "1200 SqFt – 2200 SqFt",
      price: "₹2.5 Crore – ₹4.8 Crore",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Godrej Green Front",
      location: "Baner",
      description: "Sustainable living project with extensive green spaces and eco-conscious design principles.",
      configuration: "2, 3 BHK",
      area: "1150 SqFt – 1900 SqFt",
      price: "₹2.0 Crore – ₹4.0 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Godrej Aqua Retreat",
      location: "Kharadi",
      description: "Waterfront residential development offering serene environment with luxury amenities.",
      configuration: "2, 3, 4 BHK",
      area: "1300 SqFt – 2400 SqFt",
      price: "₹3.0 Crore – ₹5.5 Crore",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Godrej Aqua Vista",
      location: "Hinjewadi",
      description: "Premium waterfront property with panoramic views and world-class recreational facilities.",
      configuration: "3, 4 BHK",
      area: "1800 SqFt – 2800 SqFt",
      price: "₹4.5 Crore – ₹7.0 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "The 4th Axis by Lifecraft",
      location: "Pimple Saudagar",
      description: "Innovative residential project with smart technology integration and contemporary design.",
      configuration: "2, 3 BHK",
      area: "1050 SqFt – 1750 SqFt",
      price: "₹1.9 Crore – ₹3.8 Crore",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      name: "New Launch by Divyansh Group",
      location: "Bavdhan",
      description: "Newly launched residential project with modern amenities and strategic location advantages.",
      configuration: "1, 2, 3 BHK",
      area: "750 SqFt – 1500 SqFt",
      price: "₹1.0 Crore – ₹2.8 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      name: "Shapoorji Pallonji Vanaha Verdant",
      location: "Wagholi",
      description: "Luxury residential development by renowned builders with premium amenities and landscaping.",
      configuration: "2, 3, 4 BHK",
      area: "1400 SqFt – 2600 SqFt",
      price: "₹3.5 Crore – ₹6.5 Crore",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      name: "Zoy+",
      location: "Viman Nagar",
      description: "Contemporary residential project with modern architecture and smart home solutions.",
      configuration: "1, 2, 3 BHK",
      area: "900 SqFt – 1800 SqFt",
      price: "₹1.5 Crore – ₹3.6 Crore",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleWhatsAppClick = (project) => {
    // In a real application, you would integrate with WhatsApp API
    window.open('https://wa.me/919595969262?text=I%20am%20interested%20in%20' + encodeURIComponent(project.name), '_blank');
  };

  const handleEnquireClick = (project) => {
    setSelectedProject(project);
    setIsEnquireModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 relative rounded-xl overflow-hidden">
          {/* Background image for the heading section */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-80"></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative py-16 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🏠 Residential Projects in Pune</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our premium collection of residential projects across Pune
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
                  <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    <FiMapPin className="mr-1" />
                    {project.location}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm">
                    <FiHome className="text-amber-500 mr-2" />
                    <span className="text-gray-700">Configuration: <span className="font-medium">{project.configuration}</span></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiMapPin className="text-amber-500 mr-2" />
                    <span className="text-gray-700">Area: <span className="font-medium">{project.area}</span></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiHeart className="text-amber-500 mr-2" />
                    <span className="text-gray-700">Price: <span className="font-medium text-amber-600">{project.price}</span></span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleWhatsAppClick(project)}
                    className="flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <FaWhatsapp className="mr-2" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                  <button 
                    onClick={() => handleEnquireClick(project)}
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiPhone className="mr-2" />
                    <span className="text-sm font-medium">Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enquiry Modal */}
      <EnquireModal 
        isOpen={isEnquireModalOpen} 
        onClose={() => setIsEnquireModalOpen(false)} 
        project={selectedProject}
      />
    </div>
  );
};

export default ResidentialProjects;