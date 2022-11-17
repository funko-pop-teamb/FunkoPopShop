import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import LandingPage from '../features/home/LandingPage';
import Footer from '../features/footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  return (

    <div>
      <Navbar />
      <LandingPage/>
      <AppRoutes />
      <ToastContainer />
<Footer />
    </div>
  );
};

export default App;
