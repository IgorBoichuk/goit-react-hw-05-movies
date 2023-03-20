import React, { useEffect, useState } from 'react';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const API_KEY = '452041465018fe0b65085f61bacde4ab';
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => console.log(json));
  });
  return (
    <div>
      <h1>My_Movies</h1>
    </div>
  );
};
