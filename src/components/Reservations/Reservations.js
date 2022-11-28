import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../redux/reducer/reservations';

const Reservations = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const packages = useSelector((state) => state.agencyReducer.data.reduce((acc, next) => {
    acc[next.id] = next;
    return acc;
  }, {}));
  console.log(packages);
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
          {reservation.id}
          {packages[reservation.package_id]
            ? <h1>{packages[reservation.package_id].title}</h1>
            : null}
        </li>
      ))}

    </>
  );
};

export default Reservations;
