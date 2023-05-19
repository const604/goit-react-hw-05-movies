import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/Api';
import { Info } from 'services/Movies.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!reviews) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [reviews]);

  return (
    <>
      <Info>
        {reviews.length < 1 ? (
          <p>We don't have any reviews yet</p>
        ) : (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </Info>
    </>
  );
};

export default Reviews;
