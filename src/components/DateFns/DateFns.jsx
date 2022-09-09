import React from 'react';
import { parseISO } from 'date-fns';

const DateFns = (props) => {
  console.log(parseISO('2022-09-06T17:46:00.000Z'));
  // date: "2022-09-06T17:46:00.000Z"
  // duration: 1554

  return <>Date-fns in logs for test</>;
};

export default DateFns;
