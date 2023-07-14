import {
  ImageTrendingFilm,
  StyledNameTrendingFilm,
  StyledTrendingFilm,
  StyledTrendingFilmsGallery,
  StyledTrendingLink,
  Wrapper,
} from './TrendingFilms.styled';
import PropTypes from 'prop-types';

const TrendingFilms = ({ trendingFilms }) => {
  return (
    <Wrapper>
      <StyledTrendingFilmsGallery>
        {trendingFilms.map(({ id, poster_path, title, name }) => (
          <StyledTrendingFilm key={id}>
            <StyledTrendingLink to={`movies/${id}`}>
              <ImageTrendingFilm
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title ?? name}
              />
              <StyledNameTrendingFilm>{title ?? name}</StyledNameTrendingFilm>
            </StyledTrendingLink>
          </StyledTrendingFilm>
        ))}
      </StyledTrendingFilmsGallery>
    </Wrapper>
  );
};

TrendingFilms.propTypes = {
  trendingFilms: PropTypes.array,
};

export default TrendingFilms;
