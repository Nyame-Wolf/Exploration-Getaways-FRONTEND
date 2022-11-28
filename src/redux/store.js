/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import agencyReducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    agencyReducer,
  },
});

export default store;
