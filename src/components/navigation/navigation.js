import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import {
  FaHome, FaShoppingCart, FaShoppingBag, FaInfo,
} from 'react-icons/fa';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isHamburgerActive);
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
      </ul>
    </nav>

  );
};

export default Navigation;
