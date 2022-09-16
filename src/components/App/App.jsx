import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Item from '../Item';
import withClass from '../withClass/withClass';
import { Layout } from '../Layout';
import { About } from '../../pages/About';
import { BlogPage } from '../../pages/BlogPage';
import { SinglePage } from '../../pages/SinglePage';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { CreatePost } from '../../pages/CreatePost';
import { EditPost } from '../../pages/EditPost';
import { LoginPage } from '../../pages/LoginPage';
import { RequireAuth } from '../../hoc/RequireAuth';
import { AuthProvider } from '../../hoc/AuthProvider';
import './App.scss';

function App() {
  // const NewTest = withClass(Item, 'people'); // HOC
  // const NewTest2 = withClass(Item, 'planets'); // HOC

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />}>
            <Route path='contacts' element={<p>Our contacts</p>} />
            <Route path='team' element={<p>Our team</p>} />
          </Route>
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='posts/' element={<BlogPage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route
            path='posts/new'
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default withClass(App, 'wrapper');
