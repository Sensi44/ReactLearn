import React from 'react';

// high order component - пример, с передачей пропсов

import Item from '../Item';
import withClass from '../withClass/withClass';
import DateFns from '../DateFns';
// import ForTest from '../../help for me/useContext/ForTest';
import 'antd/dist/antd.min.css';
import './App.scss';

function App() {
  const NewTest = withClass(Item, '2222'); // HOC
  return (
    <>
      <DateFns />
      <NewTest name='Anyta' /> {/* HOC */}
    </>
  );
}

export default withClass(App, 'main-class');
