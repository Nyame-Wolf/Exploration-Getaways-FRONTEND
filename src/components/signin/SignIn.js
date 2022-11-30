/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postSignIn } from '../../redux/reducer/registration';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(postSignIn(user));
  };
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>

        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />

        <input type="submit" value="Sign In" />
        <div>
          or

          <Link to="/sign-up">sign up</Link>
        </div>
      </form>
    </>
  );
}

export default SignIn;
