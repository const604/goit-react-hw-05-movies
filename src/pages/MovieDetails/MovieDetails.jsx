import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/Api';
import { MovieContainer, Info, AddInfo } from '../../services/Movies.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current}>Back to back</Link>
      <MovieContainer>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549820_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-2.jpg'
          }
          alt={movie.title}
          width={400}
        />
        <Info>
          <h1>{movie.title}</h1>
          <h2>{movie.tagline}</h2>
          <p>{movie.overview}</p>
          <h3>User average vote: {movie.vote_count}</h3>
          <div>
            <h3>Genres: {movie.genres?.map(({ name }) => name).join(', ')}</h3>
          </div>
          <h3>Data release: {movie.release_date}</h3>
        </Info>
      </MovieContainer>
      <AddInfo>
        <h4>Additional information</h4>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </AddInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
