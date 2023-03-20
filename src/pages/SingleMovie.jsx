import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>SingleMovie</h1>
      <h2>{id}</h2>{' '}
    </div>
  );
};
