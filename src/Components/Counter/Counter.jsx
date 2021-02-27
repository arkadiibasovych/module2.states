import { render } from '@testing-library/react';
import React from 'react';
import s from './Counter.module.css';
import Controls from './Controls.jsx';
import Value from './Value.jsx';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrment = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;

    return (
      <div className={s.Counter}>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrment}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
