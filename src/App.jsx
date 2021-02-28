import React, { Component } from 'react';
import './App.css';

import Dropdown from './Components/Dropdown';
import ColorPicker from './Components/ColorPicker';
import Todolist from './Components/Todolist';
import initialTodos from './Components/Todolist/todos.json';
import Form from './Components/Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodosCount}</p>
        </div>
        <Todolist todos={todos} onDeleteTodo={this.deleteTodo} />
        <Form onSubmit={this.formSubmitHendler} />
      </>
    );
  }
}

export default App;
