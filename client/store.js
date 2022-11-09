import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './features/auth/authSlice';
import usersSlice from './app/slice/usersSlice';
import singleUserSlice from './app/slice/singleUserSlice';

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  usersSlice,
  singleUserSlice
});

export default store;
export * from './features/auth/authSlice';
