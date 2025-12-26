import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiYoutube, FiInstagram, FiFacebook, FiFileText, FiTrendingUp, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { FEATURE_FLAGS } from '../../config/featureFlags';

const OnlinePresence = () => {
  // Return null if the page is disabled
  if (!FEATURE_FLAGS.ONLINE_PRESENCE_PAGE) {
    return null;
  }
  
  const platforms = [
    {
      icon: <FiGlobe className="text-3xl text-yellow-500" />,
      title: "Website",
      description: "PuneRealty.in – Project updates & property details"
    },
    {
      icon: <FiFileText className="text-3xl text-yellow-500" />,
      title: "Blogs",
      description: "Insightful articles on real estate trends, localities, and legal tips"
    },
    {
      icon: <FiYoutube className="text-3xl text-red-600" />,
      title: "YouTube Channel",
      description: "Property walkthroughs & buyer guides"
    },
    {
      icon: <FiInstagram className="text-3xl text-pink-500" />,
      title: "Instagram",
      description: "Visual stories, new projects, and realty inspiration"
    },
    {
      icon: <FiFacebook className="text-3xl text-blue-600" />,
      title: "Facebook Page",
      description: "Community discussions & news updates"
    }
  ];

  const contentHighlights = [
    {
      icon: <FiTrendingUp className="text-2xl text-yellow-500" />,
      title: "Real Estate News",
      description: "Latest updates from Pune's property market"
    },
    {
      icon: <FiFileText className="text-2xl text-yellow-500" />,
      title: "Legal Procedures",
      description: "Guidance on real estate legalities"
    },
    {
      icon: <FiFileText className="text-2xl text-yellow-500" />,
      title: "Essential Documentation",
      description: "All required property documents"
    },
    {
      icon: <FiMapPin className="text-2xl text-yellow-500" />,
      title: "Locality Insights",
      description: "Detailed area guides and insights"
    },
    {
      icon: <FiBriefcase className="text-2xl text-yellow-500" />,
      title: "Builder Project Updates",
      description: "Latest developments from top builders"
    }
  ];

  const socialLinks = [
    { icon: <FiGlobe className="mr-2" />, name: "Visit Website", url: "#" },
    { icon: <FiInstagram className="mr-2" />, name: "Instagram", url: "#" },
    { icon: <FiYoutube className="mr-2" />, name: "YouTube", url: "#" },
    { icon: <FiFacebook className="mr-2" />, name: "Facebook", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm mb-4">Home / Online Presence</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Online Presence</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              "Connecting the Real Estate World with Digital Innovation."
            </p>
            <motion.button 
              className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Welcome to Pune Realty's Digital World</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Globalization and technological advancement have encouraged the real estate industry to step into the e-world, where we can avail everything at our fingertips!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Pune Realty, we've upscaled our professional services on digital platforms to enable customers to access any information they need — anytime, anywhere!
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Modern Workspace" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Online Platforms Section */}
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
              Our Digital Presence Across Platforms
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
              Stay updated through our growing online ecosystem.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
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
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-900">{platform.title}</h3>
                <p className="text-gray-600 text-center text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Transparency Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">All the Information You Need — Anytime</h2>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Our digital presence ensures that customers get access to the latest project developments, price updates, legal documents, and insights instantly.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you're exploring new projects, checking approvals, or browsing trending localities — Pune Realty is always a click away.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="City Skyline" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Highlights Section */}
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
              Explore Our Digital Content
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <motion.p 
              className="text-blue-100 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay informed, stay empowered.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contentHighlights.map((content, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {content.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-2">{content.title}</h3>
                <p className="text-blue-100 text-center text-sm">{content.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-yellow-500 rounded-2xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected With Pune Realty</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Follow us on all our platforms and never miss an update on Pune's thriving real estate market.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {link.icon}
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlinePresence;