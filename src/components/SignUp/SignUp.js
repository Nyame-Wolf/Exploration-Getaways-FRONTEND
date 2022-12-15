/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../../redux/reducer/registration';

function SignUp() {
  const navigate = useNavigate();
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
    navigate('/sign-in');
  };
  return (
    <div className="login-container">
      <div className="login-image" />
      <div className="login">
        <h1 className="login-title">Sign Up</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="input-box"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="input-box"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="input-box"
            value={password}
            onChange={(e) => { setpassword(e.target.value); }}
          />
          <input
            placeholder="Password Confirmation"
            type="password"
            name="password_confirmation"
            className="input-box"
            value={confirm_password}
            onChange={(e) => { setPasswordConfirmation(e.target.value); }}
          />
          <input className="submit-login" type="submit" value="Sign Up" />
          <div>
            <Link to="/sign-in">sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
