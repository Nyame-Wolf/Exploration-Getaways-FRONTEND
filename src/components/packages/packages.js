import React from 'react';
import { useSelector } from 'react-redux';
import { FaPlaneDeparture, FaRegCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import './packages.css';
import { Link } from 'react-router-dom';
import loadingGif from '../../assets/images/loading.gif';

function Packages() {
  const packages = useSelector((state) => state.agencyReducer.data);
  const status = useSelector((state) => state.agencyReducer.status);
  console.log(status === 'succeeded' ? packages : '...');

  return (
    <>
      {status === 'succeeded' ? packages.map((item) => (
        <Link state={item} key={item.id} to="package/details">
          <div key={item.id} className="package">
            <div className="package-image-div">
              <img src={item.photo} className="package-image" alt="package-view" />
              <div className="promotion">
                <span>
                  -
                  {item.promotion}
                  %
                </span>
              </div>
              {item.flight
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
                <p className="title">{item.title}</p>
                <p className="description">click to read more</p>
                <div className="included">
                  <FaGlobeAmericas />
                  <span>
                    {' '}
                    {item.destination}
                  </span>
                </div>
                <div className="included">
                  <FaRegCalendarAlt />
                  <span>
                    {' '}
                    {item.hotel}
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
                  {item.price}
                </span>
                <span>
                  {' '}
                  for
                  {' '}
                </span>
                <p className="price">
                  $
                  {(item.price * ((100 - item.promotion) / 100)).toFixed(0)}
                </p>
                <span>12x payment</span>
              </div>
            </div>
          </div>
        </Link>
      )) : <img src={loadingGif} alt="loading" /> }
    </>
  );
}

export default Packages;
