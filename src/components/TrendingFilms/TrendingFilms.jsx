import { Link } from 'react-router-dom';
import {
  ImageTrendingFilm,
  StyledTrendingFilm,
  StyledTrendingFilmsGallery,
  Wrapper,
} from './TrendingFilms.styled';

const TrendingFilms = ({ trendingFilms }) => {
  return (
    <Wrapper>
      <StyledTrendingFilmsGallery>
        {trendingFilms.map(trendingFilm => (
          <StyledTrendingFilm key={trendingFilm.id}>
            <Link to={`movies/${trendingFilm.id}`}>
              <ImageTrendingFilm
                src={`https://image.tmdb.org/t/p/original/${trendingFilm.poster_path}`}
                alt={trendingFilm.title}
              />
            </Link>
          </StyledTrendingFilm>
        ))}
      </StyledTrendingFilmsGallery>
    </Wrapper>
  );
};
export default TrendingFilms;
