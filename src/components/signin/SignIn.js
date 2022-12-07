/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { postSignIn } from '../../redux/reducer/registration';
import logoGif from '../../assets/images/ExplorationGetaways.gif';
import './signin.css';
import { useIsAuthenticated } from '../../redux/hooks';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const authenticated = useIsAuthenticated();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    if (loading) { return; }
    setLoading(true);
    dispatch(postSignIn(user)).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };
  if (authenticated) {
    return <Navigate to="/" />;
  }
  return (

      <div className="login-container">
        <div className="login">
          <h1 className="login-title">Log In</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              className="input-box"
              onChange={(e) => { setEmail(e.target.value); }}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              className="input-box"
              onChange={(e) => { setPassword(e.target.value); }}
            />
            <input className="submit-login" type="submit" value="Sign In" />
            <div>
              Not a member?
              {' '}
              <Link to="/sign-up">Sign up</Link>
            </div>
          </form>
          <img className="logo-gif" src={logoGif} alt="logo-gif" />
        </div>

      </div>
    </div>
  );
}

export default SignIn;
