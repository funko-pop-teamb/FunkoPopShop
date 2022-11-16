import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import LandingPage from '../features/home/LandingPage';
import Footer from '../features/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
