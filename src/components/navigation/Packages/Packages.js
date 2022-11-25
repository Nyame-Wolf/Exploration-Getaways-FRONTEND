import React from 'react';
import { useSelector } from 'react-redux';

function Packages() {
  const packages = useSelector((state) => state.agencyReducer.data);
  const status = useSelector((state) => state.agencyReducer.status);
  console.log(status === 'succeeded' ? packages : '...');
  return (
    <>
      <h1 className="title">{status === 'succeeded' ? 'Done' : '...'}</h1>
    </>
  );
}

export default Packages;
