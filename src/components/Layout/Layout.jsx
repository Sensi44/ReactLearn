import React from 'react';
import { Outlet } from 'react-router-dom';

import { CustomLink } from '../CustomLink';
import './Layout.scss';

const Layout = () => (
  <>
    <header>
      <div className='navigation'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>about</CustomLink>
        <CustomLink to='/posts'>posts</CustomLink>
        <CustomLink to='/posts/3'>posts-3</CustomLink>
        <CustomLink to='/posts/new'>new</CustomLink>
        <CustomLink to='/badUrl'>BadUrl</CustomLink>
      </div>
    </header>

    <main className='container'>
      <Outlet />
      {/* Сюда будет отрисовываться всё дочернее содержимое */}
    </main>

    <footer>Footer 2022</footer>
  </>
);

export default Layout;
