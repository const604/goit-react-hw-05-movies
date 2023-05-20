import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/Api';
import { Gallery, ImgCast } from 'services/Movies.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!cast) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [cast, movieId]);

  return (
    <Gallery>
      {cast.length < 1 ? (
        <h3>We don't have any casts yet</h3>
      ) : (
        cast.map(({ cast_id, name, character, profile_path }) => (
          <ImgCast key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `https://kartinki.pibig.info/uploads/posts/2023-04/1681549767_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-3.jpg`
              }
              alt={name}
              width={200}
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </ImgCast>
        ))
      )}
    </Gallery>
  );
};

export default Cast;
