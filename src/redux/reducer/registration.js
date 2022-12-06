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
    });
  },
);

export const postSignIn = createAsyncThunk(
  'users/signin',
  async (user) => {
    await fetch('http://127.0.0.1:4000/login', {
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
      return res.text().then((text) => Promise.reject(text));
    });
  },
);

export const deleteSession = createAsyncThunk(
  'users/signout',
  async () => {
    await fetch('http://127.0.0.1:4000/logout', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((json) => Promise.reject(json));
    });
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
