import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    phone: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleInputChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.phoneInputId}>
          Телефон
          <input
            type="tel"
            value={phone}
            name="phone"
            onChange={this.handleInputChange}
            id={this.phoneInputId}
          ></input>
        </label>

        <div>
          <p>Ваш уровень: </p>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleInputChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleInputChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleInputChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
        </div>
        <label htmlFor="">
          Согласен с условием
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
        </label>

        <br />

        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
