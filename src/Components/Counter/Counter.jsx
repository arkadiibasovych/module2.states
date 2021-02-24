import { render } from '@testing-library/react';
import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button type="button">Увеличить на 1</button>
          <button type="button">Уменьшить на 1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
