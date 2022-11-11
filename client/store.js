import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './features/auth/authSlice';
import usersSlice from './app/slice/usersSlice';
import singleUserSlice from './app/slice/singleUserSlice';
import allFunkoPopReducer from './app/slice/allFunkoSlice'
import singleFunkoPopReducer  from './app/slice/oneFunkoSlice';
import allOrderReducer from './app/slice/allOrderSlice';
import singleOrderReducer from './app/slice/singleOrderSlice';
import singleOrderWithFunkoPopReducer from './app/slice/cartProducts'

const store = configureStore({
  reducer: { 
    auth: authReducer,
    usersSlice,
    singleUserSlice,
    allFunkoPops:allFunkoPopReducer,
    singleFunkoPop:singleFunkoPopReducer,
    allOrder: allOrderReducer,
    singleOrder: singleOrderReducer,
    cart:singleOrderWithFunkoPopReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



export default store;
export * from './features/auth/authSlice';
