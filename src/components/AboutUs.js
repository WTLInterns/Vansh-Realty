import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-80 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Vansh Realty</h2>
            <p className="text-gray-700 mb-6">
              Vansh Realty is a RERA-registered firm offering end-to-end property consulting with top developers in Pune. 
              We help clients find their dream homes, commercial spaces, and investment opportunities.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center">
              Read More <FiChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;