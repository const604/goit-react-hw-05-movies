import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../services/Api';
import {
  SearchBar,
  SearchForm,
  Button,
  Label,
  Input,
  Gallery,
} from '../../services/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchQuery.trim() === ''
      ? alert('Enter another word to search') || setSearchParams({})
      : setSearchParams({ query: searchQuery }) || setSearchQuery('');
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getSearchMovies(movieName);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieName]);

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <Button type="submit">
            <Label>Search</Label>
          </Button>

          <Input
            type="text"
            value={searchQuery}
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={updateQueryString}
          />
        </SearchForm>
      </SearchBar>

      <Gallery>
        {movies?.map(({ id, title, poster_path }) => (
          <Link key={id} to={`${id}`} state={{ from: location }}>
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
    </>
  );
};

export default Movies;
