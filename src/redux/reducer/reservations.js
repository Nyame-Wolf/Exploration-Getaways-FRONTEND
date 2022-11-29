/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const getReservations = createAsyncThunk(
  'bookings/getReservation',
  async () => {
    const response = await fetch('http://127.0.0.1:4000/bookings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const postReservations = createAsyncThunk(
  'bookings/postReservation',
  async (object) => {
    await fetch('http://127.0.0.1:4000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    });
    console.log(object);
  },
);

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getReservations.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default reservationSlice.reducer;
