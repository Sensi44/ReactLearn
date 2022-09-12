import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Item from '../Item';
import withClass from '../withClass/withClass';
import { Routing } from '../Routing';
import 'antd/dist/antd.min.css';
import './App.scss';
import { Element1 } from '../Element1';
// import DateFns from '../DateFns';
// import ForTest from '../../help for me/useContext/ForTest';

function App() {
  const NewTest = withClass(Item, 'people'); // HOC
  const NewTest2 = withClass(Item, 'planets'); // HOC
  const nav = (
    <div className='navigation'>
      Навигация
      <Link to='/'>home</Link>
      <Link to='/people'>people</Link>
      <Link to='/planets'>planets</Link>
      <Link to='/test'>test</Link>
    </div>
  );
  return (
    <>
      <Router>
        <Route path='/' render={() => nav} />
        <Route path='/' render={() => <h2>Welcome</h2>} exact />
        <Route path='/people' exact component={NewTest} />
        <Route
          path='/people/:id'
          render={(match, location, history) => <Element1 id='3' />}
        />
        <Route path='/planets' component={NewTest2} />

        <Route
          path='/test'
          render={(props) => <Item class='Hello222' {...props} />}
        />
        {/* <NewTest name='Anyta' /> /!* HOC *!/ */}
      </Router>
    </>
  );
}

export default withClass(App, 'wrapper');
