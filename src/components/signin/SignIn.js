/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignIn } from '../../redux/reducer/registration';
import { getUser } from '../../redux/reducer/user';
import logoGif from '../../assets/images/ExplorationGetaways.gif';
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
    <div className="login-container">
      {currentUser.name ? navigate('/') : ''}
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
  );
}

export default SignIn;
