import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const API_KEY = '452041465018fe0b65085f61bacde4ab';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <div style={{ fontWeight: 'bold', fontSize: '50px', color: 'red' }}>
          We don`t have any rewiews for this movie`
        </div>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
              <a href={review.url} target="_blank" rel="noreferrer">
                Original Page
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
