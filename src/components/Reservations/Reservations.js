/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaPlaneDeparture, FaRegCalendarAlt, FaGlobeAmericas, FaPlaneArrival,
} from 'react-icons/fa';
import { deleteReservations, getReservations } from '../../redux/reducer/reservations';
import './reservations.css';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.data);
  const reservations = useSelector((state) => state.reservations.data);
  const status = useSelector((state) => state.reservations.status);
  const packages = useSelector((state) => state.agency.data.reduce((acc, next) => {
    acc[next.id] = next;
    return acc;
  }, {}));

  useEffect(() => {
    dispatch(getReservations());
    currentUser.name ? null : navigate('/sign-in');
  }, []);

  return (
    <>
      <div className="reservations-container">
        {status === 'succeeded' ? (
          reservations.map((reservation) => (
            <li className="reservation" key={reservation.id}>
              {packages[reservation.package_id]
                ? (
                  <>
                    <div className="reservation-info">
                      <img className="reservation-photo" src={packages[reservation.package_id].photo[0]} alt="reservation" />
                      <div>
                        <p className="reservation-title">{packages[reservation.package_id].title}</p>
                        <div className="reservation-included">
                          <FaGlobeAmericas />
                          <p>{packages[reservation.package_id].destination}</p>
                        </div>
                        <div className="reservation-included">
                          <FaRegCalendarAlt />
                          <p>{packages[reservation.package_id].hotel}</p>
                        </div>
                        <div className="reservation-included">
                          <FaPlaneDeparture />
                          <p>{reservation.start_date.substring(0, 10)}</p>
                        </div>
                        <div className="reservation-included">
                          <FaPlaneArrival />
                          <p>{reservation.end_date.substring(0, 10)}</p>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={() => dispatch(deleteReservations(reservation.id))}>
                      <button className="cancel-reservation" type="submit">Cancel reservation</button>
                    </form>
                  </>
                )
                : null}
            </li>
          ))) : 'You have no reservations yet!'}

        <Link className="back-button back-button-color" to="/">
          <FaArrowLeft />
        </Link>
      </div>
    </>
  );
};

export default Reservations;
