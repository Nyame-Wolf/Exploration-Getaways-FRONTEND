/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSignUp } from '../../redux/reducer/registration';

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm_password, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirm_password,
    };

    dispatch(postSignUp(user));
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => { setpassword(e.target.value); }}
        />

        <input
          placeholder="Password Confirmation"
          type="text"
          name="password_confirmation"
          value={confirm_password}
          onChange={(e) => { setPasswordConfirmation(e.target.value); }}
        />

        <input type="submit" value="Sign Up" />
        <div>
          or

          <Link to="/sign-in">sign In</Link>
        </div>
      </form>
    </>
  );
}

export default SignUp;
