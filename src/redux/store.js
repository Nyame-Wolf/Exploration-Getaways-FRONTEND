/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import reservations from './reducer/reservations';
import agency from './reducer/reducer';
import registration from './reducer/registration';
import user from './reducer/user';

const store = configureStore({
  reducer: {
    agency,
    reservations,
    registration,
    user,
  },
});

export default store;
