/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignIn } from '../../redux/reducer/registration';
import { getUser } from '../../redux/reducer/user';
import './signin.css';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.data);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    if (loading) { return; }
    setLoading(true);
    dispatch(postSignIn(user)).then(() => {
      dispatch(getUser());
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  return (
    <>
      {currentUser.name ? navigate('/') : ''}
      <div className="login-container">
        <div className="login">
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
        </div>
      </div>
    </>
  );
}

export default SignIn;
