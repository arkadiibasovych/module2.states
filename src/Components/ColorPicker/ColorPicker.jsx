import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    return (
      <div className={s.ColorPicker}>
        <h2 className={s.ColorPicker__title}>Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }) => (
            <button
              key={label}
              className={s.ColorPicker__option}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
