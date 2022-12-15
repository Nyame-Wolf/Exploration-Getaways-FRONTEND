/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const getPackages = createAsyncThunk(
  'packages/getpackages',
  async () => {
    const response = await fetch('https://explorationgetaways.onrender.com/', {
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
// export const getPackages = createAsyncThunk(
//     'packages/getpackages',
//     async () => {
//       const response = await fetch('http://localhost:4000/');
//       return response.json();
//     },
//   );

export const agencySlice = createSlice({
  name: 'agency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getPackages.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getPackages.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default agencySlice.reducer;
