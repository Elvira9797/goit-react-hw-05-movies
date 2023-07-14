import { StyledButton, StyledForm, StyledInput } from './SearchForm.styled';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../images/search.svg';

const SearchForm = ({ addMovie }) => {
  const handleSubmit = event => {
    event.preventDefault();
    addMovie(event.target.search.value);

    event.target.reset();
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="search"
          placeholder="Enter movie to search..."
          autoComplete="off"
        />
        <StyledButton type="submit">
          <SearchIcon />
        </StyledButton>
      </StyledForm>
    </div>
  );
};

SearchForm.propTypes = {
  addMovie: PropTypes.func,
};

export default SearchForm;
