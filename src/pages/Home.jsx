import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=452041465018fe0b65085f61bacde4ab`
    )
      .then(response => response.json())
      .then(json => setMovies(json.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ol>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
