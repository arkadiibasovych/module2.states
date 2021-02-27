import React, { Component } from 'react';
import s from './Dropdown.module.css';
import Counter from '../Counter';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={s.Dropdown}>
        <button
          type="button"
          className={s.Dropdown__togle}
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <Counter initialValue={0} />}
      </div>
    );
  }
}

export default Dropdown;
