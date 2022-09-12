import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Item from '../Item';
import withClass from '../withClass/withClass';
// import { NotFoundPage } from '../NotFoundPage';
import 'antd/dist/antd.min.css';
import './App.scss';
import { Element1 } from '../Element1';
import { About } from '../About';
import BlogPage from '../BlogPage/BlogPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HomePage from '../HomePage/HomePage';
// import DateFns from '../DateFns';
// import ForTest from '../../help for me/useContext/ForTest';

function App() {
  const NewTest = withClass(Item, 'people'); // HOC
  const NewTest2 = withClass(Item, 'planets'); // HOC

  return (
    <>
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

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/BlogPage' element={<BlogPage />} />
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/' element={<div>Go to welcome bro</div>} />
        <Route path='/people' element={<NewTest />} />
        <Route
          path='/people/:id'
          render={(match, location, history) => <Element1 id='3' />}
        />
        <Route path='/planets' element={<NewTest2 />} />
        <Route path='/test' element={<Item class='H234' />} />
      </Routes>
    </>
  );
}

export default withClass(App, 'wrapper');
