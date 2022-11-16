import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { AllFunkos, LandingPage, SingleFunko, AddFunko, SignUp, PersonalAccount } from '../features/allfeatures'
import { me } from '../store';
import Cart from '../features/cart/Cart';
import { fetchAllCartFunkos, filteredOrdersByStatus } from './slice/cartProducts';
import CheckOut from '../features/cart/CheckOut';
import PurchaseComplete from '../features/cart/purchaseComplete';

/*
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  // const {userType}=useSelector((state)=>  state.auth.me)
  // console.log('*******'+userType)
  const { id } = useSelector((state) => state.auth.me)
  const {cart, items} = useSelector((state) =>  state.cart )
  useEffect(async () => {
    dispatch(me());
    await dispatch(filteredOrdersByStatus(id))
    // await dispatch(fetchAllCartFunkos(cart.id))

  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path= "/account" element = {<PersonalAccount />} />

          <Route path='/funkoPops/:funkoId/*' element={<SingleFunko />} />
          {/* <Route path="/home" element={<LandingPage />} /> */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CheckOut />} />
          <Route path="/cart/checkout/complete" element={<PurchaseComplete/>} />

          <Route path="/funkoPops" element={<><AllFunkos /><AddFunko /></>} />
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
            element={<SignUp name="signup" displayName="Sign Up" />}
          />
          <Route path="/funkoPops" element={<AllFunkos />} />

          <Route path='/funkoPops/:funkoId/*' element={<SingleFunko />} />
          
          <Route path="/cart" element={<Cart />} />

        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
