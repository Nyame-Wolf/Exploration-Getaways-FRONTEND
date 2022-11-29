/* eslint-disable linebreak-style */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import DatePicker from 'react-multi-date-picker';
import { postReservations } from '../../redux/reducer/reservations';
import loadingGif from '../../assets/images/loading.gif';
import './bookings.css';

function Bookings() {
  const dispatch = useDispatch();
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

  const handleSubmit = () => {
    const postObject = {
      start_date: startDate.toString(),
      end_date: endDate.toString(),
      package_id: packages[`${selectedPackage}`].id,
      user_id: 1,
    };

    dispatch(postReservations(postObject));
  };

  return (
    <>
      {status === 'succeeded' ? (
        <form onSubmit={handleSubmit}>
          <DatePicker
            value={startDate}
            onChange={setStartDate}
            format="DD/MM/YYYY"
            placeholder="Choose Start Date"
          />

          <DatePicker
            value={endDate}
            onChange={setEndDate}
            format="DD/MM/YYYY"
            placeholder="Choose End Date"
          />

          <select value={selectedPackage} onChange={handleSelectChange}>
            {packages.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          <br />

          <input type="submit" value="Submit" />
        </form>
      ) : <img src={loadingGif} alt="loading" /> }

      <Link to="/">
        Go Back
      </Link>
    </>
  );
}

export default Bookings;
