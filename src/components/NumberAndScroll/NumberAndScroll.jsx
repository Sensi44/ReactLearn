// Задача с собеса

import React, { useState, useEffect } from 'react';
// import throttle from 'lodash/throttle';

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

// вынесли работу со скроллом в кастомный хук
const useWindowScrollY = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    // const handleScroll = throttle(() => setScroll(window.scrollY), 37);
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const scroll = useWindowScrollY();

  useEffect(() => {
    fetchRandomNumber().then(setNumber);
  }, []);

  return (
    <>
      {console.log(number, scroll)}
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </>
  );
};

export { NumberAndScroll };
