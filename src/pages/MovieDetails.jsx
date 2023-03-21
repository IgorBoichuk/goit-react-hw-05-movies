import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './style.module.css';

const getPosterURL = posterPath => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  const API_KEY = '452041465018fe0b65085f61bacde4ab';

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
        <div></div>
      </div>
    </div>
  );
};
