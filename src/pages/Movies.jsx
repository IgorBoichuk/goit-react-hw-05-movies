import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const API_KEY = '452041465018fe0b65085f61bacde4ab';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [queryMovie, setQueryMovie] = useState([]);
  const value = searchParams.get('filter');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ filter: inputValue });
  };

  useEffect(() => {
    if (value) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`
      )
        .then(response => response.json())
        .then(data => {
          setQueryMovie(data.results);
        });
    }
  }, [value]);

  return (
    <>
      <form className={style.form} type="submit" onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="input"
          onChange={event => setInputValue(event.currentTarget.value)}
          value={inputValue}
        />

        <button className={style.button} type="submit">
          Search movie
        </button>
      </form>
      <ul>
        {queryMovie.map(film => (
          <li key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: `/movies?query=${queryMovie}` }}
            >
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
