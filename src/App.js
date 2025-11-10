import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LuxuryProjects from './components/LuxuryProjects';
import PropertyTypes from './components/PropertyTypes';
import TopBuilders from './components/TopBuilders';
import TrendingProjects from './components/TrendingProjects';
import Statistics from './components/Statistics';
import PropertyCollection from './components/PropertyCollection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AboutLayout from './components/AboutLayout';
import Overview from './components/about/Overview';
import OnlinePresence from './components/about/OnlinePresence';
import OfflinePresence from './components/about/OfflinePresence';
import NriServices from './components/about/NriServices';
import Testimonials from './components/about/Testimonials';
import Blogs from './components/about/Blogs';
import ResidentialProjects from './components/ResidentialProjects';
import MediaPage from './components/MediaPage';
import VideosPage from './components/VideosPage';
import HappyClientsPage from './components/HappyClientsPage';

// Simple component for Contact page
const ContactPage = () => (
  <div className="min-h-screen pt-16">
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Get in touch with our team of real estate experts.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Phone"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Address</h3>
                <p className="text-gray-600">703, Gera's Imperium Alpha, Kharadi, Pune - 411014</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 9595969262</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">info@vanshrealty.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <LuxuryProjects />
              <PropertyTypes />
              <TopBuilders />
              <TrendingProjects />
              <Statistics />
              <PropertyCollection />
              {/* Removed EmailJSTest component */}
              <Footer />
              <FloatingActions />
            </>
          } />
          <Route path="/about/*" element={<AboutLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="online-presence" element={<OnlinePresence />} />
            <Route path="offline-presence" element={<OfflinePresence />} />
            <Route path="nri-services" element={<NriServices />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          <Route path="/services" element={
            <>
              <Header />
              <ResidentialProjects />
              <Footer />
              <FloatingActions />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Header />
              <MediaPage />
              <Footer />
              <FloatingActions />
            </>
          } />
          <Route path="/media/videos" element={
            <>
              <Header />
              <VideosPage />
              <Footer />
              <FloatingActions />
            </>
          } />
          <Route path="/media/testimonials" element={
            <>
              <Header />
              <HappyClientsPage />
              <Footer />
              <FloatingActions />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <ContactPage />
              <Footer />
              <FloatingActions />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;