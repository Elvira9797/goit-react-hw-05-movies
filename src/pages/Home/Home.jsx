import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'services/api';
import TrendingFilms from 'components/TrendingFilms';
import handleError from 'helpers';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingFilms();
        setTrendingFilms(data.results);
      } catch (error) {
        handleError(setError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {trendingFilms && <TrendingFilms trendingFilms={trendingFilms} />}
    </>
  );
};

export default Home;
