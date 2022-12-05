/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navigation.css';
import {
  FaHome, FaShoppingCart, FaShoppingBag, FaInfo, FaSignOutAlt, FaExclamationCircle,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSession } from '../../redux/reducer/registration';
import worldGif from '../../assets/images/world.gif';
import mobilePhone from '../../assets/images/mobile1.png';
import airplane from '../../assets/images/airplane.png';
import text1 from '../../assets/images/text1.png';
import text2 from '../../assets/images/text2.png';

const Navigation = () => {
  const [isHamburgerActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.data);
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
      <span className="navigation-logo">
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
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/promotions" onClick={toggleClass}>
            <FaExclamationCircle />
            <span className="promotions">Promotions</span>
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
        {currentUser.name
          ? (
            <li>
              <form onSubmit={handleLogout}>
                <button className="logout" type="submit">
                  <FaSignOutAlt />
                  {' '}
                  Logout
                </button>
              </form>
            </li>
          )
          : (
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/sign-in" onClick={toggleClass}>
                <FaSignOutAlt />
                <span>Sign-in</span>
              </NavLink>
            </li>
          )}
      </ul>

      <div className="buy-now">
        <img className="world-spinning" src={worldGif} alt="world" />
        <img className="mobile-phone" src={mobilePhone} alt="mobile" />
        <img className="airplane" src={airplane} alt="airplane" />
        <img className="text1" src={text1} alt="text1" />
        <img className="text2" src={text2} alt="text2" />
      </div>
    </nav>

  );
};

export default Navigation;
