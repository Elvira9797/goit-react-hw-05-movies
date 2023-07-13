import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastFilm } from 'services/api';
import {
  StyledCastImg,
  StyledCastItem,
  StyledCastList,
  StyledNameActor,
} from './Cast.styled';
import noImage from '../../images/no-image.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCastFilm(movieId);
        setCast(data.cast);
      } catch (error) {
        handleError();
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const handleError = () => {
    setError('Oops, some error occurred. Please, try again later.');
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {cast && (
        <StyledCastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <StyledCastItem key={id}>
              <StyledCastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original/${profile_path} `
                    : noImage
                }
                alt={cast.name}
              />
              <StyledNameActor>{name}</StyledNameActor>
              <span>Character: {character ? character : <span>-</span>}</span>
            </StyledCastItem>
          ))}
        </StyledCastList>
      )}
    </>
  );
};

export default Cast;
