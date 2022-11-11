import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import LandingPage from '../features/home/LandingPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <AppRoutes />

    </div>
  );
};

export default App;
