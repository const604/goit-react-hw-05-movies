import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Home, Header } from '../services/Movies.styled';

export const Layout = () => {
  return (
    <Home>
      <Header>
        <li>
          <StyledLink to="/">Home page</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Home>
  );
};
