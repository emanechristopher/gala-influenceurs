import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-noir">
      <Navbar />
      <main className="bg-noir">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;