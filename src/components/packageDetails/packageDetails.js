import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlaneDeparture, FaRegCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import './packageDetails.css';

function Package() {
  const location = useLocation();
  const singlePackage = location.state;
  console.log(singlePackage);

  return (
    <div className="details-container">
      <div>
        <div>
          <img src={singlePackage.photo[0]} className="details-image" alt="package-view" />
          <div>
            <span>
              -
              {singlePackage.promotion}
              %
            </span>
          </div>
          {singlePackage.flight
            ? (
              <div>
                <span>Flight included</span>
                <FaPlaneDeparture />
              </div>
            )
            : ''}
        </div>
        <div>
          <div>
            <p>{singlePackage.title}</p>
            <p>{singlePackage.description}</p>
            <div>
              <FaGlobeAmericas />
              <span>
                {' '}
                {singlePackage.destination}
              </span>
            </div>
            <div>
              <FaRegCalendarAlt />
              <span>
                {' '}
                {singlePackage.hotel}
              </span>
            </div>
          </div>
          <div>
            <span>
              from
              {' '}
            </span>
            <span>
              $
              {(singlePackage.price)}
            </span>
            <span>
              {' '}
              for
              {' '}
            </span>
            <p>
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

      <Link state={singlePackage} to="/booking">
        Book this package
      </Link>
    </div>
  );
}

export default Package;
