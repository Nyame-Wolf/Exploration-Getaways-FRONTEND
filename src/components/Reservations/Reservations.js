import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReservations } from '../../redux/reducer/reservations';

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
    <>
      {reservations.map((reservation) => (
        <li key={reservation.id}>
          {packages[reservation.package_id]
            ? (
              <div>
                <h1>{packages[reservation.package_id].title}</h1>
                <button type="button" onClick={console.log(1)}>click me</button>
              </div>
            )
            : null}
        </li>
      ))}

      <Link to="/">
        Go Back
      </Link>
    </>
  );
};

export default Reservations;
