import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/Api';
import { Link, useLocation } from 'react-router-dom';
import { Gallery } from 'services/Movies.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!movies) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('error');
      }
    }
    fetchData();
  }, []);

  return (
    <Gallery>
      {movies &&
        movies.map(({ id, title, poster_path }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <li>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549820_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-2.jpg'
                }
                alt={title}
                width={270}
              />
            </li>
          </Link>
        ))}
    </Gallery>
  );
};

export default Home;
