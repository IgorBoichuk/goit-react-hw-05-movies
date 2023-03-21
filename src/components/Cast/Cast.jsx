import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const API_KEY = '452041465018fe0b65085f61bacde4ab';
const getPhotoURL = profilePath => {
  if (profilePath) {
    return `https://www.themoviedb.org/t/p/w276_and_h350_face${profilePath}`;
  }
};

const Cast = () => {
  const { id } = useParams();

  const [actorInfo, setActorInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setActorInfo(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {actorInfo.cast?.map(actor => (
          <li key={actor.id}>
            <img
              src={getPhotoURL(actor.profile_path)}
              alt=""
              width="250px"
              height="300px"
            />
            <h2> {actor.original_name}</h2>
            <p>Character: {actor.character}</p>
            <p>Popularity: {actor.popularity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
