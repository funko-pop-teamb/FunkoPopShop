import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { AllFunkos, LandingPage, SingleFunko } from '../features/allfeatures'
import { me } from '../store';
import { fetchSingleUser } from './slice/singleUserSlice';
import Cart from '../features/cart/Cart';
/*
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
// const {userType}=useSelector((state)=>  state.auth.me)
// console.log('*******'+userType)

useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>

          <Route path="/*" element={<Home />} />

          <Route path='/funkoPops/:funkoId/*' element={<SingleFunko />} />
          {/* <Route path="/home" element={<LandingPage />} /> */}
          <Route path="/funkoPops" element={<AllFunkos />} />
          <Route path="/cart/:userId" element={<Cart />} />
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
          <Route path="/cart" element={<Cart />} />

        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
