import React, { Component } from 'react';
import s from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <form className={s.editor} action="" onSubmit={this.handleSubmit}>
        <textarea
          className={s.text}
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={s.button}>
          Добавить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
