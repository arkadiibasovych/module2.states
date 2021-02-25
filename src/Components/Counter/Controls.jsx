import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.Counter__controls}>
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
};

export default Controls;
