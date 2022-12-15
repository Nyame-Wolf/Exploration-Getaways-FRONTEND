import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaArrowLeft, FaChevronRight, FaChevronLeft, FaGlobeAmericas, FaShoppingCart,
} from 'react-icons/fa';
import './packageDetails.css';

function Package() {
  const [isReadMore, setReadMore] = useState(false);
  const [isModal, setModal] = useState(false);
  const location = useLocation();
  const singlePackage = location.state;

  const toggleReadMore = () => {
    setReadMore(!isReadMore);
  };

  const testThis = () => {
    setModal(!isModal);
  };

  return (
    <div className="details-container">
      <div className="details-image-div">
        <img src={singlePackage.photo[0]} className="details-image" alt="package-view" />
        <img src={singlePackage.photo[1]} className="details-image" alt="package-view" />
        <img src={singlePackage.photo[2]} className="details-image" alt="package-view" />
        <img src={singlePackage.photo[3]} className="details-image" alt="package-view" />
        <FaChevronLeft className="left-arrow" />
        <FaChevronRight className="right-arrow" />
      </div>

      <div className="details-info">
        <h2>{singlePackage.title}</h2>
        <div className="details-destination-div">
          <FaGlobeAmericas />
          <span className="details-destination">{singlePackage.destination}</span>
        </div>

        <Link className="book-button" state={singlePackage} to="/booking">
          Book this package
          <FaShoppingCart />
        </Link>

        <div className={isReadMore ? 'details-descriptioff' : 'details-description'}>
          <p>{singlePackage.description}</p>
          <br />
          <div className="flex">
            <FaChevronRight />
            <p>Price:</p>
            <p>{singlePackage.price}</p>
          </div>
          <div className="flex">
            <FaChevronRight />
            <p>Hotel:</p>
            <p>{singlePackage.hotel}</p>
          </div>
          <div className="flex">
            <FaChevronRight />
            <p>Flight:</p>
            <p>{singlePackage.flight ? 'Included' : 'Not Included'}</p>
          </div>
        </div>

        <button className="read-more" type="button" onClick={toggleReadMore}>Read more</button>
      </div>

      <div className={isModal ? 'toggleModal' : 'all-images-div'}>
        <div className="modals-scroll">
          <img
            role="presentation"
            onClick={testThis}
            src={singlePackage.photo[0]}
            className="details-small-image"
            alt="package-view"
            style={{
              width: isModal ? '100%' : '',
            }}
          />
          <img
            role="presentation"
            onClick={testThis}
            src={singlePackage.photo[1]}
            className="details-small-image"
            alt="package-view"
            style={{
              width: isModal ? '100%' : '',
            }}
          />
          <img
            role="presentation"
            onClick={testThis}
            src={singlePackage.photo[2]}
            className="details-small-image"
            alt="package-view"
            style={{
              width: isModal ? '100%' : '',
            }}
          />
          <img
            role="presentation"
            onClick={testThis}
            src={singlePackage.photo[3]}
            className="details-small-image"
            alt="package-view"
            style={{
              width: isModal ? '100%' : '',
            }}
          />
        </div>
      </div>

      <Link className="back-button back-button-color" to="/">
        <FaArrowLeft />
      </Link>
    </div>
  );
}

export default Package;
