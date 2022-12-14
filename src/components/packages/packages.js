/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlaneDeparture, FaRegCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import './packages.css';
import { Link } from 'react-router-dom';
import loadingGif from '../../assets/images/loading.gif';
import { getPackages } from '../../redux/reducer/reducer';

function Packages() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.agency.data);
  const status = useSelector((state) => state.agency.status);

  useEffect(() => {
    dispatch(getPackages());
  }, []);

  return (
    <div className="home-container">
      {status === 'succeeded' ? packages.map((item) => (
        <Link state={item} key={item.id} to="package/details">
          <div key={item.id} className="package">
            <div className="package-image-div">
              <img src={item.photo[0]} className="package-image" alt="package-view" />
              {item.promotion
                ? (
                  <div className="promotion">
                    <span>
                      -
                      {item.promotion}
                      %
                    </span>
                  </div>
                )
                : ''}
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
                <div className="included-div">
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
              </div>
              <div className="information-price">
                {item.promotion
                  ? (
                    <div>
                      <span>
                        from
                        {' '}
                      </span>
                      <span className="line-strike">
                        $
                        {item.price}
                      </span>
                    </div>
                  )
                  : ''}
                <p className="price">
                  $
                  {(item.price * ((100 - item.promotion) / 100)).toFixed(0)}
                </p>
                <span>12x payment</span>
              </div>
            </div>
          </div>
        </Link>
      )) : <img className="loading-gif" src={loadingGif} alt="loading" /> }
    </div>
  );
}

export default Packages;
