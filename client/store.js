import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './features/auth/authSlice';
import usersSlice from './app/slice/usersSlice';
import singleUserSlice from './app/slice/singleUserSlice';
import allFunkoPopsSlice from './app/slice/allFunkoSlice';
import singleFunkoPopSlice from './app/slice/oneFunkoSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    users:usersSlice,
    singleUser:singleUserSlice,
    funkoPops:allFunkoPopsSlice,
    singleFunkoPop:singleFunkoPopSlice,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './features/auth/authSlice';
