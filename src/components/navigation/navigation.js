/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navigation.css';
import {
  FaHome, FaShoppingCart, FaShoppingBag, FaInfo,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteSession } from '../../redux/reducer/registration';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleClass = () => {
    setActive(!isHamburgerActive);
  };
  const handleLogout = (e) => {
    e.preventDefault;
    dispatch(deleteSession());
    navigate('/sign-in');
  };
  return (
    <nav className={isHamburgerActive ? 'navigation-container toggle-on' : 'navigation-container'}>
      <span>
        <span className="navigation-logo-1">
          EXPLORATION
        </span>
        <span className="navigation-logo-2">
          GETAWAYS
        </span>
      </span>

      <div className="hamburger-menu" onClick={toggleClass} onKeyDown={toggleClass} role="presentation">
        <div />
        <div />
        <div />
      </div>

      <ul className="navigation-ul">
        <li>
          <span className="navigation-logo-1">
            EXPLORATION
          </span>
          <span className="navigation-logo-2">
            GETAWAYS
          </span>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/" onClick={toggleClass}>
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/booking" onClick={toggleClass}>
            <FaShoppingCart />
            <span>Booking</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reservations" onClick={toggleClass}>
            <FaShoppingBag />
            <span>Reservations</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/about" onClick={toggleClass}>
            <FaInfo />
            <span>About</span>
          </NavLink>
        </li>
        <li>

          <form onSubmit={handleLogout}>
            <button type="submit">Logout</button>
          </form>

        </li>
      </ul>
    </nav>

  );
};

export default Navigation;
