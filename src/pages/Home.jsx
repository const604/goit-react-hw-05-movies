import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movies) {
      return;
    }

    async function fetchData() {
      try {
        const response = await getTrendingMovies();console.log(response);
        // setRender(true);
        // setIsLoading(false);
        setMovies(response.data.hits);
        // setIsLoadMore(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return <div>Home</div>;
};

export default Home;
