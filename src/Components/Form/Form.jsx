import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Телефон
          <input
            type="tel"
            value={phone}
            name="phone"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
