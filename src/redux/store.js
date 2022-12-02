/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import reservations from './reducer/reservations';
import agencyReducer from './reducer/reducer';
import registration from './reducer/registration';

const store = configureStore({
  reducer: {
    agencyReducer,
    reservations,
    registration,
  },
});

export default store;
