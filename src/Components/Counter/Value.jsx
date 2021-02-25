import React from 'react';
import s from './Value.module.css';

const Value = ({ value }) => {
  return <span className={s.Counter__value}>{value}</span>;
};

export default Value;
