import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const postSignUp = createAsyncThunk(
  'users/signup',
  async (user) => {
    await fetch('http://127.0.0.1:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    }).then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.headers.get('Authorization'));
        return res.json();
      }
      throw new Error(res);
    })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  },
);

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      postSignIn.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default reservationSlice.reducer;
