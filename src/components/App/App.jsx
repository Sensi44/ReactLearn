import React from 'react';

// high order component - пример, с передачей пропсов

import Item from '../Item';
import withClass from '../withClass/withClass';
import 'antd/dist/antd.min.css';
import './App.scss';

function App() {
  const NewTest = withClass(Item, '2222'); // HOC
  return (
    <>
      <Item />
      <Item name='Anya' />
      <NewTest name='Anyta' /> {/* HOC */}
    </>
  );
}

export default withClass(App, 'test-name-class-super');
