import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import { AllFunkos, LandingPage } from '../features/allfeatures'
import { me } from '../store';
import Home from '../features/home/Home.js'
import { fetchSingleUser } from './slice/singleUserSlice';
/*
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
const currentUser=useSelector(fetchSingleUser())
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>


          <Route path="/*" element={<Home />} />
          {/* <Route path="/home" element={<LandingPage />} /> */}
          <Route path="/funkoPops" element={<AllFunkos />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/funkoPops" element={<AllFunkos />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
