/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-multi-date-picker';
import './bookings.css';
import transition from 'react-element-popper/animations/transition';
import opacity from 'react-element-popper/animations/opacity';
import { FaArrowLeft } from 'react-icons/fa';
import { postReservations } from '../../redux/reducer/reservations';
import loadingGif from '../../assets/images/loading.gif';

function Bookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packages = useSelector((state) => state.agencyReducer.data);
  const status = useSelector((state) => state.agencyReducer.status);
  const location = useLocation();
  const detailsPackage = location.state;
  let initialSelection;

  { detailsPackage ? initialSelection = detailsPackage.id : initialSelection = 1; }

  const [startDate, setStartDate] = useState('Choose Start Date');
  const [endDate, setEndDate] = useState('Choose End Date');
  const [selectedPackage, setSelectedPackage] = useState(initialSelection);

  const handleSelectChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postObject = {
      start_date: startDate.toString(),
      end_date: endDate.toString(),
      package_id: packages[selectedPackage - 1].id,
      user_id: 1,
    };

    dispatch(postReservations(postObject));
    navigate('/reservations');
  };

  return (
    <div className="bookings-container">
      <div>
        <p className="form-title-1">Take Only Memories,</p>
        <p className="form-title-2">Leave Only Footprints</p>
      </div>
      {status === 'succeeded' ? (
        <form className="bookings-form" onSubmit={handleSubmit}>
          <div className="start-div">
            <DatePicker
              value={startDate}
              onChange={setStartDate}
              format="DD/MM/YYYY"
              placeholder="Choose Start Date"
              animations={[
                opacity(),
                transition({
                  from: 40,
                  transition: 'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                }),
              ]}
            />
          </div>

          <div className="end-div">
            <DatePicker
              value={endDate}
              onChange={setEndDate}
              format="DD/MM/YYYY"
              placeholder="Choose End Date"
              animations={[
                opacity(),
                transition({
                  from: 40,
                  transition: 'all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)',
                }),
              ]}
            />
          </div>

          <br />

          <div className="booking-buttons-div">
            <select value={selectedPackage} onChange={handleSelectChange}>
              {packages.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <input className="form-button" type="submit" value="Submit" />
          </div>
        </form>
      ) : <img className="loading-gif" src={loadingGif} alt="loading" /> }

      <Link className="back-button" to="/">
        <FaArrowLeft />
      </Link>
    </div>
  );
}

export default Bookings;
