import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledTrendingFilmsGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledTrendingFilm = styled.li`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageTrendingFilm = styled.img`
  display: block;
  width: 100%;
  height: 460px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StyledTrendingLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledNameTrendingFilm = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 22px;
`;
