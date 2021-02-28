import React, { Component } from 'react';
import s from './ColorPicker.module.css';
import classNames from 'classnames';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionclassName = index => {
    return classNames(s.ColorPicker__option, {
      [s.ColorPicker__option__active]: index === this.state.activeOptionIdx,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const activeOption = options[activeOptionIdx];

    return (
      <div className={s.ColorPicker}>
        <h2 className={s.ColorPicker__title}>Color Picker</h2>
        <p>Выбран цвет: {activeOption.label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionclassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
