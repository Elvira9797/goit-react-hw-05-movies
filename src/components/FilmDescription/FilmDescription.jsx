import { Outlet } from 'react-router-dom';
import {
  StyledFilmImg,
  StyledDescription,
  StyledFilmDescription,
  StyledLink,
  StyledNavList,
  StyledGenres,
} from './FilmDescription.styled';
// import noImage from '../../images/no-image.jpg';

const FilmDescription = ({
  film: {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    release_date,
    genres,
  },
}) => {
  const getGenres = () => {
    const genresName = genres.map(genre => genre.name);
    return genresName.join(', ');
  };

  return (
    <section>
      <StyledFilmDescription>
        <StyledFilmImg
          src={
            poster_path && `https://image.tmdb.org/t/p/original/${poster_path} `
          }
          alt={title ?? name}
        />
        <StyledDescription>
          <h1>
            {title ?? name} ({release_date?.substring(0, 4)})
          </h1>
          <StyledGenres>
            User score: {Math.round((vote_average / 10) * 100)}%
          </StyledGenres>

          <h2>Overview</h2>
          <p>{overview}</p>

          <h2>Genres</h2>
          <p>{genres && getGenres()}</p>
        </StyledDescription>
      </StyledFilmDescription>
      <StyledNavList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </StyledNavList>
      <Outlet />
    </section>
  );
};
export default FilmDescription;
