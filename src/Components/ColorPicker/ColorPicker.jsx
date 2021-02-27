import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionclassName = index => {
    const optionClasses = [s.ColorPicker__option];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.ColorPicker__option__active);
    }
    return optionClasses.join(' ');
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
