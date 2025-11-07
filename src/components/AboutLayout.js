import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AboutLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-0">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;