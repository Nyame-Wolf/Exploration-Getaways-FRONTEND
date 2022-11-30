/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { deleteReservations, getReservations } from '../../redux/reducer/reservations';
import './reservations.css';

const Reservations = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const packages = useSelector((state) => state.agencyReducer.data.reduce((acc, next) => {
    acc[next.id] = next;
    return acc;
  }, {}));

  useEffect(() => {
    if (loading) { return; }
    setLoading(true);
    dispatch(getReservations()).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="reservations-container">
      {reservations.length ? (
        reservations.map((reservation) => (
          <li className="reservation" key={reservation.id}>
            {packages[reservation.package_id]
              ? (
                <div>
                  <p>{packages[reservation.package_id].title}</p>
                  <p>{packages[reservation.package_id].destination}</p>
                  <p>{packages[reservation.package_id].hotel}</p>
                  <span>Refund(75%):</span>
                  <span>{packages[reservation.package_id].price * (((100 - packages[reservation.package_id].promotion) / 100) * 0.75).toFixed(0)}</span>
                  <form onSubmit={() => dispatch(deleteReservations(reservation.id))}>
                    <button type="submit">Cancel reservation</button>
                  </form>
                </div>
              )
              : null}
          </li>
        ))) : 'You have no reservations yet!'}

      <Link className="back-button back-button-color" to="/">
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default Reservations;
