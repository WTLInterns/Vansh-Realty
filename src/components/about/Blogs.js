import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiTag, FiChevronRight, FiMapPin } from 'react-icons/fi';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Bavdhan's Biggest Launch is Here",
      excerpt: "Discover the most anticipated real estate launch in Bavdhan, featuring premium amenities and strategic location advantages.",
      date: "20th Aug 2025",
      category: "Latest Launches",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "New Commercial Launches in Pune: Where Your Business Gets a Prime Address",
      excerpt: "Explore the latest commercial projects in Pune that are redefining business districts with modern infrastructure.",
      date: "22nd Jul 2025",
      category: "Investment Tips",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "A New Chapter Begins in Pune's Most Talked-About Township",
      excerpt: "The newest development in Pune's premier township promises to set new benchmarks in luxury living.",
      date: "17th Jul 2025",
      category: "Market Trends",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Future-Ready Homes at Megapolis Circle, Pune",
      excerpt: "Innovative residential project at Megapolis Circle offering smart home features and sustainable living.",
      date: "10th Jul 2025",
      category: "Luxury Living",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Ultra-Luxury Living in Baner's Most Exclusive Neighborhood",
      excerpt: "Experience unparalleled luxury in Baner's newest ultra-premium residential development.",
      date: "7th Jul 2025",
      category: "Luxury Living",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Yashada Earthsong – Premium Naturements in Ravet, Pune West",
      excerpt: "Discover this eco-friendly development in Ravet that combines nature with modern amenities.",
      date: "1st Jul 2025",
      category: "Pune Insights",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Investment Hotspots in Pune's Western Corridor",
      excerpt: "An analysis of emerging investment opportunities in Pune's rapidly developing western region.",
      date: "25th Jun 2025",
      category: "Investment Tips",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Vastu Compliant Homes: What Buyers Should Know",
      excerpt: "Understanding the importance of Vastu principles in property selection and their impact on well-being.",
      date: "18th Jun 2025",
      category: "Vastu & Design",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Pune's Infrastructure Boom: What It Means for Real Estate",
      excerpt: "How upcoming infrastructure projects are reshaping Pune's real estate landscape and investment potential.",
      date: "12th Jun 2025",
      category: "Market Trends",
      image: "https://images.unsplash.com/photo-1560448205-2d94a21c5b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "Latest Launches", "Investment Tips", "Market Trends", "Luxury Living", "Vastu & Design", "Pune Insights"
  ];

  const popularTags = [
    "#PuneRealEstate", "#LuxuryHomes", "#Investment", "#PropertyNews", 
    "#Baner", "#Hinjewadi", "#Kharadi", "#Commercial"
  ];

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BLOG</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "Stay updated with the latest real estate trends, launches & insights"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm">
          <a href="/" className="text-blue-600 hover:text-blue-800">Home</a> → 
          <span className="text-gray-500 ml-1">Blog</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search Bar */}
              <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blogs</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  />
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center text-gray-700 hover:text-amber-500 transition-colors">
                        <FiChevronRight className="text-amber-500 mr-2" />
                        <span>{category}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-amber-500 font-medium">{post.category}</span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <FiCalendar className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      <button className="flex items-center text-blue-800 font-medium text-sm hover:text-amber-500 transition-colors">
                        Read More
                        <FiChevronRight className="ml-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white text-gray-700 border border-gray-200 flex items-center justify-center font-bold text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white text-gray-700 border border-gray-200 flex items-center justify-center font-bold text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                    3
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white text-gray-700 border border-gray-200 flex items-center justify-center font-bold text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                    <FiChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Looking for Your Dream Home in Pune?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
              Contact Pune Realty today for personalized assistance in finding your perfect property.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;