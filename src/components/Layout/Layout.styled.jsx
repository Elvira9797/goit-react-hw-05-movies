import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid grey;

  > nav {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    background-color: #f87719;
  }
`;

export const Main = styled.main`
  margin-bottom: 100px;
`;
