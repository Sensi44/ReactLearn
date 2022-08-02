import React, { useEffect, useState } from 'react';

import './Item.scss';

function Item(props) {
  const [data, setData] = useState({
    name: 'No-Name',
    loading: false,
    arr: [],
  });
  const [id, setId] = useState(1);
  const handle = () => {
    id <= 5 ? setId((s) => s + 1) : setId(1);
  };

  useEffect(() => {
    setData((b) => ({
      name: b.name,
      loading: false,
      arr: [...b.arr],
    }));
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((d) => {
        setData((b) => ({
          name: d.name,
          loading: true,
          arr: [...b.arr, d.name],
        }));
      });
  }, [id]);

  const names = data.arr
    .filter((item, index) => data.arr.indexOf(item) === index)
    .map((el, i) => (
      <li className='list__elem' key={i}>
        {el}
      </li>
    ));

  const { loading, name } = data;
  return (
    <main className='main'>
      {loading ? (
        <p className='stable'>▐ ▐ ▐ ▐ ▐</p>
      ) : (
        <p className='loading'>▬ ▬ ▬ ▬</p>
      )}
      <button className='button, next__planet' onClick={handle}>
        Получить планету
      </button>

      <p>Текущая планета - {name}</p>
      <ul
        style={{
          width: 200,
          border: '3px solid black',
          boxShadow: '4px 4px 5px 0px rgba(0,0,0,.74)',
        }}
        className='list'
      >
        {names}
      </ul>
    </main>
  );
}

export default Item;
