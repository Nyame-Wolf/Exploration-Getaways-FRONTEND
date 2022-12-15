/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const getReservations = createAsyncThunk(
  'bookings/getReservation',
  async () => {
    const response = await fetch('https://explorationgetaways.onrender.com/bookings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
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
    await fetch('https://explorationgetaways.onrender.com/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(object),
    });
  },
);

export const deleteReservations = createAsyncThunk(
  'bookings/deleteReservations',
  async (id) => {
    await fetch(`https://explorationgetaways.onrender.com/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
  },
);

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getReservations.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default reservationSlice.reducer;
