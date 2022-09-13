import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Item from '../Item';
import withClass from '../withClass/withClass';
import { Layout } from '../Layout';
// import { Element1 } from '../Element1';
import { About } from '../../pages/About';
import { BlogPage } from '../../pages/BlogPage';
import { SinglePage } from '../../pages/SinglePage';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { CreatePost } from '../../pages/CreatePost';
import { EditPost } from '../../pages/EditPost';
import './App.scss';

function App() {
  const NewTest = withClass(Item, 'people'); // HOC
  const NewTest2 = withClass(Item, 'planets'); // HOC

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='posts/' element={<BlogPage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route path='posts/new' element={<CreatePost />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default withClass(App, 'wrapper');
