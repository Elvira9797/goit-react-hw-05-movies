import notFound from '../../images/404-opt.png';
import {
  StyledArrowLeftIcon,
  StyledLinkBack,
} from 'components/FilmDescription/FilmDescription.styled';

const NotFound = () => {
  return (
    <div>
      <StyledLinkBack to="/">
        <StyledArrowLeftIcon />
        Return to home page
      </StyledLinkBack>
      <img src={notFound} alt="Page not found" />
    </div>
  );
};

export default NotFound;
