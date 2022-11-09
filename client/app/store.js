import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allFunkoPopReducer from './slice/allFunkoSlice';
import singleFunkoPopReducer  from './slice/oneFunkoSlice';
const store = configureStore({
  reducer: { 
    auth: authReducer,
    allFunkoPops:allFunkoPopReducer,
    singleFunkoPop:singleFunkoPopReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../../features/auth/authSlice';
