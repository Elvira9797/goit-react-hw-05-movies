import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>{<Outlet />}</Main>
    </Container>
  );
};
export default Layout;
