import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Item from '../Item';
import withClass from '../withClass/withClass';
import { Layout } from '../Layout';
import { Element1 } from '../Element1';
import { About } from '../About';
import { BlogPage } from '../BlogPage';
import { HomePage } from '../HomePage';
import { NotFoundPage } from '../NotFoundPage';
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
          <Route path='BlogPage' element={<BlogPage />} />
          <Route path='*' element={<NotFoundPage />} />

          <Route path='/' element={<div>Go to welcome bro</div>} />
          <Route path='/people' element={<NewTest />} />
          <Route
            path='/people/:id'
            render={(match, location, history) => <Element1 id='3' />}
          />
          <Route path='/planets' element={<NewTest2 />} />
          <Route path='/test' element={<Item class='H234' />} />
        </Route>
      </Routes>
    </>
  );
}

export default withClass(App, 'wrapper');
