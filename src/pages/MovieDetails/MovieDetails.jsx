import FilmDescription from 'components/FilmDescription/FilmDescription';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmById(movieId);
        setFilm(data);
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
      {error ? <p>{error}</p> : film && <FilmDescription film={film} />}
    </>
  );
};

export default MovieDetails;
