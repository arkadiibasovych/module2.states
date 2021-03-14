import React, { Component } from 'react';
import './App.css';

import Dropdown from './Components/Dropdown';
import ColorPicker from './Components/ColorPicker';
import Todolist from './Components/Todolist';
import initialTodos from './Components/Todolist/todos.json';
import Form from './Components/Form';
import TodoEditor from './Components/Todoeditor';
import shortid from 'shortid';
import Filter from './Components/Filter';

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
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  ToggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  adTodo = text => {
    console.log(text);
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');

    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;

    const completedTodosCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodosCount}</p>
        </div>

        <Filter filter={filter} changeFilter={this.changeFilter} />
        <Todolist
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.ToggleCompleted}
        />
        <Form onSubmit={this.formSubmitHendler} />

        <TodoEditor onSubmit={this.adTodo} />
      </>
    );
  }
}

export default App;
