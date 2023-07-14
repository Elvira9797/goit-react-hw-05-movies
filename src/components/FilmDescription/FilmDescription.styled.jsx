import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../images/arrow-left.svg';

export const StyledFilmDescription = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const StyledFilmImg = styled.img`
  display: block;
  width: 350px;
  height: 500px;
  object-fit: cover;
`;

export const StyledDescription = styled.div`
  max-width: 500px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  padding: 0;
  margin: 0;
`;

export const StyledGenres = styled.p`
  margin-bottom: 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border: 1px solid #f87719;

  &.active {
    background-color: #f87719;
    border: 1px solid #f87719;
  }
`;

export const StyledLinkBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #f99248;
  margin-bottom: 20px;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  stroke: #f99248;
`;
