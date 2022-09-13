import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <div className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/people'>People</Link>
        <Link to='/planets'>Planets</Link>
        <Link to='/test'>Test</Link>
      </div>
      <div className='navigation2'>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/BlogPage'>BlogPage</Link>
        <Link to='/badUrl'>BadUrl</Link>
      </div>
    </header>
    <main className='container'>
      <Outlet />
    </main>
    {/* Сюда будет отрисовываться всё дочернее содержимое */}
    <footer>Footer 2022</footer>
  </>
);

export default Layout;
