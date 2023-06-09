import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import style from './style.module.css';

const getPosterURL = posterPath => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

const API_KEY = '452041465018fe0b65085f61bacde4ab';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => setMovie(json));
  }, [id]);

  return (
    <div>
      <button className={style.button} onClick={handleBackBtn}>
        ⫷ Go back
      </button>
      <div className={style.moviewrapper}>
        <img
          className={style.poster}
          src={getPosterURL(movie.poster_path)}
          alt={movie.title || movie.name}
        />
        <div className={style.datailswrapper}>
          <h1 className={style.movietitle}>{movie.title || movie.name}</h1>
          <p className={style.overview}>Overview</p>
          <span className={style.description}>{movie.overview}</span>
          <p className={style.overview}>Genres</p>
          {movie.genres?.map(genre => (
            <span className={style.genres} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className={style.information}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
