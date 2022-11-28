import { configureStore } from '@reduxjs/toolkit';
import reservations from './reducer/reservations';
import agencyReducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    agencyReducer,
    reservations,

  },
});

export default store;
