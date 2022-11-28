import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlaneDeparture, FaRegCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import './packageDetails.css';

function Package() {
  const location = useLocation();
  const singlePackage = location.state;
  console.log(singlePackage);

  return (
    <>
      <div className="package">
        <div className="package-image-div">
          <img src={singlePackage.photo} className="package-image" alt="package-view" />
          <div className="promotion">
            <span>
              -
              {singlePackage.promotion}
              %
            </span>
          </div>
          {singlePackage.flight
            ? (
              <div className="flight-icon">
                <span>Flight included</span>
                <FaPlaneDeparture />
              </div>
            )
            : ''}
        </div>
        <div className="package-information">
          <div className="information-texts">
            <p className="title">{singlePackage.title}</p>
            <p className="description">click to read more</p>
            <div className="included">
              <FaGlobeAmericas />
              <span>
                {' '}
                {singlePackage.destination}
              </span>
            </div>
            <div className="included">
              <FaRegCalendarAlt />
              <span>
                {' '}
                {singlePackage.hotel}
              </span>
            </div>
          </div>
          <div className="information-price">
            <span>
              from
              {' '}
            </span>
            <span className="line-strike">
              $
              {(singlePackage.price)}
            </span>
            <span>
              {' '}
              for
              {' '}
            </span>
            <p className="price">
              $
              {singlePackage.price * ((100 - singlePackage.promotion) / 100)}
            </p>
            <span>12x payment</span>
          </div>
        </div>
      </div>
      <Link to="/">
        Go Back
      </Link>
      <Link to="/booking">
        Book this package
      </Link>
    </>
  );
}

export default Package;
