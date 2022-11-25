import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <nav className="navigation-container">
    <ul className="navigation-ul">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/booking">
          BOOKINGS
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reservations">
          RESERVATIONS
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/about">
          ABOUT
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
